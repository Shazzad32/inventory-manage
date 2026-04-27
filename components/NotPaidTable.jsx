import React from "react";

const NotPaidTable = ({ item, assignDevice }) => {
  const formate_sending_date = item?.sending_date
    ? new Date(item.sending_date)
        .toLocaleDateString("en-GB")
        .replace(/\//g, "-")
    : new Date().toLocaleDateString("en-GB").replace(/\//g, "-");

  const ddd = { ...assignDevice };
  console.log("ddd", ddd);
  return (
    <div className="grid grid-cols-[repeat(4,1fr)] p-2 items-center">
      <p>{item?.device_id}</p>
      <p>{item?.issue_by}</p>
      <p>{item?.district}</p>
      <p>{formate_sending_date}</p>
      {/* 
      <CustomerFormGenerator
        deviceId={item.device_id}
        issueBy={item.issue_by}
        district={item.district}
        installDate={item.install_date}
      /> */}
    </div>
  );
};

export default NotPaidTable;
