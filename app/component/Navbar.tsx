import { ModeToggle } from "@/components/mode-toggle";
import { UserButton } from "@clerk/nextjs";
import React from "react";

const Navbar = () => {
  return (
    <div className=" w-full flex justify-between px-10 py-3 bg-gray-300 ">
      <div className="w-max font-semibold text-[23px]">
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
