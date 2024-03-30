import DashboardHeader from "@/components/DashboardHeader";
import React from "react";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <DashboardHeader />
      {children}
    </>
  );
};

export default DashboardLayout;
