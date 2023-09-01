import { initialProfile } from "@/lib/initial-profile";
import React from "react";
import amount from "../api/amount/page";

const Home = async () => {
  const profile = await initialProfile();
  const amounts = await amount()

  return <div>
    <div className="w-full flex justify-center items-center" >
        Balance: {amounts[0].amount}
    </div>
  </div>;
};

export default Home;
