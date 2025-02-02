import axios from "axios";
import Rangs from "@/components/Rangs";

const Retail = async () => {
  const devices = (await axios.get(`${process.env.URL}/api/devices/rangs`))
    .data;

  // console.log(devices)

  // const [state, setState] = useState({
  //   datas: [],
  //   dataResults: "",
  //   searchItem: "",
  //   nextday: false,
  //   selectedDate: null,
  //   open: false,
  // });
  // useEffect(() => {
  //   getData();
  // }, []);

  // const getData = () => {
  //   axios.get("/api/devices").then((res) => {
  //     let data = res.data;
  //     console.log("tttt", data);
  //     let old = { ...state };
  //     old.datas = data;
  //     old.dataResults = data;
  //     setState(old);
  //   });
  // };

  // const currentDevice = state.datas.filter(
  //   (item) => item.send_to != "Rangs" && item.send_to != "Retail"
  // );

  // const totalDevice = state.datas.length;

  // const handleSearch = (e) => {
  //   const searchTxt = e.target.value.toLowerCase();
  //   setState((prev) => ({
  //     ...prev,
  //     searchItem: searchTxt,
  //     datas: searchTxt
  //       ? prev.dataResults.filter((x) =>
  //           Object.keys(x).some((key) =>
  //             x[key]?.toString().toLowerCase().includes(searchTxt)
  //           )
  //         )
  //       : [...prev.dataResults],
  //   }));
  // };

  return <Rangs devices={devices} />;
};

export default Retail;

{
  /* <div className="h-[10%] w-full bg-gray-800 flex items-center px-4">
<div className="w-[30%] flex gap-2"> {/* <ImportFile /> */
}

// {/* <div className="w-[40%] flex justify-center ">
//   {" "}
//   <p className="text-white uppercase lg:flex hidden">Total Stock</p>
// </div>
// <div className="w-[30%] flex justify-end gap-3">
//   <div className="bg-white px-2 rounded-md flex items-center">
//     Total Device :{" "}
//     <span className="text-xl font-bold text-orange-500 ml-1">
//       {currentDevice.length}
//     </span>
//   </div>
//   <input
//     type="search"
//     placeholder="Search..."
//     className="h-[40px] px-4 rounded-md flex items-center justify-center text-black "
//     value={state.searchItem}
//     onChange={handleSearch}
//   ></input>
// </div>
