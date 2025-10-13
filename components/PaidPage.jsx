// import { Button } from "@/components/ui/button";
// import {
//   Dialog,
//   DialogContent,
//   DialogDescription,
//   DialogFooter,
//   DialogHeader,
//   DialogTitle,
//   DialogTrigger,
// } from "@/components/ui/dialog";
// import { Checkbox } from "./ui/checkbox";

// export function PaidPage({ device_id }) {
//   return (
//     <Dialog>
//       <DialogTrigger asChild>
//         <Checkbox id="terms" />
//       </DialogTrigger>
//       <DialogContent className="sm:max-w-[425px]">
//         <DialogHeader>
//           <DialogTitle>Paid</DialogTitle>
//           <DialogDescription className="p-3 flex gap-2"></DialogDescription>
//         </DialogHeader>
//         <label htmlFor="terms">
//           Paid For <p className="text-red-500 font-bold">{device_id}</p>
//         </label>
//         <DialogFooter>
//           <Button>Done</Button>
//         </DialogFooter>
//       </DialogContent>
//     </Dialog>
//   );
// }

"use client";
import React, { useState } from "react";
import CustomerRegistrationForm from "@/components/CustomerRegistrationForm";

export const PaidPage = ({ device_id }) => {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center">
      <button
        onClick={() => setShowForm(true)}
        className="bg-green-600 text-white px-4 py-1 rounded-lg hover:bg-green-700 transition"
      >
        Register
      </button>

      {showForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-2xl shadow-xl max-w-4xl w-[95%] relative">
            <button
              onClick={() => setShowForm(false)}
              className="absolute top-3 right-3 text-gray-600 hover:text-red-500 text-xl font-bold"
            >
              ✕
            </button>

            <CustomerRegistrationForm deviceId={device_id} />
          </div>
        </div>
      )}
    </div>
  );
};
