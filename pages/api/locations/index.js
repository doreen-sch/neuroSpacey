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
      locationData.isApproved = true;
      await Location.create(locationData);
      return response.status(201).json({ status: "Location created." });
    }
  } catch (error) {
    console.error(error);
    return response.status(500).json({ status: "Internal Server Error." });
  }
  return response.status(405).json({ status: "Method not allowed." });
}
