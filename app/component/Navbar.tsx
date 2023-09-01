import { ModeToggle } from "@/components/mode-toggle";
import { UserButton } from "@clerk/nextjs";
import React from "react";

const Navbar = () => {
  return (
    <div className=" w-full flex justify-between px-6 py-3">
      <div className="w-max h-full flex justify-center items-center font-semibold text-xl">
        Expense Tracker App
      </div>
      <div className="flex gap-4">
        <ModeToggle />
        <UserButton
          appearance={{
            elements: {
              avatarBox: { height: "40px", width: "40px" },
            },
          }}
          afterSignOutUrl="/"
        />
      </div>
    </div>
  );
};

export default Navbar;
