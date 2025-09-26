import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Calendar, Clock, MapPin, Car, 
  QrCode, Navigation, CreditCard, 
  CheckCircle, XCircle, AlertCircle 
} from "lucide-react";

export default function Bookings() {
  const [activeTab, setActiveTab] = useState("active");
  
  // Mock booking data
  const activeBookings = [
    {
      id: "BK001",
      parkingSpot: "Downtown Plaza Parking",
      address: "123 Main St, Downtown",
      date: "Today",
      startTime: "2:00 PM",
      endTime: "6:00 PM",
      spotNumber: "A-42",
      price: "$32",
      status: "active"
    },
    {
      id: "BK002",
      parkingSpot: "Shopping Mall Garage",
      address: "321 Shopping Way",
      date: "Tomorrow",
      startTime: "10:00 AM",
      endTime: "2:00 PM",
      spotNumber: "B-15",
      price: "$20",
      status: "upcoming"
    }
  ];
  
  const pastBookings = [
    {
      id: "BK003",
      parkingSpot: "Central Station Lot",
      address: "456 Market St",
      date: "Jan 14, 2024",
      startTime: "9:00 AM",
      endTime: "5:00 PM",
      spotNumber: "C-08",
      price: "$96",
      status: "completed"
    },
    {
      id: "BK004",
      parkingSpot: "VIP Executive Parking",
      address: "789 Business Ave",
      date: "Jan 10, 2024",
      startTime: "1:00 PM",
      endTime: "3:00 PM",
      spotNumber: "VIP-02",
      price: "$50",
      status: "completed"
    },
    {
      id: "BK005",
      parkingSpot: "Beach Side Parking",
      address: "Ocean View Dr",
      date: "Jan 5, 2024",
      startTime: "11:00 AM",
      endTime: "4:00 PM",
      spotNumber: "D-23",
      price: "$50",
      status: "cancelled"
    }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "active":
        return <CheckCircle className="h-5 w-5 text-success" />;
      case "upcoming":
        return <AlertCircle className="h-5 w-5 text-warning" />;
      case "completed":
        return <CheckCircle className="h-5 w-5 text-muted-foreground" />;
      case "cancelled":
        return <XCircle className="h-5 w-5 text-destructive" />;
      default:
        return null;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active":
        return "success";
      case "upcoming":
        return "warning";
      case "completed":
        return "secondary";
      case "cancelled":
        return "destructive";
      default:
        return "default";
    }
  };

  const BookingCard = ({ booking, isActive = false }: any) => (
    <Card className="p-6 hover:shadow-lg transition-all duration-300">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-start gap-3">
          {getStatusIcon(booking.status)}
          <div>
            <h3 className="text-lg font-semibold mb-1">{booking.parkingSpot}</h3>
            <div className="flex items-center gap-2 text-muted-foreground text-sm">
              <MapPin className="h-4 w-4" />
              <span>{booking.address}</span>
            </div>
          </div>
        </div>
        <Badge variant={getStatusColor(booking.status) as any}>
          {booking.status}
        </Badge>
      </div>
      
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div className="flex items-center gap-2">
          <Calendar className="h-4 w-4 text-muted-foreground" />
          <span className="text-sm">{booking.date}</span>
        </div>
        <div className="flex items-center gap-2">
          <Clock className="h-4 w-4 text-muted-foreground" />
          <span className="text-sm">{booking.startTime} - {booking.endTime}</span>
        </div>
        <div className="flex items-center gap-2">
          <Car className="h-4 w-4 text-muted-foreground" />
          <span className="text-sm">Spot: {booking.spotNumber}</span>
        </div>
        <div className="flex items-center gap-2">
          <CreditCard className="h-4 w-4 text-muted-foreground" />
          <span className="text-sm font-semibold">{booking.price}</span>
        </div>
      </div>
      
      {isActive && (
        <div className="flex gap-2">
          <Button variant="hero" size="sm" className="flex-1">
            <QrCode className="h-4 w-4" />
            Show QR Code
          </Button>
          <Button variant="outline" size="sm" className="flex-1">
            <Navigation className="h-4 w-4" />
            Get Directions
          </Button>
          {booking.status === "upcoming" && (
            <Button variant="destructive" size="sm">
              Cancel
            </Button>
          )}
        </div>
      )}
      
      {!isActive && booking.status === "completed" && (
        <div className="flex gap-2">
          <Button variant="outline" size="sm" className="flex-1">
            View Receipt
          </Button>
          <Button variant="hero" size="sm" className="flex-1">
            Book Again
          </Button>
        </div>
      )}
    </Card>
  );

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      
      <div className="flex-1 container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">My Bookings</h1>
          <p className="text-muted-foreground">Manage and track all your parking reservations</p>
        </div>
        
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full max-w-md grid-cols-2">
            <TabsTrigger value="active">
              Active ({activeBookings.length})
            </TabsTrigger>
            <TabsTrigger value="past">
              Past ({pastBookings.length})
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="active" className="space-y-4">
            {activeBookings.length > 0 ? (
              activeBookings.map((booking) => (
                <BookingCard key={booking.id} booking={booking} isActive={true} />
              ))
            ) : (
              <Card className="p-12 text-center">
                <Car className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
                <h3 className="text-lg font-semibold mb-2">No Active Bookings</h3>
                <p className="text-muted-foreground mb-4">
                  You don't have any active parking reservations
                </p>
                <Button variant="hero">Find Parking Now</Button>
              </Card>
            )}
          </TabsContent>
          
          <TabsContent value="past" className="space-y-4">
            {pastBookings.length > 0 ? (
              pastBookings.map((booking) => (
                <BookingCard key={booking.id} booking={booking} isActive={false} />
              ))
            ) : (
              <Card className="p-12 text-center">
                <Clock className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
                <h3 className="text-lg font-semibold mb-2">No Past Bookings</h3>
                <p className="text-muted-foreground">
                  Your booking history will appear here
                </p>
              </Card>
            )}
          </TabsContent>
        </Tabs>
      </div>
      
      <Footer />
    </div>
  );
}