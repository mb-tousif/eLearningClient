import React, { Fragment } from "react";
import Subscribe from "../../ShareCompnt/Subscribe";
import AppSection from "./AppSection";
import Location from "./Location";
import TopBanner from "./TopBanner";

export default function About() {
  return (
    <Fragment>
      <TopBanner/>
      <Location/>
      <Subscribe/>
      <AppSection/>
    </Fragment>
  );
}
