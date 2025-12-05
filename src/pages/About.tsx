import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { RoleBadge } from '@/components/RoleBadge';
import { Target, Eye, Heart, Award, Users, Lightbulb } from 'lucide-react';

const values = [
  { icon: Lightbulb, title: 'Innovation', description: 'Pushing boundaries in electronics and technology.' },
  { icon: Users, title: 'Collaboration', description: 'Working together to achieve greater outcomes.' },
  { icon: Award, title: 'Excellence', description: 'Striving for the highest standards in everything we do.' },
  { icon: Heart, title: 'Community', description: 'Supporting and uplifting each member of our association.' },
];

const teamMembers = [
  { name: 'Dr. S. V. Pattalwar', role: 'faculty' as const, position: 'Department Head', bio: 'Leading EESA for 5 months with a focus on innovation.', image: '/Images/HOD.jpg' },
  { name: 'Dr. A. I. Rokade', role: 'faculty' as const, position: 'Faculty advisor of EESA', bio: 'Leading EESA for 5 months  with a focus on innovation.', image: '/Images/AIR.jpg' },
  { name: 'Dr. N. S. Wadhe', role: 'faculty' as const, position: 'Faculty coordinator of Career Development Forum', bio: 'Leading EESA for 5 months with a focus on innovation.', image: '/Images/Wadhe sir.jpg' },
  { name: 'Prof. S. A. Nirmal', role: 'faculty' as const, position: 'Faculty coordinator of Core Electronics', bio: 'Leading EESA for 5 months with a focus on innovation.', image: '/Images/Nirmal sir.jpg' },
  { name: 'Prof. A. B. Pardikar', role: 'faculty' as const, position: 'Faculty coordinator of IT Development Forum', bio: 'Leading EESA for 5 months with a focus on innovation.', image: '/Images/Pardikar sir.jpg' },
  { name: 'Dhruv Shinde', role: 'member' as const, position: 'President of EESA', bio: 'Leading EESA for 5 months with a focus on innovation.', image: '/Images/Dhruv.jpg' },
  { name: 'Duhita Bute', role: 'member' as const, position: 'Vice President of EESA', bio: 'Leading EESA for 5 months with a focus on innovation.', image: '/Images/Duhita.jpg' },
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
                M1 : To impart students with valuable knowledge through excellence in teaching, research and creative activities.<br />
                M2 : To inculcate ethical practices amongst students.<br />
                M3 : To mould students into highly competent Electronics and Telecommunication technocrats to address the techno-social engineering challenges with innovative solutions.
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
                To become a leading center of excellence in a futuristic national scenario that caters to the academic and research needs of the society at large in the field of Electronics and Telecommunication engineering.
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
              Electronics & Telecommunication Engineering"NBA Accreditation to UG Program, Electronics & Telecommunication Engineering w.e.f 1 July 2014 to 30 June 2022 & 'A' Grade awarded by NAAC with CGPA 3.12 for 5 years w.e.f May 2017".Established in the year 1983, the department offers B. Tech. and M. Tech. degree courses in Electronics and Telecommunication Engineering. The departmental laboratories are equipped with state-of-the-art equipments and are approved by Sant Gadge Baba Amravati University as Research labs. Highly qualified, experienced and motivated faculty is the main backbone of the Department. The mission of the Department is to impart students with valuable knowledge through excellence in teaching, research and creative activities and mould them into highly competent and ethical technocrats to address the techno-social challenges with innovative solutions. There is large employment potential for Electronics & Telecommunication Engineering graduates in all sectors of industry like Electronics Industries, Communication Industries, Software Industries, and Research Sector.
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
                    {member.image ? (
                      <AvatarImage src={member.image} alt={member.name} />
                    ) : (
                      <AvatarFallback className="bg-primary/10 text-primary text-2xl font-display">
                        {member.name.charAt(0)}
                      </AvatarFallback>
                    )}
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