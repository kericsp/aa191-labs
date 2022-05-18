// declare variables
let mapOptions = {'center': [34.0709,-118.444],'zoom':5}

let Local = L.featureGroup()
let Destination = L.featureGroup()

let layers = {
    "Local!": Local,
    "Outside of LA": Destination
}

let circleOptions = {
    radius: 4,
    fillColor: "#ff7800",
    color: "#000",
    weight: 1,
    opacity: 1,
    fillOpacity: 0.8
}

const dataUrl = "https://docs.google.com/spreadsheets/d/e/2PACX-1vShPYm1ScYpeo71b3y0DAUh-NKI7SrjVruOcSUFmZ3kDYB_3Q_vWuOIuQNlrvM2HJ-dyN5UGqTvAmcW/pub?output=csv"

// use the variables
const map = L.map('the_map').setView(mapOptions.center, mapOptions.zoom);

let Esri_WorldGrayCanvas = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}', {
    attribution: 'Tiles &copy; Esri &mdash; Esri, DeLorme, NAVTEQ',
    maxZoom: 16
});

Esri_WorldGrayCanvas.addTo(map);

// add layer control box
L.control.layers(null,layers).addTo(map)

// L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
//     attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
// }).addTo(map);

function addMarker(data){
    let lowercasing = data.Location.toLowerCase() 
    if(lowercasing.includes("los angeles")){ 
        circleOptions.fillColor = "pink"
        Local.addLayer(L.circleMarker([data.lat,data.lng],circleOptions).bindPopup(`<h2>Local!</h2> <h2>${data.Name}</h2> <h3>${data["What is your favorite thing about this coffee shop?"]}</h3>`))
        createButtons(data.lat,data.lng,data.Location)
    }
    else{
        circleOptions.color = "green"
        Destination.addLayer(L.circleMarker([data.lat,data.lng],circleOptions).bindPopup(`<h2>Destination</h2> <h2>${data.Name}</h2> <h3>${data["What is your favorite thing about this coffee shop?"]}</h3>`))
        createButtons(data.lat,data.lng,data.Location)
    }
    return data
} 

function createButtons(lat,lng,title){
        const newButton = document.createElement("button"); // adds a new button
        newButton.id = "button"+title; // gives the button a unique id
        newButton.innerHTML = title; // gives the button a title
        newButton.setAttribute("lat",lat); // sets the latitude 
        newButton.setAttribute("lng",lng); // sets the longitude 
        newButton.addEventListener('click', function(){
            map.flyTo([lat,lng]); //this is the flyTo from Leaflet
        })
        const placeForButtons = document.getElementById('placeForButtons')
        placeForButtons.appendChild(newButton); //this adds the button to our page.

    }
    
function loadData(url){
    Papa.parse(url, {
        header: true,
        download: true,
        complete: results => processData(results)
    })
}

function processData(results){
    console.log(results)
    results.data.forEach(data => {
        console.log(data)
        addMarker(data)
    })
    Local.addTo(map)
    Destination.addTo(map)
// make the map zoom to the extent of markers
    let allLayers = L.featureGroup([Local,Destination]);
    map.fitBounds(allLayers.getBounds());     
}

loadData(dataUrl)
