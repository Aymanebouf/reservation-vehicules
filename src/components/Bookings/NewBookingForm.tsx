
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { MapPin, Plus } from "lucide-react";
import Map from "../Map/Map";

const NewBookingForm = () => {
  const [showAddStop, setShowAddStop] = useState(false);

  return (
    <div className="grid grid-cols-2 gap-8 h-[calc(100vh-12rem)]">
      <div className="space-y-6 overflow-y-auto p-4">
        <div>
          <h2 className="text-lg font-semibold mb-6">Détails du voyage</h2>
          <div className="space-y-4">
            <div className="space-y-2">
              <Label>Durée</Label>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <p className="text-sm text-gray-500">Depuis</p>
                  <Input type="date" />
                  <Input type="time" />
                </div>
                <div className="space-y-2">
                  <p className="text-sm text-gray-500">À</p>
                  <Input type="date" />
                  <Input type="time" />
                </div>
              </div>
              <p className="text-sm text-gray-500">Booking time: 1h</p>
            </div>

            <div className="space-y-2">
              <Label>Conducteur</Label>
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

            <div className="space-y-2">
              <Label>Détails de l'itinéraire</Label>
              <div className="space-y-2">
                <div className="flex items-center gap-2 p-2 border rounded-md">
                  <MapPin className="h-4 w-4 text-green-500" />
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
                {showAddStop && (
                  <div className="flex items-center gap-2">
                    <Input placeholder="Rechercher une adresse" />
                    <Button variant="ghost" size="icon" type="button">×</Button>
                  </div>
                )}
                <Button
                  type="button"
                  variant="ghost"
                  className="w-full justify-start text-primary"
                  onClick={() => setShowAddStop(true)}
                >
                  <Plus className="h-4 w-4 mr-2" />
                  Ajouter un arrêt
                </Button>
              </div>
            </div>

            <div className="space-y-2">
              <Label>Transmission</Label>
              <div className="flex gap-2">
                <Button
                  type="button"
                  variant="outline"
                  className="flex-1 bg-primary text-white hover:bg-primary/90"
                >
                  N'importe lequel
                </Button>
                <Button type="button" variant="outline" className="flex-1">
                  Manuel
                </Button>
                <Button type="button" variant="outline" className="flex-1">
                  Automatique
                </Button>
              </div>
            </div>

            <div className="space-y-2">
              <Label>Type de véhicule</Label>
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

            <div className="space-y-2">
              <Label>Des places</Label>
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

            <div className="space-y-2">
              <Label>Remarques</Label>
              <Textarea className="h-20 resize-none" />
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
