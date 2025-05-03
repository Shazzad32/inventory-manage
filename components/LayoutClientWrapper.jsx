"use client";

import { usePathname } from "next/navigation";
import DrawerList from "./Drawer";

export default function LayoutClientWrapper({ children }) {
  const pathname = usePathname();
  const isLoginPage = pathname === "/login";

  if (isLoginPage) return children;

  return (
    <>
      <div className="h-[8vh] w-full bg-orange-400 text-white uppercase flex items-center justify-center font-bold">
        <div className="flex-[3.3]">
          <DrawerList />
        </div>
        <div className="flex-[3.3] text-xs lg:text-sm text-center">
          Inventory Management
        </div>
        <div className="flex-[3.3]"></div>
      </div>
      <div className="h-[92vh] w-full">{children}</div>
    </>
  );
}
