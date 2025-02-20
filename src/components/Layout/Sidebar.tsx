
import { Calendar, CarFront, FileText } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const sidebarLinks = [
  {
    title: "Calendrier de réservation",
    icon: Calendar,
    path: "/calendar",
  },
  {
    title: "Réservations",
    icon: FileText,
    path: "/bookings",
  },
  {
    title: "Véhicules",
    icon: CarFront,
    path: "/vehicles",
  },
];

export const Sidebar = () => {
  const location = useLocation();

  return (
    <div className="min-h-screen w-64 border-r bg-white p-4">
      <div className="flex h-16 items-center border-b">
        <h1 className="text-xl font-semibold">Logitag</h1>
      </div>
      <nav className="mt-8 space-y-2">
        {sidebarLinks.map((link) => (
          <Link
            key={link.path}
            to={link.path}
            className={`sidebar-link ${
              location.pathname === link.path ? "active" : ""
            }`}
          >
            <link.icon className="h-5 w-5" />
            <span>{link.title}</span>
          </Link>
        ))}
      </nav>
    </div>
  );
};
