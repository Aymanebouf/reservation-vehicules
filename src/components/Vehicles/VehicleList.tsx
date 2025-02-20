
import { Card } from "@/components/ui/card";
import { CarFront } from "lucide-react";

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

export const VehicleList = () => {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold">Véhicules</h2>
        <button className="rounded-md bg-primary px-3 py-1 text-sm text-white transition-colors hover:bg-primary/90">
          Ajouter
        </button>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {vehicles.map((vehicle) => (
          <Card key={vehicle.id} className="p-4">
            <div className="flex items-start justify-between">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <CarFront className="h-5 w-5 text-slate-500" />
                  <span className="font-medium">{vehicle.name}</span>
                </div>
                <div className="text-sm text-slate-500">ID: {vehicle.id}</div>
                <div className="text-sm text-slate-500">Type: {vehicle.type}</div>
              </div>
              <div
                className={`rounded-full px-2 py-1 text-xs ${
                  vehicle.status === "Disponible"
                    ? "bg-green-100 text-green-700"
                    : "bg-yellow-100 text-yellow-700"
                }`}
              >
                {vehicle.status}
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};
