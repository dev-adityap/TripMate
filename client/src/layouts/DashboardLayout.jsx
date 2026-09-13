import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../components/Sidebar';

const DashboardLayout = () => {
 return (
  <div className="flex min-h-screen">
    <Sidebar />
    {/* Add ml-24 here to push the content past the w-24 sidebar */}
    <main className="flex-1 ml-24"> 
      <Outlet /> 
    </main>
  </div>
)};

export default DashboardLayout;