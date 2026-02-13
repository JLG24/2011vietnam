// Initialisation de la carte
var map = L.map('map').setView([21.008, 105.864], 8);

// Fond de carte

L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '© OpenStreetMap contributors',
    maxZoom: 19
  }
).addTo(map);


L.marker([21.008, 105.864])
  .addTo(map)
  .bindPopup(`
    <strong>19 avril</strong><br>
    <a href="../galeries/galerie-Hanoi1.html">
      Voir la galerie
    </a>
  `);



//L.marker([21.008, 105.864]) // Hanoï
//  .addTo(map)
//  .bindPopup(
//    "<strong>Hanoï</strong><br>"+
//    "Hanoï" 
//    "<a href="./galeries/galerie-Hanoi1.html">Voir la galerie de photos</a>"
 // );

//var parcours = [
//  [50.377, 2.705], // 
//  [50.366, 2.742], //
//  [50.401, 2.698]  // 
//];

//L.polyline(parcours, {
//  color: "black",
//  weight: 2,
//  dashArray: "4,4"
//}).addTo(map);
//L.marker([50.366, 2.742])
//  .addTo(map)
//  .bindTooltip("Souchez (9–12 mai 1915)", { permanent: true })
//  .bindPopup(
//    "<strong>Combats de Souchez</strong><br>" +
//    "Pertes importantes signalées au JMO.<br>" +
//    "<em>Source : JMO du régiment</em>"
//  );
