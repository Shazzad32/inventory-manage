import React from "react";
import DeviceRetailForm from "@/components/RetailForm";
export const dynamic = "force-dynamic";

const UpdateRetail = async ({ params }) => {
  const { id } = await params;

  const data = await (
    await fetch(`${process.env.URL}/api/devices/${id}`)
  ).json();

  return (
    <div className="w-full flex flex-col items-center justify-center sm:w-full ">
      <p className="text-sm font-bold uppercase text-orange-400 md:text-3xl flex justify-center items-end">
        Update Form
      </p>
      <DeviceRetailForm defaultItem={data} isUpdate={true} />
    </div>
  );
};

export default UpdateRetail;
