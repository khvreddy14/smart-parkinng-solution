import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { 
  MapPin, Clock, Shield, CreditCard, Smartphone, 
  Users, ChevronRight, Star, Zap, Search
} from "lucide-react";
import { useState } from "react";

export default function Home() {
  const [searchLocation, setSearchLocation] = useState("");

  const features = [
    {
      icon: <Search className="h-6 w-6" />,
      title: "Smart Search",
      description: "Find available parking spots instantly with our AI-powered search engine."
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Real-Time Availability",
      description: "Live updates on parking spot availability across the city."
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Advance Booking",
      description: "Reserve your spot hours or days in advance. Never circle the block again."
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Secure Parking",
      description: "All parking locations are verified and monitored for your safety."
    },
    {
      icon: <CreditCard className="h-6 w-6" />,
      title: "Easy Payment",
      description: "Seamless payment process with multiple payment options available."
    },
    {
      icon: <Smartphone className="h-6 w-6" />,
      title: "Mobile First",
      description: "Access everything from your phone - find, book, and pay on the go."
    }
  ];

  const stats = [
    { value: "50K+", label: "Active Users" },
    { value: "1000+", label: "Parking Spots" },
    { value: "98%", label: "Satisfaction Rate" },
    { value: "24/7", label: "Support" }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Daily Commuter",
      content: "SmartPark has completely changed my morning routine. I book my spot the night before and never worry about parking anymore!",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "Business Owner",
      content: "The advance booking feature is a game-changer for our client meetings. Professional and reliable service.",
      rating: 5
    },
    {
      name: "Emily Rodriguez",
      role: "Event Organizer",
      content: "Managing parking for large events has never been easier. The bulk booking system works flawlessly.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero opacity-10" />
        <div className="container mx-auto px-4 py-20 lg:py-32 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6">
              <Zap className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-primary">Smart Parking Made Simple</span>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 bg-gradient-hero bg-clip-text text-transparent">
              Find & Book Parking Spots in Seconds
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Never waste time searching for parking again. SmartPark connects you to thousands of parking spots with real-time availability and instant booking.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto mb-8">
              <div className="flex flex-col sm:flex-row gap-4 p-2 bg-white rounded-xl shadow-xl border border-border">
                <div className="flex-1 flex items-center gap-2 px-4">
                  <MapPin className="h-5 w-5 text-muted-foreground" />
                  <input
                    type="text"
                    placeholder="Enter location or address..."
                    value={searchLocation}
                    onChange={(e) => setSearchLocation(e.target.value)}
                    className="flex-1 py-3 outline-none text-foreground placeholder:text-muted-foreground bg-transparent"
                  />
                </div>
                <Link to="/find-parking">
                  <Button variant="hero" size="lg" className="w-full sm:w-auto">
                    Find Parking
                    <ChevronRight className="h-5 w-5" />
                  </Button>
                </Link>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/signup">
                <Button variant="hero" size="xl">
                  Get Started Free
                </Button>
              </Link>
              <Link to="/about">
                <Button variant="outline" size="xl">
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-b from-primary/5 to-transparent">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-primary mb-2">
                  {stat.value}
                </div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Why Choose SmartPark?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Experience the future of parking with our innovative features designed to save you time and money.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-all duration-300 hover:scale-105 bg-gradient-card">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 text-primary">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-b from-transparent to-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Loved by Thousands
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              See what our users have to say about their SmartPark experience.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-all duration-300">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-warning text-warning" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4">"{testimonial.content}"</p>
                <div>
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <Card className="p-12 text-center bg-gradient-hero text-primary-foreground">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Ready to Start Parking Smarter?
            </h2>
            <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
              Join thousands of drivers who've already discovered the easiest way to park. Sign up today and get your first booking free!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/signup">
                <Button variant="glass" size="xl">
                  Sign Up Now - It's Free
                </Button>
              </Link>
              <Link to="/find-parking">
                <Button variant="outline" size="xl" className="bg-white/10 border-white/20 text-white hover:bg-white/20">
                  Browse Parking Spots
                </Button>
              </Link>
            </div>
          </Card>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}