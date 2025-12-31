import { connectToDb } from "../../../../utils/database";
// import { connectToDb } from "/utils/database";
// import Devices from "/models/devices";
import Devices from "../../../../models/devices";
import axios from "axios";

export const GET = async (req, { params }) => {
  const { id } = await params;

  if (!id) {
    return new Response("ID is required", { status: 400 });
  }

  try {
    await connectToDb();
    const device = await Devices.findOne({ _id: id });

    if (!device) {
      return new Response("Device not found", { status: 404 });
    }

    return new Response(JSON.stringify(device), { status: 200 });
  } catch (error) {
    return new Response(error.message, { status: 500 });
  }
};

export const PUT = async (req, { params }) => {
  const { id } = await params;

  if (!id) {
    return new Response("ID is required", { status: 400 });
  }

  try {
    const {
      device_id,
      send_to,
      from,
      district,
      device_type,
      technican_charge,
      device_model,
      issue_by,
      sending_date,
      install_date,
      device_price,
      is_complete,
      insert_date,
      workshop,
      install_purpose,
    } = await req.json();

    await connectToDb();
    const device = await Devices.findOne({ _id: id });

    if (!device) {
      return new Response("Device not found", { status: 404 });
    }

    device.device_id = device_id;
    device.send_to = send_to;
    device.from = from;
    device.district = district;
    device.device_type = device_type;
    device.device_model = device_model;
    device.issue_by = issue_by;
    device.sending_date = sending_date;
    device.install_date = install_date;
    device.device_price = device_price;
    device.technican_charge = technican_charge;
    device.is_complete = is_complete;
    device.insert_date = insert_date;
    device.workshop = workshop;
    device.install_purpose = install_purpose;

    await device.save();

    if (is_complete) {
      const transac = {
        project: process.env.PROJECT_ID,
        from: process.env.RETAIL_DEVICES_SALES_ID,
        to: process.env.DEVICE_SALE_DEPOSIT_ID,
        date: new Date(),
        invoice_no: "Retail Device Sale",
        purpose: device_id,
        amount: device_price,
      };

      const response = await axios.post(process.env.TRANSACTION_URL, transac);

      if (response.status === 201) {
        return new Response("Device updated successfully with Transaction", {
          status: 200,
        });
      } else {
        return new Response("Transaction not create in Account Manager", {
          status: 500,
        });
      }
    }

    return new Response("Device updated successfully", { status: 200 });
  } catch (error) {
    console.error("Error updating device:", error);
    return new Response(error.message, { status: 500 });
  }
};

export const DELETE = async (req, { params }) => {
  const { id } = params;

  if (!id) {
    return new Response("ID is required", { status: 400 });
  }

  try {
    await connectToDb();
    const deletedDevice = await Devices.findByIdAndDelete(id);

    if (!deletedDevice) {
      return new Response("Device not found", { status: 404 });
    }

    return new Response("Device deleted successfully", { status: 200 });
  } catch (error) {
    console.error("Error deleting device:", error);
    return new Response(error.message, { status: 500 });
  }
};
