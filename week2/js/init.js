console.log('hello asian am 191a 2022');

let zoomLevel = 13;
const mapCenter = [34.0550, -118.455];

// JavaScript const variable declaration
const map = L.map('the_map').setView(mapCenter, zoomLevel); 

// Leaflet tile layer, i.e. the base map
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map); 

function my_first_function(){
    console.log('hi')
}
// create a function to add markers
function addMarker(lat,lng,title,image,message){
    console.log(message)
    L.marker([lat,lng]).addTo(map).bindPopup(`<h2>${title}</h2><h3>${message}</h3><img>${image}</img>`)
    return message
}

// use our marker functions
addMarker(34.062250, -118.447920,'Gushi','Ample portions of Seoul-style BBQ & teriyaki star at an unfussy, walk-up stand with outdoor seats.')
addMarker(34.046190, -118.465510,'Coco Ichibanya','Japanese fast-food joint, specializing in curry, with a spartan, contemporary ambiance.')
addMarker(34.029780, -118.383940,'Pasta Sisters','This casual & cozy Italian deli with limited seating offers handmade pasta classics & panini.')
addMarker(34.04029906932865, -118.44317940262319,'Marugame Udon','Little Tokyo comes to Sawtelle with this cult-favorite thick-noodle shop, served cafeteria style.')
addMarker(34.03770480328018, -118.47596157193846,'Milo + Olive','All-day outfit offering wood-fired pizza, small plates & baked goods in a comfortable space.')
addMarker(34.03301085965143, -118.49428583145891,'La La Land Cafe','An adorable coffee shop with matcha latte specials that .')
