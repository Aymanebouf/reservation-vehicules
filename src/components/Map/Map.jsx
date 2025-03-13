
import { useEffect, useRef } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";

const Map = () => {
  const mapContainer = useRef(null);
  const map = useRef(null);

  useEffect(() => {
    if (!mapContainer.current) return;

    // Remplacez ceci par votre token Mapbox
    mapboxgl.accessToken = "VOTRE_TOKEN_MAPBOX";

    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v12",
      center: [2.3522, 48.8566], // Paris
      zoom: 5,
    });

    const nav = new mapboxgl.NavigationControl();
    map.current.addControl(nav, "top-right");

    return () => {
      map.current?.remove();
    };
  }, []);

  return (
    <div className="h-full rounded-lg overflow-hidden border">
      <div ref={mapContainer} className="h-full w-full" />
    </div>
  );
};

export default Map;
