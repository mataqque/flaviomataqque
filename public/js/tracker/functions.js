
const socket = io("http://localhost:3000");
// coordenadas actual
var coordenadas = [-12.0463731,-77.042754];
// iniciar el mapa en el id 
var map = L.map("map-template");

var myIcon = L.icon({
    iconUrl: 'transportador.svg',
    iconSize: [40, 40],
    iconAnchor: [0, 20],
    popupAnchor: [0, 0],
    shadowUrl: '',
    shadowSize: [100, 40],
    shadowAnchor: [-100, 0]
});
// agregar mapa al id
L.tileLayer('https://maps.wikimedia.org/osm-intl/{z}/{x}/{y}.png').addTo(map);
//integrar el icono
L.marker([-12.0463731,-77.042754],{icon: myIcon}).addTo(map);
L.marker([-12.182644, -76.942172],{icon: myIcon}).addTo(map);
L.marker([-12.182644, -76.942172]).addTo(map);


map.setView([-12.0463731,-77.042754],13);

const popup = L.marker(coordenadas).bindPopup("You are here");
map.addLayer(popup);

var latlngs = [
        [-12.181742, -76.942752],
        [-12.182644, -76.942172],
        [-12.182308, -76.942301],
        [-12.180525, -76.943481],
        [-12.178533, -76.944747],
        [-12.176771, -76.945756]
    ];
    var polyline = L.polyline(latlngs, {color: 'red'}).addTo(map);

var cont = 0;
var camion;
socket.emit("coordenada",1);

socket.on("coordenada",(msg)=>{
    console.log(msg)
    if(camion==null){
        camion = L.marker(msg,{icon: myIcon});
        camion.addTo(map);
    }else if(camion!=null){
        camion.remove();
        camion = L.marker(msg,{icon: myIcon});
        camion.addTo(map);
    }     
});

// setInterval(() => {
//     cont += 1;
//     console.log(cont)
//     camion.remove();
// }, 1000);
