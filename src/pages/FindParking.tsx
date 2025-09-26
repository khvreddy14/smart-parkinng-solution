import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ParkingSpotCard } from "@/components/ParkingSpotCard";
import { Map } from "@/components/Map";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Card } from "@/components/ui/card";
import { Search, Filter, MapIcon, List, Navigation } from "lucide-react";

export default function FindParking() {
  const [searchQuery, setSearchQuery] = useState("");
  const [viewMode, setViewMode] = useState<"list" | "map">("list");
  const [priceRange, setPriceRange] = useState([0, 20]);
  const [selectedType, setSelectedType] = useState("all");
  const [showFilters, setShowFilters] = useState(false);

  // Mock data for parking spots
  const parkingSpots = [
    {
      id: "1",
      name: "Downtown Plaza Parking",
      address: "123 Main St, Downtown",
      availableSpots: 45,
      totalSpots: 100,
      pricePerHour: 8,
      distance: "0.5 miles",
      type: "covered" as const,
      status: "available" as const,
      position: [37.7749, -122.4194] as [number, number]
    },
    {
      id: "2",
      name: "Central Station Lot",
      address: "456 Market St",
      availableSpots: 5,
      totalSpots: 80,
      pricePerHour: 12,
      distance: "0.8 miles",
      type: "open" as const,
      status: "limited" as const,
      position: [37.7849, -122.4094] as [number, number]
    },
    {
      id: "3",
      name: "VIP Executive Parking",
      address: "789 Business Ave",
      availableSpots: 20,
      totalSpots: 30,
      pricePerHour: 25,
      distance: "1.2 miles",
      type: "vip" as const,
      status: "available" as const,
      position: [37.7649, -122.4294] as [number, number]
    },
    {
      id: "4",
      name: "Airport Terminal Parking",
      address: "Airport Blvd",
      availableSpots: 0,
      totalSpots: 200,
      pricePerHour: 15,
      distance: "5.5 miles",
      type: "covered" as const,
      status: "full" as const,
      position: [37.7549, -122.4394] as [number, number]
    },
    {
      id: "5",
      name: "Shopping Mall Garage",
      address: "321 Shopping Way",
      availableSpots: 120,
      totalSpots: 300,
      pricePerHour: 5,
      distance: "2.1 miles",
      type: "covered" as const,
      status: "available" as const,
      position: [37.7949, -122.3994] as [number, number]
    },
    {
      id: "6",
      name: "Beach Side Parking",
      address: "Ocean View Dr",
      availableSpots: 8,
      totalSpots: 50,
      pricePerHour: 10,
      distance: "3.2 miles",
      type: "open" as const,
      status: "limited" as const,
      position: [37.7449, -122.4494] as [number, number]
    }
  ];

  const handleBooking = (id: string) => {
    console.log(`Booking parking spot ${id}`);
    // Navigate to booking page
  };

  const mapMarkers = parkingSpots.map(spot => ({
    id: spot.id,
    position: spot.position,
    title: spot.name,
    available: spot.availableSpots,
    total: spot.totalSpots,
    price: spot.pricePerHour
  }));

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      
      <div className="flex-1 container mx-auto px-4 py-8">
        {/* Search and Filters Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-6">Find Your Perfect Parking Spot</h1>
          
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Search Bar */}
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="Search by location, address, or parking name..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 h-12 text-base"
                />
              </div>
            </div>
            
            {/* Action Buttons */}
            <div className="flex gap-2">
              <Button
                variant="outline"
                size="lg"
                onClick={() => setShowFilters(!showFilters)}
              >
                <Filter className="h-5 w-5" />
                Filters
              </Button>
              
              <Button
                variant="outline"
                size="lg"
                onClick={() => {}}
                className="hidden sm:flex"
              >
                <Navigation className="h-5 w-5" />
                Use My Location
              </Button>
              
              <div className="flex gap-1 p-1 bg-secondary rounded-lg">
                <Button
                  variant={viewMode === "list" ? "default" : "ghost"}
                  size="sm"
                  onClick={() => setViewMode("list")}
                >
                  <List className="h-4 w-4" />
                </Button>
                <Button
                  variant={viewMode === "map" ? "default" : "ghost"}
                  size="sm"
                  onClick={() => setViewMode("map")}
                >
                  <MapIcon className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Filters Panel */}
        {showFilters && (
          <Card className="p-6 mb-8">
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <Label htmlFor="type" className="mb-2 block">Parking Type</Label>
                <Select value={selectedType} onValueChange={setSelectedType}>
                  <SelectTrigger id="type">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Types</SelectItem>
                    <SelectItem value="covered">Covered</SelectItem>
                    <SelectItem value="open">Open</SelectItem>
                    <SelectItem value="vip">VIP</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <Label className="mb-2 block">
                  Price Range: ${priceRange[0]} - ${priceRange[1]}/hr
                </Label>
                <Slider
                  value={priceRange}
                  onValueChange={setPriceRange}
                  min={0}
                  max={50}
                  step={1}
                  className="mt-2"
                />
              </div>
              
              <div>
                <Label htmlFor="availability" className="mb-2 block">Availability</Label>
                <Select defaultValue="all">
                  <SelectTrigger id="availability">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All</SelectItem>
                    <SelectItem value="available">Available Now</SelectItem>
                    <SelectItem value="limited">Limited Spots</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            
            <div className="flex gap-2 mt-6">
              <Button variant="hero" size="sm">Apply Filters</Button>
              <Button variant="outline" size="sm">Clear All</Button>
            </div>
          </Card>
        )}
        
        {/* Results Section */}
        <div className="flex gap-2 items-center mb-4">
          <span className="text-sm text-muted-foreground">
            Found {parkingSpots.length} parking spots near you
          </span>
        </div>
        
        {viewMode === "list" ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {parkingSpots.map((spot) => (
              <ParkingSpotCard
                key={spot.id}
                {...spot}
                onBook={handleBooking}
              />
            ))}
          </div>
        ) : (
          <div className="grid lg:grid-cols-2 gap-6">
            <div className="order-2 lg:order-1">
              <Map 
                markers={mapMarkers}
                className="h-[600px] sticky top-20"
              />
            </div>
            <div className="order-1 lg:order-2 space-y-4 h-[600px] overflow-y-auto pr-2">
              {parkingSpots.map((spot) => (
                <ParkingSpotCard
                  key={spot.id}
                  {...spot}
                  onBook={handleBooking}
                />
              ))}
            </div>
          </div>
        )}
      </div>
      
      <Footer />
    </div>
  );
}