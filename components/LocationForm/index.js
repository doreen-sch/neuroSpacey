import { useState } from "react";

export default function LocationForm({
  location,
  onAddLocation,
  onClose,
  formData,
  setFormData,
}) {
  const [error, setError] = useState(null);

  async function handleSubmit(event) {
    event.preventDefault();
    if (event.target.checkValidity()) {
      await onAddLocation(event);
      onClose();
    } else {
      setError("Bitte fülle alle Felder aus.");
    }
  }

  return (
    <>
      <form aria-labelledby="form-title" onSubmit={handleSubmit} noValidate>
        <h2 id="form-title">Neuen Ort hinzufügen</h2>
        <div>
          <label>Name: </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={(event) =>
              setFormData({ ...formData, name: event.target.value })
            }
            required
          />
        </div>
        <fieldset>
          <legend>Adresse</legend>
          <label htmlFor="street">Straße: </label>
          <input
            type="text"
            id="street"
            name="street"
            value={formData.street}
            onChange={(event) =>
              setFormData({ ...formData, street: event.target.value })
            }
            required
            placeholder="Straße"
          />
          <label htmlFor="houseNumber">Hausnummer: </label>
          <input
            type="text"
            id="houseNumber"
            name="houseNumber"
            value={formData.houseNumber}
            onChange={(event) =>
              setFormData({ ...formData, houseNumber: event.target.value })
            }
            required
            placeholder="Hausnummer"
          />
          <label htmlFor="zipCode">Postleitzahl: </label>
          <input
            type="text"
            id="zipCode"
            name="zipCode"
            value={formData.zipCode}
            onChange={(event) =>
              setFormData({ ...formData, zipCode: event.target.value })
            }
            required
            placeholder="Postleitzahl"
          />
          <label htmlFor="city">Stadt: </label>
          <input
            type="text"
            id="city"
            name="city"
            value={formData.city}
            onChange={(event) =>
              setFormData({ ...formData, city: event.target.value })
            }
            required
            placeholder="Stadt"
          />
        </fieldset>
        <div>
          <label>Kategorie: </label>
          <select
            id="category"
            name="category"
            onChange={(event) =>
              setFormData({ ...formData, category: event.target.value })
            }
            required
          >
            <option value="">Bitte wähle...</option>
            <option value="Einkaufen">Einkaufen</option>
            <option value="Dienstleistung">Dienstleistung</option>
            <option value="Natur">Natur</option>
            <option value="Café & Restaurant">Café & Restaurant</option>
            <option value="Kultur">Kultur</option>
            <option value="Veranstaltung">Veranstaltung</option>
          </select>
        </div>
        <label>
          <input
            type="checkbox"
            name="isQuietHour"
            onChange={(event) =>
              setFormData({ ...formData, isQuietHour: event.target.checked })
            }
          />
          Stille Stunde
        </label>
        <div>
          <label>Beschreibung: </label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={(event) =>
              setFormData({ ...formData, description: event.target.value })
            }
            required
            size={300}
            cols={45}
            rows={10}
          />
        </div>
        {error && <p style={{ color: "red" }}>{error}</p>}
        <button type="submit" aria-label="Eintrag hinzufügen">
          Eintrag hinzufügen
        </button>
        <button
          type="button"
          aria-label="Felder leeren"
          onClick={() =>
            setFormData({
              name: "",
              street: "",
              houseNumber: "",
              zipCode: "",
              city: "",
              category: "",
              isQuietHour: false,
              description: "",
            })
          }
        >
          Felder leeren
        </button>
      </form>
    </>
  );
}
