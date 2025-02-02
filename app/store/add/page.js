import React from "react";
import StoreForm from "@/components/StoreForm";

const defaultItem = {
  device_id: "",
  device_model: "",
  device_type: "",
  from: "",
  workshop: "",
  district: "",
  insert_date: "",
  issue_by: "",
};

const AddService = () => {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center gap-8 sm:gap-4">
      <div className="h-[60%] lg:h-[80%] lg:w-[80%] w-[100%]   flex flex-col items-center justify-center bg-white ">
        <p className="text-orange-500 uppercase text-3xl">Add New Device</p>{" "}
        <StoreForm defaultItem={defaultItem} isUpdate={false} />
      </div>
    </div>
  );
};

export default AddService;
