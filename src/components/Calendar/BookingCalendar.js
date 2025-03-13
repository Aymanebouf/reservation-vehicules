
import React, { useState } from "react";
import { CalendarHeader } from "./CalendarHeader";
import { TimeHeader } from "./TimeHeader";
import { CalendarTimeline } from "./CalendarTimeline";

const mockVehicles = [
  {
    id: "A025",
    name: "Toyota Yaris",
    status: "Disponible",
    type: "Citadine",
  },
  {
    id: "A030",
    name: "Renault Clio",
    status: "En cours",
    type: "Citadine",
  },
];

export const BookingCalendar = () => {
  const [vehicles] = useState(mockVehicles);

  return (
    <div className="border rounded-lg bg-white shadow-sm">
      <CalendarHeader />
      <TimeHeader />
      <CalendarTimeline vehicles={vehicles} />
    </div>
  );
};
