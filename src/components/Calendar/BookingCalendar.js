
import React, { useState } from 'react';
import { Calendar } from 'primereact/calendar';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import { Dropdown } from 'primereact/dropdown';
import { InputText } from 'primereact/inputtext';

export const BookingCalendar = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedVehicle, setSelectedVehicle] = useState(null);
  const [bookingName, setBookingName] = useState('');

  const vehicles = [
    { name: 'Voiture 1', id: 1 },
    { name: 'Camion 2', id: 2 },
    { name: 'Utilitaire 3', id: 3 }
  ];

  const handleBooking = () => {
    if (selectedDate && selectedVehicle && bookingName) {
      alert(`Réservation confirmée pour ${bookingName} le ${selectedDate.toLocaleDateString()} avec ${selectedVehicle.name}`);
    } else {
      alert('Veuillez remplir tous les champs');
    }
  };

  return (
    <div className="p-4">
      <Card title="Système de Réservation de Véhicules" className="mb-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-field">
            <label htmlFor="calendar" className="block mb-2">Date de réservation</label>
            <Calendar 
              id="calendar" 
              value={selectedDate} 
              onChange={(e) => setSelectedDate(e.value)} 
              showIcon 
              className="w-full"
            />
          </div>
          
          <div className="p-field">
            <label htmlFor="vehicle" className="block mb-2">Sélectionner un véhicule</label>
            <Dropdown 
              id="vehicle" 
              value={selectedVehicle} 
              options={vehicles} 
              onChange={(e) => setSelectedVehicle(e.value)} 
              optionLabel="name" 
              placeholder="Choisir un véhicule" 
              className="w-full"
            />
          </div>
          
          <div className="p-field col-span-1 md:col-span-2">
            <label htmlFor="name" className="block mb-2">Nom du demandeur</label>
            <InputText 
              id="name" 
              value={bookingName} 
              onChange={(e) => setBookingName(e.target.value)} 
              className="w-full"
            />
          </div>
          
          <div className="col-span-1 md:col-span-2 flex justify-end">
            <Button 
              label="Confirmer la réservation" 
              icon="pi pi-check" 
              onClick={handleBooking} 
              disabled={!selectedDate || !selectedVehicle || !bookingName}
            />
          </div>
        </div>
      </Card>
      
      {selectedDate && selectedVehicle && (
        <Card title="Aperçu de la réservation" className="mt-4">
          <div className="flex flex-col gap-2">
            <p><strong>Date:</strong> {selectedDate.toLocaleDateString()}</p>
            <p><strong>Véhicule:</strong> {selectedVehicle.name}</p>
            <p><strong>Demandeur:</strong> {bookingName || 'Non spécifié'}</p>
          </div>
        </Card>
      )}
    </div>
  );
};
