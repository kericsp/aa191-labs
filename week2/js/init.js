console.log('hello asian am 191a 2022');

let zoomLevel = 13;
const mapCenter = [34.0550, -118.455];

// JavaScript const variable declaration
const map = L.map('the_map').setView(mapCenter, zoomLevel); 

// Leaflet tile layer, i.e. the base map
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map); 

// create a function to add markers
function addMarker(lat,lng,title,message, img){
    console.log(message)
    L.marker([lat,lng]).addTo(map).bindPopup(`<h2>${title}</h2><h3>${message}</h3><img>${img}</img>`)
    return message
}

// use our marker functions
addMarker(34.062250, -118.447920,'Gushi','Ample portions of Seoul-style BBQ & teriyaki star at an unfussy, walk-up stand with outdoor seats.', '<center><img src="https://fastly.4sqi.net/img/general/600x600/537468976_CuPULsb6XEl2e6PdwiQMLVifsI6jakCpzF9L1-gyh_M.jpg" height="150px" width="150px"/></center>')
addMarker(34.046190, -118.465510,'Coco Ichibanya','Japanese fast-food joint, specializing in curry, with a spartan, contemporary ambiance.', '<center><img src="https://img.cdn4dd.com/cdn-cgi/image/fit=cover,width=600,height=400,format=auto,quality=50/https://doordash-static.s3.amazonaws.com/media/store/header/1fa51bde-5353-4565-8c0b-0e1957edc91b.png" height="150px" width="150px"/></center>')
addMarker(34.029780, -118.383940,'Pasta Sisters','This casual & cozy Italian deli with limited seating offers handmade pasta classics & panini.', '<center><img src="https://s3-media0.fl.yelpcdn.com/bphoto/mbyx4UJR1cggXByjsiZoTA/l.jpg" height="150px" width="150px"/></center>')
addMarker(34.04029906932865, -118.44317940262319,'Marugame Udon','Little Tokyo comes to Sawtelle with this cult-favorite thick-noodle shop, served cafeteria style.', '<center><img src="https://d1ralsognjng37.cloudfront.net/1fbd7324-1331-48f2-ad43-a4eb4bcc8095.jpeg" height="150px" width="150px"/></center>')
addMarker(34.03770480328018, -118.47596157193846,'Milo + Olive','All-day outfit offering wood-fired pizza, small plates & baked goods in a comfortable space.', '<center><img src="https://www.miloandolive.com/wp-content/uploads/2018/07/Milo-Olive_Pizza-Resized_Photo-Credit-Jakob-Layman-Edit.jpg" height="150px" width="150px"/></center>')
addMarker(34.03301085965143, -118.49428583145891,'La La Land Cafe','An adorable coffee and matcha shop that aims to hire and support foster youth.', '<center><img src="https://palisadesnews.com/wp-content/uploads/2021/04/57070912_261502747969404_3242506296217305088_n.jpeg" height="150px" width="150px"/></center>')
