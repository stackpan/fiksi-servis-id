var q = window.location.search, ap = [], o = {"&": " ","=": " ","?": ""},
    av = q.replace(/(?:\=|\&|\?)/g, i => o[i]).split(/\s/g), __k, __t; 

function splitArray(a, b, i) {for (; i < a.length; i++) {b.push(a.splice(i, 1)[0])}}
function ArrayToObject(a, b) {var o = {},i = 0; for (; i < a.length; i++) {o[b[i]] = a[i];}return o;}

function objectFilter(a, b) {
    if (/\+/.test(b) === true) {
        a.q = b.split(/\+/).filter((a) => a); aql = a.q.length;
        if (aql === 1) {a.q = a.q.join(""); return a;}
        else if (aql === 0) {return '<script>alert("ERROR: Only Lowercase Letters Allowed");</script>';}
        else {return a}}
    else if (/[^a-z]+/.test(b)) {return '<script>alert("ERROR: Only Lowercase Letters Allowed");</script>';}
    else {
        if (Object.keys(a).length === 0 && a.constructor === Object) {}
        else {return a}}}

function t(v) { return atob(v) }
function f(v) { __k = t(v); __t=[__k];return t(__t[0])}

splitArray(av, ap, 1); ao = ArrayToObject(ap, av); aoq = ao.q; if (aoq === undefined) {}
if (aoq === '') {window.location.href =  window.location.href.split("?")[0]}
else { console.log(objectFilter(ao, aoq))}

mapboxgl.accessToken = f('Y0dzdVpYbEtNVWxxYjJsamJUbG9Xa2hTZVdGWVFuZGFXRXA2U1dsM2FWbFRTVFpKYlVvelpWWm9UR1Z0T0dsbVVTNTVVVmxEZDBVMGNFbFJZV2hqTm5OcVYwNXlja2xS');
var map = new mapboxgl.Map({container: 'map', style: 'mapbox://styles/roadtrippers/ck91trhab1j6m1iqva7854w9l', center: [117.97, -2.49], zoom: 1, attributionControl: false,});