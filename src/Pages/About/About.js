import React, { Fragment } from "react";
import Subscribe from "../../ShareCompnt/Subscribe";
import AppSection from "./AppSection";
import Location from "./Location";

export default function About() {
  return (
    <Fragment>
      <Location/>
      <Subscribe/>
      <AppSection/>
    </Fragment>
  );
}
