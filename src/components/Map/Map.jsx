import React, {useEffect, useRef, useState} from 'react';
import * as L from "leaflet";
import Modal from "./Modal";

import SearchBar from "../SearchBar/SearchBar";
import BottomBodyPanelWithButton from "../BottomBodyPanelWithButton/BottomBodyPanelWithButton";

import example from '../../dataForExample/dataForExample';
import './Map.css';


const Map = () => {

    const mapRef = useRef(null) // map
    const [isOpen, setIsOpen] = useState(false);
    const [defaultFeature, setDefaultFeature] = useState({});
    const [layer, setLayer] = useState();

    var states = [
        {
            "type": "Feature",
            "properties": {
                "name": "Coors Field",
                "amenity": "Baseball Stadium",
                "popupContent": "This is where the Rockies play!",
                "color": "#6ea4fa"
            },
            "geometry": {
                "type": "LineString",
                "coordinates": [
                    [
                        11.25,
                        -20.3034175184893
                    ],
                    [
                        13.359375,
                        -41.77131167976406
                    ],
                    [
                        34.1015625,
                        -53.748710796898976
                    ],
                    [
                        63.984375,
                        -55.77657301866769
                    ],
                    [
                        79.1015625,
                        -53.956085530987885
                    ],
                    [
                        95.625,
                        -44.087585028245165
                    ],
                    [
                        60.46875,
                        -66.65297740055279
                    ]
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "name": "Coors Field",
                "amenity": "Baseball Stadium",
                "popupContent": "This is where the Rockies play!",
                "color": "#6ea4fa"
            },
            "geometry": {
                "type": "Polygon",
                "coordinates": [
                    [
                        [
                            45.703125,
                            43.068887774169625
                        ],
                        [
                            37.265625,
                            21.94304553343818
                        ],
                        [
                            43.9453125,
                            -10.833305983642491
                        ],
                        [
                            86.484375,
                            -7.01366792756663
                        ],
                        [
                            114.9609375,
                            26.43122806450644
                        ],
                        [
                            103.71093749999999,
                            56.17002298293205
                        ],
                        [
                            80.15625,
                            62.103882522897855
                        ],
                        [
                            43.2421875,
                            64.92354174306496
                        ],
                        [
                            15.468749999999998,
                            53.330872983017066
                        ],
                        [
                            45.703125,
                            43.068887774169625
                        ]
                    ]
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "name": "Coors Field",
                "amenity": "Baseball Stadium",
                "popupContent": "This is where the Rockies play!",
                "color": "#6ea4fa"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    17.578125,
                    23.885837699862005
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "name": "Coors Field",
                "amenity": "Baseball Stadium",
                "popupContent": "This is where the Rockies play!",
                "color": "#6ea4fa"
            },
            "geometry": {
                "type": "LineString",
                "coordinates": [
                    [
                        59.0625,
                        72.18180355624855
                    ],
                    [
                        115.31249999999999,
                        69.77895177646758
                    ],
                    [
                        135.703125,
                        58.81374171570782
                    ],
                    [
                        134.6484375,
                        36.31512514748051
                    ],
                    [
                        125.5078125,
                        11.523087506868514
                    ],
                    [
                        127.61718749999999,
                        -34.016241889667015
                    ],
                    [
                        165.234375,
                        -6.664607562172573
                    ],
                    [
                        165.234375,
                        48.45835188280866
                    ]
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "name": "Coors Field",
                "amenity": "Baseball Stadium",
                "popupContent": "This is where the Rockies play!",
                "color": "#6ea4fa"
            },
            "geometry": {
                "type": "Polygon",
                "coordinates": [
                    [
                        [
                            -79.8046875,
                            3.162455530237848
                        ],
                        [
                            -17.9296875,
                            3.162455530237848
                        ],
                        [
                            -17.9296875,
                            67.87554134672945
                        ],
                        [
                            -79.8046875,
                            67.87554134672945
                        ],
                        [
                            -79.8046875,
                            3.162455530237848
                        ]
                    ]
                ]
            }
        }
    ];

    const colorChange = (feature, some,choice) => {
           if (choice) {
               feature.properties.color = 'red'
               some.setStyle({
                   fillColor: 'red'
               })
           } else {
               feature.properties.color = '#6ea4fa'
               some.setStyle({
                   fillColor: '#6ea4fa'
               })
           }
           setIsOpen(false);
    }

    function onEachFeature(feature, layer) {
        layer.on({
            click: function () {
                setLayer(layer);
                setDefaultFeature(feature);
                setIsOpen(true);
            }
        });
    }

    var geojsonMarkerOptions = {
        radius: 8,
        fillColor: "#ff7800",
        color: "#000",
        weight: 1,
        opacity: 1,
        fillOpacity: 0.8
    };

    useEffect(() => {
        try {
            const map = L.map('map', {
                center: [51.15178610143037, 75.43212890625],
                zoom: 5,
                minZoom: 1,
                zoomControl: false
            })

            if (window.location.hostname === 'localhost') {
                L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                    maxZoom: 18,
                    attribution: '&copy; <a href="https://openstreetmap.org/copyright">OpenStreetMap contributors</a>'
                }).addTo(map);
            } else {
                L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                    maxZoom: 19,
                    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                }).addTo(map)
            }

            var exampleData=L.geoJSON(example);


            L.geoJSON(states, {
                style: function (feature) {
                    return {
                        fillColor: feature.properties.color
                    }
                },
                onEachFeature: onEachFeature,
                pointToLayer: function (feature, latlng) {
                    return L.circleMarker(latlng, geojsonMarkerOptions);
                }
            }).addTo(map);
            mapRef.current.invalidateSize(9)

        } catch (e) {
            console.log(e)
        }
    }, [])


    return (
        <div className={'dashed-box'}>
            <div id={'map'}>

            </div>

            <div className="dashed-box--panels">
                <Modal
                    open={isOpen}
                    onClose={() => setIsOpen(false)}
                    colorChange={colorChange}
                    layer={layer}
                    defaultFeature={defaultFeature}
                >
                    Сделать секретным ?
                </Modal>
                <div className={'dashed-box--searchBarPanelLayer'}>
                    <SearchBar/>
                </div>
                <BottomBodyPanelWithButton/>
            </div>
        </div>
    );
};

export default Map;