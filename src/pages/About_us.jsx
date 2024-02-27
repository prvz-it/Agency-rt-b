import React from 'react';
import AboutUs_hero from '../components/aboutUs_hero/AboutUs_hero';
import AboutUs_goalC from '../components/aboutUs_goal/AboutUs_goalC';
import AboutUs_process from '../components/aboutUs_process/AboutUs_process';
import AboutUs_mission from '../components/aboutUs_mission/AboutUs_mission';
import AboutUs_benefits from '../components/aboutUs_benefits/AboutUs_benefits';
import AboutUs_team from '../components/aboutUs_team/AboutUs_team';

const About_us = () => {
  return (
    <>
      <AboutUs_hero/>
      <AboutUs_goalC/>
      <AboutUs_process/>
      <AboutUs_mission/>
      <AboutUs_benefits/>
      <AboutUs_team/>
    </>
  )
}

export default About_us