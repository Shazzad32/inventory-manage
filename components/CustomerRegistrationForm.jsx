"use client";
import React, { useState } from "react";

const CustomerRegistrationForm = () => {
  const [formData, setFormData] = useState({
    date: "",
    deviceId: "",
    package: "Basic",
    customerName: "",
    companyName: "",
    contactNo: "",
    altNo: "",
    address: "",
    email: "",
    nid: "",
    vehicleBrand: "",
    model: "",
    chassis: "",
    engine: "",
    registration: "",
    devicePhone: "",
    others: "",
    loginEmail: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Data:", formData);
    alert("Form submitted successfully!");
  };

  return (
    <div className="max-w-4xl mx-auto bg-white p-8 rounded-2xl shadow-lg mt-10 border border-gray-200">
      <h2 className="text-2xl font-bold text-orange-600 mb-2 text-center">
        Sultan Tracker
      </h2>
      <h3 className="text-lg font-semibold text-center mb-6 text-gray-700">
        Customer Registration Form
      </h3>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Virtual Control Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block font-medium">Date</label>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              className="input"
            />
          </div>
          <div>
            <label className="block font-medium">Device ID</label>
            <input
              type="text"
              name="deviceId"
              value={formData.deviceId}
              onChange={handleChange}
              className="input"
            />
          </div>
          <div>
            <label className="block font-medium">Package</label>
            <select
              name="package"
              value={formData.package}
              onChange={handleChange}
              className="input"
            >
              <option>Basic</option>
              <option>Standard</option>
              <option>Premium</option>
            </select>
          </div>
        </div>

        <section>
          <h4 className="text-orange-600 font-semibold border-b pb-1 mb-3">
            Customer Information
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              className="input"
              placeholder="Customer Name"
              name="customerName"
              value={formData.customerName}
              onChange={handleChange}
            />
            <input
              className="input"
              placeholder="Company Name"
              name="companyName"
              value={formData.companyName}
              onChange={handleChange}
            />
            <input
              className="input"
              placeholder="Contact No."
              name="contactNo"
              value={formData.contactNo}
              onChange={handleChange}
            />
            <input
              className="input"
              placeholder="Alternative No."
              name="altNo"
              value={formData.altNo}
              onChange={handleChange}
            />
            <input
              className="input md:col-span-2"
              placeholder="Customer Address"
              name="address"
              value={formData.address}
              onChange={handleChange}
            />
            <input
              className="input"
              placeholder="Email Address"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            <input
              className="input"
              placeholder="NID/Passport No."
              name="nid"
              value={formData.nid}
              onChange={handleChange}
            />
          </div>
        </section>

        {/* Vehicle Information */}
        <section>
          <h4 className="text-orange-600 font-semibold border-b pb-1 mb-3">
            Vehicle Information
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              className="input"
              placeholder="Vehicle Brand"
              name="vehicleBrand"
              value={formData.vehicleBrand}
              onChange={handleChange}
            />
            <input
              className="input"
              placeholder="Model"
              name="model"
              value={formData.model}
              onChange={handleChange}
            />
            <input
              className="input"
              placeholder="Chassis No."
              name="chassis"
              value={formData.chassis}
              onChange={handleChange}
            />
            <input
              className="input"
              placeholder="Engine No."
              name="engine"
              value={formData.engine}
              onChange={handleChange}
            />
            <input
              className="input"
              placeholder="Registration No."
              name="registration"
              value={formData.registration}
              onChange={handleChange}
            />
            <input
              className="input"
              placeholder="Device Phone No."
              name="devicePhone"
              value={formData.devicePhone}
              onChange={handleChange}
            />
            <input
              className="input md:col-span-2"
              placeholder="Others (If any)"
              name="others"
              value={formData.others}
              onChange={handleChange}
            />
          </div>
        </section>

        {/* App Information */}
        <section>
          <h4 className="text-orange-600 font-semibold border-b pb-1 mb-3">
            App Information
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              className="input"
              placeholder="Login Email"
              name="loginEmail"
              value={formData.loginEmail}
              onChange={handleChange}
            />
            <input
              className="input"
              placeholder="Password"
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
          </div>
        </section>

        <button
          type="submit"
          className="w-full bg-orange-600 text-white py-2 rounded-lg font-semibold hover:bg-orange-700 transition"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default CustomerRegistrationForm;
