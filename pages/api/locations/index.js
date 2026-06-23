import dbConnect from "@/db/connect";
import Location from "@/db/models/Location";

export default async function handler(request, response) {
  await dbConnect();
  try {
    if (request.method === "GET") {
      const locations = await Location.find({ isApproved: true }).sort({
        createdAt: -1,
      });
      return response.status(200).json(locations);
    }
    if (request.method === "POST") {
      const locationData = request.body;
      const { street, houseNumber, zipCode, city } = locationData.address;

      locationData.isApproved = false;

      const geoResponse = await fetch(
        `https://nominatim.openstreetmap.org/search?street=${houseNumber}+${street}&city=${city}&postalcode=${zipCode}&country=Germany&format=json`,
        {
          headers: {
            "User-Agent": "NeuroSpacey/1.0 (dev@neurospacey.de)",
          },
        }
      );

      const geoData = await geoResponse.json();
      if (geoData.length > 0) {
        locationData.coordinates = {
          lat: parseFloat(geoData[0].lat),
          lng: parseFloat(geoData[0].lon),
        };
      }
      await Location.create(locationData);
      return response.status(201).json({ status: "Location created." });
    }
  } catch (error) {
    console.error(error);
    return response.status(500).json({ status: "Internal Server Error." });
  }
  return response.status(405).json({ status: "Method not allowed." });
}
