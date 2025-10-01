import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { 
  Target, Eye, Heart, Users, 
  Award, Globe, Zap, Shield 
} from "lucide-react";

export default function About() {
  const values = [
    {
      icon: <Heart className="h-6 w-6" />,
      title: "Customer First",
      description: "Your parking experience is our top priority. We're committed to making it seamless."
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Innovation",
      description: "Leveraging cutting-edge technology to revolutionize urban parking solutions."
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Security",
      description: "Your safety and data privacy are paramount in everything we do."
    },
    {
      icon: <Globe className="h-6 w-6" />,
      title: "Sustainability",
      description: "Reducing urban congestion and emissions through smart parking management."
    }
  ];

  const team = [
    {
      name: "Sarah Chen",
      role: "CEO & Founder",
      image: "https://ui-avatars.com/api/?name=Sarah+Chen&background=3b82f6&color=fff"
    },
    {
      name: "Michael Rodriguez",
      role: "CTO",
      image: "https://ui-avatars.com/api/?name=Michael+Rodriguez&background=3b82f6&color=fff"
    },
    {
      name: "Emily Johnson",
      role: "Head of Operations",
      image: "https://ui-avatars.com/api/?name=Emily+Johnson&background=3b82f6&color=fff"
    },
    {
      name: "David Kim",
      role: "Head of Product",
      image: "https://ui-avatars.com/api/?name=David+Kim&background=3b82f6&color=fff"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-primary/5 to-transparent">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Transforming Urban Parking
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              SmartPark is on a mission to eliminate parking frustration in cities worldwide. 
              We believe that finding a parking spot should be as easy as ordering a coffee.
            </p>
            <div className="flex gap-4 justify-center">
              <Link to="/signup">
                <Button variant="hero" size="lg">Join Our Mission</Button>
              </Link>
              <Link to="/find-parking">
                <Button variant="outline" size="lg">Find Parking</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Mission & Vision */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <Card className="p-8 hover:shadow-lg transition-all">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Target className="h-6 w-6 text-primary" />
                </div>
                <h2 className="text-2xl font-bold">Our Mission</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                To create a world where parking is no longer a source of stress and wasted time. 
                We're building the infrastructure that connects drivers with available parking 
                spaces instantly, making urban mobility more efficient and sustainable.
              </p>
            </Card>
            
            <Card className="p-8 hover:shadow-lg transition-all">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Eye className="h-6 w-6 text-primary" />
                </div>
                <h2 className="text-2xl font-bold">Our Vision</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                To be the global leader in smart parking solutions, powering the future of 
                urban transportation. We envision cities where every parking space is utilized 
                efficiently, reducing congestion and environmental impact.
              </p>
            </Card>
          </div>
        </div>
      </section>
      
      {/* Values */}
      <section className="py-20 bg-gradient-to-b from-transparent to-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Core Values</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              These principles guide everything we do at SmartPark
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-lg transition-all hover:scale-105">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4 text-primary">
                  {value.icon}
                </div>
                <h3 className="text-lg font-semibold mb-2">{value.title}</h3>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      {/* Team */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Meet Our Team</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Passionate professionals dedicated to solving urban parking challenges
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-lg transition-all hover:scale-105">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-24 h-24 rounded-full mx-auto mb-4 shadow-md"
                />
                <h3 className="text-lg font-semibold">{member.name}</h3>
                <p className="text-sm text-muted-foreground">{member.role}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      {/* Stats */}
      <section className="py-20 bg-gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">50K+</div>
              <div className="opacity-90">Happy Drivers</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">1M+</div>
              <div className="opacity-90">Parking Sessions</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">100+</div>
              <div className="opacity-90">Partner Locations</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">4.8/5</div>
              <div className="opacity-90">User Rating</div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}