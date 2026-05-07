import React from "react";
import ReturnForm from "@/components/ReturnForm";
export const dynamic = "force-dynamic";
import { getSingleDevice } from "@/utils/getDevices";

const ReturnUpdate = async ({ params }) => {
  const { id } = await params;

  const data = await getSingleDevice(id);

  // const data = await (
  //   await fetch(`${process.env.URL}/api/devices/${id}`)
  // ).json();
  return (
    <div className="w-full flex flex-col items-center justify-center sm:w-full ">
      <p className="text-sm font-bold uppercase text-orange-400 md:text-3xl flex justify-center items-end">
        Update Form
      </p>
      <ReturnForm defaultItem={data} isUpdate={true} />
    </div>
  );
};

export default ReturnUpdate;
