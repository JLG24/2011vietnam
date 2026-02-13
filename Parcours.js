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
    <a href="galeries/galerie-Hanoi1.html">
      Voir la galerie
    </a><br>
     <strong>20 avril</strong><br>
    <a href="galeries/galerie-Hanoi2.html">
      Voir la galerie
    </a><br>
     <strong>21 avril</strong><br>
    <a href="galeries/galerie-Hanoi3.html">
      Voir la galerie
    </a><br>
  `);

L.marker([22.335394, 103.839332])
  .addTo(map)
  .bindPopup(`
    <strong>SAPA</strong><br>
    <strong>19 avril</strong><br>
    <a href="galeries/galerie-Hanoi1.html">
      Voir la galerie
    </a><br>
     <strong>20 avril</strong><br>
    <a href="galeries/galerie-Hanoi2.html">
      Voir la galerie
    </a><br>
     <strong>21 avril</strong><br>
    <a href="galeries/galerie-Hanoi3.html">
      Voir la galerie
    </a><br>
  `);



var parcours = [
  [21.008, 106.864], // 
  [22.008, 109.864], //
  [22.335394, 103.839332]  // Hotel Sapa
];

L.polyline(parcours, {
  color: "black",
  weight: 2,
  dashArray: "4,4"
  }).addTo(map);
L.marker([21.008, 110.864])
  .addTo(map)
  .bindTooltip("Souchez (9–12 mai 1915)", { permanent: true })
  .bindPopup(
    "<strong>Combats de Souchez</strong><br>" +
    "Pertes importantes signalées au JMO.<br>" +
    "<em>Source : JMO du régiment</em>"
  );
