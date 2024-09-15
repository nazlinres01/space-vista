// src/components/Layout/Layout.js
import React, { useState, useEffect } from 'react';
import Loading from '../Loading/Loading';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a loading delay
    const timer = setTimeout(() => setLoading(false), 2000); // 2 saniye bekle
    return () => clearTimeout(timer); // Cleanup timer
  }, []);

  return (
    <>
      {loading ? <Loading /> : <Outlet />}
    </>
  );
};

export default Layout;
