
import React from "react";
import { Card } from "primereact/card";
import { Tag } from "primereact/tag";

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
      <div className="flex align-items-center justify-content-between mb-3">
        <h2 className="text-lg font-semibold">Véhicules</h2>
      </div>
      <div className="grid gap-4">
        {vehicles.map((vehicle) => (
          <Card key={vehicle.id} className="p-4">
            <div className="flex align-items-start justify-content-between">
              <div className="space-y-1">
                <div className="flex align-items-center gap-2">
                  <i className="pi pi-car text-500"></i>
                  <span className="font-medium">{vehicle.name}</span>
                </div>
                <div className="text-sm text-500">ID: {vehicle.id}</div>
                <div className="text-sm text-500">Type: {vehicle.type}</div>
              </div>
              <Tag 
                severity={vehicle.status === "Disponible" ? "success" : "warning"}
                value={vehicle.status}
              />
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};
