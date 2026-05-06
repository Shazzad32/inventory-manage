"use client";
const NotPaidTable = ({ item, assignDevice }) => {
  const formate_sending_date = item?.sending_date
    ? new Date(item.sending_date)
        .toLocaleDateString("en-GB")
        .replace(/\//g, "-")
    : new Date().toLocaleDateString("en-GB").replace(/\//g, "-");

  const ddd = { ...assignDevice };
  console.log("ddd", ddd);
  return (
    <div className="grid grid-cols-[repeat(5,1fr)] p-2 items-center">
      <p>{item?.device_id}</p>
      <p>{item?.issue_by}</p>
      <p>{item?.district}</p>
      <p>{formate_sending_date}</p>
      {/* <p className="flex float-right mt-[-150px] relative top-0">
        {item?._id && (
          <Link href={`/retail/${item._id}/update`}>
            <FiEdit className="text-black" />
          </Link>
        )}
      </p> */}
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
