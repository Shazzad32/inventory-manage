import React from "react";
import { FiEdit } from "react-icons/fi";
import Link from "next/link";

const StoreTable = ({ item, i }) => {
  const formattedDate = item?.insert_date
    ? new Date(item.insert_date).toLocaleDateString("en-GB").replace(/\//g, "-")
    : new Date().toLocaleDateString("en-GB").replace(/\//g, "-");

  return (
    <div className="h-auto w-full lg:w-[100%] flex lg:flex-row lg:h-12 items-center">
      <div className="hidden flex-[9] lg:flex p-2">
        <p className="flex-[2] overflow-hidden text-ellipsis whitespace-nowrap">
          {item?.device_id}
        </p>
        <p className="flex-[2] overflow-hidden text-ellipsis whitespace-nowrap">
          {item?.device_model}
        </p>
        <p className="flex-[2] overflow-hidden text-ellipsis whitespace-nowrap">
          {item?.from}
        </p>
        <p className="flex-[2] overflow-hidden text-ellipsis whitespace-nowrap">
          {item?.device_type}
        </p>
        <p className="flex-[2] overflow-hidden text-ellipsis whitespace-nowrap">
          {formattedDate}
        </p>
      </div>
      <div className="block lg:hidden w-full bg-white border-2 border-blue-300 justify-center items-center p-2 shadow-md rounded-md ">
        <p>
          <strong>
            Device ID: <span className="text-red-700">{item?.device_id}</span>
          </strong>
        </p>
        <p>
          <strong>From :</strong> {item?.from}
        </p>
        <p>
          <strong>Type :</strong> {item?.type}
        </p>
        <p>
          <strong>Insert Date:</strong> {formattedDate}
        </p>
        <p className="flex float-right mt-[-150px] relative top-0">
          {item?._id && (
            <Link href={`/store/${item._id}/update`}>
              <FiEdit className="text-black" />
            </Link>
          )}
        </p>
      </div>
      <div className="hidden lg:flex justify-end p-2">
        {item?._id && (
          <Link href={`/store/${item._id}/update`}>
            <FiEdit className="text-black" />
          </Link>
        )}
      </div>
    </div>
  );
};

export default StoreTable;
