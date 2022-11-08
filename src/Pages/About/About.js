import React, { Fragment } from "react";
import Subscribe from "../../ShareCompnt/Subscribe";
import Location from "./Location";

export default function About() {
  return (
    <Fragment>
      <h1 className="text-lg">This is About Page</h1>
      <Location/>
      <Subscribe/>
    </Fragment>
  );
}
