"use client";

import React from "react";
import Featureditems from "@/components/FeaturedItems";
import Slider from "@/components/Slider";
import Offer from "@/components/Offer";

export default function Home() {
  return (
    <div>
      <Slider />
      <Featureditems />
      <Offer />
    </div>
  );
}
