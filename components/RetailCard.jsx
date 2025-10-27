"use client";
import { calculateAmount } from "@/utils/utils";
import Link from "next/link";
import { React, useState } from "react";
import RetailMobile from "./mobile_device/RetailMobile";
import { PiArrowFatLineRightFill } from "react-icons/pi";
import { PiArrowFatLineLeftFill } from "react-icons/pi";

const RetailCard = ({ totalInRetail, commonDevice }) => {
  const [selectedDate, setSelectedDate] = useState("");
  const [currentMonth, setCurrentMonth] = useState(new Date());

  const changeMonth = (num) => {
    const newDate = new Date(currentMonth);
    newDate.setMonth(newDate.getMonth() + num);
    setCurrentMonth(newDate);
  };

  const month = currentMonth.getMonth() + 1;
  const year = currentMonth.getFullYear();

  const monthlySales = totalInRetail.filter((item) => {
    if (item.is_complete && item.install_date) {
      const installDate = new Date(item.install_date);
      return (
        installDate.getMonth() + 1 === month &&
        installDate.getFullYear() === year
      );
    }
    return false;
  });

  const monthlyAmount = monthlySales.reduce(
    (total, item) => total + Number(item.device_price || 0),
    0
  );

  const facebookSellMonthly = monthlySales.filter(
    (x) => x.install_purpose === "Facebook"
  ).length;

  const referenceSellMonthly = monthlySales.filter(
    (x) => x.install_purpose === "Reference"
  ).length;

  const replaceSellMonthly = monthlySales.filter(
    (x) => x.install_purpose === "Replace"
  ).length;

  const filteredSales = Array.isArray(totalInRetail)
    ? totalInRetail.filter((item) => {
        if (item.install_date) {
          const itemDate = new Date(item.install_date).toLocaleDateString(
            "en-CA",
            {
              timeZone: "Asia/Dhaka",
              year: "numeric",
              month: "2-digit",
              day: "2-digit",
            }
          );
          return itemDate === selectedDate && item.is_complete === true;
        }
        return false;
      })
    : [];

  const unSoldDevice = totalInRetail.filter((x) => x.is_complete === false);
  const totalSoldDevices = totalInRetail.filter((x) => x.is_complete);

  const nonVocieInRetail = totalInRetail.filter(
    (x) => x.is_complete === false && x.device_type === "Non_Voice"
  );
  const voiceDeviceInRetail = totalInRetail.filter(
    (x) => x.is_complete === false && x.device_type === "Voice"
  );

  const inHand = unSoldDevice.length - commonDevice.length;

  const handleDateChange = (e) => {
    setSelectedDate(e.target.value);
  };

  return (
    <div className="h-[85%] lg:h-[95%] w-full flex flex-col gap-4 items-center justify-center ">
      <Link
        href={"/retail"}
        className="w-[95%] h-[70%] bg-gray-500 rounded-md lg:flex flex-col hidden justify-center items-center text-left gap-2 p-4 "
      >
        <div className="h-[40%] text-white w-full flex flex-col justify-center items-center rounded-md">
          <p>
            un-sold
            <strong className="text-white text-6xl ml-2">
              {unSoldDevice.length}
            </strong>
          </p>
        </div>
        <div className="flex text-white gap-2 h-[20%] border-white justify-center items-center w-full">
          <div className="">
            Voice
            <span className="text-6xl font-bold ml-1">
              {voiceDeviceInRetail.length}
            </span>
          </div>
          <div className="">
            Non Voice
            <span className="text-6xl font-bold ml-1">
              {nonVocieInRetail.length}
            </span>
          </div>
        </div>
        <div className="h-[40%] w-full  rounded-md text-white flex gap-4 justify-center items-center">
          <p>
            In Hand <strong className="text-white text-6xl">{inHand}</strong>
          </p>
          <p>
            Due{" "}
            <strong className="text-white text-6xl">
              {commonDevice.length}
            </strong>
          </p>
        </div>
      </Link>

      <div className="w-[95%] h-[33%] bg-gray-500 rounded-md hidden flex-col lg:flex items-center justify-center gap-1">
        <div className="p-1 text-white rounded-md flex items-center h-[20%] w-[95%] justify-around">
          <p>
            Sold Device
            <span className="text-[18px] font-bold ml-1">
              {totalSoldDevices.length}
            </span>
          </p>
          <p>
            Amount
            <span className="text-[16px] font-bold ml-1">
              {calculateAmount(totalInRetail.filter((x) => x.is_complete))}
            </span>
          </p>
        </div>
        <div className="h-[70%] text-white  w-[95%] rounded-md flex text-[12px] justify-center gap-2 p-1 items-center flex-col">
          <div className="flex items-center justify-between w-[90%] px-2">
            <button
              onClick={() => changeMonth(-1)}
              className="text-lg font-extrabold "
            >
              <PiArrowFatLineLeftFill />
            </button>
            <p className=" font-extrabold">
              {currentMonth.toLocaleString("default", {
                month: "long",
                year: "numeric",
              })}
            </p>
            <button
              onClick={() => changeMonth(1)}
              className="text-lg font-extrabold "
            >
              <PiArrowFatLineRightFill />
            </button>
          </div>
          <div className="flex w-full text-left justify-center gap-4">
            <p>
              Total Sell :
              <span className=" text-[16px] ml-1">{monthlySales.length}</span>
            </p>
            <p>
              Amount :<span className=" text-[16px] ml-1">{monthlyAmount}</span>
            </p>
          </div>
          <div className="flex w-full justify-center items-center gap-6">
            <p>
              Facebook :
              <span className=" text-[16px] ml-1">{facebookSellMonthly}</span>
            </p>
            <p>
              Reference :
              <span className=" text-[16px] ml-1">{referenceSellMonthly}</span>
            </p>
            <p>
              Replace :
              <span className=" text-[16px] ml-1">{replaceSellMonthly}</span>
            </p>
          </div>
        </div>
      </div>

      {/* <div className="w-[95%] h-[33%] bg-gray-500 rounded-md hidden lg:flex flex-col text-left p-4">
        <div className="flex justify-between">
          <p className="text-left text-white">Daily Report</p>
          <input
            type="date"
            name="selectedDate"
            value={selectedDate}
            onChange={handleDateChange}
            className="bg-white p-1 rounded-md"
          />
        </div>
        <div className="flex gap-4">
          <p className="text-sm bg-white w-[50%] px-2 py-2 mt-2 rounded-md">
            Today Sell:
            <span className="text-red-700 ml-2">{totalCompleteDevices}</span>
          </p>
          <p className="text-sm bg-white w-[50%] px-2 py-2 mt-2 rounded-md">
            Amount:
            <span className="text-red-600 ml-2">{totalDevicePrice}</span>
          </p>
        </div>
      </div> */}

      <RetailMobile
        unSoldDevice={unSoldDevice}
        nonVocieInRetail={nonVocieInRetail}
        voiceDeviceInRetail={voiceDeviceInRetail}
        totalSoldDevices={totalSoldDevices}
      />
    </div>
  );
};

export default RetailCard;
