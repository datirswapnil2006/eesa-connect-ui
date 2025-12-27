import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Navbar } from '@/components/Navbar';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { AlertCircle, Loader2 } from 'lucide-react';
import { useAuth, UserRole } from '@/context/AuthContext';
import { useToast } from '@/hooks/use-toast';

export default function Signup() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [role, setRole] = useState<UserRole>('member');
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const { signup } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');

    if (!acceptedTerms) {
      setError('You must accept Terms & Conditions.');
      return;
    }

    setIsLoading(true);

    try {
      await signup(email, name, role);
      toast({
        title: 'Account created!',
        description: 'Login credentials have been sent to your email.',
      });
      navigate('/login');
    } catch {
      setError('Failed to create account. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <div className="pt-24 flex justify-center px-4">
        <Card className="w-full max-w-md">
          <CardHeader className="text-center space-y-3">

            {/*  LOGO */}
            <img
              src="/eesa-logo.jpg"
              alt="EESA Logo"
              className="w-16 h-16 mx-auto"
            />

            <CardTitle>Join EESA</CardTitle>
            <CardDescription>
              Use your personal email to create an account
            </CardDescription>
          </CardHeader>

          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">

              {error && (
                <Alert variant="destructive">
                  <AlertCircle className="h-4 w-4" />
                  <AlertDescription>{error}</AlertDescription>
                </Alert>
              )}

              <div>
                <Label htmlFor="name">Full Name</Label>
                <Input
                  id="name"
                  value={name}
                  onChange={e => setName(e.target.value)}
                  required
                />
              </div>

              <div>
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="yourname@gmail.com"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  required
                />
              </div>

              <div>
                <Label>Role</Label>
                <Select
                  value={role}
                  onValueChange={(v: UserRole) => setRole(v)}
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="member">Student</SelectItem>
                    <SelectItem value="faculty">Faculty</SelectItem>
                    <SelectItem value="alumni">Alumni</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/*  TERMS & PRIVACY */}
              <div className="flex items-start gap-2">
                <input
                  id="terms"
                  type="checkbox"
                  checked={acceptedTerms}
                  onChange={e => setAcceptedTerms(e.target.checked)}
                  className="mt-1"
                />
                <label htmlFor="terms" className="text-sm">
                  I agree to the{' '}
                  <Link
                    to="/terms"
                    className="text-primary underline"
                    target="_blank"
                  >
                    Terms & Conditions
                  </Link>{' '}
                  and{' '}
                  <Link
                    to="/privacy"
                    className="text-primary underline"
                    target="_blank"
                  >
                    Privacy Policy
                  </Link>
                </label>
              </div>

              <Button
                disabled={isLoading || !acceptedTerms}
                className="w-full"
              >
                {isLoading ? (
                  <Loader2 className="animate-spin" />
                ) : (
                  'Create Account'
                )}
              </Button>
            </form>

            <p className="text-sm text-center mt-4">
              Already have an account?{' '}
              <Link to="/login" className="underline">
                Login
              </Link>
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
