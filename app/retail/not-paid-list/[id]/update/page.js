import React from "react";
import RetailForm from "@/components/RetailForm";

import { getSingleDevice } from "@/utils/getDevices";

const UpdateNotPaid = async ({ params }) => {
  const { id } = await params;

  const data = await getSingleDevice(id);

  return (
    <div className="w-full flex flex-col items-center justify-center">
      <p className="text-sm font-bold uppercase text-orange-400 md:text-3xl flex justify-center items-end">
        Not Paid Update Form
      </p>

      <RetailForm defaultItem={data} isUpdate={true} />
    </div>
  );
};

export default UpdateNotPaid;
