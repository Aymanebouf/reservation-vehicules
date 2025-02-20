
import { CarFront } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import NewBookingForm from "../Bookings/NewBookingForm";

interface Vehicle {
  id: string;
  name: string;
  status: string;
  type: string;
}

interface CalendarTimelineProps {
  vehicles: Vehicle[];
}

export const CalendarTimeline = ({ vehicles }: CalendarTimelineProps) => {
  return (
    <div className="overflow-auto">
      {vehicles.map((vehicle) => (
        <div key={vehicle.id} className="flex border-b">
          <div className="w-48 flex-shrink-0 border-r p-2">
            <div className="flex items-center gap-2">
              <CarFront className="h-4 w-4 text-slate-500" />
              <div>
                <div className="text-sm font-medium">{vehicle.id}</div>
                <div className="text-xs text-gray-500">{vehicle.name}</div>
              </div>
            </div>
          </div>
          <div className="flex flex-1 relative">
            {Array.from({ length: 24 }, (_, hour) => (
              <Dialog key={hour}>
                <DialogTrigger asChild>
                  <button 
                    className="flex-shrink-0 w-20 border-r hover:bg-gray-50 transition-colors cursor-pointer h-full"
                  />
                </DialogTrigger>
                <DialogContent className="sm:max-w-[90vw] sm:h-[90vh]">
                  <DialogHeader>
                    <DialogTitle>Nouvelle réservation</DialogTitle>
                  </DialogHeader>
                  <NewBookingForm />
                </DialogContent>
              </Dialog>
            ))}
            {vehicle.id === "A025" && (
              <div 
                className="absolute top-1 left-[160px] w-[160px] bg-blue-100 border border-blue-200 rounded-sm p-1 text-xs"
                style={{ height: "calc(100% - 8px)" }}
              >
                <div className="font-medium">Réservation</div>
                <div className="text-gray-500">8:00 - 12:00</div>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};
