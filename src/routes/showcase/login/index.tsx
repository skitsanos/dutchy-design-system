import type { FC } from 'react';
import Layout from '@/components/Layout';
import Icon from '@/components/Icon';
import Input from '@/components/Input';
import Form from '@/components/Form';
import Button from '@/components/Button';
import Checkbox from '@/components/Checkbox';
import Alert from '@/components/Alert';

const LoginPage: FC<{ request: Request }> = ({ request }) => {
  const url = new URL(request.url);
  const error = url.searchParams.get('error');

  return (
    <Layout
      title="Sign In | Dutchy"
      meta={{
        description: 'Sign in to your Dutchy account to access components and tools.',
        keywords: 'login, sign in, dutchy, design system',
      }}
      scripts={[
        '/assets/js/form-validation.js',
        '/assets/js/toast.js',
      ]}
    >
      <div className="min-h-screen grid grid-cols-1 lg:grid-cols-2">

        {/* Left: Branding Panel */}
        <div className="hidden lg:flex flex-col justify-between p-12 bg-foreground text-background relative overflow-hidden">
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-px h-full bg-background/10" />
          <div className="absolute top-1/2 left-0 w-full h-px bg-background/10" />

          {/* Logo */}
          <div className="relative z-10">
            <a href="/showcase" className="flex items-center gap-3">
              <div className="bg-primary text-primary-foreground w-12 h-12 flex items-center justify-center font-display font-bold text-2xl">
                D.
              </div>
              <span className="font-display font-bold text-3xl tracking-tighter uppercase text-background">
                Dutchy
              </span>
            </a>
          </div>

          {/* Main Content */}
          <div className="relative z-10">
            <h1 className="font-display text-5xl md:text-6xl font-bold uppercase leading-[0.9] tracking-tighter mb-6">
              Build<br />
              <span className="text-primary">Beautifully.</span>
            </h1>
            <p className="text-xl text-background/70 max-w-md leading-relaxed">
              Access 50+ professionally crafted components and start building your next project today.
            </p>
          </div>

          {/* Testimonial */}
          <div className="relative z-10 border-l-4 border-primary pl-6">
            <p className="text-background/80 mb-4 italic">
              "Dutchy's bold design system has transformed how we approach UI development. The sharp, functional aesthetic is exactly what we needed."
            </p>
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-primary flex items-center justify-center font-display font-bold text-primary-foreground">
                JD
              </div>
              <div>
                <p className="font-bold">Jane Developer</p>
                <p className="text-sm text-background/60">Lead Engineer @ TechCorp</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Auth Form */}
        <div className="flex items-center justify-center p-8 bg-background">
          <div className="w-full max-w-md">
            {/* Mobile Logo */}
            <div className="lg:hidden mb-8 text-center">
              <a href="/showcase" className="inline-flex items-center gap-3">
                <div className="bg-primary text-primary-foreground w-10 h-10 flex items-center justify-center font-display font-bold text-xl">
                  D.
                </div>
                <span className="font-display font-bold text-2xl tracking-tighter uppercase text-foreground">
                  Dutchy
                </span>
              </a>
            </div>

            {/* Auth Card */}
            <div className="bg-background">
              {/* Tab Switcher */}
              <div className="flex border-b-4 border-border mb-8">
                <button className="flex-1 py-4 font-display font-bold uppercase tracking-wider text-sm border-b-4 border-primary -mb-1 text-primary">
                  Sign In
                </button>
                <a href="/showcase/register" className="flex-1 py-4 font-display font-bold uppercase tracking-wider text-sm text-muted-foreground hover:text-foreground transition-colors text-center">
                  Sign Up
                </a>
              </div>

              {/* Error Message */}
              {error && (
                <Alert variant="error" className="mb-6">
                  {error === 'invalid' ? 'Invalid email or password. Please try again.' : 'An error occurred. Please try again.'}
                </Alert>
              )}

              {/* Form */}
              <Form action="/showcase/login" method="POST" spacing="md">
                {/* Email */}
                <Input
                  label="Email Address"
                  type="email"
                  id="email"
                  name="email"
                  placeholder="you@example.com"
                />

                {/* Password */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <label className="text-xs font-bold uppercase tracking-wider" htmlFor="password">
                      Password
                    </label>
                    <a href="#" className="text-sm text-primary hover:underline decoration-2 underline-offset-2">
                      Forgot?
                    </a>
                  </div>
                  <div className="relative">
                    <Input
                      type="password"
                      id="password"
                      name="password"
                      placeholder="Enter your password"
                      className="pr-12"
                    />
                    <Button variant="ghost" icon size="sm" type="button" id="toggle-password" aria-label="Toggle password visibility" className="absolute right-2 top-1/2 -translate-y-1/2 w-auto h-auto p-1">
                      <Icon name="eye" />
                    </Button>
                  </div>
                </div>

                {/* Remember Me */}
                <Checkbox label="Keep me signed in" name="remember" />

                {/* Submit Button */}
                <Button type="submit" fullWidth size="lg">Sign In</Button>
              </Form>

              {/* Divider */}
              <div className="flex items-center gap-4 my-8">
                <div className="flex-1 h-px bg-border" />
                <span className="font-mono text-xs text-muted-foreground uppercase tracking-wider">Or continue with</span>
                <div className="flex-1 h-px bg-border" />
              </div>

              {/* Social Buttons */}
              <div className="grid grid-cols-2 gap-4">
                <Button variant="outline" fullWidth className="border-border hover:border-foreground">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                  </svg>
                  Google
                </Button>
                <Button variant="outline" fullWidth className="border-border hover:border-foreground">
                  <Icon name="github" />
                  GitHub
                </Button>
              </div>

              {/* Sign Up Link */}
              <p className="text-center mt-8 text-sm text-muted-foreground">
                Don't have an account?{' '}
                <a href="/showcase/register" className="text-primary font-bold hover:underline decoration-2 underline-offset-2">
                  Create one
                </a>
              </p>
            </div>

            {/* Footer Links */}
            <div className="mt-12 flex items-center justify-center gap-6 text-xs text-muted-foreground">
              <a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a>
              <span>&bull;</span>
              <a href="#" className="hover:text-foreground transition-colors">Terms of Service</a>
              <span>&bull;</span>
              <a href="#" className="hover:text-foreground transition-colors">Help</a>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default LoginPage;
