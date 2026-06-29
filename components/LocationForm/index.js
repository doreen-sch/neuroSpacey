import { useState } from "react";
import styled from "styled-components";

export default function LocationForm({
  onSubmit,
  onClose,
  formData,
  setFormData,
  isEditMode,
}) {
  const [error, setError] = useState(null);
  const [hasChanges, setHasChanges] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();
    if (event.target.checkValidity()) {
      await onSubmit(event);
      onClose();
    } else {
      setError("Bitte fülle alle Felder aus.");
    }
  }

  return (
    <StyledForm aria-labelledby="form-title" onSubmit={handleSubmit} noValidate>
      <StyledTitle id="form-title">
        {isEditMode ? "Ort bearbeiten" : "Neuen Ort hinzufügen"}
      </StyledTitle>

      <StyledField>
        <StyledLabel htmlFor="name">Name</StyledLabel>
        <StyledInput
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={(event) => {
            setFormData({ ...formData, name: event.target.value });
            setHasChanges(true);
          }}
          required
          placeholder="Name des Ortes"
        />
      </StyledField>

      <StyledFieldset>
        <StyledLegend>Adresse</StyledLegend>
        <StyledField>
          <StyledLabel htmlFor="street">Straße</StyledLabel>
          <StyledInput
            type="text"
            id="street"
            name="street"
            value={formData.street}
            onChange={(event) => {
              setFormData({ ...formData, street: event.target.value });
              setHasChanges(true);
            }}
            required
            placeholder="Straße"
          />
        </StyledField>
        <StyledField>
          <StyledLabel htmlFor="houseNumber">Hausnummer</StyledLabel>
          <StyledInput
            type="text"
            id="houseNumber"
            name="houseNumber"
            value={formData.houseNumber}
            onChange={(event) => {
              setFormData({ ...formData, houseNumber: event.target.value });
              setHasChanges(true);
            }}
            required
            placeholder="Hausnummer"
          />
        </StyledField>
        <StyledField>
          <StyledLabel htmlFor="zipCode">Postleitzahl</StyledLabel>
          <StyledInput
            type="text"
            id="zipCode"
            name="zipCode"
            value={formData.zipCode}
            onChange={(event) => {
              setFormData({ ...formData, zipCode: event.target.value });
              setHasChanges(true);
            }}
            required
            placeholder="Postleitzahl"
          />
        </StyledField>
        <StyledField>
          <StyledLabel htmlFor="city">Stadt</StyledLabel>
          <StyledInput
            type="text"
            id="city"
            name="city"
            value={formData.city}
            onChange={(event) => {
              setFormData({ ...formData, city: event.target.value });
              setHasChanges(true);
            }}
            required
            placeholder="Stadt"
          />
        </StyledField>
      </StyledFieldset>

      <StyledField>
        <StyledLabel htmlFor="category">Kategorie</StyledLabel>
        <StyledSelect
          id="category"
          name="category"
          value={formData.category}
          onChange={(event) => {
            setFormData({ ...formData, category: event.target.value });
            setHasChanges(true);
          }}
          required
        >
          <option value="">Bitte wähle...</option>
          <option value="Einkaufen">Einkaufen</option>
          <option value="Dienstleistung">Dienstleistung</option>
          <option value="Natur">Natur</option>
          <option value="Café & Restaurant">Café & Restaurant</option>
          <option value="Kultur">Kultur</option>
          <option value="Veranstaltung">Veranstaltung</option>
        </StyledSelect>
      </StyledField>

      <StyledCheckboxField>
        <StyledLabel htmlFor="isQuietHour">
          Bietet der Ort eine „Stille Stunde” an? Falls ja, wähle aus:
        </StyledLabel>
        <StyledCheckbox
          type="checkbox"
          name="isQuietHour"
          id="isQuietHour"
          checked={formData.isQuietHour}
          onChange={(event) => {
            setFormData({ ...formData, isQuietHour: event.target.checked });
            setHasChanges(true);
          }}
        />
      </StyledCheckboxField>

      <StyledField>
        <StyledLabel htmlFor="description">Beschreibung</StyledLabel>
        <StyledTextarea
          id="description"
          name="description"
          value={formData.description}
          onChange={(event) => {
            setFormData({ ...formData, description: event.target.value });
            setHasChanges(true);
          }}
          required
          rows={5}
          placeholder="Beschreibe den Ort..."
        />
      </StyledField>

      {error && <StyledError>{error}</StyledError>}

      <StyledButtonRow>
        <StyledSubmitButton
          type="submit"
          aria-label={
            isEditMode ? "Änderungen einreichen" : "Eintrag hinzufügen"
          }
        >
          {isEditMode ? "Änderungen einreichen" : "Eintrag hinzufügen"}
        </StyledSubmitButton>
        <StyledCancelButton
          type="button"
          aria-label={isEditMode ? "Abbrechen" : "Felder leeren"}
          onClick={() => {
            isEditMode
              ? onClose()
              : setFormData({
                  name: "",
                  street: "",
                  houseNumber: "",
                  zipCode: "",
                  city: "",
                  category: "",
                  isQuietHour: false,
                  description: "",
                });
          }}
        >
          {isEditMode ? "Abbrechen" : "Felder leeren"}
        </StyledCancelButton>
      </StyledButtonRow>
    </StyledForm>
  );
}

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  font-family: "Poppins", sans-serif;
`;

const StyledTitle = styled.h2`
  margin: 0 0 0.5rem 0;
  font-size: 1.3rem;
