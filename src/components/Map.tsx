import { useEffect, useRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { MapPin } from "lucide-react";
import { renderToString } from "react-dom/server";

// Fix for default markers
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png",
  iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png",
  shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png",
});

interface MapProps {
  center?: [number, number];
  zoom?: number;
  markers?: Array<{
    id: string;
    position: [number, number];
    title: string;
    available: number;
    total: number;
    price: number;
  }>;
  className?: string;
}

export function Map({ 
  center = [37.7749, -122.4194], 
  zoom = 13, 
  markers = [],
  className = "h-[400px]"
}: MapProps) {
  const mapRef = useRef<L.Map | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current || mapRef.current) return;

    // Initialize map
    mapRef.current = L.map(containerRef.current).setView(center, zoom);

    // Add tile layer with a nice style
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      maxZoom: 19,
    }).addTo(mapRef.current);

    // Add markers
    markers.forEach((marker) => {
      const iconColor = marker.available > 5 ? "#22c55e" : marker.available > 0 ? "#f59e0b" : "#ef4444";
      
      const customIcon = L.divIcon({
        html: renderToString(
          <div className="relative">
            <div 
              className="absolute -translate-x-1/2 -translate-y-full flex items-center justify-center w-8 h-8 rounded-full shadow-lg"
              style={{ backgroundColor: iconColor }}
            >
              <MapPin className="h-4 w-4 text-white" />
            </div>
            <div 
              className="absolute -translate-x-1/2 top-0 w-1 h-1 rounded-full"
              style={{ backgroundColor: iconColor }}
            />
          </div>
        ),
        className: "",
        iconSize: [32, 32],
        iconAnchor: [16, 32],
      });

      const markerInstance = L.marker(marker.position, { icon: customIcon })
        .addTo(mapRef.current!);

      // Add popup
      markerInstance.bindPopup(
        `<div class="p-2">
          <h3 class="font-semibold">${marker.title}</h3>
          <p class="text-sm">Available: ${marker.available}/${marker.total}</p>
          <p class="text-sm">Price: $${marker.price}/hr</p>
        </div>`
      );
    });

    return () => {
      if (mapRef.current) {
        mapRef.current.remove();
        mapRef.current = null;
      }
    };
  }, [center, zoom, markers]);

  return (
    <div 
      ref={containerRef} 
      className={`rounded-lg shadow-lg overflow-hidden ${className}`}
    />
  );
}