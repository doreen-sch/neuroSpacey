import dbConnect from "@/db/connect";
import Location from "@/db/models/Location";

export default async function handler(request, response) {
  await dbConnect();
  const { id } = request.query;

  try {
    if (request.method === "GET") {
      const location = await Location.findById(id);
      if (!location) {
        return response.status(404).json({ status: "Not found!" });
      }
      return response.status(200).json(location);
    }
    if (request.method === "PUT") {
      const updatedLocation = request.body;
      await Location.findByIdAndUpdate(id, updatedLocation);

      return response
        .status(200)
        .json({ status: "Successfully updated Location." });
    }

    if (request.method === "DELETE") {
      const deletedLocation = await Location.findByIdAndDelete(id);
      if (!deletedLocation) {
        return response.status(404).json({ status: "Location not found." });
      }
      return response
        .status(200)
        .json({ status: "Successfully deleted Location." });
    }
  } catch (error) {
    console.error(error);
    return response.status(500).json({ status: "Internal Server Error." });
  }
  return response.status(405).json({ status: "Method not allowed." });
}
