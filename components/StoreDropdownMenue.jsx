"use client";

import { PiDotsThreeOutlineVerticalBold } from "react-icons/pi";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
import { Button } from "@mui/material";

export function StoreDropdownMenue({ onImportClick }) {
  return (
    <DropdownMenu>
      {/* <DropdownMenuTrigger asChild>jj</DropdownMenuTrigger> */}

      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>Total Store</DropdownMenuLabel>
        <DropdownMenuSeparator />

        <DropdownMenuItem asChild>
          <Link href="/">Home</Link>
        </DropdownMenuItem>

        <DropdownMenuItem asChild>
          <Link href="/store/add">Add</Link>
        </DropdownMenuItem>

        <DropdownMenuItem onClick={onImportClick}>
          Import Excel
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
