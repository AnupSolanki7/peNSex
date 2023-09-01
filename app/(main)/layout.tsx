import React from "react";
import Navbar from "../component/Navbar";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full">
      <Navbar />
      <div className="w-full h-max px-10 pt-2">{children}</div>
    </div>
  );
};

export default layout;
