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

export default function MapView({ locations, isDark }) {
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
          url={`https://tiles-eu.stadiamaps.com/tiles/${isDark ? "alidade_smooth_dark" : "alidade_smooth"}/{z}/{x}/{y}{r}.png`}
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
                <StyledPopupContent>
                  <StyledPopupName>{name}</StyledPopupName>
                  <StyledTagRow>
                    <StyledPopupTag>{category}</StyledPopupTag>
                    {location.isQuietHour && (
                      <StyledPopupTag>🤫 Stille Stunde</StyledPopupTag>
                    )}
                  </StyledTagRow>
                  <StyledPopupButton href={`/locations/${_id}`}>
                    mehr Infos
                  </StyledPopupButton>
                </StyledPopupContent>
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
const StyledPopupContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
`;

const StyledPopupName = styled.p`
  margin: 0 0 -1rem 0;
  font-weight: 600;
  font-size: 0.9rem;
`;

const StyledTagRow = styled.div`
  display: flex;
  gap: 0.25rem;
  flex-wrap: wrap;
`;

const StyledPopupTag = styled.span`
  font-size: 0.7rem;
  padding: 0.15rem 0.5rem;
  border-radius: var(--radius-full);
  background-color: var(--color-surface-200);
  color: var(--color-text-900);
`;

const StyledPopupButton = styled(Link)`
  font-size: 0.8rem;
  color: white;
  background-color: var(--color-primary-200);
  border-radius: var(--radius-full);
  padding: 0.3rem 0.75rem;
  text-decoration: none;
  font-weight: 500;
  text-align: center;
`;
