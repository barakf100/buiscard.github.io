import Map from "ol/Map.js";
import View from "ol/View.js";
import OSM from "ol/source/OSM.js";
import TileLayer from "ol/layer/Tile.js";
import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import axios from "axios";
const MapComponent = (address) => {
    const [coordinates, setCoordinates] = useState([0, 0]);
    useEffect(() => {
        const geocodeAddress = async () => {
            try {
                const response = await axios.get(
                    `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(address.address)}`
                );
                const data = await response.data;

                if (data.length > 0) {
                    const { lat, lon } = data[0];
                    setCoordinates([parseFloat(lon), parseFloat(lat)]);
                }
            } catch (error) {
                console.error("Error geocoding address:", error);
            }
        };

        geocodeAddress();
    }, [address]);
    useEffect(() => {
        const map = new Map({
            layers: [new TileLayer({ source: new OSM() })],
            view: new View({
                center: coordinates,
                zoom: 15,
                projection: "EPSG:4326",
            }),
            target: "map",
        });
        map.getView().setCenter(coordinates);
        return () => {
            map.dispose();
        };
    }, [coordinates]);
    return <Box id="map" style={{ width: "300px", height: "300px" }}></Box>;
};
export default MapComponent;
