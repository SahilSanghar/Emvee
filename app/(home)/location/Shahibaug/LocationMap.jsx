"use client";
import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix for the default Leaflet icon issue
delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
});

const LocationMap = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // Set `isClient` to true after the component has mounted
    setIsClient(true);
  }, []);

  const position = [23.0483, 72.6028]; // Coordinates for B-221-222, Advance Business Park, Shahibag, Ahmedabad

  if (!isClient) {
    return null; // Render nothing on the server-side
  }

  // Dynamically import the react-leaflet components
  const MapContainer = dynamic(() => import('react-leaflet').then((mod) => mod.MapContainer), { ssr: false });
  const TileLayer = dynamic(() => import('react-leaflet').then((mod) => mod.TileLayer), { ssr: false });
  const Marker = dynamic(() => import('react-leaflet').then((mod) => mod.Marker), { ssr: false });
  const Popup = dynamic(() => import('react-leaflet').then((mod) => mod.Popup), { ssr: false });

  return (
    <div className="h-[500px] w-full">
      <MapContainer center={position} zoom={13} scrollWheelZoom={false} className="h-full w-full">
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={position}>
          <Popup>
            B-221-222, Advance Business Park <br /> Opp. BAPS Swaminarayan Mandir, Shahibag, Ahmedabad, Gujarat 380004.
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default LocationMap;
