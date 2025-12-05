import { useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { BlogCard } from '@/components/BlogCard';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Search } from 'lucide-react';

const blogTags = ['All', 'Tutorials', 'Research', 'Industry', 'Career', 'Projects'];

const blogPosts = [
  {
    id: 1,
    title: '💡 A Day of Excellence and Gratitude: EESA Installation Ceremony and Engineers Day Celebration!',
    excerpt: 'Learn the fundamentals of FPGA programming with Verilog. This comprehensive guide covers everything from basic concepts to your first project.',
    author: { name: 'Swapnil Datir', role: 'member' as const },
    tags: ['Excellence', 'Gratitude'],
    publishedAt: 'Dec 25, 2025',
  },
  {
    id: 2,
    title: 'The Future of Embedded AI: Edge Computing in Electronics',
    excerpt: 'Exploring how AI is being integrated into embedded systems and what it means for the future of electronics engineering.',
    author: { name: 'Dr. Sarah Chen', role: 'admin' as const },
    tags: ['Research', 'AI'],
    publishedAt: 'Nov 25, 2024',
  },

];

export default function Blog() {
  const [activeTag, setActiveTag] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredPosts = blogPosts
    .filter(post => activeTag === 'All' || post.tags.includes(activeTag))
    .filter(post =>
      searchQuery === '' ||
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
    );

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero */}
      <section className="pt-24 pb-16 gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 right-10 w-48 h-48 bg-accent rounded-full blur-3xl" />
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground">
            Blog
          </h1>
          <p className="mt-4 text-lg text-primary-foreground/80 max-w-2xl mx-auto">
            Insights, tutorials, and updates from our faculty and industry experts.
          </p>
        </div>
      </section>

      {/* Search & Filters */}
      <section className="py-8 border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative w-full md:w-96">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            
            <div className="flex flex-wrap justify-center gap-2">
              {blogTags.map(tag => (
                <Button
                  key={tag}
                  variant={activeTag === tag ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setActiveTag(tag)}
                  className={activeTag === tag ? 'gradient-hero text-primary-foreground border-0' : ''}
                >
                  {tag}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          {filteredPosts.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredPosts.map(post => (
                <BlogCard key={post.id} {...post} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <p className="text-muted-foreground">No articles found matching your criteria.</p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-2xl font-bold text-foreground">Stay Updated</h2>
          <p className="mt-2 text-muted-foreground">Get the latest articles delivered to your inbox.</p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <Input placeholder="Enter your email" className="flex-1" />
            <Button className="gradient-hero text-primary-foreground border-0">Subscribe</Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
