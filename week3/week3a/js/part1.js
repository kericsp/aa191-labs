// declare the map
const map = L.map('the_map').setView([34.0709,-118.444], 13);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

addMarker(34.062250, -118.447920,'Gushi','Ample portions of Seoul-style BBQ & teriyaki star at an unfussy, walk-up stand with outdoor seats.')
addMarker(34.046190, -118.465510,'Coco Ichibanya','Japanese fast-food joint, specializing in curry, with a spartan, contemporary ambiance.')
addMarker(34.029780, -118.383940,'Pasta Sisters','This casual & cozy Italian deli with limited seating offers handmade pasta classics & panini.')
addMarker(34.04029906932865, -118.44317940262319,'Marugame Udon','Little Tokyo comes to Sawtelle with this cult-favorite thick-noodle shop, served cafeteria style.')
addMarker(34.03770480328018, -118.47596157193846,'Milo + Olive','All-day outfit offering wood-fired pizza, small plates & baked goods in a comfortable space.')
addMarker(34.03301085965143, -118.49428583145891,'La La Land Cafe','An adorable coffee and matcha shop that aims to hire and support foster youth.')
// create a function to add markers
function addMarker(lat,lng,title,message){
    console.log(message)
    L.marker([lat,lng]).addTo(map).bindPopup(`<h2>${title}</h2> <h3>${message}</h3>`)
    createButtons(lat,lng,title);
    return message
}

function createButtons(lat,lng,title){
    const newButton = document.createElement("button"); 
    newButton.id = "button"+title; 
    newButton.innerHTML = title; 
    newButton.setAttribute("lat",lat); 
    newButton.setAttribute("lng",lng); 
    newButton.addEventListener('click', function(){
        map.flyTo([lat,lng]); 
    })
    document.getElementById("contents").appendChild(newButton); 
}
