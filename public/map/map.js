
window.addEventListener('load', function () {
    initMap()
  })
  

function initMap() {
    var map = L.map('map', {
        center: [38.89, -77.03],
        zoom: 11
    });
     
    
    new L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      minZoom: '15'}).addTo(map);
    
    var marker = L.marker(
      [38.89, -77.03],
      { 
        draggable: true,
        title: "",
        opacity: 0.75
    });
    
    marker.addTo(map).bindPopup("<p1><b>The White House</b><br>Landmark, historic home & office of the United States president, with tours for visitors.</p1>") .openPopup();
    
    
}