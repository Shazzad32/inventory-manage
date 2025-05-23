import { FiEdit } from "react-icons/fi";
import Link from "next/link";
import { RiArrowGoBackFill } from "react-icons/ri";

const RetailTable = ({ item }) => {
  const formattedDate = item?.sending_date
    ? new Date(item.sending_date)
        .toLocaleDateString("en-GB")
        .replace(/\//g, "-")
    : new Date().toLocaleDateString("en-GB").replace(/\//g, "-");

  const formatteInsertdDate = item?.insert_date
    ? new Date(item.insert_date).toLocaleDateString("en-GB").replace(/\//g, "-")
    : new Date().toLocaleDateString("en-GB").replace(/\//g, "-");

  return (
    <div className="h-auto w-full lg:w-[100%] flex lg:flex-row lg:h-12 items-center">
      {/* <div className="hidden flex-[9] lg:flex p-2"> */}
      <div className="w-[90%] grid grid-cols-[repeat(8,1fr)] p-2">
        <p className=" overflow-hidden text-ellipsis whitespace-nowrap">
          {item?.device_id}
        </p>
        <p className=" overflow-hidden text-ellipsis whitespace-nowrap">
          {item?.device_model}
        </p>
        <p className=" overflow-hidden text-ellipsis whitespace-nowrap">
          {item?.from}
        </p>
        <p className=" overflow-hidden text-ellipsis whitespace-nowrap">
          {item?.device_type}
        </p>
        <p className=" overflow-hidden text-ellipsis whitespace-nowrap">
          {item?.issue_by}
        </p>
        <p className=" overflow-hidden text-ellipsis whitespace-nowrap">
          {item?.district}
        </p>
        <p className=" overflow-hidden text-ellipsis whitespace-nowrap">
          {formatteInsertdDate}
        </p>
        <p className=" overflow-hidden text-ellipsis whitespace-nowrap">
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
          <strong>Device Model :</strong> {item?.device_model}
        </p>
        <p>
          <strong>Device Type :</strong> {item?.device_type}
        </p>
        <p>
          <strong>Issue To :</strong> {item?.issue_by}
        </p>
        <p>
          <strong>District :</strong> {item?.district}
        </p>
        <p>
          <strong>Insert Date:</strong> {formatteInsertdDate}
        </p>
        <p>
          <strong>Sending Date:</strong> {formattedDate}
        </p>
        <p className="flex float-right mt-[-150px] relative top-0">
          {item?._id && (
            <Link href={`/retail/${item._id}/update`}>
              <FiEdit className="text-black" />
            </Link>
          )}
        </p>
      </div>

      <div className="w-[10%] h-full flex justify-center items-center gap-8">
        {item?._id && (
          <Link href={`/retail/${item._id}/retun-update`}>
            <RiArrowGoBackFill className="text-black" />
          </Link>
        )}
        {item?._id && (
          <Link href={`/retail/${item._id}/update`}>
            <FiEdit className="text-black" />
          </Link>
        )}
      </div>
    </div>
  );
};

export default RetailTable;
