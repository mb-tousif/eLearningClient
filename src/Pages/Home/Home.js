import React, { Fragment } from 'react'
import HeroSection from './HeroSection';
import HomeCourses from './HomeCourses';

export default function Home() {
  return (
    <Fragment>
      <HeroSection/>
      <HomeCourses/>
    </Fragment>
  );
}