`;

const StyledField = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`;

const StyledLabel = styled.label`
  font-size: 0.8rem;
  color: var(--color-textSecondary-800);
  font-weight: 500;
`;

const StyledInput = styled.input`
  border: 1px solid var(--color-surface-400);
  border-radius: var(--radius-sm);
  padding: 0.6rem 0.75rem;
  font-size: 0.9rem;
  color: var(--color-text-900);
  background-color: var(--color-surface-50);
  outline: none;
  font-family: "Poppins", sans-serif;

  &:focus {
    border-color: var(--color-primary-500);
    box-shadow: 0 0 0 2px var(--color-primary-100);
  }

  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus {
    -webkit-box-shadow: 0 0 0px 1000px var(--color-surfaceDark-700) inset;
    -webkit-text-fill-color: var(--color-textDark-200);
  }

  body.dark & {
    background-color: var(--color-surfaceDark-700);
    border-color: var(--color-surfaceDark-500);
    color: var(--color-textDark-200);
  }
`;

const StyledSelect = styled.select`
  border: 1px solid var(--color-surface-400);
  border-radius: var(--radius-sm);
  padding: 0.6rem 0.75rem;
  font-size: 0.9rem;
  color: var(--color-text-900);
  background-color: var(--color-surface-50);
  outline: none;
  font-family: "Poppins", sans-serif;

  &:focus {
    border-color: var(--color-primary-500);
    box-shadow: 0 0 0 2px var(--color-primary-100);
  }

  body.dark & {
    background-color: var(--color-surfaceDark-700);
    border-color: var(--color-surfaceDark-500);
    color: var(--color-textDark-200);
  }
`;

const StyledTextarea = styled.textarea`
  border: 1px solid var(--color-surface-400);
  border-radius: var(--radius-sm);
  padding: 0.6rem 0.75rem;
  font-size: 0.9rem;
  color: var(--color-text-900);
  background-color: var(--color-surface-50);
  outline: none;
  resize: vertical;
  font-family: "Poppins", sans-serif;

  &:focus {
    border-color: var(--color-primary-500);
    box-shadow: 0 0 0 2px var(--color-primary-100);
  }

  body.dark & {
    background-color: var(--color-surfaceDark-700);
    border-color: var(--color-surfaceDark-500);
    color: var(--color-textDark-200);
  }
`;

const StyledFieldset = styled.fieldset`
  border: none;
  border-radius: var(--radius-sm);
  background-color: var(--color-surface-100);
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  margin: 0;

  body.dark & {
    background-color: var(--color-surfaceDark-800);
  }
`;

const StyledLegend = styled.legend`
  font-size: 0.8rem;
  font-weight: 600;
  color: var(--color-textSecondary-800);
  padding: 0 0.25rem;
`;

const StyledCheckboxField = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const StyledCheckbox = styled.input`
  width: 1.1rem;
  height: 1.1rem;
  accent-color: var(--color-primary-600);
  cursor: pointer;
`;

const StyledError = styled.p`
  color: var(--color-accent-600);
  font-size: 0.85rem;
  margin: 0;
`;

const StyledButtonRow = styled.div`
  display: flex;
  gap: 0.75rem;
  justify-content: flex-end;
  margin-top: 0.5rem;
`;

const StyledSubmitButton = styled.button`
  background-color: var(--color-primary-600);
  color: white;
  border: none;
  border-radius: var(--radius-full);
  padding: 0.6rem 1.25rem;
  font-size: 0.9rem;
  font-weight: 600;
  font-family: var(--font-body);
  cursor: pointer;

  &:hover {
    background-color: var(--color-primary-700);
  }
`;

const StyledCancelButton = styled.button`
  background-color: transparent;
  color: var(--color-text-700);
  border: 1px solid var(--color-surface-400);
  border-radius: var(--radius-full);
  padding: 0.6rem 1.25rem;
  font-size: 0.9rem;
  font-family: var(--font-body);
  cursor: pointer;

  &:hover {
    background-color: var(--color-surface-100);
  }
`;
