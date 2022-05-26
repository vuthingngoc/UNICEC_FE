import React from 'react';
import IndexNavbar from 'components/Navbars/IndexNavbar.js';
import IndexHeader from 'components/Headers/IndexHeader.js';
import AuthFooter from 'components/Footers/AuthFooter.js';
import HomepageBody from './components';

function Homepage() {
  return (
    <>
      <IndexNavbar />
      <div className="main-content">
        <IndexHeader />
        <HomepageBody />
      </div>
      <AuthFooter />
    </>
  );
}

export default Homepage;
