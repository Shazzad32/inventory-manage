"use client";

import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import MenuIcon from "@mui/icons-material/Menu";
import Link from "next/link";
import { motion } from "framer-motion";
import LogoutButton from "./LogoutButton";

export default function TemporaryDrawer() {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      className="flex justify-center gap-4 flex-col items-center py-5 font-bold uppercase"
    >
      <motion.p
        className="bg-gray-200 rounded-md px-16 py-2"
        whileHover={{ background: "skyblue", scaleX: 1.1 }}
      >
        <Link href={"/store"}>store</Link>
      </motion.p>
      <motion.p
        className="bg-gray-200 rounded-md px-16 py-2"
        whileHover={{ background: "skyblue", scaleX: 1.1 }}
      >
        <Link href={"/rangs"}>rangs</Link>
      </motion.p>
      <motion.p
        className="bg-gray-200 rounded-md px-16 py-2"
        whileHover={{ background: "skyblue", scaleX: 1.1 }}
      >
        <Link href={"/retail"}>retail</Link>
      </motion.p>
      <LogoutButton />
    </Box>
  );

  return (
    <div>
      <Button onClick={toggleDrawer(true)}>
        <MenuIcon className="text-white" />
      </Button>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
}
