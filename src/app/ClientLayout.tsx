// "use client"; // Mark this as a client component

// import React from "react";
// // import { useRouter } from "next/navigation";
// import SideBarComp from "./components/SideBarComp";
// import { useRouter } from "next/navigation";

// const hideSidebarRoutes = ["/login", "/register"]; // Define routes to hide sidebar

// export default function ClientLayout({ children }: { children: React.ReactNode }) {
//   const router = useRouter();

//   // Check if the current route is in the list of routes to hide the sidebar
//   // const shouldHideSidebar = hideSidebarRoutes.includes(router.pathname);

//   return (
//     <div className="flex">
//       {/* Conditionally render the sidebar */}
//       {!shouldHideSidebar && <SideBarComp />}
//       <main className="flex-1 p-6">{children}</main>
//     </div>
//   );
// }
