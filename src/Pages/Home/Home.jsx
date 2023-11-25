import { Fragment } from 'react'
import Subscribe from '../../ShareCompnt/Subscribe';
import Facilities from './Facilities';
import HeroSection from './HeroSection';
import HomeCourses from './HomeCourses';
import HomeReviews from './HomeReviews';

export default function Home() {
  return (
    <Fragment>
      <HeroSection />
      <HomeCourses />
      <Facilities />
      <HomeReviews />
      <Subscribe />
    </Fragment>
  );
}
