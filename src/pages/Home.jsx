import React from 'react';
import Hero from '../components/hero/Hero';
import Work from '../components/work/Work';
import OurWork from '../components/ourWork/OurWork';
import Features from '../components/features/Features';
import Testimonial from '../components/testimonial/Testimonial';
import FAQ from '../components/FAQ/FAQ';
import Contact_form from '../components/contact_form/Contact_form';
import Blog from '../components/blog/Blog';

const Home = () => {
  return (
    <>
      <Hero/>
      <Work/>
      <OurWork/>
      <Features/>
      <Testimonial/>
      <FAQ/>
      <Contact_form/>
      <Blog/>
    </>
  )
}

export default Home