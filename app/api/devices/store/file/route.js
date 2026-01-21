import { connectToDb } from "../../../../../utils/database";
import DeviceModel from "../../../../../models/devices";
import { NextResponse } from "next/server";

export const POST = async (req) => {
  try {
    await connectToDb();

    const devicesFromExcel = await req.json();

    if (!Array.isArray(devicesFromExcel)) {
      return NextResponse.json(
        { message: "Invalid data format" },
        { status: 400 }
      );
    }

    const ids = devicesFromExcel.map((x) => x.device_id).filter(Boolean);

    const existingDevices = await DeviceModel.find({
      device_id: { $in: ids },
    });

    if (existingDevices.length > 0) {
      return NextResponse.json(
        {
          message: "These Devices Already inserted",
          data: existingDevices.map((x) => x.device_id),
        },
        { status: 200 }
      );
    }

    const createdDevices = await DeviceModel.create(devicesFromExcel);

    return NextResponse.json(
      { message: "Devices added successfully", data: createdDevices },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error adding device:", error);
    return NextResponse.json(
      { error: error.message || "Internal server error" },
      { status: 500 }
    );
  }
};
