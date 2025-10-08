// import { PaidPage } from "./PaidPage";

// const SoldTable = ({ item }) => {
//   const formattedDate = item?.install_date
//     ? new Date(item.install_date)
//         .toLocaleDateString("en-GB")
//         .replace(/\//g, "-")
//     : new Date().toLocaleDateString("en-GB").replace(/\//g, "-");

//   return (
//     <div className="h-auto w-full lg:w-[100%] flex lg:flex-row lg:h-12 items-center">
//       <div className="hidden flex-[9] lg:flex p-2">
//         <p className="flex-[1.25] overflow-hidden text-ellipsis whitespace-nowrap">
//           {item?.device_id}
//         </p>
//         <p className="flex-[1.25] overflow-hidden text-ellipsis whitespace-nowrap">
//           {item?.device_model}
//         </p>
//         <p className="flex-[1.25] overflow-hidden text-ellipsis whitespace-nowrap">
//           {item?.device_type}
//         </p>
//         <p className="flex-[1.25] overflow-hidden text-ellipsis whitespace-nowrap">
//           {item?.issue_by}
//         </p>
//         <p className="flex-[1.25] overflow-hidden text-ellipsis whitespace-nowrap">
//           {item?.district}
//         </p>
//         <p className="flex-[1.25] overflow-hidden text-ellipsis whitespace-nowrap">
//           {item?.install_purpose}
//         </p>
//         <p className="flex-[1.30] overflow-hidden text-ellipsis whitespace-nowrap">
//           {item?.device_price}
//         </p>
//         <p className="flex-[1.14] overflow-hidden text-ellipsis whitespace-nowrap">
//           {formattedDate}
//         </p>
//       </div>
//       <div className="block lg:hidden w-full bg-white p-4 border-2 border-black">
//         <p>
//           <strong>
//             Device ID: <span className="text-red-700">{item?.device_id}</span>
//           </strong>
//         </p>
//         <p>
//           <strong>From :</strong> {item?.from}
//         </p>

//         <p>
//           <strong>Type :</strong> {item?.type}
//         </p>
//         <p>
//           <strong>Insert Date:</strong> {formattedDate}
//         </p>
//       </div>

//       <div className="flex flex-[1] items-center justify-center">
//         <PaidPage device_id={item?.device_id} />
//       </div>
//     </div>
//   );
// };

// export default SoldTable;
import { PaidPage } from "./PaidPage";

const SoldTable = ({ item }) => {
  const formattedDate = item?.install_date
    ? new Date(item.install_date)
        .toLocaleDateString("en-GB")
        .replace(/\//g, "-")
    : new Date().toLocaleDateString("en-GB").replace(/\//g, "-");

  return (
    <div className="h-auto w-full lg:w-[100%] flex lg:flex-row lg:h-12 items-center">
      <div className="hidden flex-[9] lg:flex p-2">
        <p className="flex-[1.25] overflow-hidden text-ellipsis whitespace-nowrap">
          {item?.device_id}
        </p>
        <p className="flex-[1.25] overflow-hidden text-ellipsis whitespace-nowrap">
          {item?.device_model}
        </p>
        <p className="flex-[1.25] overflow-hidden text-ellipsis whitespace-nowrap">
          {item?.device_type}
        </p>
        <p className="flex-[1.25] overflow-hidden text-ellipsis whitespace-nowrap">
          {item?.issue_by}
        </p>
        <p className="flex-[1.25] overflow-hidden text-ellipsis whitespace-nowrap">
          {item?.district}
        </p>
        <p className="flex-[1.25] overflow-hidden text-ellipsis whitespace-nowrap">
          {item?.install_purpose}
        </p>
        <p className="flex-[1.30] overflow-hidden text-ellipsis whitespace-nowrap">
          {item?.device_price}
        </p>
        <p className="flex-[1.14] overflow-hidden text-ellipsis whitespace-nowrap">
          {formattedDate}
        </p>
      </div>

      <div className="block lg:hidden w-full bg-white p-4 border-2 border-black">
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
      </div>

      <div className="flex flex-[1] items-center justify-center">
        <PaidPage device_id={item?.device_id} />
      </div>
    </div>
  );
};

export default SoldTable;
