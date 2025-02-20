
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

export const CalendarHeader = () => {
  return (
    <div className="border-b p-4">
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2">
          <input
            type="text"
            value="17.02.2025 - 23.02.2025"
            className="w-44 rounded-md border px-3 py-1"
          />
          <Button variant="outline" size="icon">
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="icon">
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
        <div className="flex items-center gap-2">
          <button className="rounded-md bg-primary px-3 py-1 text-sm text-white">
            Jour
          </button>
          <button className="rounded-md bg-slate-100 px-3 py-1 text-sm">
            Semaine
          </button>
        </div>
      </div>
    </div>
  );
};
