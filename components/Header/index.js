import Popover from "../Popover";
import styled from "styled-components";
import LocationForm from "../LocationForm";
import { useState } from "react";

export default function Header({ onAddLocation }) {
  const [formData, setFormData] = useState({
    name: "",
    street: "",
    houseNumber: "",
    zipCode: "",
    city: "",
    category: "",
    isQuietHour: false,
    description: "",
  });

  return (
    <StyledHeader>
      <Popover>
        <LocationForm
          onAddLocation={onAddLocation}
          formData={formData}
          setFormData={setFormData}
        />
      </Popover>
    </StyledHeader>
  );
}

const StyledHeader = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  padding: 0 2.5rem;
  position: fixed;
  z-index: 10;
`;
