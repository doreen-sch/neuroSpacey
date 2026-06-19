import { MapContainer, TileLayer, Popup, Marker } from "react-leaflet";
import styled from "styled-components";

export default function MapView() {
  return (
    <StyledMapWrapper>
      <MapContainer
        center={[51.1657, 10.4515]}
        zoom={7}
        scrollWheelZoom={false}
        style={{ height: "100%", width: "100%" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://stadiamaps.com/">Stadia Maps</a> &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://tiles-eu.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png"
        />
        <Marker position={[51.1657, 10.4515]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </StyledMapWrapper>
  );
}

const StyledMapWrapper = styled.div`
  margin-top: 7rem;
  height: 100vh;
  width: 100%;
  @media (min-width: 768px) {
    width: 60%;
    margin: 0 auto;
  }
  z-index: 5;
`;
