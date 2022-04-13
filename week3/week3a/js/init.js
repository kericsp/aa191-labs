let mapOptions = {
    "mapCenter":[34.0709, -118.444],
    "zoomLevel":5
}

// declare the map
const map = L.map('the_map').setView(mapOptions.mapCenter, mapOptions.zoomLevel);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

addMarker(37,-122,'home','home land!', 15)
addMarker(32,-118,'work','where i work land!', 15)
addMarker(39,-119,'location 1','random location', 15)
addMarker(36,-120,'location 2','another random location', 15)

// create a function to add markers
function addMarker(lat,lng,title,message,zoomLevel){
    console.log(message)
    L.marker([lat,lng]).addTo(map).bindPopup(`<h2>${title}</h2> <h3>${message}</h3>`)
    createButtons(lat,lng,title,zoomLevel);
    return message
}

function createButtons(lat,lng,title,zoomLevel){
    const newButton = document.createElement("button"); 
    newButton.id = "button"+title; 
    newButton.innerHTML = title; 
    newButton.setAttribute("lat",lat); 
    newButton.setAttribute("lng",lng); 
    newButton.addEventListener('click', function(){
        map.flyTo([lat,lng],zoomLevel); 
    })
    document.getElementById("contents").appendChild(newButton); 
}
fetch("map.geojson")
    .then(response => {
        return response.json();
    })
    .then(data =>{
        // Basic Leaflet method to add GeoJSON data
        L.geoJSON(data).addTo(map)
    });