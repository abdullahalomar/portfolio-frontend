import SidebarDrawer from "@/components/SidebarDrawer/SidebarDrawer";
import React from "react";

const CommonLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <h1>Main page</h1>
      <SidebarDrawer>{children}</SidebarDrawer>
    </>
  );
};

export default CommonLayout;
