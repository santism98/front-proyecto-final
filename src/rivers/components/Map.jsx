import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

export const Mapa = () => {
  const [markers, setMarkers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://bac-proyecto-final.onrender.com/coord");
      const data = await response.json();
      setMarkers(data);
    };
    fetchData();
  }, []);

  const icon = L.icon({
    iconUrl: "https://as1.ftcdn.net/v2/jpg/01/70/63/68/1000_F_170636872_RhGjPZx1Dt6kkcDqfFr5oaFeZBNuCMYU.jpg",
    iconSize: [95, 95],
    iconAnchor: [22, 94],
    popupAnchor: [-3, -76],
  });

  return (
    <MapContainer center={[42.53125302957343, -5.8680262289283505]} zoom={13} style={{ height: "500px" }}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      {markers.map((marker) => (
        <Marker key={marker.id} position={[marker.coordenadas[0], marker.coordenadas[1]]} icon={icon}>
          <Popup>
            Río: {marker.rio}
            <br />
            Tramo: {marker.tramo}
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};







// import React from "react";
// import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
// import "leaflet/dist/leaflet.css";
// import L from "leaflet";

// export const Mapa = () => {
//   const position = [40.4167278, -3.7033387];

//   const icon = L.icon({
//     iconUrl: "https://www.kindpng.com/picc/m/391-3918548_fishing-icon-png-circle-fishing-logo-png-transparent.png",
//     iconSize: [38, 95],
//     iconAnchor: [22, 94],
//     popupAnchor: [-3, -76],
//   });

//   return (
//     <MapContainer center={position} zoom={13} style={{ height: "500px" }}>
//       <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
//       <Marker position={position} icon={icon}>
//         <Popup>
//           A pretty CSS3 popup. <br /> Easily customizable.
//         </Popup>
//       </Marker>
//     </MapContainer>
//   );
// };
































// import React, { useState } from "react";
// import L from 'leaflet';
// import 'leaflet/dist/leaflet.css';

// import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";


// export const Mapa = () => {
//   const position = [40.4167278, -3.7033387];

  

//   return (
//     <MapContainer  center={position} zoom={13} >
//       <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      
//     </MapContainer>
//   );
// };


// import { useAuth0 } from "@auth0/auth0-react";


// export const Mapa = () => {
  
 
//   const position = [51.505, -0.09]
//   return (

//     <>
//     <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
//     <TileLayer
//       attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//       url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//     />
   
//   </MapContainer>
//   </>
//   );
// };



// import { useState, useEffect } from 'react';
// import L from 'leaflet';
// import 'leaflet/dist/leaflet.css';

// export const Mapa =()=> {
//   const [map, setMap] = useState(null);
//   const [layers, setLayers] = useState([]);

//   function initMap() {
//     const map = L.map('map').setView([51.505, -0.09], 13);
//     L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);
//     setMap(map);
//   }

//   useEffect(() => {
//     initMap();
//   }, []);

//   return <div id="map" style={{ width: '100%', height: '500px' }}></div>;
// }


