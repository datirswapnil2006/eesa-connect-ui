import { cn } from '@/lib/utils';
import { Shield, GraduationCap, User } from 'lucide-react';

interface RoleBadgeProps {
  role: 'admin' | 'faculty' | 'member';
  size?: 'sm' | 'md';
  showIcon?: boolean;
}

export function RoleBadge({ role, size = 'md', showIcon = true }: RoleBadgeProps) {
  const config = {
    admin: {
      label: 'Admin',
      icon: Shield,
      className: 'bg-role-admin/10 text-role-admin border-role-admin/20',
    },
    faculty: {
      label: 'Faculty',
      icon: GraduationCap,
      className: 'bg-role-faculty/10 text-role-faculty border-role-faculty/20',
    },
    member: {
      label: 'Member',
      icon: User,
      className: 'bg-role-member/10 text-role-member border-role-member/20',
    },
  };

  const { label, icon: Icon, className } = config[role];

  return (
    <span
      className={cn(
        'inline-flex items-center gap-1 rounded-full border font-medium',
        size === 'sm' ? 'px-2 py-0.5 text-xs' : 'px-2.5 py-1 text-xs',
        className
      )}
    >
      {showIcon && <Icon className={size === 'sm' ? 'w-3 h-3' : 'w-3.5 h-3.5'} />}
      {label}
    </span>
  );
}
