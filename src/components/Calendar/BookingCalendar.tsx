
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
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { CarFront, PlusCircle } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const weekDays = ["Lun.", "Mar.", "Mer.", "Jeu.", "Ven.", "Sam.", "Dim."];
const timeSlots = Array.from({ length: 24 }, (_, i) => `${i}:00`);
const vehicles = [
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

const NewBookingForm = () => {
  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="driver">Conducteur</Label>
        <Select>
          <SelectTrigger>
            <SelectValue placeholder="Sélectionnez le conducteur" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="john">John Doe</SelectItem>
            <SelectItem value="jane">Jane Smith</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="space-y-2">
        <Label htmlFor="vehicle">Véhicule</Label>
        <Select>
          <SelectTrigger>
            <SelectValue placeholder="Sélectionnez le véhicule" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="a025">A025 - Toyota Yaris</SelectItem>
            <SelectItem value="a030">A030 - Renault Clio</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="start">Date de début</Label>
          <Input type="datetime-local" id="start" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="end">Date de fin</Label>
          <Input type="datetime-local" id="end" />
        </div>
      </div>
      <div className="pt-4 flex justify-end">
        <Button>Réserver</Button>
      </div>
    </div>
  );
};

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
          <Dialog>
            <DialogTrigger asChild>
              <Button className="gap-2">
                <PlusCircle className="h-4 w-4" />
                Nouvelle réservation
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[500px]">
              <DialogHeader>
                <DialogTitle>Nouvelle réservation</DialogTitle>
              </DialogHeader>
              <NewBookingForm />
            </DialogContent>
          </Dialog>
        </div>
      </div>
      <div className="grid grid-cols-[250px_auto_1fr] h-[600px] overflow-y-auto">
        {/* Colonne des véhicules */}
        <div className="border-r">
          <div className="h-8 border-b bg-white font-medium p-2">Véhicules</div>
          <div className="space-y-[2px]">
            {vehicles.map((vehicle) => (
              <div 
                key={vehicle.id} 
                className="flex items-center gap-2 p-2 hover:bg-slate-50"
              >
                <CarFront className="h-4 w-4 text-slate-500" />
                <span className="text-sm">{vehicle.name}</span>
              </div>
            ))}
          </div>
        </div>
        {/* Colonne des heures */}
        <div className="w-16 border-r bg-white">
          <div className="h-8 border-b" />
          <div className="space-y-3 p-2">
            {timeSlots.map((time) => (
              <div key={time} className="text-xs text-slate-500">{time}</div>
            ))}
          </div>
        </div>
        {/* Grille du calendrier */}
        <div>
          <div className="grid grid-cols-7 border-b">
            {weekDays.map((day) => (
              <div key={day} className="h-8 border-l p-2 text-xs font-medium first:border-l-0">
                {day}
              </div>
            ))}
          </div>
          <div className="grid grid-cols-7">
            {Array.from({ length: 7 }).map((_, dayIndex) => (
              <div key={dayIndex} className="border-l first:border-l-0">
                {timeSlots.map((time) => (
                  <div key={time} className="h-6 border-b" />
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </Card>
  );
};
