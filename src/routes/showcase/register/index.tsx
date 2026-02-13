import type { FC } from 'react';
import Layout from '@/components/Layout';
import Header from '@/components/Header';
import Breadcrumbs from '@/components/Breadcrumbs';
import Stepper from '@/components/Stepper';
import Tooltip from '@/components/Tooltip';
import FileUpload from '@/components/FileUpload';
import Skeleton from '@/components/Skeleton';
import { ToastContainer } from '@/components/Toast';
import Button from '@/components/Button';
import Input from '@/components/Input';
import Textarea from '@/components/Textarea';

const RegisterPage: FC<{ request: Request }> = () => {
  const interests = ['Design', 'Frontend', 'Backend', 'DevOps', 'Mobile', 'AI'];

  return (
    <Layout
      title="Create Account | Dutchy"
      meta={{
        description: 'Create a new Dutchy account to access components and tools.',
        keywords: 'register, sign up, create account, dutchy',
      }}
      scripts={[
        '/assets/js/mobile-menu.js',
        '/assets/js/stepper.js',
        '/assets/js/form-validation.js',
        '/assets/js/file-upload.js',
        '/assets/js/badge-close.js',
        '/assets/js/toast.js',
      ]}
    >
      <Header
        siteName="Dutchy"
        currentPath="/showcase/register"
        navLinks={[
          { href: '/showcase', label: 'Home' },
          { href: '/showcase/categories', label: 'Categories' },
          { href: '/showcase/pricing', label: 'Pricing' },
          { href: '/showcase/blog', label: 'Blog' },
        ]}
        ctaText="Contact Us"
        ctaHref="/showcase/contact"
      />

      {/* Breadcrumb */}
      <div className="bg-muted border-b border-border">
        <div className="container mx-auto px-4 md:px-6 py-3">
          <Breadcrumbs
            items={[
              { label: 'Home', href: '/showcase' },
              { label: 'Account', href: '#' },
              { label: 'Register' },
            ]}
          />
        </div>
      </div>

      {/* Main Content */}
      <main className="py-12 md:py-16">
        <div className="container mx-auto px-4 md:px-6 max-w-3xl">
          <div className="text-center mb-10">
            <h1 className="font-display text-4xl md:text-5xl font-bold uppercase tracking-tighter mb-4">Create Account</h1>
            <p className="text-muted-foreground">Complete the steps below to set up your account.</p>
          </div>

          {/* Stepper */}
          <Stepper
            steps={['Account', 'Profile', 'Interests', 'Confirm']}
            currentStep={1}
            className="mb-12 px-4"
          />

          {/* Step Panels */}
          <div className="bg-background border-4 border-border p-8 md:p-10" data-stepper="">
            {/* Step 1: Account */}
            <div className="step-panel" data-panel="1">
              <h2 className="font-display text-2xl font-bold uppercase tracking-tight mb-6">Account Details</h2>
              <div className="space-y-6">
                <div data-field="">
                  <label className="block font-display font-bold uppercase text-sm tracking-wider mb-3" htmlFor="regEmail">
                    Email{' '}
                    <Tooltip text="This field is required">
                      <span className="text-primary">*</span>
                    </Tooltip>
                  </label>
                  <input
                    type="email"
                    id="regEmail"
                    name="email"
                    required
                    placeholder="you@example.com"
                    className="w-full px-4 py-4 border-2 border-border bg-background font-body focus:outline-none focus:border-primary transition-colors"
                  />
                  <p className="field-error">Please enter a valid email address</p>
                </div>
                <div data-field="">
                  <label className="block font-display font-bold uppercase text-sm tracking-wider mb-3" htmlFor="regPassword">
                    Password{' '}
                    <Tooltip text="This field is required">
                      <span className="text-primary">*</span>
                    </Tooltip>
                  </label>
                  <input
                    type="password"
                    id="regPassword"
                    name="password"
                    required
                    minLength={8}
                    placeholder="Minimum 8 characters"
                    className="w-full px-4 py-4 border-2 border-border bg-background font-body focus:outline-none focus:border-primary transition-colors"
                  />
                  <p className="field-error">Password must be at least 8 characters</p>
                </div>
                <div data-field="">
                  <label className="block font-display font-bold uppercase text-sm tracking-wider mb-3" htmlFor="regConfirm">
                    Confirm Password{' '}
                    <Tooltip text="This field is required">
                      <span className="text-primary">*</span>
                    </Tooltip>
                  </label>
                  <input
                    type="password"
                    id="regConfirm"
                    name="confirmPassword"
                    required
                    placeholder="Re-enter your password"
                    className="w-full px-4 py-4 border-2 border-border bg-background font-body focus:outline-none focus:border-primary transition-colors"
                  />
                  <p className="field-error">Passwords must match</p>
                </div>
              </div>
            </div>

            {/* Step 2: Profile */}
            <div className="step-panel hidden" data-panel="2">
              <h2 className="font-display text-2xl font-bold uppercase tracking-tight mb-6">Profile Information</h2>
              <div className="space-y-6">
                <div data-field="">
                  <label className="block font-display font-bold uppercase text-sm tracking-wider mb-3" htmlFor="fullName">
                    Full Name{' '}
                    <Tooltip text="This field is required">
                      <span className="text-primary">*</span>
                    </Tooltip>
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    required
                    placeholder="John Doe"
                    className="w-full px-4 py-4 border-2 border-border bg-background font-body focus:outline-none focus:border-primary transition-colors"
                  />
                  <p className="field-error">Full name is required</p>
                </div>
                <Input
                  label="Phone"
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="+1 (555) 000-0000"
                />
                <Textarea
                  label="Bio"
                  id="bio"
                  name="bio"
                  rows={3}
                  placeholder="Tell us about yourself..."
                  resize="none"
                />
                <div>
                  <label className="block font-display font-bold uppercase text-sm tracking-wider mb-3">Avatar</label>
                  <FileUpload
                    id="avatar-dropzone"
                    label="Drop your avatar here or click to browse"
                    accept=".png,.jpg,.jpeg"
                    maxSizeMB={5}
                  />
                </div>
              </div>
            </div>

            {/* Step 3: Interests */}
            <div className="step-panel hidden" data-panel="3">
              <h2 className="font-display text-2xl font-bold uppercase tracking-tight mb-6">Select Interests</h2>
              <p className="text-sm text-muted-foreground mb-6">Click to select your interests. Click the X to remove.</p>
              <div className="flex flex-wrap gap-2 mb-8" id="interestTags">
                {interests.map((interest) => (
                  <button
                    key={interest}
                    type="button"
                    className="interest-tag inline-flex items-center gap-2 px-4 py-2 border-2 border-border text-sm font-bold uppercase tracking-wider hover:border-primary hover:text-primary transition-colors"
                    data-interest={interest}
                  >
                    {interest}
                  </button>
                ))}
              </div>
              <div className="mb-4">
                <p className="font-display font-bold uppercase text-sm tracking-wider mb-3">Selected:</p>
                <div id="selectedInterests" className="flex flex-wrap gap-2 min-h-[40px]">
                  <span className="text-sm text-muted-foreground italic" id="noInterests">No interests selected</span>
                </div>
              </div>
              <div className="mt-8">
                <label className="block font-display font-bold uppercase text-sm tracking-wider mb-3">Documents</label>
                <FileUpload
                  id="doc-dropzone"
                  label="Drop documents here or click to browse"
                  accept=".pdf,.doc,.docx"
                  multiple
                  maxSizeMB={10}
                />
              </div>
            </div>

            {/* Step 4: Confirm */}
            <div className="step-panel hidden" data-panel="4">
              <h2 className="font-display text-2xl font-bold uppercase tracking-tight mb-6">Review &amp; Confirm</h2>
              <div id="reviewContent">
                <div id="reviewSkeleton" className="space-y-4">
                  <Skeleton variant="title" />
                  <Skeleton variant="text" count={2} />
                  <Skeleton variant="title" className="mt-6" />
                  <Skeleton variant="text" count={2} />
                  <Skeleton variant="title" className="mt-6" />
                  <Skeleton variant="text" />
                </div>
                <div id="reviewData" className="hidden space-y-6">
                  <div className="border-l-4 border-primary p-4 bg-muted/30">
                    <h3 className="font-display font-bold uppercase text-sm tracking-wider mb-2">Account</h3>
                    <p className="text-sm">
                      <span className="text-muted-foreground">Email:</span>{' '}
                      <span id="reviewEmail" className="font-medium" />
                    </p>
                  </div>
                  <div className="border-l-4 border-primary p-4 bg-muted/30">
                    <h3 className="font-display font-bold uppercase text-sm tracking-wider mb-2">Profile</h3>
                    <p className="text-sm">
                      <span className="text-muted-foreground">Name:</span>{' '}
                      <span id="reviewName" className="font-medium" />
                    </p>
                    <p className="text-sm">
                      <span className="text-muted-foreground">Phone:</span>{' '}
                      <span id="reviewPhone" className="font-medium" />
                    </p>
                  </div>
                  <div className="border-l-4 border-primary p-4 bg-muted/30">
                    <h3 className="font-display font-bold uppercase text-sm tracking-wider mb-2">Interests</h3>
                    <div id="reviewInterests" className="flex flex-wrap gap-2 mt-2" />
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation Buttons */}
            <div className="flex items-center justify-between mt-10 pt-6 border-t border-border">
              <Button variant="outline" id="prevBtn" className="hidden">Back</Button>
              <div className="flex-1" />
              <Button id="nextBtn">Continue</Button>
            </div>

            {/* Progress */}
            <div className="mt-6">
              <div className="w-full bg-muted h-2">
                <div id="progressBar" className="bg-primary h-2 transition-all duration-300" style={{ width: '25%' }} />
              </div>
              <p id="progressText" className="text-center text-xs text-muted-foreground mt-2 font-mono uppercase tracking-wider">
                Step 1 of 4 -- 25%
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-foreground text-background py-8 mt-16">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <p className="font-mono text-xs opacity-60 uppercase tracking-widest">&copy; 2025 Dutchy Design System</p>
        </div>
      </footer>

      <ToastContainer />
    </Layout>
  );
};

export default RegisterPage;
