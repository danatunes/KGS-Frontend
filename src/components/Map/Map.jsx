import React from 'react';
import {MapContainer, Marker, Popup, TileLayer} from "react-leaflet";
import SearchBar from "../SearchBar/SearchBar";
import BottomBodyPanelWithButton from "../BottomBodyPanelWithButton/BottomBodyPanelWithButton";

import './Map.css';

const Map = () => {
    return (
        <div className={'dashed-box'}>
            <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={true}>
                <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={[51.505, -0.09]}>
                    <Popup>
                        A pretty CSS3 popup. <br/> Easily customizable.
                    </Popup>
                </Marker>
            </MapContainer>
            <div className="dashed-box--panels">
            <div className={'dashed-box--searchBarPanelLayer'}>
                <SearchBar/>
            </div>
            <BottomBodyPanelWithButton/>
            </div>
        </div>
    );
};

export default Map;