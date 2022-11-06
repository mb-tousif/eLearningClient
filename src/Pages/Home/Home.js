import React, { Fragment } from 'react'
import HeroSection from './HeroSection';
import HomeCourses from './HomeCourses';
import HomeReviews from './HomeReviews';
import Subscribe from './Subscribe';

export default function Home() {
  return (
    <Fragment>
      <HeroSection/>
      <HomeCourses/>
      <HomeReviews/>
      <Subscribe/>
    </Fragment>
  );
}
