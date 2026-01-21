import React from "react";
import CustomerFormGenerator from "./CustomerFormGenerator";

const NotPaidTable = ({ item, assignDevice }) => {
  const ddd = { ...assignDevice };
  console.log("ddd", ddd);
  return (
    <div className="grid grid-cols-[repeat(4,1fr)] p-2 items-center">
      <p>{item?.device_id}</p>
      <p>{item?.issue_by}</p>
      <p>{item?.district}</p>

      <CustomerFormGenerator
        deviceId={item.device_id}
        issueBy={item.issue_by}
        district={item.district}
        installDate={item.install_date}
      />
    </div>
  );
};

export default NotPaidTable;
