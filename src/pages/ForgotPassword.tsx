// src/pages/ForgotPassword.tsx
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from '@/components/Navbar';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { AlertCircle, Loader2 } from 'lucide-react';
import { useAuth } from '@/context/AuthContext';
import { useToast } from '@/hooks/use-toast';

export default function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // Expected to exist in your AuthContext; if named differently, update this call.
  const { resetPassword } = useAuth() as any;
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    try {
      if (typeof resetPassword === 'function') {
        await resetPassword(email);
        toast({ title: 'Email sent', description: 'Check your inbox for password reset instructions.' });
      } else {
        // If resetPassword isn't provided, show a friendly message and adapt to your backend.
        toast({
          title: 'Action needed',
          description: 'No reset function found in AuthContext. Implement resetPassword(email) or call your API here.',
        });
        // Example: await api.post('/auth/reset-password', { email });
      }
    } catch (err: any) {
      setError(err?.message || 'Failed to send reset email. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-24 pb-12 flex items-center justify-center px-4">
        <Card className="w-full max-w-md card-elevated">
          <CardHeader className="text-center">
            <img src="/eesa logo.jpg" alt="EESA logo" className="w-14 h-14 object-contain mx-auto mb-4" />
            <CardTitle className="font-display text-2xl">Reset your password</CardTitle>
            <CardDescription>Enter your email and we'll send reset instructions</CardDescription>
          </CardHeader>

          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              {error && (
                <Alert variant="destructive">
                  <AlertCircle className="h-4 w-4" />
                  <AlertDescription>{error}</AlertDescription>
                </Alert>
              )}

              <div className="space-y-2">
                <Label htmlFor="email">Your EESA Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="you@eesa.mail"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <Button
                type="submit"
                className="w-full gradient-hero text-primary-foreground border-0"
                disabled={isLoading || email.trim() === ''}
              >
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Sending...
                  </>
                ) : (
                  'Send reset email'
                )}
              </Button>
            </form>

            <div className="mt-6 text-center text-sm text-muted-foreground">
              Remembered your password?{' '}
              <Link to="/login" className="text-primary hover:underline font-medium">
                Sign in
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
