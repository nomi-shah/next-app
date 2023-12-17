import React from "react";
import HeroSection from "./components/Herosection";

export default function page() {
  return (
    <>
      <HeroSection
        pageTitle={"LET,s WATCH MOVIE TOGETHER"}
        imageURL={"/home.svg"}
      />
    </>
  );
}
