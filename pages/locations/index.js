import useSWR from "swr";
import { useState } from "react";
import LocationList from "@/components/LocationList";
import dynamic from "next/dynamic";
import ViewSlider from "@/components/ViewSlider";
import styled from "styled-components";

const MapView = dynamic(() => import("@/components/MapView"), { ssr: false });

export default function HomePage({ isDark }) {
  const { data: locations, error, isLoading } = useSWR("/api/locations");

  const [view, setView] = useState("list");

  if (error) {
    return <h1>Oops… something went wrong.</h1>;
  }

  if (isLoading) return <p>Loading...</p>;

  return (
    <div>
      <ViewSlider view={view} setView={setView} />
      <StyledViewContainer $isMap={view === "map"}>
        <StyledListPanel>
          <LocationList locations={locations} isDark={isDark} />
        </StyledListPanel>
        <StyledMapPanel>
          <MapView locations={locations} isDark={isDark} />
        </StyledMapPanel>
      </StyledViewContainer>
    </div>
  );
}

const StyledViewContainer = styled.div`
  position: fixed;
  left: 0;
  width: 200vw;
  height: calc(100vh - 4rem);
  display: flex;
  transform: ${({ $isMap }) => ($isMap ? "translateX(-50%)" : "translateX(0)")};
  transition: transform 0.4s ease-in-out;
`;

const StyledListPanel = styled.div`
  width: 100%;
  height: 100%;
  overflow-y: auto;
  padding-right: 1rem;
`;

const StyledMapPanel = styled.div`
  width: 100%;
  height: 100%;
  padding-left: 1rem;
`;
