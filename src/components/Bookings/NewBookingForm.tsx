
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { MapPin, Plus, X } from "lucide-react";
import Map from "../Map/Map";
import { Textarea } from "@/components/ui/textarea";

const NewBookingForm = () => {
  return (
    <div className="grid grid-cols-[45%_55%] gap-6 h-[calc(100vh-10rem)]">
      <div className="space-y-8 p-6">
        <div>
          <h2 className="text-xl font-medium text-slate-900 mb-6">Détails du voyage</h2>
          
          <div className="space-y-6">
            <div>
              <div className="text-sm font-medium mb-2">Durée</div>
              <div className="space-y-4">
                <div>
                  <div className="text-sm text-gray-500 mb-1">Depuis</div>
                  <div className="flex gap-2">
                    <div className="flex-1">
                      <Input defaultValue="20.02.2025" />
                    </div>
                    <div className="flex-1">
                      <Input defaultValue="12:51" />
                    </div>
                  </div>
                </div>
                <div>
                  <div className="text-sm text-gray-500 mb-1">À</div>
                  <div className="flex gap-2">
                    <div className="flex-1">
                      <Input defaultValue="20.02.2025" />
                    </div>
                    <div className="flex-1">
                      <Input defaultValue="13:51" />
                    </div>
                  </div>
                </div>
                <div className="text-sm text-gray-500">Booking time: 1h</div>
              </div>
            </div>

            <div>
              <div className="text-sm font-medium mb-2">Conducteur</div>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Sélectionnez le pilote" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="pilot1">Pilot 1</SelectItem>
                  <SelectItem value="pilot2">Pilot 2</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <div className="text-sm font-medium mb-2">Détails de l'itinéraire</div>
              <div className="space-y-2">
                <div className="flex items-center gap-2 p-2 border rounded-md">
                  <div className="bg-green-100 p-1 rounded">
                    <MapPin className="h-4 w-4 text-green-600" />
                  </div>
                  <Select>
                    <SelectTrigger className="border-0 p-0 h-auto">
                      <SelectValue placeholder="Base de départ" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="base1">Base 1</SelectItem>
                      <SelectItem value="base2">Base 2</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="flex items-center gap-2">
                  <div className="flex-1">
                    <Input placeholder="Rechercher une adresse" />
                  </div>
                  <Button variant="ghost" size="icon">
                    <X className="h-4 w-4" />
                  </Button>
                </div>
                <Button
                  variant="ghost"
                  className="w-full justify-start text-blue-600 hover:text-blue-700 hover:bg-blue-50"
                >
                  <Plus className="h-4 w-4 mr-2" />
                  Ajouter un arrêt
                </Button>
              </div>
            </div>

            <div>
              <div className="text-sm font-medium mb-2">Transmission</div>
              <div className="flex gap-1">
                <Button
                  variant="outline"
                  className="flex-1 bg-blue-600 text-white border-blue-600 hover:bg-blue-700 hover:text-white"
                >
                  N'importe lequel
                </Button>
                <Button variant="outline" className="flex-1">
                  Manuel
                </Button>
                <Button variant="outline" className="flex-1">
                  Automatique
                </Button>
              </div>
            </div>

            <div>
              <div className="text-sm font-medium mb-2">Type de véhicule</div>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="N'importe lequel" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="any">N'importe lequel</SelectItem>
                  <SelectItem value="sedan">Berline</SelectItem>
                  <SelectItem value="suv">SUV</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <div className="text-sm font-medium mb-2">Des places</div>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="N'importe lequel" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="any">N'importe lequel</SelectItem>
                  <SelectItem value="2">2 places</SelectItem>
                  <SelectItem value="4">4 places</SelectItem>
                  <SelectItem value="5">5 places</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <div className="text-sm font-medium mb-2">Remarques</div>
              <Textarea className="min-h-[100px] resize-none" />
            </div>
          </div>
        </div>
      </div>
      <div className="h-full">
        <Map />
      </div>
    </div>
  );
};

export default NewBookingForm;
