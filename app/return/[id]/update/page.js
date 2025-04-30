import ReturnForm from "@/components/ReturnForm";
import React from "react";
export const dynamic = "force-dynamic";

const UpdateReturn = async ({ params }) => {
  const { id } = await params;

  const data = await (
    await fetch(`${process.env.URL}/api/devices/${id}`)
  ).json();

  return (
    <div className="w-full flex flex-col items-center justify-center sm:w-full ">
      <p className="text-sm font-bold uppercase text-orange-400 md:text-3xl flex justify-center items-end">
        Update Form
      </p>
      <ReturnForm defaultItem={data} isUpdate={true} />
    </div>
  );
};

export default UpdateReturn;
