"use client";
import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
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
    setIsClient(true); // Only set true after the component has mounted
  }, []);

  const position = [22.9764, 72.6369]; // Coordinates for Vatva, Ahmedabad

  if (!isClient) {
    return null; // Don't render the map on the server-side
  }

  return (
    <div className="h-[500px] w-full">
      <MapContainer center={position} zoom={13} scrollWheelZoom={false} className="h-full w-full">
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={position}>
          <Popup>
            Emvee Engineer Pvt Ltd <br /> Pushpavrund Industrial Hub, Hathijan Circle, Vatva, Ahmedabad, Gujarat.
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default LocationMap;
