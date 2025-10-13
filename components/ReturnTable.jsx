import Link from "next/link";
import { RiArrowGoBackFill } from "react-icons/ri";

const ReturnTable = ({ item }) => {
  return (
    <div className="h-auto w-full lg:w-[100%] flex lg:flex-row lg:h-12 items-center">
      <div className="w-[90%] grid grid-cols-[repeat(5,1fr)] p-2">
        <p className=" overflow-hidden text-ellipsis whitespace-nowrap">
          {item?.device_id}
        </p>
        <p className=" overflow-hidden text-ellipsis whitespace-nowrap">
          {item?.device_model}
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
      </div>

      <div className="w-[10%] h-full flex justify-center items-center gap-8">
        {item?._id && (
          <Link href={`/return/${item._id}/update`}>
            <RiArrowGoBackFill className="text-black" />
          </Link>
        )}
      </div>
    </div>
  );
};

export default ReturnTable;
