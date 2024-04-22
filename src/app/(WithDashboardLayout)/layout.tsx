import DashboardDrawer from "@/components/DashboardDrawer/DashboardDrawer";
import React, { ReactNode } from "react";
interface LayoutProps {
  children: ReactNode;
}

const DashboardLayout = ({ children }: LayoutProps) => {
  return (
    <>
      <h1>Dashboard</h1>
      <DashboardDrawer>{children}</DashboardDrawer>
    </>
  );
};

export default DashboardLayout;
