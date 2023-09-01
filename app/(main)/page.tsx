import { initialProfile } from "@/lib/initial-profile";
import React from "react";
import amount from "../api/amount/page";

const Home = async () => {
  const profile = await initialProfile();
  const amounts = await amount()

  return <div>{profile.name}</div>;
};

export default Home;
