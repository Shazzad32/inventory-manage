"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import axios from "axios";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";

const headers = ["Tech Name", "District", "Completed Works", "In Hand"];

const TechInfo = () => {
  const [data, setData] = useState({
    devices: [],
    technicians: [],
  });

  const [loading, setLoading] = useState(true);
  const [sortOrder, setSortOrder] = useState("desc");
  const [selectedTech, setSelectedTech] = useState("all");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [devicesRes, techniciansRes] = await Promise.all([
          axios.get("/api/devices"),
          axios.get("/api/technician"),
        ]);

        setData({
          devices: devicesRes.data,
          technicians: techniciansRes.data,
        });

        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  const technicianWorkSummary = data.technicians.map((tech) => {
    const completedWorks = data.devices.filter(
      (device) =>
        device.issue_by === tech.tech_name &&
        device.send_to === "Retail" &&
        device.is_complete
    ).length;

    const notCompletedWorks = data.devices.filter(
      (device) =>
        device.issue_by === tech.tech_name &&
        !device.is_complete &&
        device.send_to === "Retail"
    ).length;

    return {
      ...tech,
      completedWorks,
      notCompletedWorks,
    };
  });

  const doneWork = data.devices.filter(
    (item) => item.send_to === "Retail" && item.is_complete
  );

  const inHandDevice = data.devices.filter(
    (item) => item.send_to === "Retail" && !item.is_complete
  );

  const filteredTechnicians =
    selectedTech === "all"
      ? technicianWorkSummary
      : technicianWorkSummary.filter((tech) => tech.tech_name === selectedTech);

  const sortedTechnicians = [...filteredTechnicians].sort((a, b) => {
    return sortOrder === "asc"
      ? a.completedWorks - b.completedWorks
      : b.completedWorks - a.completedWorks;
  });

  return (
    <div className="h-full w-full bg-orange-500 flex flex-col">
      <div className="h-[10%] bg-black flex items-center px-4 justify-between">
        <div className="flex gap-4 lg:text-lg uppercase text-red-400">
          Technician Report
          <span className="info-box text-white">
            Done:{" "}
            <strong className="text-orange-300 ml-2">{doneWork.length}</strong>
          </span>
          <span className="info-box text-white">
            In Hand:{" "}
            <strong className="text-orange-300 ml-2">
              {inHandDevice.length}
            </strong>
          </span>
          <Link href="/retail" className="info-box text-white">
            Back
          </Link>
        </div>
        <Select onValueChange={(value) => setSelectedTech(value)}>
          <SelectTrigger className="w-[200px] bg-white">
            <SelectValue placeholder="Select Technician" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All</SelectItem>
            {data.technicians.map((tech, i) => (
              <SelectItem key={i} value={tech.tech_name}>
                {tech.tech_name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <button
          onClick={() => setSortOrder(sortOrder === "asc" ? "desc" : "asc")}
          className="bg-white text-black px-4 py-2 rounded-md"
        >
          {sortOrder === "asc" ? "Ascending" : "Descending"}
        </button>
      </div>
      <div className="h-[90%] bg-white flex items-center justify-center p-1">
        <div className="h-[100%] w-full bg-slate-300 flex flex-col">
          <div className="h-[8%] w-[99%] grid grid-cols-[repeat(4,1fr)] uppercase font-bold border-b-2 px-1">
            {headers.map((header, i) => (
              <p key={i} className="flex items-center">
                {header}
              </p>
            ))}
          </div>
          <div className="h-[92%] w-full bg-white overflow-auto">
            {sortedTechnicians.map((tech, i) => (
              <div
                key={i}
                className={`w-full grid grid-cols-[repeat(4,1fr)] py-2 px-1 ${
                  i % 2 === 0 ? "bg-slate-200" : "bg-slate-300"
                }`}
              >
                <p>{tech.tech_name}</p>
                <p>{tech.district}</p>
                <p>{tech.completedWorks}</p>
                <p>{tech.notCompletedWorks}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechInfo;
