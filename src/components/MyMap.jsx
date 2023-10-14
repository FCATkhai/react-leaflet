import React, { useContext } from 'react';
import {MapContainer, TileLayer, Marker, Popup, GeoJSON} from "react-leaflet";
import { Icon } from 'leaflet';
import "leaflet/dist/leaflet.css";
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.webpack.css';
import mapData from "../data/index";
import Context from '../store/Context';


export default function MyMap_Test() {
    const position = [10.02, 105.46];

    const customIcon = new Icon({
        iconUrl: require("./../icons/location-icon.png"),
        iconSize: [38, 38] // size of the icon
    });


    const [mapSelect, setMapSelect] = useContext(Context);
    return (
        <MapContainer center={position} zoom={5} style={{height:"100vh", width: "100%"}} className='MapContainer'>
    <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    />
    
    {
        mapData.map(map => {
            return (
                mapSelect[map.id] &&
                <GeoJSON 
                    key={map.id}
                    data={map.data}
                />
            )
        })
    }
  </MapContainer>
    )
}