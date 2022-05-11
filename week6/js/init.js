// declare variables
let mapOptions = {'center': [34.0709,-118.444],'zoom':5}

// use the variables
const map = L.map('the_map').setView(mapOptions.center, mapOptions.zoom);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// create a function to add markers
function addMarker(data){
    console.log(data)
    L.marker([data.lat,data.lng]).addTo(map).bindPopup(`<h2>${data.Name}</h2> <h3>${data["What is your favorite thing about this coffee shop?"]}</h3>`)
    createButtons(data.lat,data.lng,data.Location)
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
    

const dataUrl = "https://docs.google.com/spreadsheets/d/e/2PACX-1vShPYm1ScYpeo71b3y0DAUh-NKI7SrjVruOcSUFmZ3kDYB_3Q_vWuOIuQNlrvM2HJ-dyN5UGqTvAmcW/pub?output=csv"

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
}

loadData(dataUrl)
