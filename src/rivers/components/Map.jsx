import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";


export const Mapa = () => {
  const position = [40.4167278, -3.7033387];

  

  return (
    <MapContainer  center={position} zoom={13} >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      
    </MapContainer>
  );
};


