import Image from "next/image";

export default function LocationDetails({ location }) {
  const { name, address, description, category, image } = location;

  return (
    <>
      <div>
        <p>Ort: {name}</p>
        <p>
          Adresse: {address.street} {address.houseNumber}, {address.zipCode}{" "}
          {address.city}
        </p>
        <p>Beschreibung: {description}</p>
        <p>Kategorie: {category}</p>
      </div>
      <div>
        {image?.url && (
          <Image src={image.url} alt={`Image of ${location.name}`} fill />
        )}
      </div>
    </>
  );
}
