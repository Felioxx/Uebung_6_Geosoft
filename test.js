 // Leaflet initialisieren
var map = L.map('map', { drawControl: true }).setView([51.975, 7.61], 13);
// OpenStreetMap tile layer hinzufügen
var osmLayer = new L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png',
    { attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors' });
osmLayer.addTo(map);

// Leaflet.draw hinzufügen
var drawnItems = new L.FeatureGroup();
map.addLayer(drawnItems);
var drawControl = new L.Control.Draw({
    edit: {
        featureGroup: drawnItems
    }
});
map.addControl(drawControl);
 
 
 
 // gezeichnetes Polygon initialisieren
    map.on(L.Draw.Event.CREATED, function (event) {
        var layer = event.layer;
        drawnItems.addLayer(layer);
        updateText();
    });
    map.on("draw:edited", function (event) {
        updateText();
    });

    var gezeichnetesPolygon = [];
    /**
    * generiert ein GeoJSON aus dem gezeichneten Polygon und speichert die Koordinaten in einem Array
    * und extrahiert nach dem Zeichnen die im Polygon enthaltenen Haltestellen
    */
    function updateText() {

        // to convert L.featureGroup to GeoJSON FeatureCollection
        document.getElementById("geojsontextarea").value = JSON.stringify(drawnItems.toGeoJSON());
        //console.log(drawnItems.toGeoJSON());
        var gezeichnetesGeojson = drawnItems.toGeoJSON();
        gezeichnetesGeojson.features.forEach(element1 => {
            element1.geometry.coordinates.forEach(element2 => {
                gezeichnetesPolygon.push(element2);
            })
        })
    }