import React, { useRef } from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const Mappu = () => {
    const mapRef = useRef(null);
    
  
    return ( 
      // Make sure you set the height and width of the map container otherwise the map won't show
        <MapContainer center={[19.0190, 72.8426]} zoom={13} ref={mapRef} style={{height: "100vh", width: "100vw"}}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
           {/* <Popup>
          A popup message on the marker.
        </Popup> */}
          {/* Additional map layers or components can be added here */}
        </MapContainer>
    );
  };
  
  export default Mappu;