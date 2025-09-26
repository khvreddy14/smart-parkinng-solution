import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Clock, DollarSign, Car } from "lucide-react";
import { cn } from "@/lib/utils";

interface ParkingSpotCardProps {
  id: string;
  name: string;
  address: string;
  availableSpots: number;
  totalSpots: number;
  pricePerHour: number;
  distance?: string;
  type: "covered" | "open" | "vip";
  status: "available" | "limited" | "full";
  onBook?: (id: string) => void;
}

export function ParkingSpotCard({
  id,
  name,
  address,
  availableSpots,
  totalSpots,
  pricePerHour,
  distance,
  type,
  status,
  onBook
}: ParkingSpotCardProps) {
  const occupancyPercentage = ((totalSpots - availableSpots) / totalSpots) * 100;
  
  const getStatusColor = () => {
    if (status === "available") return "bg-success text-success-foreground";
    if (status === "limited") return "bg-warning text-warning-foreground";
    return "bg-destructive text-destructive-foreground";
  };
  
  const getStatusText = () => {
    if (status === "available") return `${availableSpots} spots available`;
    if (status === "limited") return `Only ${availableSpots} spots left`;
    return "Full";
  };
  
  return (
    <Card className="p-6 hover:shadow-lg transition-all duration-300 hover:scale-[1.02] bg-gradient-card">
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-foreground mb-2">{name}</h3>
          <div className="flex items-center gap-2 text-muted-foreground text-sm mb-2">
            <MapPin className="h-4 w-4" />
            <span>{address}</span>
          </div>
          {distance && (
            <div className="text-sm text-primary font-medium">{distance} away</div>
          )}
        </div>
        <Badge className={cn("capitalize", getStatusColor())}>
          {type}
        </Badge>
      </div>
      
      {/* Occupancy Bar */}
      <div className="mb-4">
        <div className="flex items-center justify-between text-sm mb-2">
          <span className="text-muted-foreground">Occupancy</span>
          <span className={cn("font-medium", getStatusColor())}>
            {getStatusText()}
          </span>
        </div>
        <div className="h-2 bg-muted rounded-full overflow-hidden">
          <div 
            className={cn(
              "h-full transition-all duration-500",
              status === "available" && "bg-success",
              status === "limited" && "bg-warning",
              status === "full" && "bg-destructive"
            )}
            style={{ width: `${occupancyPercentage}%` }}
          />
        </div>
      </div>
      
      {/* Info Row */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1">
            <Car className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm font-medium">{totalSpots} total</span>
          </div>
          <div className="flex items-center gap-1">
            <DollarSign className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm font-medium">${pricePerHour}/hr</span>
          </div>
        </div>
      </div>
      
      {/* Action Button */}
      <Button 
        variant={status === "full" ? "outline" : "hero"}
        size="sm"
        className="w-full"
        disabled={status === "full"}
        onClick={() => onBook && onBook(id)}
      >
        {status === "full" ? "Full - Join Waitlist" : "Book Now"}
      </Button>
    </Card>
  );
}