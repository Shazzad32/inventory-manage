import { BsThreeDotsVertical } from "react-icons/bs";
import { PiDotsThreeOutlineVerticalBold } from "react-icons/pi";

import {
  Cloud,
  CreditCard,
  Github,
  Keyboard,
  LifeBuoy,
  LogOut,
  Mail,
  MessageSquare,
  Plus,
  PlusCircle,
  Settings,
  User,
  UserPlus,
  Users,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
import ImportFile from "./ImportFile";

export function StoreDropdownMenue() {
  return (
    <DropdownMenu className="">
      <DropdownMenuTrigger asChild>
        <button className="text-white lg:hidden flex">
          <PiDotsThreeOutlineVerticalBold />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>Total Store</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <Link href={"/"}>Home</Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Link href={"/store/add"}>Add</Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <p>Import Excel</p>
          <ImportFile className="bg-black text-orange-400" />
        </DropdownMenuItem>

        <DropdownMenuSeparator />
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
