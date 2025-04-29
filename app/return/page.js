import axios from "axios";
import React from "react";

const ReturnHome = async () => {
  const returnRes = (await axios.get(`${process.env.URL}/api/devices/retail`))
    .data;

  return <div>This is return page</div>;
};

export default ReturnHome;
