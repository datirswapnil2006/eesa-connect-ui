import { useAuth } from '@/context/AuthContext';
import { Sidebar } from '@/components/Sidebar';
import { ProfileCard } from '@/components/ProfileCard';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Navbar } from '@/components/Navbar';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { AlertCircle } from 'lucide-react';

export default function AlumniDashboard() {
  const { user } = useAuth();

  if (!user) return null;

  // Show pending approval message
  if (!user.approved) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <Sidebar />
        <main className="pt-16 pl-16 md:pl-64 transition-all duration-300">
          <div className="p-6 md:p-8">
            <Alert className="border-yellow-200 bg-yellow-50">
              <AlertCircle className="h-4 w-4 text-yellow-600" />
              <AlertDescription className="text-yellow-800">
                Your alumni account is pending admin approval. You'll receive an email once approved.
              </AlertDescription>
            </Alert>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Sidebar />

      <main className="pt-16 pl-16 md:pl-64 transition-all duration-300">
        <div className="p-6 md:p-8">
          {/* Welcome Header */}
          <div className="mb-8">
            <h1 className="font-display text-2xl md:text-3xl font-bold text-foreground">
              Welcome back, {user.name.split(' ')[0]}!
            </h1>
            <p className="mt-1 text-muted-foreground">Stay connected with EESA and the alumni community.</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            {/* Profile Card */}
            <div className="lg:col-span-1">
              <ProfileCard profile={user} isOwner />
            </div>

            {/* Main Content */}
            <div className="lg:col-span-2 space-y-6">
              {/* Personalized Message */}
              <Card className="card-elevated">
                <CardHeader>
                  <CardTitle className="text-lg">Alumni Profile</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Welcome to the alumni dashboard. Here you can connect with other alumni, explore events, and stay updated with EESA activities.
                  </p>
                  <Button>Edit Profile</Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
