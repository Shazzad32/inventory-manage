import React from "react";
import StoreForm from "@/components/StoreForm";
import { getSingleDevice, getTechnicians } from "@/utils/getDevices";

const UpdateStore = async ({ params }) => {
  const { id } = await params;

  const [data, technicians] = await Promise.all([
    getSingleDevice(id),
    getTechnicians(),
  ]);

  // console.log(id);
  // const response = await fetch(`${process.env.URL}/api/devices/${id}`);
  // const data = await response.json();

  // const techniciansRes = await fetch(
  //   "https://servicecheckapp.vercel.app/api/technician"
  // );

  // const technicians = await techniciansRes.json();

  // const [data, technicians] = await Promise.all([
  //   fetch(`${process.env.NEXT_PUBLIC_URL}/api/devices/${id}`).then((res) =>
  //     res.json()
  //   ),
  //   fetch(`${process.env.NEXT_PUBLIC_URL}/api/technician`).then((res) =>
  //     res.json()
  //   ),
  // ]);

  return (
    <div className="w-full flex flex-col items-center justify-center sm:w-full ">
      <p className="text-sm font-bold uppercase text-orange-400 md:text-3xl flex justify-center items-end">
        Update Form
      </p>
      <StoreForm defaultItem={data} isUpdate={true} technicians={technicians} />
    </div>
  );
};

export default UpdateStore;
