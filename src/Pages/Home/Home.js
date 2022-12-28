import React from 'react'
import Subscribe from '../../ShareCompnt/Subscribe';
import Facilities from './Facilities';
import HeroSection from './HeroSection';
import HomeCourses from './HomeCourses';
import HomeReviews from './HomeReviews';

export default function Home() {
  return (
    <div className="max-w-screen over">
      <HeroSection />
      <HomeCourses />
      <Facilities />
      <HomeReviews />
      <Subscribe />
    </div>
  );
}
