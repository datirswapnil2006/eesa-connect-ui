// src/pages/Index.tsx
import { events as allEvents } from "@/lib/events";
import EventCard from "@/components/EventCard";
import { useAuth } from "@/context/AuthContext";
import { useNavigate, Link } from "react-router-dom";

import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { RoleBadge } from '@/components/RoleBadge';
import "@/styles/avatar-fix.css";

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
} from 'lucide-react';

import React, { useState } from 'react';


const features = [
  {
    icon: Users,
    title: 'Community',
    description: 'Connect with fellow electronics enthusiasts, share knowledge, and grow together.',
  },
  {
    icon: MessageSquare,
    title: 'Forums',
    description: 'Discuss IT development, core electronics, and career opportunities.',
  },
  {
    icon: BookOpen,
    title: 'Blog',
    description: 'Read articles from faculty and industry experts on cutting-edge topics.',
  },
  {
    icon: Image,
    title: 'Gallery',
    description: 'Browse photos from events, workshops, and project showcases.',
  },
];

const teamHighlights = [
  { name: 'Dr. G. R. Bamnote', position: 'Principal of PRMITR', role: 'faculty', image: '/Images/Principal.jpg' },
  { name: 'Dr. S. V. Pattalwar', position: 'HOD of Electronics and Telecommunication Engineering', role: 'faculty', image: '/Images/HOD.jpg' },
  { name: 'Dr. A. I. Rokade', position: 'Faculty advisor of EESA', role: 'faculty', image: '/Images/AIR.jpg' },
  { name: 'Dr. N. S. Wadhe', position: 'Faculty coordinator of Career Development Forum', role: 'faculty', image: '/Images/Wadhe sir.jpg' },
  { name: 'Prof. S. A. Nirmal', position: 'Faculty coordinator of Core Electronics', role: 'faculty', image: '/Images/Nirmal sir.jpg' },
  { name: 'Prof. A. B. Pardikar', position: 'Faculty coordinator of IT Development Forum', role: 'faculty', image: '/Images/Pardikar sir.jpg' },
  { name: 'Dhruv Shinde', position: 'President of EESA', role: 'member', image: '/Images/Dhruv.jpg' },
  { name: 'Duhita Bute', position: 'Vice President of EESA', role: 'member', image: '/Images/Duhita.jpg' },
  { name: 'Swapnil Datir', position: 'Secretary of EESA', role: 'member', image: '/Images/Swapnil.jpg' },
  { name: 'Bhavesh Kale', position: 'Treasurer of EESA', role: 'member', image: '/Images/Bhavesh.jpg' },
  { name: 'Gauri Dharao', position: 'Chairman of Career Development Forum and executive member of EESA', role: 'member', image: '/Images/Gauri.jpg' },
  { name: 'Omkar Pimpalgaonkar', position: 'Chairman  of Core Electronics and executive member of EESA', role: 'member', image: '/Images/Omkar.jpg' },
  { name: 'Mayureshwar Shendre', position: 'Chairman of IT Development Forum and executive member of EESA', role: 'member', image: '/Images/Mayureshwar.jpg' },
  { name: 'Parth Zadey', position: 'Social Media Head of EESA', role: 'member', image: '/Images/Parth.jpg' },
  { name: 'Pranav Bankar', position: 'Tech Head of EESA', role: 'member', image: '/Images/Pranav.jpg' },
];

const stats = [
  { value: '30+', label: 'Members' },
  { value: '1+', label: 'Projects' },
  { value: '1+', label: 'Events' },
  { value: '25+', label: 'Faculty' },
];

