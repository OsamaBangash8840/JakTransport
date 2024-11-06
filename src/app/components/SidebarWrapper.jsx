"use client";

import { useRouter } from "next/navigation";
import SideBarComp from "./SideBarComp";

export default function SidebarWrapper() {
  const router = useRouter();
  const hideSidebarRoutes = ["/login", "/register"]; 

  // Conditionally render the sidebar based on the current route
  if (hideSidebarRoutes.includes(router.pathname)) {
    return null;
  }

  return <SideBarComp />;
}