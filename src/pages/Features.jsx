import React from 'react';
import Features_hero from '../components/features_hero/Features_hero';
import Features_logo from '../components/features_logo/Features_logo';
import Features_benefit from '../components/features_benefit/Features_benefit';
import Features_client from '../components/features_client/Features_client';
import Features_revision from '../components/features_revision/Features_revision';
import Features_support from '../components/features_support/Features_support';
import Features_delivery from '../components/features_delivery/Features_delivery';
import FAQ from '../components/FAQ/FAQ';

const Features = () => {
  return (
    <>
      <Features_hero/>
      <Features_logo/>
      <Features_benefit/>
      <Features_client/>
      <Features_revision/>
      <Features_support/>
      <Features_delivery/>
      <FAQ/>
    </>
  )
}

export default Features