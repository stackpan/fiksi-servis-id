/**
 * GET URL PARAMETER
 */
var q = window.location.search, ap = [], o = {"&": " ","=": " ","?": ""},
    av = q.replace(/(?:\=|\&|\?)/g, i => o[i]).split(/\s/g), ao, aoq, __k, __t; 

function sA(a, b, i) {for (; i < a.length; i++) {b.push(a.splice(i, 1)[0])}}
function AtO(a, b) {var o = {},i = 0; for (; i < a.length; i++) {o[b[i]] = a[i]}return o}
function __T(v) { return atob(v) } function __DT(v, i) { if (i===2) {return __T(v)}
    if (i===1) {__k = __T(v); __t=[__k];return __T(__t[0])}}

function objectFilter(a, b) {
    if (/\+/.test(b) === true) {a.q = b.split(/\+/).filter((a) => a); aql = a.q.length;
        if (aql === 1) {a.q = a.q.join(""); return a}
        else if (aql === 0) {return '<script>alert("ERROR: Only Lowercase Letters Allowed");</script>'}
        else {return a}}
    else if (/[^a-z]+/.test(b)) {return '<script>alert("ERROR: Only Lowercase Letters Allowed");</script>'}
    else {if (Object.keys(a).length === 0 && a.constructor === Object) {} else {return a}}}

sA(av, ap, 1); ao = AtO(ap, av); aoq = ao.q; if (aoq === undefined) {}
if (aoq === '') {window.location.href =  window.location.href.split("?")[0]}
else { console.log(objectFilter(ao, aoq))}

/**
 * MAP ESSENTIAL RESOURCE
 */
mapboxgl.accessToken = __DT('Y0dzdVpYbEtNVWxxYjJsamJUbG9Xa2hTZVdGWVFuZGFXRXA2U1dsM2FWbFRTVFpKYlVvelpWWm9UR1Z0T0dsbVVTNTVVVmxEZDBVMGNFbFJZV2hqTm5OcVYwNXlja2xS',1);
var map = new mapboxgl.Map({container: 'map', style: __DT('bWFwYm94Oi8vc3R5bGVzL3JvYWR0cmlwcGVycy9jazkxdHJoYWIxajZtMWlxdmE3ODU0dzls',2), center: [117.9,-2.5], zoom: 1, attributionControl: false, continuousWorld: false, noWrap: true});
map.fitBounds([[93.86180529359521,6.779061576042918],[141.80914130393109,-9.411944401459397]]);