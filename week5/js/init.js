// declare variables
let mapOptions = { 'center': [34.0709, -118.444], 'zoom': 5 }

// use the variables
const dataUrl = "https://docs.google.com/spreadsheets/d/e/2PACX-1vRQBjw2ziwA5er6vQq8az6tdKFe2ztPxz4CckE7OZaM9L0p7OMLnzi8QKNmsMdPZjWgJCEDQdUfOIW8/pub?output=csv"
const sampleDataArray = [[37, -122], [32, -118], [39, -119], [36, -120]]
const map = L.map('the_map').setView(mapOptions.center, mapOptions.zoom);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// create a function to add markers
function addMarker(lat, lng, title, message) {
    console.log(message)
    L.marker([lat, lng]).addTo(map).bindPopup(`<h2>65 years or older: ${title}</h2> <h3>Ethnicity: ${message}</h3>`)
    return message
}


function loadData(url) {
    Papa.parse(url, {
        header: true,
        download: true,
        complete: results => results.data.forEach(processData)
    })
}

function processData(data) { 
    addMarker(data.lat, data.lng, data["Are you 65 years or older?"], data["What is your ethnicity/nationality?"])
}

// we will use this later:
// loadData(dataUrl)
loadData(dataUrl)


// sampleDataArray.forEach(marker => {addMarker(marker[0], marker[1], "hey", "yo")})

function addStuff(data) { }



