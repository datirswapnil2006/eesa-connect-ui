import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '@/context/AuthContext';
import {
  LayoutDashboard,
  User,
  MessageSquare,
  FileText,
  Image,
  Users,
  Settings,
  Shield,
  BookOpen,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';
import { useState } from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

interface NavItem {
  name: string;
  path: string;
  icon: React.ElementType;
  roles: ('admin' | 'faculty' | 'member')[];
}

const navItems: NavItem[] = [
  { name: 'Dashboard', path: '/dashboard', icon: LayoutDashboard, roles: ['admin', 'faculty', 'member'] },
  { name: 'My Profile', path: '/dashboard/profile', icon: User, roles: ['admin', 'faculty', 'member'] },
  { name: 'Forums', path: '/dashboard/forums', icon: MessageSquare, roles: ['admin', 'faculty', 'member'] },
  { name: 'Blog Posts', path: '/dashboard/blog', icon: FileText, roles: ['admin', 'faculty'] },
  { name: 'Gallery', path: '/dashboard/gallery', icon: Image, roles: ['admin'] },
  { name: 'User Management', path: '/dashboard/users', icon: Users, roles: ['admin'] },
  { name: 'Moderation', path: '/dashboard/moderation', icon: Shield, roles: ['admin'] },
  { name: 'My Comments', path: '/dashboard/comments', icon: BookOpen, roles: ['member'] },
  { name: 'Settings', path: '/dashboard/settings', icon: Settings, roles: ['admin', 'faculty', 'member'] },
];

export function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);
  const location = useLocation();
  const { user } = useAuth();

  if (!user) return null;

  const filteredItems = navItems.filter(item => item.roles.includes(user.role));

  const isActive = (path: string) => {
    if (path === '/dashboard') {
      return location.pathname === '/dashboard' || 
             location.pathname === '/dashboard/admin' ||
             location.pathname === '/dashboard/faculty' ||
             location.pathname === '/dashboard/member';
    }
    return location.pathname === path;
  };

  return (
    <aside
      className={cn(
        'fixed left-0 top-16 h-[calc(100vh-4rem)] bg-sidebar border-r border-sidebar-border transition-all duration-300 z-40',
        collapsed ? 'w-16' : 'w-64'
      )}
    >
      <div className="flex flex-col h-full">
        {/* User Info */}
        {!collapsed && (
          <div className="p-4 border-b border-sidebar-border">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-sidebar-primary/20 flex items-center justify-center text-sidebar-primary font-display font-bold">
                {user.name.charAt(0)}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-sidebar-foreground truncate">{user.name}</p>
                <p className="text-xs text-sidebar-foreground/60 capitalize">{user.role}</p>
              </div>
            </div>
          </div>
        )}

        {/* Navigation */}
        <nav className="flex-1 p-2 space-y-1 overflow-y-auto">
          {filteredItems.map(item => {
            const Icon = item.icon;
            return (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  'flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all',
                  isActive(item.path)
                    ? 'bg-sidebar-primary text-sidebar-primary-foreground'
                    : 'text-sidebar-foreground/70 hover:text-sidebar-foreground hover:bg-sidebar-accent'
                )}
              >
                <Icon className="w-5 h-5 flex-shrink-0" />
                {!collapsed && <span>{item.name}</span>}
              </Link>
            );
          })}
        </nav>

        {/* Collapse Button */}
        <div className="p-2 border-t border-sidebar-border">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setCollapsed(!collapsed)}
            className="w-full justify-center text-sidebar-foreground/70 hover:text-sidebar-foreground hover:bg-sidebar-accent"
          >
            {collapsed ? <ChevronRight className="w-4 h-4" /> : <ChevronLeft className="w-4 h-4" />}
          </Button>
        </div>
      </div>
    </aside>
  );
}
