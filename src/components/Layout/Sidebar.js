
import React from "react";
import { Link, useLocation } from "react-router-dom";

const sidebarLinks = [
  {
    title: "Réservation",
    icon: "pi pi-calendar",
    path: "/",
  },
];

export const Sidebar = () => {
  const location = useLocation();

  return (
    <div className="min-h-screen w-64 border-right bg-white p-4">
      <div className="flex h-16 align-items-center border-bottom">
        <h1 className="text-xl font-semibold">Logitag</h1>
      </div>
      <nav className="mt-8 space-y-2">
        {sidebarLinks.map((link) => (
          <Link
            key={link.path}
            to={link.path}
            className={`sidebar-link flex align-items-center gap-2 py-2 px-4 rounded-md text-gray-700 ${
              location.pathname === link.path ? "bg-primary text-white" : ""
            }`}
          >
            <i className={link.icon}></i>
            <span>{link.title}</span>
          </Link>
        ))}
      </nav>
    </div>
  );
};
