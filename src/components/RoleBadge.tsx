import { cn } from "@/lib/utils";
import { Shield, GraduationCap, User, Users } from "lucide-react";

type UserRole = "admin" | "faculty" | "member" | "alumni";

interface RoleBadgeProps {
  role: UserRole;
  size?: "sm" | "md";
  showIcon?: boolean;
}

export function RoleBadge({
  role,
  size = "md",
  showIcon = true,
}: RoleBadgeProps) {
  const config: Record<
    UserRole,
    {
      label: string;
      icon: React.ElementType;
      className: string;
    }
  > = {
    admin: {
      label: "Admin",
      icon: Shield,
      className: "bg-role-admin/10 text-role-admin border-role-admin/20",
    },
    faculty: {
      label: "Faculty",
      icon: GraduationCap,
      className:
        "bg-role-faculty/10 text-role-faculty border-role-faculty/20",
    },
    member: {
      label: "Member",
      icon: User,
      className: "bg-role-member/10 text-role-member border-role-member/20",
    },
    alumni: {
      label: "Alumni",
      icon: Users,
      className: "bg-role-alumni/10 text-role-alumni border-role-alumni/20",
    },
  };

  // 🛡️ Safety check (prevents white screen forever)
  if (!config[role]) return null;

  const { label, icon: Icon, className } = config[role];

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 rounded-full border font-medium",
        size === "sm" ? "px-2 py-0.5 text-xs" : "px-2.5 py-1 text-xs",
        className
      )}
    >
      {showIcon && (
        <Icon className={size === "sm" ? "w-3 h-3" : "w-3.5 h-3.5"} />
      )}
      {label}
    </span>
  );
}
