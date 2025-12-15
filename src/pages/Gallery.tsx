import { useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const eventTags = ['All', 'Workshops', 'Inauguration', 'Seminars', 'Social Events', 'Projects', 'Team'];

const galleryItems = [
  { id: 1, tag: 'Workshops', caption: 'VLSI Workshop 2025', color: 'from-blue-500 to-cyan-400',imageUrl: '/Images/VLSI2025.jpg' },
  { 
    id: 2, 
    tag: 'Inauguration',
    caption: 'Inaugural Intro Video', 
    color: 'from-purple-500 to-pink-400',
    videoUrl: '/Images/InaugrationIntro.mp4',
    imageUrl: '/Images/GroupPhoto2.jpg',
  },
  { id: 3, tag: 'Seminars', caption: 'Industry Expert Talk', color: 'from-green-500 to-teal-400' },
  { id: 4, tag: 'Social Events', caption: 'Welcome Party 2024', color: 'from-orange-500 to-yellow-400' },
  { id: 5, tag: 'Projects', caption: 'Final Year Project Showcase', color: 'from-red-500 to-pink-400' },
  { id: 6, tag: 'Workshops', caption: 'PCB Design Session', color: 'from-indigo-500 to-blue-400' },
  { id: 7, tag: 'Hackathons', caption:'Ideathon 2025', color: 'from-cyan-500 to-blue-400' },
  { id: 8, tag: 'Seminars', caption: 'Career Development Talk', color: 'from-emerald-500 to-green-400' },
  { id: 9, tag: 'Projects', caption: 'Robotics Team Demo', color: 'from-violet-500 to-purple-400' },
  { id: 10, tag: 'Social Events', caption: 'Graduation Ceremony', color: 'from-amber-500 to-orange-400' },
  { id: 11, tag: 'Workshops', caption: 'FPGA Programming Lab', color: 'from-rose-500 to-red-400' },
  { id: 12, tag: 'Projects', caption: 'Smart Home System', color: 'from-sky-500 to-cyan-400' },
  { 
    id: 13, 
    tag: 'Team', 
    caption: 'Team Introduction Video', 
    color: 'from-indigo-500 to-purple-400',
    videoUrl: '/Images/TeamIntro.mp4',   
    imageUrl: '/Images/GroupPhoto2.jpg',
  },
];

export default function Gallery() {
  const [activeTag, setActiveTag] = useState('All');
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const filteredItems = activeTag === 'All' 
    ? galleryItems 
    : galleryItems.filter(item => item.tag === activeTag);

  const currentIndex = selectedImage !== null 
    ? filteredItems.findIndex(item => item.id === selectedImage) 
    : -1;

  const navigateImage = (direction: 'prev' | 'next') => {
    if (currentIndex === -1) return;
    const newIndex = direction === 'prev' 
      ? (currentIndex - 1 + filteredItems.length) % filteredItems.length
      : (currentIndex + 1) % filteredItems.length;
    setSelectedImage(filteredItems[newIndex].id);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero */}
      <section className="pt-24 pb-16 gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 right-20 w-48 h-48 bg-accent rounded-full blur-3xl" />
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground">
            Gallery
          </h1>
          <p className="mt-4 text-lg text-primary-foreground/80 max-w-2xl mx-auto">
            Explore moments from our events, workshops, and community activities.
          </p>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-8 border-b border-border sticky top-16 bg-background/95 backdrop-blur-sm z-30">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-2">
            {eventTags.map(tag => (
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
      </section>

      {/* Gallery Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredItems.map(item => (
              <div
                key={item.id}
                onClick={() => setSelectedImage(item.id)}
                className="aspect-square rounded-xl overflow-hidden cursor-pointer group relative"
              >
                {item.imageUrl ? (
                  <img src={item.imageUrl} alt={item.caption} className="w-full h-full object-cover" />
                ) : item.videoUrl ? (
                  <video src={item.videoUrl} controls className="w-full h-full object-cover" />
                ) : (
                  <div className={`absolute inset-0 bg-gradient-to-br ${item.color}`} />
                )}

                <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/40 transition-colors flex items-end p-4">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                    <Badge variant="secondary" className="mb-2">{item.tag}</Badge>
                    <p className="text-sm font-medium text-primary-foreground">{item.caption}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredItems.length === 0 && (
            <div className="text-center py-20">
              <p className="text-muted-foreground">No items found for this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Modal Viewer */}
      <Dialog open={selectedImage !== null} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-4xl p-0 bg-transparent border-0">
          <div className="relative">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 p-2 rounded-full bg-foreground/20 hover:bg-foreground/30 transition-colors"
            >
              <X className="w-5 h-5 text-primary-foreground" />
            </button>
            
            {selectedImage && (
              <div className="rounded-xl overflow-hidden">
                {filteredItems.find(i => i.id === selectedImage)?.videoUrl ? (
                  <video 
                    src={filteredItems.find(i => i.id === selectedImage)?.videoUrl!} 
                    controls 
                    className="w-full aspect-video"
                  />
                ) : filteredItems.find(i => i.id === selectedImage)?.imageUrl ? (
                  <img 
                    src={filteredItems.find(i => i.id === selectedImage)?.imageUrl!} 
                    alt={filteredItems.find(i => i.id === selectedImage)?.caption} 
                    className="w-full aspect-video object-cover"
                  />
                ) : (
                  <div className={`aspect-video bg-gradient-to-br ${filteredItems.find(i => i.id === selectedImage)?.color}`} />
                )}

                <div className="p-4 bg-card">
                  <Badge variant="secondary" className="mb-2">
                    {filteredItems.find(i => i.id === selectedImage)?.tag}
                  </Badge>
                  <p className="font-display font-semibold text-foreground">
                    {filteredItems.find(i => i.id === selectedImage)?.caption}
                  </p>
                </div>
              </div>
            )}

            <button
              onClick={() => navigateImage('prev')}
              className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-foreground/20 hover:bg-foreground/30 transition-colors"
            >
              <ChevronLeft className="w-6 h-6 text-primary-foreground" />
            </button>
            <button
              onClick={() => navigateImage('next')}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-foreground/20 hover:bg-foreground/30 transition-colors"
            >
              <ChevronRight className="w-6 h-6 text-primary-foreground" />
            </button>
          </div>
        </DialogContent>
      </Dialog>

      <Footer />
    </div>
  );
}
