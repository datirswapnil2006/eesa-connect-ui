import { useAuth } from '@/context/AuthContext';
import { Sidebar } from '@/components/Sidebar';
import { ProfileCard } from '@/components/ProfileCard';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Badge } from '@/components/ui/badge';
import { MessageSquare, BookOpen, User, AlertTriangle, TrendingUp } from 'lucide-react';
import { Navbar } from '@/components/Navbar';

import { events } from '@/lib/events';
import { getRegistrations } from '@/lib/eventRegistration';
import EventCard from '@/components/EventCard';

export default function MemberDashboard() {
  const { user } = useAuth();

  if (!user) return null;

  // Calculate profile completeness
  const fields = [
    user.position,
    user.bio,
    user.skills?.length,
    user.achievements?.length,
    user.links?.github || user.links?.linkedin || user.links?.website,
  ];
  const completedFields = fields.filter(Boolean).length;
  const profileCompleteness = Math.round((completedFields / fields.length) * 100);

  const registeredEvents = events.filter(event =>
    getRegistrations(user.id).includes(event.id)
  );

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Sidebar />
      
      <main className="pt-16 pl-16 md:pl-64 transition-all duration-300">
        <div className="p-6 md:p-8">
          {/* Approval Alert */}
          {!user.approved && (
            <Alert variant="destructive" className="mb-6">
              <AlertTriangle className="h-4 w-4" />
              <AlertTitle>Account Pending Approval</AlertTitle>
              <AlertDescription>
                Your account is waiting for admin approval. Some features may be limited until approved.
              </AlertDescription>
            </Alert>
          )}

          <div className="mb-8">
            <h1 className="font-display text-2xl md:text-3xl font-bold text-foreground">
              Welcome back, {user.name.split(' ')[0]}!
            </h1>
            <p className="mt-1 text-muted-foreground">
              Here's an overview of your EESA profile and activities.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            {/* Profile Card */}
            <div className="lg:col-span-1">
              <ProfileCard profile={user} isOwner />
            </div>

            {/* Stats & Activities */}
            <div className="lg:col-span-2 space-y-6">
              {/* Profile Completeness */}
              <Card className="card-elevated">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg flex items-center gap-2">
                    <TrendingUp className="w-5 h-5 text-accent" />
                    Profile Completeness
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-4">
                    <Progress value={profileCompleteness} className="flex-1" />
                    <span className="text-sm font-medium text-foreground">
                      {profileCompleteness}%
                    </span>
                  </div>
                  {profileCompleteness < 100 && (
                    <p className="mt-2 text-sm text-muted-foreground">
                      Complete your profile to connect better with the community.
                    </p>
                  )}
                </CardContent>
              </Card>

              {/* Quick Stats */}
              <div className="grid sm:grid-cols-3 gap-4">
                <Card className="card-elevated">
                  <CardContent className="p-5">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                        <MessageSquare className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-2xl font-display font-bold text-foreground">5</p>
                        <p className="text-sm text-muted-foreground">Forum Posts</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="card-elevated">
                  <CardContent className="p-5">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                        <BookOpen className="w-5 h-5 text-accent" />
                      </div>
                      <div>
                        <p className="text-2xl font-display font-bold text-foreground">12</p>
                        <p className="text-sm text-muted-foreground">Blog Comments</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="card-elevated">
                  <CardContent className="p-5">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-role-member/10 flex items-center justify-center">
                        <User className="w-5 h-5 text-role-member" />
                      </div>
                      <div>
                        <p className="text-2xl font-display font-bold text-foreground">3</p>
                        <p className="text-sm text-muted-foreground">Connections</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* My Registered Events */}
              <Card className="card-elevated">
                <CardHeader>
                  <CardTitle className="text-lg">
                    My Registered Events
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  {registeredEvents.length === 0 ? (
                    <p className="text-sm text-muted-foreground">
                      You have not registered for any events yet.
                    </p>
                  ) : (
                    <div className="grid md:grid-cols-2 gap-4">
                      {registeredEvents.map(event => (
                        <EventCard key={event.id} event={event} />
                      ))}
                    </div>
                  )}
                </CardContent>
              </Card>

              {/* Recent Activity */}
              <Card className="card-elevated">
                <CardHeader>
                  <CardTitle className="text-lg">Recent Activity</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      { action: 'Commented on', target: 'FPGA Programming Guide', time: '2 hours ago' },
                      { action: 'Joined forum', target: 'IT Development', time: '1 day ago' },
                      { action: 'Updated profile', target: 'Added new skills', time: '3 days ago' },
                    ].map((activity, idx) => (
                      <div
                        key={idx}
                        className="flex items-center justify-between py-2 border-b border-border last:border-0"
                      >
                        <div>
                          <span className="text-sm text-muted-foreground">
                            {activity.action}{' '}
                          </span>
                          <span className="text-sm font-medium text-foreground">
                            {activity.target}
                          </span>
                        </div>
                        <Badge variant="secondary" className="text-xs">
                          {activity.time}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
