// Leaflet initialisieren
var map = L.map('map').setView([51.975, 7.61], 13);
// OpenStreetMap tile layer hinzufügen
var osmLayer = new L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png',
    { attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors' });
osmLayer.addTo(map);