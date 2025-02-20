
import { BookingCalendar } from "@/components/Calendar/BookingCalendar";
import { BookingForm } from "@/components/Bookings/BookingForm";
import { Sidebar } from "@/components/Layout/Sidebar";
import { VehicleList } from "@/components/Vehicles/VehicleList";

const Index = () => {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <main className="flex-1 space-y-8 p-8">
        <BookingCalendar />
        <div className="grid gap-8 lg:grid-cols-2">
          <BookingForm />
          <VehicleList />
        </div>
      </main>
    </div>
  );
};

export default Index;
