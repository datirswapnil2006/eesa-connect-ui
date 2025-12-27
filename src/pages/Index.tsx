import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { RoleBadge } from "@/components/RoleBadge";

import {
  Zap,
  Users,
  MessageSquare,
  BookOpen,
  Image,
  ArrowRight,
  Cpu,
  CircuitBoard,
  Radio,
} from "lucide-react";

import "@/styles/avatar-fix.css";

/* DATA */

const features = [
  {
    icon: Users,
    title: "Community",
    description:
      "Connect with fellow electronics enthusiasts, share knowledge, and grow together.",
  },
  {
    icon: MessageSquare,
    title: "Forums",
    description:
      "Discuss IT development, core electronics, and career opportunities.",
  },
  {
    icon: BookOpen,
    title: "Blog",
    description:
      "Read articles from faculty and industry experts on cutting-edge topics.",
  },
  {
    icon: Image,
    title: "Gallery",
    description:
      "Browse photos from events, workshops, and project showcases.",
  },
];

const teamHighlights = [
  { name: "Dr. G. R. Bamnote", position: "Principal of PRMITR", role: "faculty", image: "/Images/Principal.jpg" },
  { name: "Dr. S. V. Pattalwar", position: "HOD of Electronics and Telecommunication Engineering", role: "faculty", image: "/Images/HOD.jpg" },
  { name: "Dr. A. I. Rokade", position: "Faculty advisor of EESA", role: "faculty", image: "/Images/AIR.jpg" },
  { name: "Dr. N. S. Wadhe", position: "Faculty coordinator of Career Development Forum", role: "faculty", image: "/Images/Wadhe sir.jpg" },
  { name: "Prof. S. A. Nirmal", position: "Faculty coordinator of Core Electronics", role: "faculty", image: "/Images/Nirmal sir.jpg" },
  { name: "Prof. A. B. Pardikar", position: "Faculty coordinator of IT Development Forum", role: "faculty", image: "/Images/Pardikar sir.jpg" },
  { name: "Dhruv Shinde", position: "President of EESA", role: "member", image: "/Images/Dhruv.jpg" },
  { name: "Duhita Bute", position: "Vice President of EESA", role: "member", image: "/Images/Duhita.jpg" },
  { name: "Swapnil Datir", position: "Secretary of EESA", role: "member", image: "/Images/Swapnil.jpg" },
  { name: "Bhavesh Kale", position: "Treasurer of EESA", role: "member", image: "/Images/Bhavesh.jpg" },
  { name: "Gauri Dharao", position: "Chairman of Career Development Forum", role: "member", image: "/Images/Gauri.jpg" },
  { name: "Omkar Pimpalgaonkar", position: "Chairman of Core Electronics", role: "member", image: "/Images/Omkar.jpg" },
  { name: "Mayureshwar Shendre", position: "Chairman of IT Development Forum", role: "member", image: "/Images/Mayureshwar.jpg" },
  { name: "Parth Zadey", position: "Social Media Head of EESA", role: "member", image: "/Images/Parth.jpg" },
  { name: "Pranav Bankar", position: "Tech Head of EESA", role: "member", image: "/Images/Pranav.jpg" },
];

const stats = [
  { value: "30+", label: "Members" },
  { value: "1+", label: "Projects" },
  { value: "1+", label: "Events" },
  { value: "25+", label: "Faculty" },
];

/*  COMPONENT  */

export default function Index() {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [selectedRole, setSelectedRole] = useState<"all" | "faculty" | "member">("all");

  const filteredTeam =
    selectedRole === "all"
      ? teamHighlights
      : teamHighlights.filter((p) => p.role === selectedRole);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* HERO  */}
      <section className="relative pt-16 overflow-hidden">
        <div className="absolute inset-0 gradient-hero opacity-95" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="min-h-[85vh] flex flex-col justify-center items-center text-center py-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/10 border border-primary-foreground/20 mb-6">
              <Zap className="w-4 h-4 text-accent" />
              <span className="text-sm font-medium text-primary-foreground">
                Welcome to EESA
              </span>
            </div>

            <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground max-w-4xl">
              Electronics Engineering
              <span className="block text-white">
                Student Association
              </span>
            </h1>

            <p className="mt-6 text-lg md:text-xl text-primary-foreground/80 max-w-2xl">
              Building the future of technology, one circuit at a time.
            </p>

            <div className="mt-10 flex gap-4">
              <Link to="/signup">
                <Button size="lg" className="bg-accent text-accent-foreground px-8">
                  Join EESA <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
              <Link to="/about">
                <Button size="lg" variant="outline">
                  Learn More
                </Button>
              </Link>
            </div>

            {/* Floating Icons */}
            <Cpu className="absolute left-[10%] top-1/3 opacity-20 w-16 h-16 animate-float" />
            <CircuitBoard className="absolute right-[15%] top-1/4 opacity-20 w-20 h-20 animate-float" />
            <Radio className="absolute left-[20%] bottom-1/4 opacity-20 w-12 h-12 animate-float" />
          </div>
        </div>
      </section>

      {/* STATS  */}
      <section className="py-16">
        <div className="container mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {stats.map((s, i) => (
            <div key={i}>
              <div className="text-4xl font-bold text-primary">{s.value}</div>
              <div className="text-muted-foreground">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* FEATURES  */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => {
            const Icon = f.icon;
            return (
              <Card key={i} className="card-elevated">
                <CardContent className="p-6">
                  <Icon className="w-8 h-8 mb-4 text-primary" />
                  <h3 className="font-semibold">{f.title}</h3>
                  <p className="text-sm text-muted-foreground">{f.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>

      {/* TEAM */}
      <section className="py-20">
        <div className="container mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold">Meet Our Community</h2>
            <div className="mt-4 flex justify-center gap-3">
              {["all", "faculty", "member"].map((r) => (
                <Button
                  key={r}
                  variant={selectedRole === r ? "default" : "outline"}
                  onClick={() => setSelectedRole(r as any)}
                >
                  {r.charAt(0).toUpperCase() + r.slice(1)}
                </Button>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {filteredTeam.map((m, i) => (
              <Card key={i} className="card-elevated text-center">
                <CardContent className="p-6">
                  <Avatar className="w-24 h-24 mx-auto border-4 border-primary/10">
                    <AvatarImage
                      src={m.image}
                      alt={m.name}
                      className="object-cover object-top"
                    />
                    <AvatarFallback>
                      {m.name.charAt(0)}
                    </AvatarFallback>
                  </Avatar>

                  <h3 className="mt-4 font-semibold">{m.name}</h3>
                  <p className="text-sm text-muted-foreground">{m.position}</p>
                  <RoleBadge role={m.role as any} size="sm" />
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
