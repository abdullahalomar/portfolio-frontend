import SidebarDrawer from "@/components/SidebarDrawer/SidebarDrawer";
import React from "react";

const CommonLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <SidebarDrawer>{children}</SidebarDrawer>
    </>
  );
};

export default CommonLayout;
