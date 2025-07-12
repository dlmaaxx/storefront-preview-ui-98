
import React from 'react';
import { Outlet } from 'react-router-dom';
import CustomNavbar from './CustomNavbar';
import Footer from '@/components/layout/Footer';

const CustomLayout: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <CustomNavbar />
      <main className="flex-1 pt-24">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default CustomLayout;
