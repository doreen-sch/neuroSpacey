import { MapContainer, TileLayer, Popup, Marker } from "react-leaflet";
import styled from "styled-components";
import Link from "next/link";
import { useMap } from "react-leaflet";
import { useEffect } from "react";
import L from "leaflet";

function MapResizer() {
  const map = useMap();
  useEffect(() => {
    setTimeout(() => map.invalidateSize(), 400);
  }, [map]);
  return null;
}

const customIcon = L.icon({
  iconUrl: "/icons/Pin.png",
  iconSize: [35, 45],
  iconAnchor: [16, 32],
  popupAnchor: [0, -32],
});

export default function MapView({ locations }) {
  if (!locations)
    return (
      <p>
        Fehler beim Laden der Locations.{" "}
        <Link href="/locations">zurück zur Liste</Link>
      </p>
    );

  const validLocations = locations.filter(
    (location) =>
      location.coordinates &&
      location.coordinates.lat !== 0 &&
      location.coordinates.lng !== 0
  );

  if (validLocations.length === 0)
    return <p>Noch keine Locations verfügbar.</p>;

  return (
    <StyledMapWrapper>
      <MapContainer
        center={[51.1657, 10.4515]}
        zoom={7}
        scrollWheelZoom={true}
        touchZoom={true}
        style={{ height: "100%", width: "100%" }}
      >
        <MapResizer
          whenReady={() => setTimeout(() => map.invalidateSize(), 300)}
        />
        <TileLayer
          attribution='&copy; <a href="https://stadiamaps.com/">Stadia Maps</a> &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://tiles-eu.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png"
        />
        {validLocations.map((location) => {
          const { name, coordinates, category, _id } = location;

          return (
            <Marker
              key={location._id}
              position={[coordinates.lat, coordinates.lng]}
              icon={customIcon}
            >
              <Popup>
                <div>
                  {name} <br /> {category}
                </div>
                <Link href={`/locations/${_id}`}>mehr Infos</Link>
              </Popup>
            </Marker>
          );
        })}
      </MapContainer>
    </StyledMapWrapper>
  );
}

const StyledMapWrapper = styled.div`
  justify-content: center;
  width: 100%;
  height: 100%;
  top: 4.5rem;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 5;
  @media (min-width: 768px) {
    width: 80%;
    margin: auto auto 2rem auto;
  }
`;
