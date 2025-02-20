
import { BookingCalendar } from "@/components/Calendar/BookingCalendar";
import { Sidebar } from "@/components/Layout/Sidebar";
import { Link, useLocation } from "react-router-dom";

const Index = () => {
  const location = useLocation();
  const tabs = [
    { name: "Calendrier de réservation", path: "/calendar" },
    { name: "Réservations", path: "/bookings" },
    { name: "Véhicules", path: "/vehicles" },
  ];

  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <main className="flex-1">
        <div className="border-b">
          <div className="flex h-16 items-center px-8">
            <nav className="flex space-x-8">
              {tabs.map((tab) => (
                <Link
                  key={tab.path}
                  to={tab.path}
                  className={`inline-flex items-center border-b-2 px-1 py-4 text-sm font-medium ${
                    location.pathname === tab.path
                      ? "border-primary text-primary"
                      : "border-transparent text-slate-500 hover:border-slate-300 hover:text-slate-700"
                  }`}
                >
                  {tab.name}
                </Link>
              ))}
            </nav>
          </div>
        </div>
        <div className="p-8">
          <BookingCalendar />
        </div>
      </main>
    </div>
  );
};

export default Index;
