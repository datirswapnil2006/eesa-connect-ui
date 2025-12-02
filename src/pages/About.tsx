import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { RoleBadge } from '@/components/RoleBadge';
import { Target, Eye, Heart, Award, Users, Lightbulb } from 'lucide-react';

const values = [
  { icon: Lightbulb, title: 'Innovation', description: 'Pushing boundaries in electronics and technology.' },
  { icon: Users, title: 'Collaboration', description: 'Working together to achieve greater outcomes.' },
  { icon: Award, title: 'Excellence', description: 'Striving for the highest standards in everything we do.' },
  { icon: Heart, title: 'Community', description: 'Supporting and uplifting each member of our association.' },
];

const teamMembers = [
  { name: 'Dr. Sarah Chen', role: 'admin' as const, position: 'Department Head', bio: 'Leading EESA for 5 years with a focus on innovation.' },
  { name: 'Prof. James Wilson', role: 'faculty' as const, position: 'Associate Professor', bio: 'Expert in VLSI design and signal processing.' },
  { name: 'Dr. Emily Rodriguez', role: 'faculty' as const, position: 'Assistant Professor', bio: 'Specializes in embedded systems and IoT.' },
  { name: 'Prof. Michael Chang', role: 'faculty' as const, position: 'Professor', bio: 'Research focus on renewable energy systems.' },
  { name: 'Alex Johnson', role: 'member' as const, position: 'Student President', bio: 'Final year student passionate about electronics.' },
  { name: 'Maria Santos', role: 'member' as const, position: 'Vice President', bio: 'Leading the events and workshops committee.' },
];

export default function About() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero */}
      <section className="pt-24 pb-16 gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-64 h-64 bg-accent rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-20 w-48 h-48 bg-primary-foreground rounded-full blur-3xl" />
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground">
            About EESA
          </h1>
          <p className="mt-4 text-lg text-primary-foreground/80 max-w-2xl mx-auto">
            Learn about our mission, vision, and the people who make our community thrive.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="card-elevated">
              <CardContent className="p-8">
                <div className="w-14 h-14 rounded-xl gradient-hero flex items-center justify-center mb-6">
                  <Target className="w-7 h-7 text-primary-foreground" />
                </div>
                <h2 className="font-display text-2xl font-bold text-foreground">Our Mission</h2>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  To foster a vibrant community of electronics engineering students, promoting academic excellence, 
                  practical skills development, and professional growth. We aim to bridge the gap between theoretical 
                  knowledge and real-world applications through hands-on projects, workshops, and industry collaborations.
                </p>
              </CardContent>
            </Card>

            <Card className="card-elevated">
              <CardContent className="p-8">
                <div className="w-14 h-14 rounded-xl gradient-accent flex items-center justify-center mb-6">
                  <Eye className="w-7 h-7 text-accent-foreground" />
                </div>
                <h2 className="font-display text-2xl font-bold text-foreground">Our Vision</h2>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  To be the leading student association that inspires and empowers future electronics engineers 
                  to become innovators and problem solvers. We envision a community where every member has the 
                  opportunity to explore, create, and contribute to technological advancements.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl font-bold text-foreground">Our Core Values</h2>
            <p className="mt-3 text-muted-foreground">The principles that guide everything we do</p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {values.map((value, idx) => {
              const Icon = value.icon;
              return (
                <Card key={idx} className="card-elevated text-center border-0">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-display font-semibold text-foreground">{value.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* History */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-display text-3xl font-bold text-foreground text-center mb-8">Our History</h2>
            <div className="prose prose-lg mx-auto text-muted-foreground">
              <p>
                The Electronic Engineering Students Association (EESA) was founded in 2010 with a simple goal: 
                to create a supportive community for electronics engineering students. What started as a small 
                group of 20 passionate students has grown into a thriving organization with over 500 active members.
              </p>
              <p className="mt-4">
                Over the years, EESA has organized countless workshops, hackathons, and industry visits. Our members 
                have gone on to work at leading technology companies and research institutions around the world. 
                Many have also founded their own startups, bringing innovative electronic products to market.
              </p>
              <p className="mt-4">
                Today, EESA continues to evolve, embracing new technologies like IoT, AI-integrated electronics, 
                and sustainable energy systems. We remain committed to our founding vision of empowering the next 
                generation of electronics engineers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl font-bold text-foreground">Our Team</h2>
            <p className="mt-3 text-muted-foreground">Meet the leaders driving EESA forward</p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {teamMembers.map((member, idx) => (
              <Card key={idx} className="card-elevated">
                <CardContent className="p-6 text-center">
                  <Avatar className="w-20 h-20 mx-auto border-4 border-primary/10">
                    <AvatarFallback className="bg-primary/10 text-primary text-2xl font-display">
                      {member.name.charAt(0)}
                    </AvatarFallback>
                  </Avatar>
                  <h3 className="mt-4 font-display font-semibold text-foreground">{member.name}</h3>
                  <p className="text-sm text-muted-foreground">{member.position}</p>
                  <div className="mt-2">
                    <RoleBadge role={member.role} size="sm" />
                  </div>
                  <p className="mt-3 text-sm text-muted-foreground">{member.bio}</p>
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
