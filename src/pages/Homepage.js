import React from 'react';
import Banner from '../components/Banner/Banner';
import CoinsTable from '../components/CoinsTable';

const Homepage = () => {
  return (
    <>
      <Banner />                      {/* ✅ DO NOT use key here */}
      <CoinsTable key={Date.now()} /> {/* ✅ Only re-render this */}
    </>
  );
};

export default Homepage;
