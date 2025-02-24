import { FiEdit } from "react-icons/fi";
import Link from "next/link";

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
      <div className="flex-[9] flex p-2">
        <p className="flex-[1.2] overflow-hidden text-ellipsis whitespace-nowrap">
          {item?.device_id}
        </p>
        <p className="flex-[1.2] overflow-hidden text-ellipsis whitespace-nowrap">
          {item?.device_model}
        </p>
        <p className="flex-[1.2] overflow-hidden text-ellipsis whitespace-nowrap">
          {item?.from}
        </p>
        <p className="flex-[1.2] overflow-hidden text-ellipsis whitespace-nowrap">
          {item?.device_type}
        </p>
        <p className="flex-[1.2] overflow-hidden text-ellipsis whitespace-nowrap">
          {item?.issue_by}
        </p>
        <p className="flex-[1.2] overflow-hidden text-ellipsis whitespace-nowrap">
          {item?.district}
        </p>
        <p className="flex-[1.2] overflow-hidden text-ellipsis whitespace-nowrap">
          {formatteInsertdDate}
        </p>
        <p className="flex-[1.2] overflow-hidden text-ellipsis whitespace-nowrap">
          {formattedDate}
        </p>
      </div>

      <div className="flex justify-end p-2">
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
