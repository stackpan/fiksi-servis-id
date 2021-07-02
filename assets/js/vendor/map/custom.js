var q=window.location.search,ap=[],o={"&":" ","=":" ","?":""},av=q.replace(/(?:\=|\&|\?)/g,i=>o[i]).split(/\s/g);
function splitArray(a,b,i){for(;i<a.length;i++){b.push(a.splice(i,1)[0])}} splitArray(av,ap,1);
function ArrayToObject(a,b){var o={},i=0;for(;i<a.length;i++){o[b[i]]=a[i];}return o;} op=ArrayToObject(ap,av),opf=op.q;
if(/\+/.test(opf)===true){op.q=opf.split(/\+/);console.table(op);}

mapboxgl.accessToken = 'pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4M29iazA2Z2gycXA4N2pmbDZmangifQ.-g_vE53SD2WrJ6tFX7QHmA';

var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/light-v10',
    center: [117.97, -2.49],
    zoom: 1,
    attributionControl: false,
});

// map.on('idle', function () {
//     map.resize()
// })