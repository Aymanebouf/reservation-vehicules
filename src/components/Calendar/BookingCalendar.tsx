
import { Card } from "@/components/ui/card";
import { ChevronLeft, ChevronRight, CarFront, PlusCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import NewBookingForm from "../Bookings/NewBookingForm";

const weekDays = ["Lun.", "Mar.", "Mer.", "Jeu.", "Ven.", "Sam.", "Dim."];
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

type TabType = 'calendar' | 'list' | 'vehicles';

export const BookingCalendar = () => {
  const [activeTab, setActiveTab] = useState<TabType>('calendar');

  const renderBookingList = () => (
    <div className="space-y-4">
      <div className="flex items-center gap-4">
        <div className="space-y-1">
          <div className="text-sm text-gray-500">Période</div>
          <div className="flex items-center gap-2">
            <Input
              type="text"
              value="17.02.2025 - 23.02.2025"
              className="w-44"
            />
            <Button variant="outline" size="icon">
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon">
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className="space-y-1">
          <div className="text-sm text-gray-500">Base</div>
          <Select>
            <SelectTrigger className="w-[200px]">
              <SelectValue placeholder="Select Depot" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="depot1">Depot Grisoni</SelectItem>
              <SelectItem value="depot2">Depot Central</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-1">
          <div className="text-sm text-gray-500">Conducteur</div>
          <Select>
            <SelectTrigger className="w-[200px]">
              <SelectValue placeholder="Sélectionnez le pilote" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="driver1">Wilson Seb</SelectItem>
              <SelectItem value="driver2">Martin Paul</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-1">
          <div className="text-sm text-gray-500">Statut</div>
          <Select>
            <SelectTrigger className="w-[200px]">
              <SelectValue placeholder="Tous les statuts" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Tous les statuts</SelectItem>
              <SelectItem value="active">Actif</SelectItem>
              <SelectItem value="completed">Terminé</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="flex-1">
          <Input 
            type="search" 
            placeholder="Rechercher..." 
            className="max-w-[300px] ml-auto"
          />
        </div>
      </div>

      <Card className="overflow-hidden">
        <div className="relative overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead className="bg-gray-50 text-gray-600">
              <tr>
                <th className="px-4 py-3">ID</th>
                <th className="px-4 py-3">Véhicule</th>
                <th className="px-4 py-3">Conducteur</th>
                <th className="px-4 py-3">Période de réservation</th>
                <th className="px-4 py-3">Base</th>
                <th className="px-4 py-3">Arrêts</th>
                <th className="px-4 py-3">Réservé par</th>
                <th className="px-4 py-3">Remarques</th>
                <th className="px-4 py-3">Statut</th>
                <th className="px-4 py-3">Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="px-4 py-3">27691</td>
                <td className="px-4 py-3">A025</td>
                <td className="px-4 py-3">Wilson Seb</td>
                <td className="px-4 py-3">21.02.2025 - 22.02.2025</td>
                <td className="px-4 py-3">Depot Grisoni</td>
                <td className="px-4 py-3">0 Arrêts</td>
                <td className="px-4 py-3">GRISONI GROUP</td>
                <td className="px-4 py-3">-</td>
                <td className="px-4 py-3">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                    Actif
                  </span>
                </td>
                <td className="px-4 py-3">
                  <div className="flex items-center gap-2">
                    <Button variant="outline" size="icon">
                      <ChevronLeft className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="icon">
                      <ChevronRight className="h-4 w-4" />
                    </Button>
                  </div>
                </td>
              </tr>
              <tr className="border-b">
                <td className="px-4 py-3">27692</td>
                <td className="px-4 py-3">A030</td>
                <td className="px-4 py-3">Martin Paul</td>
                <td className="px-4 py-3">23.02.2025 - 23.02.2025</td>
                <td className="px-4 py-3">Depot Central</td>
                <td className="px-4 py-3">2 Arrêts</td>
                <td className="px-4 py-3">GRISONI GROUP</td>
                <td className="px-4 py-3">Livraison matériel</td>
                <td className="px-4 py-3">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                    En attente
                  </span>
                </td>
                <td className="px-4 py-3">
                  <div className="flex items-center gap-2">
                    <Button variant="outline" size="icon">
                      <ChevronLeft className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="icon">
                      <ChevronRight className="h-4 w-4" />
                    </Button>
                  </div>
                </td>
              </tr>
              <tr className="border-b">
                <td className="px-4 py-3">27693</td>
                <td className="px-4 py-3">A031</td>
                <td className="px-4 py-3">Dubois Jean</td>
                <td className="px-4 py-3">22.02.2025 - 22.02.2025</td>
                <td className="px-4 py-3">Depot Grisoni</td>
                <td className="px-4 py-3">1 Arrêt</td>
                <td className="px-4 py-3">GRISONI GROUP</td>
                <td className="px-4 py-3">Visite chantier</td>
                <td className="px-4 py-3">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                    Actif
                  </span>
                </td>
                <td className="px-4 py-3">
                  <div className="flex items-center gap-2">
                    <Button variant="outline" size="icon">
                      <ChevronLeft className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="icon">
                      <ChevronRight className="h-4 w-4" />
                    </Button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
          <div className="flex items-center justify-between px-4 py-3 bg-gray-50">
            <div className="text-sm text-gray-700">
              Nombre de lignes : 
              <Select defaultValue="10">
                <SelectTrigger className="w-[70px] ml-2">
                  <SelectValue placeholder="10" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="10">10</SelectItem>
                  <SelectItem value="20">20</SelectItem>
                  <SelectItem value="50">50</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );

  const renderCalendar = () => (
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
            <DialogContent className="sm:max-w-[90vw] sm:h-[90vh]">
              <DialogHeader>
                <DialogTitle>Nouvelle réservation</DialogTitle>
              </DialogHeader>
              <NewBookingForm />
            </DialogContent>
          </Dialog>
        </div>
      </div>
      <div className="grid grid-cols-[250px_auto_1fr] h-[calc(100vh-20rem)] overflow-hidden">
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
        <div className="w-16 border-r bg-white">
          <div className="h-8 border-b" />
          <div className="space-y-3 p-2">
            {Array.from({ length: 24 }, (_, i) => (
              <div key={i} className="text-xs text-slate-500">{`${i}:00`}</div>
            ))}
          </div>
        </div>
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
                {Array.from({ length: 24 }).map((_, hourIndex) => (
                  <div key={hourIndex} className="h-6 border-b" />
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </Card>
  );

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold">Partage de voiture</h1>
        <Button>Nouvelle réservation</Button>
      </div>

      <div className="flex border-b">
        <button 
          className={`px-4 py-2 border-b-2 ${activeTab === 'calendar' ? 'border-primary text-primary' : 'border-transparent text-gray-600 hover:border-gray-300'}`}
          onClick={() => setActiveTab('calendar')}
        >
          Calendrier de réservation
        </button>
        <button 
          className={`px-4 py-2 border-b-2 ${activeTab === 'list' ? 'border-primary text-primary' : 'border-transparent text-gray-600 hover:border-gray-300'}`}
          onClick={() => setActiveTab('list')}
        >
          Réservations
        </button>
        <button 
          className={`px-4 py-2 border-b-2 ${activeTab === 'vehicles' ? 'border-primary text-primary' : 'border-transparent text-gray-600 hover:border-gray-300'}`}
          onClick={() => setActiveTab('vehicles')}
        >
          Véhicules
        </button>
      </div>

      {activeTab === 'calendar' && renderCalendar()}
      {activeTab === 'list' && renderBookingList()}
    </div>
  );
};
