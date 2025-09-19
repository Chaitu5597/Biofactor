import React from 'react';
import AppBar from '../../Components/AppBar';
import Footer from '../../Components/Footer';
import { Outlet } from 'react-router-dom';

const LayoutPage = () => {

  return (
    <div className="flex flex-col overflow-hidden min-h-screen">
      <AppBar />
      <main className="flex-grow" >
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default LayoutPage;
