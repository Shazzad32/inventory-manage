const RangsTable = ({ item }) => {
  const formattedInsertDate = item?.insert_date
    ? new Date(item.insert_date).toLocaleDateString("en-GB").replace(/\//g, "-")
    : new Date().toLocaleDateString("en-GB").replace(/\//g, "-");

  const formattedSendingDate = item?.sending_date
    ? new Date(item.sending_date)
        .toLocaleDateString("en-GB")
        .replace(/\//g, "-")
    : new Date().toLocaleDateString("en-GB").replace(/\//g, "-");

  return (
    <div className="h-auto w-[100%]  flex lg:flex-row lg:h-14 items-center justify-center">
      <div className="hidden lg:flex lg:w-[100%] p-2">
        <p className="flex-[1.5] overflow-hidden text-ellipsis whitespace-nowrap">
          {item?.device_id}
        </p>
        <p className="flex-[1.45] overflow-hidden text-ellipsis whitespace-nowrap">
          {item?.device_model}
        </p>
        <p className="flex-[1.45] overflow-hidden text-ellipsis whitespace-nowrap">
          {item?.device_type}
        </p>
        <p className="flex-[1.45] overflow-hidden text-ellipsis whitespace-nowrap">
          {item?.from}
        </p>
        <p className="flex-[1.50] overflow-hidden text-ellipsis whitespace-nowrap">
          {item?.workshop}
        </p>

        <p className="flex-[1.50] overflow-hidden text-ellipsis whitespace-nowrap">
          {formattedInsertDate}
        </p>
        <p className="flex-[1.35] overflow-hidden text-ellipsis whitespace-nowrap">
          {formattedSendingDate}
        </p>
      </div>
      <div className="block lg:hidden w-[100%] bg-white border-2 border-black justify-center items-center rounded-md p-4">
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
          <strong>Insert Date:</strong> {formattedInsertDate}
        </p>
        <p>
          <strong>Sending Date:</strong> {formattedSendingDate}
        </p>
      </div>
    </div>
  );
};

export default RangsTable;
