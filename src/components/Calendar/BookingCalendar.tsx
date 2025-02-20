
import { Calendar } from "@/components/ui/calendar";
import { Card } from "@/components/ui/card";
import { addDays } from "date-fns";
import { fr } from "date-fns/locale";

export const BookingCalendar = () => {
  const today = new Date();
  const weekLater = addDays(today, 7);

  return (
    <Card className="p-4">
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold">Calendrier des réservations</h2>
          <div className="flex gap-2">
            <button className="rounded-md bg-primary px-3 py-1 text-sm text-white transition-colors hover:bg-primary/90">
              Jour
            </button>
            <button className="rounded-md bg-slate-100 px-3 py-1 text-sm transition-colors hover:bg-slate-200">
              Semaine
            </button>
          </div>
        </div>
        <Calendar
          mode="range"
          selected={{
            from: today,
            to: weekLater,
          }}
          locale={fr}
          className="rounded-md border"
        />
      </div>
    </Card>
  );
};
