
import React from "react";
import { Button } from 'primereact/button';
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold mb-4">Page non trouvée</h1>
      <p className="mb-8">La page que vous recherchez n'existe pas.</p>
      <Button 
        label="Retour à l'accueil" 
        icon="pi pi-home" 
        onClick={() => navigate("/")} 
      />
    </div>
  );
};

export default NotFound;
