import React from "react";
import Navbar from "../component/Navbar";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full">
      <Navbar />
      {children}
    </div>
  );
};

export default layout;
