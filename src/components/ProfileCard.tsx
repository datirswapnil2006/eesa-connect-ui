import { User } from '@/context/AuthContext';
import { RoleBadge } from './RoleBadge';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Edit, Trash2, Github, Linkedin, Globe } from 'lucide-react';

interface ProfileCardProps {
  profile: User;
  isOwner?: boolean;
  isAdmin?: boolean;
  onEdit?: () => void;
  onDelete?: () => void;
}

export function ProfileCard({ profile, isOwner, isAdmin, onEdit, onDelete }: ProfileCardProps) {
  const topAchievements = profile.achievements?.slice(0, 3) || [];
  const hasMoreAchievements = (profile.achievements?.length || 0) > 3;

  return (
    <Card className="card-elevated overflow-hidden">
      <div className="h-20 gradient-hero" />
      <CardContent className="pt-0 -mt-10">
        <div className="flex flex-col items-center text-center">
          <Avatar className="w-20 h-20 border-4 border-card shadow-lg">
            <AvatarFallback className="bg-primary text-primary-foreground text-2xl font-display">
              {profile.name.charAt(0)}
            </AvatarFallback>
          </Avatar>
          
          <h3 className="mt-3 font-display font-semibold text-lg text-foreground">
            {profile.name}
          </h3>
          
          <div className="mt-1 flex items-center gap-2">
            <RoleBadge role={profile.role} size="sm" />
          </div>
          
          {profile.position && (
            <p className="mt-2 text-sm text-muted-foreground">{profile.position}</p>
          )}
          
          {/* Skills */}
          {profile.skills && profile.skills.length > 0 && (
            <div className="mt-3 flex flex-wrap justify-center gap-1">
              {profile.skills.map((skill, idx) => (
                <Badge key={idx} variant="secondary" className="text-xs">
                  {skill}
                </Badge>
              ))}
            </div>
          )}
          
          {/* Achievements */}
          {topAchievements.length > 0 && (
            <div className="mt-4 w-full">
              <h4 className="text-xs font-medium text-muted-foreground uppercase tracking-wide mb-2">
                Achievements
              </h4>
              <ul className="space-y-1">
                {topAchievements.map((achievement, idx) => (
                  <li key={idx} className="text-sm text-foreground/80">
                    🏆 {achievement}
                  </li>
                ))}
              </ul>
              {hasMoreAchievements && (
                <button className="mt-2 text-xs text-primary hover:underline">
                  View all ({profile.achievements?.length})
                </button>
              )}
            </div>
          )}
          
          {/* Links */}
          {profile.links && (
            <div className="mt-4 flex justify-center gap-2">
              {profile.links.github && (
                <a href={profile.links.github} target="_blank" rel="noopener noreferrer"
                   className="p-2 rounded-lg bg-muted hover:bg-muted/80 transition-colors">
                  <Github className="w-4 h-4" />
                </a>
              )}
              {profile.links.linkedin && (
                <a href={profile.links.linkedin} target="_blank" rel="noopener noreferrer"
                   className="p-2 rounded-lg bg-muted hover:bg-muted/80 transition-colors">
                  <Linkedin className="w-4 h-4" />
                </a>
              )}
              {profile.links.website && (
                <a href={profile.links.website} target="_blank" rel="noopener noreferrer"
                   className="p-2 rounded-lg bg-muted hover:bg-muted/80 transition-colors">
                  <Globe className="w-4 h-4" />
                </a>
              )}
            </div>
          )}
          
          {/* Actions */}
          <div className="mt-4 flex gap-2 w-full">
            {(isOwner || isAdmin) && (
              <Button variant="outline" size="sm" className="flex-1" onClick={onEdit}>
                <Edit className="w-4 h-4 mr-1" /> Edit
              </Button>
            )}
            {isAdmin && !isOwner && (
              <Button variant="destructive" size="sm" onClick={onDelete}>
                <Trash2 className="w-4 h-4" />
              </Button>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
