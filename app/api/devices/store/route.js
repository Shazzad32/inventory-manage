// import { connectToDb } from "@/utils/database";
// import Devices from "@/models/devices";
import { connectToDb } from "../../../../utils/database";
import Devices from "../../../../utils/database";

export const GET = async () => {
  try {
    await connectToDb();

    const data = await Devices.find({ send_to: "Store" });
    return new Response(JSON.stringify(data), { status: 200 });
  } catch (error) {
    return new Response(error.message, { status: 500 });
  }
};
