import { useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { ForumPostCard } from '@/components/ForumPostCard';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Label } from '@/components/ui/label';
import { Plus, Search } from 'lucide-react';
import { useAuth } from '@/context/AuthContext';

const categories = ['IT Development', 'Core Electronics', 'Career Development'];

const forumPosts = [
  {
    id: 1,
    category: 'IT Development',
    title: 'Best practices for embedded C programming',
    excerpt: 'Looking for advice on writing clean, maintainable embedded C code. What conventions do you follow in your projects?',
    author: { name: 'Alex Johnson', role: 'member' as const, position: 'Final Year Student', skills: ['Arduino', 'C Programming'] },
    replies: 12,
    createdAt: '2 hours ago',
  },
  {
    id: 2,
    category: 'IT Development',
    title: 'React vs Vue for IoT dashboards',
    excerpt: 'Building a real-time dashboard for sensor data. Which framework would you recommend and why?',
    author: { name: 'Maria Santos', role: 'member' as const, position: 'Third Year Student', skills: ['React', 'Node.js'] },
    replies: 8,
    createdAt: '5 hours ago',
  },
  {
    id: 3,
    category: 'Core Electronics',
    title: 'PCB design tips for high-speed signals',
    excerpt: 'Designing a board with high-speed differential pairs. Any tips for impedance matching and EMI reduction?',
    author: { name: 'Prof. James Wilson', role: 'faculty' as const, position: 'Associate Professor', skills: ['VLSI Design', 'PCB Design'] },
    replies: 23,
    createdAt: '1 day ago',
  },
  {
    id: 4,
    category: 'Core Electronics',
    title: 'Choosing the right microcontroller for battery-powered applications',
    excerpt: 'Need to select an MCU for a wearable device. Power consumption is critical. Any recommendations?',
    author: { name: 'David Lee', role: 'member' as const, position: 'Second Year Student', skills: ['STM32', 'Low Power Design'] },
    replies: 15,
    createdAt: '2 days ago',
  },
  {
    id: 5,
    category: 'Career Development',
    title: 'Internship interview preparation guide',
    excerpt: 'Sharing my experience and tips for landing hardware engineering internships at top companies.',
    author: { name: 'Dr. Sarah Chen', role: 'admin' as const, position: 'Department Head', skills: ['Mentoring', 'Industry Connections'] },
    replies: 45,
    createdAt: '3 days ago',
  },
  {
    id: 6,
    category: 'Career Development',
    title: 'Graduate school vs industry - what path to choose?',
    excerpt: 'Torn between pursuing a masters degree or joining industry directly. Would love to hear different perspectives.',
    author: { name: 'Emily Chen', role: 'member' as const, position: 'Final Year Student', skills: ['Research', 'Signal Processing'] },
    replies: 32,
    createdAt: '4 days ago',
  },
];

export default function Forums() {
  const [searchQuery, setSearchQuery] = useState('');
  const [isNewPostOpen, setIsNewPostOpen] = useState(false);
  const { isAuthenticated } = useAuth();

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero */}
      <section className="pt-24 pb-16 gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute bottom-10 left-20 w-64 h-64 bg-accent rounded-full blur-3xl" />
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground">
            Forums
          </h1>
          <p className="mt-4 text-lg text-primary-foreground/80 max-w-2xl mx-auto">
            Connect, discuss, and learn from fellow electronics enthusiasts.
          </p>
        </div>
      </section>

      {/* Search & Actions */}
      <section className="py-6 border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
            <div className="relative w-full sm:w-96">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                placeholder="Search discussions..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            
            <Dialog open={isNewPostOpen} onOpenChange={setIsNewPostOpen}>
              <DialogTrigger asChild>
                <Button className="gradient-hero text-primary-foreground border-0" disabled={!isAuthenticated}>
                  <Plus className="w-4 h-4 mr-2" />
                  New Post
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle className="font-display">Create New Post</DialogTitle>
                </DialogHeader>
                <div className="space-y-4 mt-4">
                  <div>
                    <Label htmlFor="title">Title</Label>
                    <Input id="title" placeholder="Enter a descriptive title..." className="mt-1" />
                  </div>
                  <div>
                    <Label htmlFor="body">Content</Label>
                    <Textarea id="body" placeholder="Write your post content..." className="mt-1 min-h-32" />
                  </div>
                  <div className="flex justify-end gap-2">
                    <Button variant="outline" onClick={() => setIsNewPostOpen(false)}>Cancel</Button>
                    <Button className="gradient-hero text-primary-foreground border-0">Post</Button>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </section>

      {/* Forum Categories */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="IT Development">
            <TabsList className="w-full flex flex-wrap justify-start gap-2 bg-transparent h-auto p-0">
              {categories.map(category => (
                <TabsTrigger
                  key={category}
                  value={category}
                  className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground rounded-lg px-4 py-2"
                >
                  {category}
                </TabsTrigger>
              ))}
            </TabsList>

            {categories.map(category => (
              <TabsContent key={category} value={category} className="mt-6">
                <div className="space-y-4">
                  {forumPosts
                    .filter(post => post.category === category)
                    .filter(post => 
                      searchQuery === '' || 
                      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
                    )
                    .map(post => (
                      <ForumPostCard key={post.id} {...post} />
                    ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>

          {!isAuthenticated && (
            <div className="mt-8 p-6 rounded-xl bg-muted/50 text-center">
              <p className="text-muted-foreground">
                <a href="/login" className="text-primary hover:underline">Login</a> or{' '}
                <a href="/signup" className="text-primary hover:underline">sign up</a> to participate in discussions.
              </p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}
