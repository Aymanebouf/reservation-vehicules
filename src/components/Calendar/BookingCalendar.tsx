
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
import { Input } from "@/components/ui/input";

const weekDays = ["Lun.", "Mar.", "Mer.", "Jeu.", "Ven.", "Sam.", "Dim."];
const vehicles = [
  { id: "A025", name: "Toyota Yaris" },
  { id: "A030", name: "Renault Clio" },
  { id: "A031", name: "Peugeot 208" },
];

export const BookingCalendar = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold">Partage de voiture</h1>
        <Button>Nouvelle réservation</Button>
      </div>

      <div className="flex border-b">
        <button className="px-4 py-2 border-b-2 border-primary text-primary">
          Calendrier de réservation
        </button>
        <button className="px-4 py-2 border-b-2 border-transparent text-gray-600 hover:border-gray-300">
          Réservations
        </button>
        <button className="px-4 py-2 border-b-2 border-transparent text-gray-600 hover:border-gray-300">
          Véhicules
        </button>
      </div>

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
                  <th className="px-4 py-3">Heure de réservation</th>
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
                  <td className="px-4 py-3">21.02.2025 14:49 - 22.02.2025 14:49</td>
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
                  <td className="px-4 py-3">23.02.2025 09:00 - 23.02.2025 17:00</td>
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
                  <td className="px-4 py-3">22.02.2025 08:00 - 22.02.2025 18:00</td>
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
    </div>
  );
};
