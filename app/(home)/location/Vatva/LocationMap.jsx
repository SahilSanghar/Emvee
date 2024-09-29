"use client";
import dynamic from 'next/dynamic';
import React, { useEffect, useState } from 'react';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix for the default Leaflet icon issue
delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
});

// Dynamically import the `MapContainer` and related components without SSR
const DynamicMapContainer = dynamic(() => import('react-leaflet').then(mod => mod.MapContainer), { ssr: false });
const DynamicTileLayer = dynamic(() => import('react-leaflet').then(mod => mod.TileLayer), { ssr: false });
const DynamicMarker = dynamic(() => import('react-leaflet').then(mod => mod.Marker), { ssr: false });
const DynamicPopup = dynamic(() => import('react-leaflet').then(mod => mod.Popup), { ssr: false });

const LocationMap = () => {
  const position = [22.9764, 72.6369]; // Coordinates for Vatva, Ahmedabad

  return (
    <div className="h-[500px] w-full">
      <DynamicMapContainer center={position} zoom={13} scrollWheelZoom={false} className="h-full w-full">
        <DynamicTileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <DynamicMarker position={position}>
          <DynamicPopup>
            Emvee Engineer Pvt Ltd <br /> Pushpavrund Industrial Hub, Hathijan Circle, Vatva, Ahmedabad, Gujarat.
          </DynamicPopup>
        </DynamicMarker>
      </DynamicMapContainer>
    </div>
  );
};

export default LocationMap;
