export default function LocationForm({ location, onAddLocation }) {
  return (
    <>
      <form aria-labelledby="form-title" onSubmit={onAddLocation}>
        <h2 id="form-title">Neuen Ort hinzufügen</h2>
        <div>
          <label>Name: </label>
          <input
            type="text"
            id="name"
            name="name"
            defaultValue={location?.name}
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
            defaultValue={location?.address?.street}
            required
            placeholder="Straße"
          />
          <label htmlFor="houseNumber">Hausnummer: </label>
          <input
            type="text"
            id="houseNumber"
            name="houseNumber"
            defaultValue={location?.address?.houseNumber}
            required
            placeholder="Hausnummer"
          />
          <label htmlFor="zipCode">Postleitzahl: </label>
          <input
            type="text"
            id="zipCode"
            name="zipCode"
            defaultValue={location?.address?.zipCode}
            required
            placeholder="Postleitzahl"
          />
          <label htmlFor="city">Stadt: </label>
          <input
            type="text"
            id="city"
            name="city"
            defaultValue={location?.address?.city}
            required
            placeholder="Stadt"
          />
        </fieldset>
        <div>
          <label>Kategorie: </label>
          <select id="category" name="category" required>
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
          <input type="checkbox" name="isQuietHour" />
          Stille Stunde
        </label>
        <div>
          <label>Beschreibung: </label>
          <textarea
            id="description"
            name="description"
            defaultValue={location?.description}
            required
            size={300}
            cols={45}
            rows={10}
          />
        </div>
        <button type="submit" aria-label="Eintrag hinzufügen">
          Eintrag hinzufügen
        </button>
        <button type="reset" aria-label="Felder leeren">
          Felder leeren
        </button>
      </form>
    </>
  );
}
