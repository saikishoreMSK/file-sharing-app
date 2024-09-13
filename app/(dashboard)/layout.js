"use client"
import React, { useState } from 'react';
import SideNav from './_components/SideNav';
import TopHeader from './_components/TopHeader';

const Layout = ({ children }) => {
  const [isSideNavOpen, setIsSideNavOpen] = useState(false);

  const toggleSideNav = () => {
    setIsSideNavOpen(!isSideNavOpen);
  };

  return (
    <div>
      {/* SideNav */}
      <div
        className={`h-full w-64 flex-col fixed inset-y-0 z-50 md:flex ${
          isSideNavOpen ? 'block' : 'hidden'
        }`}>
        <SideNav />
      </div>

      {/* Main content area */}
      <div className={`md:ml-64 ${isSideNavOpen ? 'ml-64' : ''}`}>
        {/* Pass toggle function to TopHeader */}
        <TopHeader toggleSideNav={toggleSideNav} />
        {children}
      </div>
    </div>
  );
};

export default Layout;
