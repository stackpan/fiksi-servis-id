! function ($) {
    "use strict";
    $(".icons-menu").on("click", function () {
        if ($("#sidebar").hasClass("show")) { $("#sidebar").removeClass("show") }
        else { $("#sidebar").addClass("show") }
    });
    $( "#btn-form-submit" ).on( "click", function( event ) {
        function validateForm() {
            var tempatBaru = {
                features: [
                    {
                        type: 'Feature',
                        geometry: {
                            type: 'Point',
                            coordinates: [109.38391600767505, -6.904597429627328]
                        },
                        properties: {
                            name: 'Mitra Mandiri Computer',
                            alamat: 'Ruko Stadion Mochtar, Jl. Gatot Subroto',
                            no: '10, 13, 14',
                            kel: "Bojongbata",
                            kec: 'Pemalang',
                            kab: 'Pemalang',
                            prov: 'Jawa Tengah',
                            postal: '52319',
                            other: {
                                open: '',
                                desc: ''
                            },
                            tag: ['printer', 'laptop']
                            
                        }
                    },
                    {
                        type: 'Feature',
                        geometry: {
                            type: 'Point',
                            coordinates: [109.38280695940708, -6.913515085191382]
                        },
                        properties: {
                            name: 'Herfacom',
                            alamat: 'Jl. Gatot Subroto',
                            no: '',
                            kel: "Bojongbata",
                            kec: 'Pemalang',
                            kab: 'Pemalang',
                            prov: 'Jawa Tengah',
                            postal: '52319',
                            other: {
                                open: '',
                                desc: ''
                            },
                            tag: ['komputer', 'laptop', 'monitor', 'printer']
                            
                        }
                    },
                    {
                        type: 'Feature',
                        geometry: {
                            type: 'Point',
                            coordinates: [109.38194718334573, -6.917948707101545]
                        },
                        properties: {
                            name: 'Jaya Computer Pemalang',
                            alamat: 'Gg. Soeroto Soejarwo',
                            no: '',
                            kel: "Bojongbata",
                            kec: 'Pemalang',
                            kab: 'Pemalang',
                            prov: 'Jawa Tengah',
                            postal: '52319',
                            other: {
                                open: '',
                                desc: ''
                            },
                            tag: ['komputer', 'laptop', 'LAN', 'printer', ]
                            
                        }
                    },
                    {
                        type: 'Feature',
                        geometry: {
                            type: 'Point',
                            coordinates: [109.38194718334573, -6.917948707101545]
                        },
                        properties: {
                            name: 'Tripio Computer Pemalang',
                            alamat: 'Jl. Jend. A. Yani',
                            no: '28',
                            kel: "Kebondalem",
                            kec: 'Pemalang',
                            kab: 'Pemalang',
                            prov: 'Jawa Tengah',
                            postal: '52312',
                            other: {
                                open: '',
                                desc: ''
                            },
                            tag: ['komputer', 'laptop', 'LAN', 'printer', ]
                            
                        }
                    },
                    {
                        type: 'Feature',
                        geometry: {
                            type: 'Point',
                            coordinates: [109.39278896624471, -6.890296868087672]
                        },
                        properties: {
                            name: 'Irama Mas Digital Service',
                            alamat: 'Ruko Perhutani, Jl. Jend. Sudirman',
                            no: '',
                            kel: "Mulyoharjo",
                            kec: 'Pemalang',
                            kab: 'Pemalang',
                            prov: 'Jawa Tengah',
                            postal: '52313',
                            other: {
                                open: '',
                                desc: ''
                            },
                            tag: ['printer', 'laptop']
                            
                        }
                    }
                ]
            }
            db.collection("stores").doc("store").set(tempatBaru, { merge: true }).then(() => {
                alert("Document successfully written!");
            });
            return true;
        };
        validateForm();
        event.preventDefault();
    });
    var $tabValue = $(this).attr('href');
    var $withoutHash = $tabValue.substr(0,$tabValue.indexOf('#'));
}(jQuery);