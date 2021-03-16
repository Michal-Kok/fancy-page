import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { useState, useRef, useEffect } from 'react';
import { useMap } from 'react-leaflet';
import icon from '../img/markerIcon.png';

function Map({ location: { lon, lat } }) {

    const FlyToNewLocation = () => {
        const map = useMap();
        map.flyTo([lon, lat], 13, { duration: 3 });
        return null;
    }

    const markerIcon = new leaflet.icon({
        iconUrl: icon,
        iconSize: [28, 38],
    });

    return (
        <MapContainer
            style={{ height: 400, width: "100vw", borderRadius: 20 }}
            center={[lon, lat]}
            zoom={13}
            scrollWheelZoom={true}>
            < FlyToNewLocation />
            <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[lon, lat]} icon={markerIcon}>
                <Popup>
                    A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
            </Marker>
        </MapContainer>
    );
}

export default Map;