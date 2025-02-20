
import { Card } from "@/components/ui/card";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const weekDays = ["Lun.", "Mar.", "Mer.", "Jeu.", "Ven.", "Sam.", "Dim."];
const timeSlots = Array.from({ length: 24 }, (_, i) => `${i}:00`);

export const BookingCalendar = () => {
  return (
    <Card className="overflow-hidden">
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
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select Depot" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="depot1">Depot 1</SelectItem>
              <SelectItem value="depot2">Depot 2</SelectItem>
            </SelectContent>
          </Select>
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Sélectionnez le pilote" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="pilot1">Pilot 1</SelectItem>
              <SelectItem value="pilot2">Pilot 2</SelectItem>
            </SelectContent>
          </Select>
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Tous les statuts" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Tous</SelectItem>
              <SelectItem value="active">Actif</SelectItem>
              <SelectItem value="inactive">Inactif</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      <div className="grid h-[600px] grid-cols-[auto_1fr] overflow-auto">
        <div className="sticky left-0 w-20 border-r bg-white">
          <div className="h-10 border-b" /> {/* Empty corner */}
          <div className="space-y-4 p-2">
            {timeSlots.map((time) => (
              <div key={time} className="text-xs text-slate-500">{time}</div>
            ))}
          </div>
        </div>
        <div>
          <div className="grid grid-cols-7 border-b">
            {weekDays.map((day, index) => (
              <div
                key={day}
                className="h-10 border-l p-2 text-sm font-medium first:border-l-0"
              >
                {day}
              </div>
            ))}
          </div>
          <div className="grid grid-cols-7">
            {Array.from({ length: 7 }).map((_, dayIndex) => (
              <div key={dayIndex} className="border-l first:border-l-0">
                {timeSlots.map((time) => (
                  <div key={time} className="h-8 border-b" />
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </Card>
  );
};
