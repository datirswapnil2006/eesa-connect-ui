import { useAuth } from '@/context/AuthContext';
import { Sidebar } from '@/components/Sidebar';
import { ProfileCard } from '@/components/ProfileCard';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Badge } from '@/components/ui/badge';
import { FileText, MessageSquare, Users, AlertTriangle, Plus, Edit } from 'lucide-react';
import { Navbar } from '@/components/Navbar';
import { Link } from 'react-router-dom';

export default function FacultyDashboard() {
  const { user } = useAuth();

  if (!user) return null;

  const recentPosts = [
    { title: 'Introduction to FPGA Programming', status: 'published', views: 234, date: 'Nov 28' },
    { title: 'Power Electronics Deep Dive', status: 'draft', views: 0, date: 'Nov 25' },
    { title: 'Career Tips for Engineers', status: 'published', views: 156, date: 'Nov 20' },
  ];

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
              <AlertTitle>Account Pending Verification</AlertTitle>
              <AlertDescription>
                Your faculty account is awaiting verification. You'll have full access once approved.
              </AlertDescription>
            </Alert>
          )}

          <div className="mb-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h1 className="font-display text-2xl md:text-3xl font-bold text-foreground">
                Faculty Dashboard
              </h1>
              <p className="mt-1 text-muted-foreground">Manage your content and mentor students.</p>
            </div>
            <Button className="gradient-hero text-primary-foreground border-0">
              <Plus className="w-4 h-4 mr-2" />
              New Blog Post
            </Button>
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            {/* Profile Card */}
            <div className="lg:col-span-1">
              <ProfileCard profile={user} isOwner />
            </div>

            {/* Stats & Content */}
            <div className="lg:col-span-2 space-y-6">
              {/* Quick Stats */}
              <div className="grid sm:grid-cols-3 gap-4">
                <Card className="card-elevated">
                  <CardContent className="p-5">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                        <FileText className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-2xl font-display font-bold text-foreground">8</p>
                        <p className="text-sm text-muted-foreground">Blog Posts</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="card-elevated">
                  <CardContent className="p-5">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                        <MessageSquare className="w-5 h-5 text-accent" />
                      </div>
                      <div>
                        <p className="text-2xl font-display font-bold text-foreground">24</p>
                        <p className="text-sm text-muted-foreground">Forum Replies</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="card-elevated">
                  <CardContent className="p-5">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-role-faculty/10 flex items-center justify-center">
                        <Users className="w-5 h-5 text-role-faculty" />
                      </div>
                      <div>
                        <p className="text-2xl font-display font-bold text-foreground">15</p>
                        <p className="text-sm text-muted-foreground">Students Mentored</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Recent Blog Posts */}
              <Card className="card-elevated">
                <CardHeader className="flex flex-row items-center justify-between">
                  <CardTitle className="text-lg">Your Blog Posts</CardTitle>
                  <Link to="/dashboard/blog">
                    <Button variant="ghost" size="sm">View All</Button>
                  </Link>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {recentPosts.map((post, idx) => (
                      <div key={idx} className="flex items-center justify-between p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors">
                        <div className="flex-1 min-w-0">
                          <p className="font-medium text-foreground truncate">{post.title}</p>
                          <p className="text-sm text-muted-foreground">{post.date} • {post.views} views</p>
                        </div>
                        <div className="flex items-center gap-2">
                          <Badge variant={post.status === 'published' ? 'default' : 'secondary'}>
                            {post.status}
                          </Badge>
                          <Button variant="ghost" size="icon" className="h-8 w-8">
                            <Edit className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Forum Mentoring */}
              <Card className="card-elevated">
                <CardHeader>
                  <CardTitle className="text-lg">Forum Activity</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {[
                      { title: 'PCB design tips for high-speed signals', replies: 5, category: 'Core Electronics' },
                      { title: 'Best practices for embedded C', replies: 3, category: 'IT Development' },
                      { title: 'Graduate school advice', replies: 8, category: 'Career Development' },
                    ].map((thread, idx) => (
                      <div key={idx} className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                        <div className="flex-1 min-w-0">
                          <p className="font-medium text-foreground truncate">{thread.title}</p>
                          <p className="text-sm text-muted-foreground">{thread.replies} replies • {thread.category}</p>
                        </div>
                        <Button variant="outline" size="sm">Reply</Button>
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
