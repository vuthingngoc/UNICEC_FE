import React from 'react';
import HomepageBody from './components/HomepageBody';
import IndexNavbar from 'components/Navbars/IndexNavbar.js';
import IndexHeader from 'components/Headers/IndexHeader.js';
import AuthFooter from 'components/Footers/AuthFooter.js';

export default function Homepage() {
  return (
    <>
      <IndexNavbar />
      <div className="main-content" style={{ marginTop: '80px' }}>
        <IndexHeader />
        <HomepageBody />
      </div>
      <AuthFooter />
    </>
  );
}
