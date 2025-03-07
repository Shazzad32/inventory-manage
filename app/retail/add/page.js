import React from "react";
import RetailForm from "@/components/RetailForm";
export const dynamic = "force-dynamic";

const defaultItem = {
  device_id: "",
  send_to: "Retail",
  district: "",
  where: "Office",
  issue_by: "",
  sending_date: "",
  install_date: "",
  device_type: "",
  device_model: "",
  device_price: "0",
  install_purpose: "",
};

const AddService = async () => {
  const techniciansRes = await fetch(`${process.env.URL}/api/technician`);
  const technicians = await techniciansRes.json();
  return (
    <div className="w-full h-full flex flex-col justify-center items-center gap-6 sm:gap-4">
      <div className="h-[90%] lg:h-[85%] lg:w-[80%] w-[100%] flex flex-col items-center justify-center bg-white ">
        <p className="text-orange-500 uppercase text-3xl">Add New Device</p>
        <RetailForm
          defaultItem={defaultItem}
          isUpdate={false}
          technicians={technicians}
        />
      </div>
    </div>
  );
};

export default AddService;
