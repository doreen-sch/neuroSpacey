import Popover from "../Popover";
import LocationForm from "../LocationForm";
import styled from "styled-components";
import HomeIcon from "/assets/icons/house.svg";
import LocationIcon from "/assets/icons/map-pin.svg";
import FavouritIcon from "/assets/icons/heart.svg";
import ProfileIcon from "/assets/icons/user.svg";
import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

export default function NavBar({ handleAddLocation, formData, setFormData }) {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  return (
    <StyledNavBar>
      <StyledNavLink href="/">
        <StyledNavButton
          type="button"
          aria-label="Home"
          className={router.pathname === "/" ? "active" : ""}
        >
          <HomeIcon />
        </StyledNavButton>
      </StyledNavLink>
      <StyledNavItem>
        <Popover isOpen={isOpen} onOpenChange={setIsOpen}>
          <LocationForm
            onSubmit={handleAddLocation}
            formData={formData}
            setFormData={setFormData}
          />
        </Popover>
      </StyledNavItem>

      <StyledNavLink href="/locations">
        <StyledNavButton
          type="button"
          aria-label="Orte"
          className={router.pathname === "/locations" ? "active" : ""}
        >
          <LocationIcon />
        </StyledNavButton>
      </StyledNavLink>
      {/* <StyledNavButton type="button" aria-label="Favoriten">
        <FavouritIcon />
      </StyledNavButton>
      <StyledNavButton type="button" aria-label="Profil">
        <ProfileIcon />
      </StyledNavButton> */}
    </StyledNavBar>
  );
}

const StyledNavBar = styled.nav`
  position: fixed;

  bottom: 0;
  left: 0;
  width: 100%;
  height: 4rem;
  background-color: var(--color-surface-100);
  z-index: 2000;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  border-top: 1px solid var(--color-surface-300);
  body.dark & {
    background-color: var(--color-surfaceDark-900);
    border-top: 1px solid var(--color-surfaceDark-700);
  }
`;

const StyledNavItem = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledNavLink = styled(Link)`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
`;
const StyledNavButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  position: relative;
  &.active::before {
    content: "";
    position: absolute;
    top: -0.6rem;
    left: 0;
    right: 0;
    height: 5px;
    background-color: var(--color-primary-600);
    border-radius: var(--radius-full);
  }
  body.dark &.active::before {
    background-color: var(--color-surfaceDark-400);
  }
  svg {
    width: 1.8rem;
    height: 1.8rem;
    stroke: var(--color-text-700);
    fill: none;
  }
  body.dark & svg {
    stroke: var(--color-textDark-300);
  }
  a {
    flex: 1;
    display: flex;
    justify-content: center;
  }
`;
