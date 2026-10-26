// "use client";

// import Link from "next/link";
// import { FiEdit } from "react-icons/fi";

// const NotPaidTable = ({ item, assignDevice }) => {
//   const formate_sending_date = item?.sending_date
//     ? new Date(item.sending_date)
//         .toLocaleDateString("en-GB")
//         .replace(/\//g, "-")
//     : new Date().toLocaleDateString("en-GB").replace(/\//g, "-");

//   const ddd = { ...assignDevice };
//   console.log("ddd", ddd);
//   return (
//     <div className="grid grid-cols-[repeat(5,1fr)] p-2 items-center">
//       <p>{item?.device_id}</p>
//       <p>{item?.issue_by}</p>
//       <p>{item?.district}</p>
//       <p>{formate_sending_date}</p>
//       <p className="flex float-right mt-[-150px] relative top-0">
//         {item?._id && (
//           <Link href={`/retail/${item._id}/update`}>
//             <FiEdit className="text-black" />
//           </Link>
//         )}
//       </p>

//       {/*
//       <CustomerFormGenerator
//         deviceId={item.device_id}
//         issueBy={item.issue_by}
//         district={item.district}
//         installDate={item.install_date}
//       /> */}
//     </div>
//   );
// };

// export default NotPaidTable;

"use client";

import React from "react";
import Link from "next/link";
import { FiEdit } from "react-icons/fi";

// Fixed time zone so server and browser always print the same date
// (a different zone on each side causes hydration errors).
const dateFormatter = new Intl.DateTimeFormat("en-GB", {
  timeZone: "Asia/Dhaka",
  day: "2-digit",
  month: "2-digit",
  year: "numeric",
});

const formatDate = (value) => {
  if (!value) return "-";
  const d = new Date(value);
  return isNaN(d) ? "-" : dateFormatter.format(d).replace(/\//g, "-");
};

const NotPaidTable = ({ item }) => {
  return (
    <div className="grid grid-cols-[repeat(5,1fr)] p-2 items-center">
      <p>{item?.device_id}</p>
      <p>{item?.issue_by}</p>
      <p>{item?.district}</p>
      <p>{formatDate(item?.sending_date)}</p>
      <p className="flex float-right mt-[-150px] relative top-0">
        {item?._id && (
          <Link href={`/retail/${item._id}/update`}>
            <FiEdit className="text-black" />
          </Link>
        )}
      </p>
    </div>
  );
};

export default React.memo(NotPaidTable);
