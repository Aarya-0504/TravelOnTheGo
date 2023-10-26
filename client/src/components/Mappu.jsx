import React, { useRef } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from 'leaflet';
import CustomPopUp from "./CustomPopUp";

const customIcon = new L.Icon({
  iconUrl: require('../images/food_6350232.png'),
  iconSize: [32, 32], // Set the size of the icon
  iconAnchor: [16, 32], // Set the anchor point
});

const Mappu = () => {
    const mapRef = useRef(null);
    const markerPosition = [19.0190, 72.8426];
   // const markerPosition2 = [19.0240,72.4918];
    return ( 
      // Make sure you set the height and width of the map container otherwise the map won't show
        <MapContainer center={[19.0190, 72.8426]} zoom={13} ref={mapRef} style={{height: "100vh", width: "100vw"}}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
           <Marker position={markerPosition} icon={customIcon}>
        <Popup>
          <CustomPopUp className="custom-popup-image" imageSrc='https://images.lifestyleasia.com/wp-content/uploads/sites/7/2021/01/07170924/Bastian-Worli-Interiors-293948-1024x683.jpg' imageAlt='Img here'  title='Bastian Bandra' address='B/1, New Kamal Building, Opposite National College, Linking Road, Bandra West, Mumbai'/>
        </Popup>
      </Marker>
      {/* <Marker position={markerPosition2} icon={customIcon}>
        <Popup>
          <CustomPopUp imageSrc='https://th.bing.com/th/id/OIP.7QPxi5gsy0a405MTxZIO0wAAAA?pid=ImgDet&rs=1' imageAlt='Img here' title='Taj Lands End'/>
        </Popup>
      </Marker> */}
        </MapContainer>
    );
  };
  
  export default Mappu;