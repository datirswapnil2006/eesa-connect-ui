import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { RoleBadge } from './RoleBadge';
import { MessageSquare, Clock } from 'lucide-react';

interface ForumPostCardProps {
  title: string;
  excerpt: string;
  author: {
    name: string;
    role: 'admin' | 'faculty' | 'member';
    position?: string;
    skills?: string[];
  };
  category: string;
  replies: number;
  createdAt: string;
}

export function ForumPostCard({ title, excerpt, author, category, replies, createdAt }: ForumPostCardProps) {
  return (
    <Card className="card-elevated cursor-pointer group">
      <CardContent className="p-5">
        <div className="flex gap-4">
          <Avatar className="w-10 h-10 flex-shrink-0">
            <AvatarFallback className="bg-primary/10 text-primary font-display">
              {author.name.charAt(0)}
            </AvatarFallback>
          </Avatar>
          
          <div className="flex-1 min-w-0">
            <div className="flex items-start justify-between gap-2">
              <div>
                <h3 className="font-display font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-1">
                  {title}
                </h3>
                <div className="flex items-center gap-2 mt-1">
                  <span className="text-sm text-muted-foreground">{author.name}</span>
                  <RoleBadge role={author.role} size="sm" showIcon={false} />
                </div>
              </div>
              <Badge variant="outline" className="flex-shrink-0">{category}</Badge>
            </div>
            
            <p className="mt-2 text-sm text-muted-foreground line-clamp-2">{excerpt}</p>
            
            {author.skills && author.skills.length > 0 && (
              <div className="mt-2 flex flex-wrap gap-1">
                {author.skills.slice(0, 3).map((skill, idx) => (
                  <Badge key={idx} variant="secondary" className="text-xs py-0">
                    {skill}
                  </Badge>
                ))}
              </div>
            )}
            
            <div className="mt-3 flex items-center gap-4 text-xs text-muted-foreground">
              <span className="flex items-center gap-1">
                <MessageSquare className="w-3.5 h-3.5" />
                {replies} replies
              </span>
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" />
                {createdAt}
              </span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
