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
    const markerPosition2 = [18.915091,72.8259691];
    const markerPosition3=[18.986,72.8259];
    const markerPosition4=[18.9598116,72.8195259];
    const markerPosition5=[19.0201,72.8381];
    const markerPosition6=[18.9278616,72.8318358];
    const markerPosition7=[18.986,72.8259];
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
      <Marker position={markerPosition2} icon={customIcon}>
        <Popup>
          <CustomPopUp imageSrc='https://b.zmtcdn.com/data/pictures/3/44023/f24f2ed8bafd18468f6c686d8a8805df.jpg' imageAlt='Img here' title='Bay View Café' address='Hotel Harbour View, Kerawala Chamber, Opposite Radio Club, 25, J P Ramchandani Marg, Colaba, Mumbai'/>
        </Popup>
      </Marker>
      <Marker position={markerPosition3} icon={customIcon}>
        <Popup>
          <CustomPopUp imageSrc='https://im.whatshot.in/img/2021/Dec/132078749-3622549611156992-47733037240185069-n-cropped-1639479999.jpg?w=570&h=388&cc=1' imageAlt='Img here' title='Pizza By the Bay' address='V N Rd, Churchgate, Mumbai, Maharashtra 400020'/>
        </Popup>
      </Marker>
      <Marker position={markerPosition4} icon={customIcon}>
        <Popup>
          <CustomPopUp imageSrc='https://images.jdmagicbox.com/comp/mumbai/l7/022pxx22.xx22.210601121608.w4l7/catalogue/chaayos-churchgate-mumbai-chaayos-po976jh2wj.jpg?clr=' imageAlt='Img here' title='Tea Villa Cafe' address='Shop No 1, North Side, Ground Floor, Back Bay View Building, 3 A New Queens Road, Charni Road, Mumbai - 400004'/>
        </Popup>
      </Marker>

      <Marker position={markerPosition5} icon={customIcon}>
        <Popup>
          <CustomPopUp imageSrc='https://b.zmtcdn.com/data/pictures/4/32264/bfbe3b149365a08ea915a4982c136c8f.jpg' imageAlt='Img here' title='Pritam Da Dhaba' address='Swami Ganjivandas Marg, Dadar East, Dadar, Mumbai, Maharashtra 400014'/>
        </Popup>
      </Marker>

      <Marker position={markerPosition6} icon={customIcon}>
        <Popup>
          <CustomPopUp imageSrc='https://im.whatshot.in/img/2019/Dec/hotelhori-1576575071.jpg' imageAlt='Img here' title='Café Royal' address='166, SP Mukherjee Chowk, Kala Ghoda, Fort, Mumbai, Maharashtra 400001'/>
        </Popup>
      </Marker>

        </MapContainer>
    );
  };
  
  export default Mappu;