export default function Index() {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [selectedRole, setSelectedRole] = useState<'all' | 'faculty' | 'member'>('all');

const filteredTeam =
  selectedRole === 'all'
    ? teamHighlights
    : teamHighlights.filter((person) => person.role === selectedRole);


  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-16 overflow-hidden">
        <div className="absolute inset-0 gradient-hero opacity-95" />
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-64 h-64 bg-accent/20 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary-foreground/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="min-h-[85vh] flex flex-col justify-center items-center text-center py-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 mb-6 animate-fade-up">
              <Zap className="w-4 h-4 text-accent" />
              <span className="text-sm font-medium text-primary-foreground">Welcome to EESA</span>
            </div>
            
            <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground max-w-4xl animate-fade-up" style={{ animationDelay: '0.1s' }}>
              Electronics Engineering
              <span className="block text-white">Student Association</span>
            </h1>
            
            <p className="mt-6 text-lg md:text-xl text-primary-foreground/80 max-w-2xl animate-fade-up" style={{ animationDelay: '0.2s' }}>
              Building the future of technology, one circuit at a time. Join our community of innovators, researchers, and tech enthusiasts.
            </p>
            
            <div className="mt-10 flex flex-col sm:flex-row gap-4 animate-fade-up" style={{ animationDelay: '0.3s' }}>
              <Link to="/signup">
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8">
                  Join EESA
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
              <Link to="/about">
                <Button size="lg" variant="outline" className="border-primary-foreground/50 text-primary-foreground bg-primary-foreground/5 hover:bg-primary-foreground/15">
                  Learn More
                </Button>
              </Link>
            </div>

            
            {/* Floating Icons */}
            <div className="absolute left-[10%] top-1/3 opacity-20">
              <Cpu className="w-16 h-16 text-primary-foreground animate-float" />
            </div>
            <div className="absolute right-[15%] top-1/4 opacity-20">
              <CircuitBoard className="w-20 h-20 text-primary-foreground animate-float" style={{ animationDelay: '1s' }} />
            </div>
            <div className="absolute left-[20%] bottom-1/4 opacity-20">
              <Radio className="w-12 h-12 text-primary-foreground animate-float" style={{ animationDelay: '3s' }} />
            </div>
          </div>
        </div>
        
        {/* Wave Divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 100" fill="none" className="w-full">
            <path d="M0 100V50C240 90 480 10 720 50C960 90 1200 10 1440 50V100H0Z" fill="hsl(var(--background))" />
          </svg>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, idx) => (
              <div key={idx} className="text-center">
                <div className="font-display text-4xl md:text-5xl font-bold text-primary">{stat.value}</div>
                <div className="mt-1 text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
              What We Offer
            </h2>
            <p className="mt-3 text-muted-foreground max-w-xl mx-auto">
              Everything you need to excel in your electronics engineering journey
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <Card key={idx} className="card-elevated border-0">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 rounded-xl gradient-hero flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <h3 className="font-display font-semibold text-lg text-foreground">{feature.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Preview */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
  <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
    Meet Our Community
  </h2>
  <p className="mt-3 text-muted-foreground max-w-xl mx-auto">
    Led by experienced faculty and driven by passionate students
  </p>

  {/* Filter Buttons */}
  <div className="mt-6 flex justify-center gap-3">
    <Button
      variant={selectedRole === 'all' ? 'default' : 'outline'}
      onClick={() => setSelectedRole('all')}
    >
      All
    </Button>

    <Button
      variant={selectedRole === 'faculty' ? 'default' : 'outline'}
      onClick={() => setSelectedRole('faculty')}
    >
      Faculty
    </Button>

    <Button
      variant={selectedRole === 'member' ? 'default' : 'outline'}
      onClick={() => setSelectedRole('member')}
    >
      Members
    </Button>
  </div>
</div>

          
          <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            {filteredTeam.map((member, idx) => (

              <Card key={idx} className="card-elevated text-center">
                <CardContent className="p-6">
                  <Avatar className="w-20 h-20 mx-auto border-4 border-primary/10">
                    {member.image ? (
                      <div className="w-28 h-28 rounded-full overflow-hidden flex items-center justify-center bg-gray-200">
                        <img
                          src={member.image}
                          alt={member.name}
                          className="w-full h-full object-cover object-top"
                        />
                      </div>
                    ) : (
                      <AvatarFallback className="bg-primary/10 text-primary text-2xl font-display">
                        {member.name.charAt(0)}
                      </AvatarFallback>
                    )}
                  </Avatar>
                  <h3 className="mt-4 font-display font-semibold text-foreground">{member.name}</h3>
                  <p className="text-sm text-muted-foreground">{member.position}</p>
                  <div className="mt-2">
                    <RoleBadge role={member.role as 'faculty' | 'member' | 'admin'} size="sm" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <Link to="/about">
              <Button variant="outline" className="group">
                View All Team Members
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-hero relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 right-20 w-48 h-48 bg-accent/20 rounded-full blur-3xl" />
          <div className="absolute bottom-10 left-20 w-64 h-64 bg-primary-foreground/10 rounded-full blur-3xl" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground">
            Ready to Join EESA?
          </h2>
          <p className="mt-4 text-lg text-primary-foreground/80 max-w-xl mx-auto">
            Become part of a thriving community of electronics engineers and innovators.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Link to="/signup">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold">
                Get Started
              </Button>
            </Link>
            <Link to="/forums">
              <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
                Browse Forums
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
