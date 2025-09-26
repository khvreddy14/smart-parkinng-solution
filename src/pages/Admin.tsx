import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { 
  Car, Users, DollarSign, TrendingUp, 
  Plus, Edit, Trash2, Search, Filter,
  BarChart3, Calendar, MapPin, Settings
} from "lucide-react";

export default function Admin() {
  const [searchQuery, setSearchQuery] = useState("");
  
  // Mock data
  const stats = [
    {
      title: "Total Revenue",
      value: "$45,231",
      change: "+12.5%",
      icon: <DollarSign className="h-5 w-5" />
    },
    {
      title: "Active Users",
      value: "2,345",
      change: "+8.2%",
      icon: <Users className="h-5 w-5" />
    },
    {
      title: "Parking Spots",
      value: "1,234",
      change: "+3.1%",
      icon: <Car className="h-5 w-5" />
    },
    {
      title: "Bookings Today",
      value: "432",
      change: "+15.3%",
      icon: <TrendingUp className="h-5 w-5" />
    }
  ];
  
  const parkingSpots = [
    {
      id: "1",
      name: "Downtown Plaza Parking",
      location: "123 Main St",
      totalSpots: 100,
      available: 45,
      price: "$8/hr",
      status: "active"
    },
    {
      id: "2",
      name: "Central Station Lot",
      location: "456 Market St",
      totalSpots: 80,
      available: 5,
      price: "$12/hr",
      status: "active"
    },
    {
      id: "3",
      name: "VIP Executive Parking",
      location: "789 Business Ave",
      totalSpots: 30,
      available: 20,
      price: "$25/hr",
      status: "active"
    }
  ];
  
  const bookings = [
    {
      id: "B001",
      user: "John Doe",
      spot: "Downtown Plaza",
      date: "2024-01-15",
      duration: "2 hours",
      amount: "$16",
      status: "completed"
    },
    {
      id: "B002",
      user: "Jane Smith",
      spot: "Central Station",
      date: "2024-01-15",
      duration: "4 hours",
      amount: "$48",
      status: "active"
    },
    {
      id: "B003",
      user: "Mike Johnson",
      spot: "VIP Executive",
      date: "2024-01-15",
      duration: "1 hour",
      amount: "$25",
      status: "pending"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      
      <div className="flex-1 container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Admin Dashboard</h1>
          <p className="text-muted-foreground">Manage your parking platform</p>
        </div>
        
        {/* Stats Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-all">
              <div className="flex items-center justify-between mb-4">
                <div className="p-2 bg-primary/10 rounded-lg text-primary">
                  {stat.icon}
                </div>
                <Badge variant="outline" className="text-success">
                  {stat.change}
                </Badge>
              </div>
              <div className="text-2xl font-bold mb-1">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.title}</div>
            </Card>
          ))}
        </div>
        
        {/* Tabs */}
        <Tabs defaultValue="spots" className="space-y-6">
          <TabsList className="grid w-full max-w-md grid-cols-4">
            <TabsTrigger value="spots">Parking Spots</TabsTrigger>
            <TabsTrigger value="bookings">Bookings</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
            <TabsTrigger value="settings">Settings</TabsTrigger>
          </TabsList>
          
          {/* Parking Spots Tab */}
          <TabsContent value="spots" className="space-y-6">
            <Card className="p-6">
              <div className="flex flex-col lg:flex-row justify-between gap-4 mb-6">
                <div className="flex gap-2">
                  <div className="relative flex-1 max-w-sm">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      type="text"
                      placeholder="Search parking spots..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="pl-9"
                    />
                  </div>
                  <Button variant="outline" size="icon">
                    <Filter className="h-4 w-4" />
                  </Button>
                </div>
                <Button variant="hero">
                  <Plus className="h-4 w-4" />
                  Add Parking Spot
                </Button>
              </div>
              
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Name</TableHead>
                      <TableHead>Location</TableHead>
                      <TableHead>Total Spots</TableHead>
                      <TableHead>Available</TableHead>
                      <TableHead>Price</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {parkingSpots.map((spot) => (
                      <TableRow key={spot.id}>
                        <TableCell className="font-medium">{spot.name}</TableCell>
                        <TableCell>{spot.location}</TableCell>
                        <TableCell>{spot.totalSpots}</TableCell>
                        <TableCell>
                          <span className={spot.available < 10 ? "text-warning" : "text-success"}>
                            {spot.available}
                          </span>
                        </TableCell>
                        <TableCell>{spot.price}</TableCell>
                        <TableCell>
                          <Badge variant={spot.status === "active" ? "default" : "secondary"}>
                            {spot.status}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <div className="flex gap-1">
                            <Button variant="ghost" size="icon">
                              <Edit className="h-4 w-4" />
                            </Button>
                            <Button variant="ghost" size="icon">
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </Card>
          </TabsContent>
          
          {/* Bookings Tab */}
          <TabsContent value="bookings" className="space-y-6">
            <Card className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-semibold">Recent Bookings</h2>
                <Button variant="outline" size="sm">
                  <Calendar className="h-4 w-4" />
                  Filter by Date
                </Button>
              </div>
              
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Booking ID</TableHead>
                      <TableHead>User</TableHead>
                      <TableHead>Parking Spot</TableHead>
                      <TableHead>Date</TableHead>
                      <TableHead>Duration</TableHead>
                      <TableHead>Amount</TableHead>
                      <TableHead>Status</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {bookings.map((booking) => (
                      <TableRow key={booking.id}>
                        <TableCell className="font-mono">{booking.id}</TableCell>
                        <TableCell>{booking.user}</TableCell>
                        <TableCell>{booking.spot}</TableCell>
                        <TableCell>{booking.date}</TableCell>
                        <TableCell>{booking.duration}</TableCell>
                        <TableCell className="font-semibold">{booking.amount}</TableCell>
                        <TableCell>
                          <Badge 
                            variant={
                              booking.status === "completed" ? "default" :
                              booking.status === "active" ? "outline" : 
                              "secondary"
                            }
                            className={
                              booking.status === "active" ? "border-success text-success" : ""
                            }
                          >
                            {booking.status}
                          </Badge>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </Card>
          </TabsContent>
          
          {/* Analytics Tab */}
          <TabsContent value="analytics" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <BarChart3 className="h-5 w-5 text-primary" />
                  <h3 className="text-lg font-semibold">Revenue Overview</h3>
                </div>
                <div className="h-64 flex items-center justify-center bg-secondary/30 rounded-lg">
                  <span className="text-muted-foreground">Revenue Chart Placeholder</span>
                </div>
              </Card>
              
              <Card className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <TrendingUp className="h-5 w-5 text-primary" />
                  <h3 className="text-lg font-semibold">Booking Trends</h3>
                </div>
                <div className="h-64 flex items-center justify-center bg-secondary/30 rounded-lg">
                  <span className="text-muted-foreground">Booking Trends Chart</span>
                </div>
              </Card>
            </div>
          </TabsContent>
          
          {/* Settings Tab */}
          <TabsContent value="settings" className="space-y-6">
            <Card className="p-6">
              <div className="flex items-center gap-2 mb-6">
                <Settings className="h-5 w-5 text-primary" />
                <h2 className="text-xl font-semibold">Platform Settings</h2>
              </div>
              
              <div className="space-y-4 max-w-2xl">
                <div>
                  <Label htmlFor="platformName">Platform Name</Label>
                  <Input id="platformName" defaultValue="SmartPark" className="mt-2" />
                </div>
                
                <div>
                  <Label htmlFor="supportEmail">Support Email</Label>
                  <Input id="supportEmail" type="email" defaultValue="support@smartpark.com" className="mt-2" />
                </div>
                
                <div>
                  <Label htmlFor="commission">Platform Commission (%)</Label>
                  <Input id="commission" type="number" defaultValue="15" className="mt-2" />
                </div>
                
                <div>
                  <Label htmlFor="currency">Default Currency</Label>
                  <Input id="currency" defaultValue="USD" className="mt-2" />
                </div>
                
                <Button variant="hero">Save Settings</Button>
              </div>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
      
      <Footer />
    </div>
  );
}