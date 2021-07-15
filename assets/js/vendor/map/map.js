/**
 * IMPORTANT NOTE
 * ALL COMMENT WILL DELETE SOON IF
 * THE APPLICATION FINAL RELEASE
 */

var db_collection_stores = db.collection("stores"),
db_collection_stores_doc_store = db_collection_stores.doc("store");

db_collection_stores_doc_store.get().then((doc) => {
    if (doc.exists) {
        // console.log("Document data:", doc.data());
        
        data = doc.data()
        console.log(data);
        /**
         * Assign a unique id to each store. You'll use this `id`
         * later to associate each point on the map with a listing
         * in the sidebar.
         */

        data.features.forEach(function (store, i) {
            store.properties.id = i;
        });

        /**
         * Wait until the map loads to make changes to the map.
         */
        map.on('load', function (e) {
            /**
             * This is where your '.addLayer()' used to be, instead
             * add only the source without styling a layer
             */
            map.addSource('places', {
                'type': 'geojson',
                'data': data
            });

            /**
             * Create a new MapboxGeocoder instance.
             */
            var geocoder = new MapboxGeocoder({
                accessToken: mapboxgl.accessToken,
                mapboxgl: mapboxgl,
                placeholder: 'Search your location...',
                marker: true,
                collapsed: false
            });

            /**
             * Add all the things to the page:
             * - The location listings on the side of the page
             * - The search box (MapboxGeocoder) onto the map
             * - The markers onto the map
             */
            buildLocationList(data);
            document.getElementById('nav-menu-search').appendChild(geocoder.onAdd(map));
            map.addControl(new mapboxgl.NavigationControl, "bottom-right");
            map.addControl(new mapboxgl.GeolocateControl({positionOptions: {enableHighAccuracy: true},trackUserLocation: true}), "bottom-right");
            addMarkers();

            /**
             * Listen for when a geocoder result is returned. When one is returned:
             * - Calculate distances
             * - Sort data by distance
             * - Rebuild the listings
             * - Adjust the map camera
             * - Open a popup for the closest store
             * - Highlight the listing for the closest store.
             */
            geocoder.on('result', function (ev) {

                /* Get the coordinate of the search result */
                var searchResult = ev.result.geometry;

                /**
                 * Calculate distances:
                 * For each store, use turf.disance to calculate the distance
                 * in miles between the searchResult and the store. Assign the
                 * calculated value to a property called `distance`.
                 */
                var options = {
                    units: 'miles'
                };
                data.features.forEach(function (store) {
                    Object.defineProperty(store.properties, 'distance', {
                        value: turf.distance(searchResult, store.geometry, options),
                        writable: true,
                        enumerable: true,
                        configurable: true
                    });
                });

                /**
                 * Sort data by distance from closest to the `searchResult`
                 * to furthest.
                 */
                data.features.sort(function (a, b) {
                    if (a.properties.distance > b.properties.distance) {
                        return 1;
                    }
                    if (a.properties.distance < b.properties.distance) {
                        return -1;
                    }
                    return 0; // a must be equal to b
                });

                /**
                 * Rebuild the listings:
                 * Remove the existing listings and build the location
                 * list again using the newly sorted data.
                 */
                var listings = document.getElementById('listings');
                while (listings.firstChild) {
                    listings.removeChild(listings.firstChild);
                }
                buildLocationList(data);

                /* Open a popup for the closest store. */
                createPopUp(data.features[0]);

                /** Highlight the listing for the closest store. */
                var activeListing = document.getElementById(
                    'listing-' + data.features[0].properties.id
                );
                activeListing.classList.add('active');
                /**
                 * Adjust the map camera:
                 * Get a bbox that contains both the geocoder result and
                 * the closest store. Fit the bounds to that bbox.
                 */
                var bbox = getBbox(data, 0, searchResult);
                map.fitBounds(bbox, {
                    padding: 100
                });
            });
        });

        /**
         * Using the coordinates (lng, lat) for
         * (1) the search result and
         * (2) the closest store
         * construct a bbox that will contain both points
         */
        function getBbox(data, storeIdentifier, searchResult) {
            var lats = [
                data.features[storeIdentifier].geometry.coordinates[1],
                searchResult.coordinates[1]
            ];
            var lons = [
                data.features[storeIdentifier].geometry.coordinates[0],
                searchResult.coordinates[0]
            ];
            var sortedLons = lons.sort(function (a, b) {
                if (a > b) {
                    return 1;
                }
                if (a.distance < b.distance) {
                    return -1;
                }
                return 0;
            });
            var sortedLats = lats.sort(function (a, b) {
                if (a > b) {
                    return 1;
                }
                if (a.distance < b.distance) {
                    return -1;
                }
                return 0;
            });
            return [
                [sortedLons[0], sortedLats[0]],
                [sortedLons[1], sortedLats[1]]
            ];
        }

        /**
         * Add a marker to the map for every store listing.
         **/
        function addMarkers() {
            /* For each feature in the GeoJSON object above: */
            data.features.forEach(function (marker) {
                /* Create a div element for the marker. */
                var el = document.createElement('div');
                /* Assign a unique `id` to the marker. */
                el.id = 'marker-' + marker.properties.id;
                /* Assign the `marker` class to each marker for styling. */
                el.className = 'marker';

                /**
                 * Create a marker using the div element
                 * defined above and add it to the map.
                 **/
                new mapboxgl.Marker(el, {
                        offset: [0, -45]
                    })
                    .setLngLat(marker.geometry.coordinates)
                    .addTo(map);

                /**
                 * Listen to the element and when it is clicked, do three things:
                 * 1. Fly to the point
                 * 2. Close all other popups and display popup for clicked store
                 * 3. Highlight listing in sidebar (and remove highlight for all other listings)
                 **/
                el.addEventListener('click', function (e) {
                    flyToStore(marker);
                    createPopUp(marker);
                    var activeItem = document.getElementsByClassName('active');
                    e.stopPropagation();
                    if (activeItem[0]) {
                        activeItem[0].classList.remove('active');
                    }
                    var listing = document.getElementById(
                        'listing-' + marker.properties.id
                    );
                    listing.classList.add('active');
                });
            });
        }

        /**
         * Add a listing for each store to the sidebar.
         **/
        function buildLocationList(data) {
            data.features.forEach(function (store, i) {
                /**
                 * Create a shortcut for `store.properties`,
                 * which will be used several times below.
                 **/
                var prop = store.properties;

                /* Add a new listing section to the sidebar. */
                var listings = document.getElementById('listings');
                var listing = listings.appendChild(document.createElement('div'));
                /* Assign a unique `id` to the listing. */
                listing.id = 'listing-' + prop.id;
                /* Assign the `item` class to each listing for styling. */
                listing.className = 'item';

                /* Add the link to the individual listing created above. */
                var link = listing.appendChild(document.createElement('a'));
                link.href = '#';
                link.className = 'title';
                link.id = 'link-' + prop.id;
                link.innerHTML = prop.name;

                if (prop.alamatalt == undefined) {prop.alamatalt = ''}
                if (prop.no == undefined) {prop.no = ''}
                if (prop.kel == undefined) {prop.kel = ''}
                if (prop.kec == undefined) {prop.kec = ''}
                if (prop.kab == undefined) {prop.kab = ''}
                if (prop.prov == undefined) {prop.prov = ''}
                if (prop.neg == undefined) {prop.neg = ''}
                if (prop.postal == undefined) {prop.postal = ''}

                /* Add details to the individual listing. */
                var
                details = listing.appendChild(document.createElement('div')),
                alamat = (prop.alamatalt=='')? '' : prop.alamatalt + ', ',
                no = (prop.no=='')? '' : prop.no + ', ',
                kel = (prop.kel=='')? '' : prop.kel + ', ',
                kec = (prop.kec=='')? '' : prop.kec + ', ',
                kab = (prop.kab=='')? '' : prop.kab + ', ',
                prov = (prop.prov=='')? '' : prop.prov + ', ',
                neg = (prop.neg=='')? '' : prop.neg,
                postal = (prop.postal=='')? '' : prop.postal;
                details.innerHTML = alamat +
                    'No. ' + no +
                    kel +
                    'Kec. ' + kec +
                    'Kab. ' + kab +
                    prov + '' +
                    neg +
                    ' (' + postal + ')';
                if (prop.distance) {
                    var roundedDistance = Math.round((prop.distance * 1.609347) * 100) / 100;
                    if (roundedDistance > 1) {
                        details.innerHTML +=
                            '<p><strong>' + roundedDistance + ' kilometers away</strong></p>';
                    } else {
                        details.innerHTML +=
                            '<p><strong>' + roundedDistance + ' kilometer away</strong></p>';
                    }
                }

                /**
                 * Listen to the element and when it is clicked, do four things:
                 * 1. Update the `currentFeature` to the store associated with the clicked link
                 * 2. Fly to the point
                 * 3. Close all other popups and display popup for clicked store
                 * 4. Highlight listing in sidebar (and remove highlight for all other listings)
                 **/
                link.addEventListener('click', function (e) {
                    for (var i = 0; i < data.features.length; i++) {
                        if (this.id === 'link-' + data.features[i].properties.id) {
                            var clickedListing = data.features[i];
                            flyToStore(clickedListing);
                            createPopUp(clickedListing);
                        }
                    }
                    var activeItem = document.getElementsByClassName('active');
                    if (activeItem[0]) {
                        activeItem[0].classList.remove('active');
                    }
                    this.parentNode.classList.add('active');
                });
            });
        }

        /**
         * Use Mapbox GL JS's `flyTo` to move the camera smoothly
         * a given center point.
         **/
        function flyToStore(currentFeature) {
            map.flyTo({
                center: currentFeature.geometry.coordinates,
                zoom: 15
            });
        }

        /**
         * Create a Mapbox GL JS `Popup`.
         **/
        function createPopUp(currentFeature) {
            var popUps = document.getElementsByClassName('mapboxgl-popup');
            if (popUps[0]) popUps[0].remove();

            var popup = new mapboxgl.Popup({
                    closeOnClick: true,
                    closeButton: false
                })
                .setLngLat(currentFeature.geometry.coordinates)
                .setHTML(
                    '<h3>' +
                    currentFeature.properties.name +
                    '</h3>' +
                    '<h4>' +
                    currentFeature.properties.alamatalt +
                    '</h4>'
                )
                .addTo(map);
        }
    } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
    }
}).catch((error) => {
    console.log("Error getting document:", error);
});