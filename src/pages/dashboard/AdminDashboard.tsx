import { useState } from 'react';
import { useAuth } from '@/context/AuthContext';
import { Sidebar } from '@/components/Sidebar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { RoleBadge } from '@/components/RoleBadge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  Users,
  FileText,
  Image,
  Shield,
  CheckCircle,
  XCircle,
  Clock,
  TrendingUp,
  AlertTriangle,
} from 'lucide-react';
import { Navbar } from '@/components/Navbar';

const pendingUsers = [
  { id: 1, name: 'John Smith', email: 'john@university.edu', role: 'member' as const, date: 'Nov 30' },
  { id: 2, name: 'Dr. Lisa Park', email: 'lisa@university.edu', role: 'faculty' as const, date: 'Nov 29' },
  { id: 3, name: 'Mike Brown', email: 'mike@university.edu', role: 'member' as const, date: 'Nov 28' },
];

const recentActivity = [
  { action: 'User approved', target: 'Sarah Wilson', time: '1 hour ago' },
  { action: 'Blog published', target: 'FPGA Guide', time: '3 hours ago' },
  { action: 'Gallery updated', target: '5 new images', time: '5 hours ago' },
  { action: 'Forum moderated', target: 'Spam removed', time: '1 day ago' },
];

export default function AdminDashboard() {
  const { user } = useAuth();
  const [approving, setApproving] = useState<number | null>(null);

  if (!user) return null;

  const handleApprove = (userId: number) => {
    setApproving(userId);
    setTimeout(() => setApproving(null), 1000);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Sidebar />
      
      <main className="pt-16 pl-16 md:pl-64 transition-all duration-300">
        <div className="p-6 md:p-8">
          <div className="mb-8">
            <h1 className="font-display text-2xl md:text-3xl font-bold text-foreground">
              Admin Dashboard
            </h1>
            <p className="mt-1 text-muted-foreground">Manage users, content, and community settings.</p>
          </div>

          {/* Stats Overview */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            <Card className="card-elevated">
              <CardContent className="p-5">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Total Users</p>
                    <p className="text-3xl font-display font-bold text-foreground">523</p>
                  </div>
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Users className="w-6 h-6 text-primary" />
                  </div>
                </div>
                <div className="mt-2 flex items-center text-sm">
                  <TrendingUp className="w-4 h-4 text-accent mr-1" />
                  <span className="text-accent">+12%</span>
                  <span className="text-muted-foreground ml-1">this month</span>
                </div>
              </CardContent>
            </Card>

            <Card className="card-elevated">
              <CardContent className="p-5">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Pending Approvals</p>
                    <p className="text-3xl font-display font-bold text-foreground">3</p>
                  </div>
                  <div className="w-12 h-12 rounded-xl bg-amber-500/10 flex items-center justify-center">
                    <Clock className="w-6 h-6 text-amber-500" />
                  </div>
                </div>
                <div className="mt-2 flex items-center text-sm">
                  <AlertTriangle className="w-4 h-4 text-amber-500 mr-1" />
                  <span className="text-muted-foreground">Requires attention</span>
                </div>
              </CardContent>
            </Card>

            <Card className="card-elevated">
              <CardContent className="p-5">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Blog Posts</p>
                    <p className="text-3xl font-display font-bold text-foreground">47</p>
                  </div>
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                    <FileText className="w-6 h-6 text-accent" />
                  </div>
                </div>
                <div className="mt-2 flex items-center text-sm">
                  <span className="text-muted-foreground">5 drafts pending</span>
                </div>
              </CardContent>
            </Card>

            <Card className="card-elevated">
              <CardContent className="p-5">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Gallery Items</p>
                    <p className="text-3xl font-display font-bold text-foreground">128</p>
                  </div>
                  <div className="w-12 h-12 rounded-xl bg-role-admin/10 flex items-center justify-center">
                    <Image className="w-6 h-6 text-role-admin" />
                  </div>
                </div>
                <div className="mt-2 flex items-center text-sm">
                  <span className="text-muted-foreground">12 events documented</span>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Admin Tabs */}
          <Tabs defaultValue="approvals" className="space-y-6">
            <TabsList className="bg-muted/50">
              <TabsTrigger value="approvals">User Approvals</TabsTrigger>
              <TabsTrigger value="content">Content Manager</TabsTrigger>
              <TabsTrigger value="activity">Activity Log</TabsTrigger>
            </TabsList>

            <TabsContent value="approvals">
              <Card className="card-elevated">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Shield className="w-5 h-5" />
                    Pending User Approvals
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  {pendingUsers.length > 0 ? (
                    <div className="space-y-3">
                      {pendingUsers.map(pendingUser => (
                        <div key={pendingUser.id} className="flex items-center justify-between p-4 rounded-lg bg-muted/50">
                          <div className="flex items-center gap-3">
                            <Avatar className="w-10 h-10">
                              <AvatarFallback className="bg-primary/10 text-primary">
                                {pendingUser.name.charAt(0)}
                              </AvatarFallback>
                            </Avatar>
                            <div>
                              <p className="font-medium text-foreground">{pendingUser.name}</p>
                              <p className="text-sm text-muted-foreground">{pendingUser.email}</p>
                            </div>
                            <RoleBadge role={pendingUser.role} size="sm" />
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="text-xs text-muted-foreground mr-2">{pendingUser.date}</span>
                            <Button
                              size="sm"
                              variant="outline"
                              className="text-destructive border-destructive/30 hover:bg-destructive/10"
                            >
                              <XCircle className="w-4 h-4 mr-1" />
                              Deny
                            </Button>
                            <Button
                              size="sm"
                              className="gradient-accent text-accent-foreground border-0"
                              onClick={() => handleApprove(pendingUser.id)}
                              disabled={approving === pendingUser.id}
                            >
                              <CheckCircle className="w-4 h-4 mr-1" />
                              {approving === pendingUser.id ? 'Approving...' : 'Approve'}
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-8 text-muted-foreground">
                      No pending approvals
                    </div>
                  )}
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="content">
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="card-elevated">
                  <CardHeader>
                    <CardTitle className="text-lg">Blog Manager</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {[
                        { title: 'FPGA Programming Guide', status: 'published', author: 'Prof. Wilson' },
                        { title: 'Career Tips 2024', status: 'draft', author: 'Dr. Chen' },
                        { title: 'IoT Project Tutorial', status: 'published', author: 'Prof. Chang' },
                      ].map((post, idx) => (
                        <div key={idx} className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                          <div>
                            <p className="font-medium text-foreground text-sm">{post.title}</p>
                            <p className="text-xs text-muted-foreground">{post.author}</p>
                          </div>
                          <div className="flex items-center gap-2">
                            <Badge variant={post.status === 'published' ? 'default' : 'secondary'}>
                              {post.status}
                            </Badge>
                            <Button variant="ghost" size="sm">Edit</Button>
                          </div>
                        </div>
                      ))}
                    </div>
                    <Button variant="outline" className="w-full mt-4">View All Posts</Button>
                  </CardContent>
                </Card>

                <Card className="card-elevated">
                  <CardHeader>
                    <CardTitle className="text-lg">Gallery Manager</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-3 gap-2 mb-4">
                      {Array.from({ length: 6 }).map((_, idx) => (
                        <div 
                          key={idx} 
                          className={`aspect-square rounded-lg bg-gradient-to-br ${
                            ['from-blue-500 to-cyan-400', 'from-purple-500 to-pink-400', 'from-green-500 to-teal-400'][idx % 3]
                          }`}
                        />
                      ))}
                    </div>
                    <Button variant="outline" className="w-full">Manage Gallery</Button>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="activity">
              <Card className="card-elevated">
                <CardHeader>
                  <CardTitle className="text-lg">Recent Activity</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {recentActivity.map((activity, idx) => (
                      <div key={idx} className="flex items-center justify-between py-3 border-b border-border last:border-0">
                        <div className="flex items-center gap-3">
                          <div className="w-2 h-2 rounded-full bg-accent" />
                          <div>
                            <span className="text-sm text-muted-foreground">{activity.action}: </span>
                            <span className="text-sm font-medium text-foreground">{activity.target}</span>
                          </div>
                        </div>
                        <Badge variant="secondary" className="text-xs">{activity.time}</Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  );
}
