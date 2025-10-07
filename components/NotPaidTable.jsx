import React from "react";

const NotPaidTable = ({ item }) => {
  return (
    <div className="h-auto w-[100%]  flex lg:flex-row lg:h-14 items-center justify-center">
      <div className="hidden lg:flex lg:w-[100%] p-2">
        <p className="flex-[1.5] overflow-hidden text-ellipsis whitespace-nowrap">
          {item?.device_id}
        </p>
        <p className="flex-[1.45] overflow-hidden text-ellipsis whitespace-nowrap">
          {item?.issue_by}
        </p>
        <p className="flex-[1.45] overflow-hidden text-ellipsis whitespace-nowrap">
          {item?.district}
        </p>
      </div>
      <div className="block lg:hidden w-[100%] bg-white border-2 border-black justify-center items-center rounded-md p-4">
        <p>
          <strong>
            Device ID: <span className="text-red-700">{item?.device_id}</span>
          </strong>
        </p>
        <p>
          <strong>From :</strong> {item?.issue_by}
        </p>
        <p>
          <strong>Type :</strong> {item?.district}
        </p>
      </div>
    </div>
  );
};

export default NotPaidTable;
