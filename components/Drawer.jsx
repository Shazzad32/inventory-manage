"use client";

import React, { useState } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import MenuIcon from "@mui/icons-material/Menu";
import Link from "next/link";
import { motion } from "framer-motion";
import LogoutButton from "./LogoutButton";

const navItems = [
  { name: "Home", href: "/" },
  { name: "Store", href: "/store" },
  { name: "Rangs", href: "/rangs" },
  { name: "Retail", href: "/retail" },
  { name: "Return", href: "/return" },
];

export default function TemporaryDrawer() {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <Button onClick={() => setOpen(true)}>
        <MenuIcon className="text-white" />
      </Button>

      <Drawer anchor="left" open={open} onClose={() => setOpen(false)}>
        <Box
          sx={{ width: 250, height: "100%" }}
          className="flex flex-col justify-between py-5"
        >
          {/* Top Section */}
          <div>
            {/* Heading */}
            <h1 className="text-center text-2xl font-bold uppercase border-b pb-4 mb-6">
              Dashboard
            </h1>

            {/* Navigation */}
            <div className="flex flex-col items-center gap-4 font-bold uppercase">
              {navItems.map((item) => (
                <motion.div
                  key={item.href}
                  whileHover={{
                    scale: 1.05,
                    backgroundColor: "#87CEEB",
                  }}
                  transition={{ duration: 0.2 }}
                  className="rounded-md bg-gray-200 px-16 py-2"
                >
                  <Link
                    href={item.href}
                    prefetch
                    onClick={() => setOpen(false)}
                    className="block w-full h-full"
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Bottom Section */}
          <div
            className="flex justify-center pb-4"
            onClick={() => setOpen(false)}
          >
            <LogoutButton />
          </div>
        </Box>
      </Drawer>
    </div>
  );
}

// "use client";
// import * as React from "react";
// import Box from "@mui/material/Box";
// import Drawer from "@mui/material/Drawer";
// import Button from "@mui/material/Button";
// import MenuIcon from "@mui/icons-material/Menu";
// import Link from "next/link";
// import { motion } from "framer-motion";
// import LogoutButton from "./LogoutButton";

// export default function TemporaryDrawer() {
//   const [open, setOpen] = React.useState(false);

//   const toggleDrawer = (newOpen) => () => {
//     setOpen(newOpen);
//   };

//   const DrawerList = (
//     <Box
//       sx={{ width: 250 }}
//       role="presentation"
//       onClick={toggleDrawer(false)}
//       className="flex justify-center gap-4 flex-col items-center py-5 font-bold uppercase"
//     >
//       <motion.p
//         className="bg-gray-200 rounded-md px-16 py-2"
//         whileHover={{ background: "skyblue", scaleX: 1.1 }}
//       >
//         <Link href={"/"}>Home</Link>
//       </motion.p>
//       <motion.p
//         className="bg-gray-200 rounded-md px-16 py-2"
//         whileHover={{ background: "skyblue", scaleX: 1.1 }}
//       >
//         <Link href={"/store"}>store</Link>
//       </motion.p>
//       <motion.p
//         className="bg-gray-200 rounded-md px-16 py-2"
//         whileHover={{ background: "skyblue", scaleX: 1.1 }}
//       >
//         <Link href={"/rangs"}>rangs</Link>
//       </motion.p>
//       <motion.p
//         className="bg-gray-200 rounded-md px-16 py-2"
//         whileHover={{ background: "skyblue", scaleX: 1.1 }}
//       >
//         <Link href={"/retail"}>retail</Link>
//       </motion.p>
//       <motion.p
//         className="bg-gray-200 rounded-md px-16 py-2"
//         whileHover={{ background: "skyblue", scaleX: 1.1 }}
//       >
//         <Link href={"/return"}>return</Link>
//       </motion.p>
//       <LogoutButton />
//     </Box>
//   );

//   return (
//     <div>
//       <Button onClick={toggleDrawer(true)}>
//         <MenuIcon className="text-white" />
//       </Button>
//       <Drawer open={open} onClose={toggleDrawer(false)}>
//         {DrawerList}
//       </Drawer>
//     </div>
//   );
// }
