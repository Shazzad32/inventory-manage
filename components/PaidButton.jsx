"use client";
import React, { useState } from "react";
import { PaidPage } from "./PaidPage";
import { Button } from "./ui/button";

const PaidButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <>
        <Button onClick={() => setIsOpen(true)} className="ml-4">
          Paid
        </Button>

        {isOpen && <PaidPage onClose={() => setIsOpen(false)} />}
      </>
    </div>
  );
};

export default PaidButton;
