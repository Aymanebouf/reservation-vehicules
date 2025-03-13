
import React, { useState } from "react";
import { InputText } from "primereact/inputtext";
import { Dropdown } from "primereact/dropdown";
import { Calendar } from "primereact/calendar";
import { Button } from "primereact/button";

export const NewBookingForm = ({ vehicle, hour, onClose }) => {
  const [formData, setFormData] = useState({
    client: "",
    date: new Date(),
    startTime: hour || 8,
    endTime: (hour || 8) + 2,
    vehicleId: vehicle?.id || "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Formulaire soumis:", formData);
    // Ici vous pourriez appeler votre API pour enregistrer la réservation
    onClose && onClose();
  };

  const hourOptions = Array.from({ length: 24 }, (_, i) => ({ 
    label: `${i}:00`, 
    value: i 
  }));

  return (
    <div className="p-4">
      <form onSubmit={handleSubmit} className="flex flex-column gap-4">
        <div className="field">
          <label htmlFor="client" className="block mb-2">Client</label>
          <InputText
            id="client"
            name="client"
            value={formData.client}
            onChange={handleChange}
            className="w-full"
            required
          />
        </div>

        <div className="field">
          <label htmlFor="date" className="block mb-2">Date</label>
          <Calendar
            id="date"
            name="date"
            value={formData.date}
            onChange={(e) => setFormData((prev) => ({ ...prev, date: e.value }))}
            className="w-full"
            required
          />
        </div>

        <div className="formgrid grid">
          <div className="field col-6">
            <label htmlFor="startTime" className="block mb-2">Heure de début</label>
            <Dropdown
              id="startTime"
              name="startTime"
              value={formData.startTime}
              options={hourOptions}
              onChange={handleChange}
              className="w-full"
              required
            />
          </div>

          <div className="field col-6">
            <label htmlFor="endTime" className="block mb-2">Heure de fin</label>
            <Dropdown
              id="endTime"
              name="endTime"
              value={formData.endTime}
              options={hourOptions}
              onChange={handleChange}
              className="w-full"
              required
            />
          </div>
        </div>

        <div className="field">
          <label htmlFor="vehicleId" className="block mb-2">Véhicule</label>
          <InputText
            id="vehicleId"
            name="vehicleId"
            value={formData.vehicleId}
            onChange={handleChange}
            className="w-full"
            disabled={!!vehicle}
            required
          />
        </div>

        <div className="flex justify-content-end gap-2 mt-4">
          <Button
            label="Annuler"
            icon="pi pi-times"
            onClick={onClose}
            text
          />
          <Button
            label="Réserver"
            icon="pi pi-check"
            type="submit"
          />
        </div>
      </form>
    </div>
  );
};
