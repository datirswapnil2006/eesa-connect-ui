import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { RoleBadge } from './RoleBadge';
import { Calendar, ArrowRight } from 'lucide-react';

interface BlogCardProps {
  title: string;
  excerpt: string;
  coverImage?: string;
  author: {
    name: string;
    role: 'admin' | 'faculty' | 'member';
  };
  tags: string[];
  publishedAt: string;
}

export function BlogCard({ title, excerpt, coverImage, author, tags, publishedAt }: BlogCardProps) {
  return (
    <Card className="card-elevated overflow-hidden group cursor-pointer">
      <div className="aspect-video bg-muted relative overflow-hidden">
        {coverImage ? (
          <img src={coverImage} alt={title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
        ) : (
          <div className="w-full h-full gradient-hero opacity-20" />
        )}
      </div>
      <CardContent className="p-5">
        <div className="flex flex-wrap gap-1 mb-3">
          {tags.slice(0, 2).map((tag, idx) => (
            <Badge key={idx} variant="secondary" className="text-xs">
              {tag}
            </Badge>
          ))}
        </div>
        
        <h3 className="font-display font-semibold text-lg text-foreground group-hover:text-primary transition-colors line-clamp-2">
          {title}
        </h3>
        
        <p className="mt-2 text-sm text-muted-foreground line-clamp-2">{excerpt}</p>
        
        <div className="mt-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Avatar className="w-7 h-7">
              <AvatarFallback className="bg-primary/10 text-primary text-xs font-display">
                {author.name.charAt(0)}
              </AvatarFallback>
            </Avatar>
            <div>
              <p className="text-sm font-medium text-foreground">{author.name}</p>
              <div className="flex items-center gap-2">
                <RoleBadge role={author.role} size="sm" showIcon={false} />
                <span className="text-xs text-muted-foreground flex items-center gap-1">
                  <Calendar className="w-3 h-3" />
                  {publishedAt}
                </span>
              </div>
            </div>
          </div>
          
          <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
        </div>
      </CardContent>
    </Card>
  );
}
