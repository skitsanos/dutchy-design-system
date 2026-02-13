import type { FC } from 'react';
import Layout from '@/components/Layout';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Icon from '@/components/Icon';
import FileUpload from '@/components/FileUpload';
import Button from '@/components/Button';
import Form from '@/components/Form';
import Input from '@/components/Input';
import Textarea from '@/components/Textarea';
import Select from '@/components/Select';
import Checkbox from '@/components/Checkbox';
import { ToastContainer } from '@/components/Toast';

const ContactPage: FC<{ request: Request }> = ({ request }) => {
  const url = new URL(request.url);
  const success = url.searchParams.get('success') === 'true';

  return (
    <Layout
      title="Contact Us | Dutchy"
      meta={{
        description: 'Get in touch with the Dutchy Design System team. We would love to hear from you.',
        keywords: 'contact, support, dutchy, design system',
      }}
      scripts={[
        '/assets/js/mobile-menu.js',
        '/assets/js/form-validation.js',
        '/assets/js/file-upload.js',
        '/assets/js/toast.js',
      ]}
    >
      <Header
        siteName="Dutchy"
        currentPath="/showcase/contact"
        navLinks={[
          { href: '/showcase', label: 'Home' },
          { href: '/showcase/categories', label: 'Categories' },
          { href: '/showcase/pricing', label: 'Pricing' },
          { href: '/showcase/blog', label: 'Blog' },
        ]}
        ctaText="Contact Us"
        ctaHref="/showcase/contact"
      />

      <main>
        {/* Hero Section */}
        <section className="border-b border-border">
          <div className="container mx-auto px-4 md:px-6 py-16 md:py-20">
            <div className="max-w-2xl">
              <div className="inline-block bg-primary px-4 py-2 text-primary-foreground font-mono text-xs font-bold uppercase tracking-widest mb-8">
                Get in Touch
              </div>
              <h1 className="font-display text-5xl md:text-7xl font-bold uppercase leading-[0.9] tracking-tighter mb-6">
                Contact<br />
                <span className="text-primary">Us.</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Have questions about our design system? Want to contribute or report an issue? We'd love to hear from you.
              </p>
            </div>
          </div>
        </section>

        {/* Success Message */}
        {success && (
          <section className="bg-success/10 border-b border-success">
            <div className="container mx-auto px-4 md:px-6 py-4">
              <div className="flex items-center gap-3">
                <Icon name="check-circle" className="text-success" />
                <p className="font-bold text-success">Your message has been sent successfully! We'll get back to you soon.</p>
              </div>
            </div>
          </section>
        )}

        {/* Contact Form Section */}
        <section className="py-16 md:py-20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

              {/* Contact Form */}
              <div className="lg:col-span-7">
                <Form id="contactForm" action="/showcase/contact" method="POST" spacing="lg" noValidate>
                  {/* Name Fields */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <Input
                      type="text"
                      id="firstName"
                      name="firstName"
                      label="First Name"
                      placeholder="John"
                      required
                    />
                    <Input
                      type="text"
                      id="lastName"
                      name="lastName"
                      label="Last Name"
                      placeholder="Doe"
                      required
                    />
                  </div>

                  {/* Email */}
                  <Input
                    type="email"
                    id="email"
                    name="email"
                    label="Email Address"
                    placeholder="john@example.com"
                    required
                  />

                  {/* Subject */}
                  <Select
                    label="Subject"
                    name="subject"
                    required
                    placeholder="Select a topic..."
                    options={[
                      { value: 'general', label: 'General Inquiry' },
                      { value: 'support', label: 'Technical Support' },
                      { value: 'feedback', label: 'Feedback' },
                      { value: 'partnership', label: 'Partnership' },
                      { value: 'bug', label: 'Bug Report' },
                    ]}
                  />

                  {/* Message */}
                  <Textarea
                    id="message"
                    name="message"
                    label="Message"
                    rows={6}
                    placeholder="Tell us more about your inquiry..."
                    required
                    minLength={20}
                    resize="none"
                    helpText="Maximum 500 characters"
                  />

                  {/* File Attachment */}
                  <div>
                    <label className="block font-display font-bold uppercase text-sm tracking-wider mb-3">
                      File Attachment
                    </label>
                    <FileUpload
                      id="contact-dropzone"
                      label="Drag and drop files here or click to browse"
                      accept=".png,.jpg,.jpeg,.pdf"
                      multiple
                      maxSizeMB={10}
                    />
                  </div>

                  {/* Checkbox */}
                  <Checkbox
                    label="I agree to receive occasional emails about product updates and news. You can unsubscribe at any time."
                    name="newsletter"
                  />

                  {/* Submit Button */}
                  <Button type="submit" size="lg">
                    Send Message
                    <Icon name="send" />
                  </Button>
                </Form>
              </div>

              {/* Contact Info Sidebar */}
              <aside className="lg:col-span-5">
                <div className="space-y-8">
                  {/* Quick Contact */}
                  <div className="bg-foreground text-background p-8">
                    <h3 className="font-display font-bold uppercase tracking-wider mb-6 text-primary">Quick Contact</h3>
                    <div className="space-y-6">
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 bg-primary flex items-center justify-center flex-shrink-0">
                          <Icon name="mail" className="text-primary-foreground" />
                        </div>
                        <div>
                          <p className="font-mono text-xs text-background/60 uppercase tracking-wider mb-1">Email</p>
                          <a href="mailto:hello@dutchy.design" className="hover:text-primary transition-colors">hello@dutchy.design</a>
                        </div>
                      </div>
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 bg-primary flex items-center justify-center flex-shrink-0">
                          <Icon name="map-pin" className="text-primary-foreground" />
                        </div>
                        <div>
                          <p className="font-mono text-xs text-background/60 uppercase tracking-wider mb-1">Location</p>
                          <p>Amsterdam, Netherlands</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 bg-primary flex items-center justify-center flex-shrink-0">
                          <Icon name="clock" className="text-primary-foreground" />
                        </div>
                        <div>
                          <p className="font-mono text-xs text-background/60 uppercase tracking-wider mb-1">Response Time</p>
                          <p>Within 24-48 hours</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Alternative Channels */}
                  <div className="border-l-4 border-primary bg-muted p-8">
                    <h3 className="font-display font-bold uppercase tracking-wider mb-4">Other Ways to Reach Us</h3>
                    <div className="space-y-4">
                      <a href="#" className="flex items-center gap-3 group">
                        <Icon name="github" className="text-muted-foreground group-hover:text-primary transition-colors" />
                        <span className="text-sm group-hover:text-primary transition-colors">Open an Issue on GitHub</span>
                        <Icon name="arrow-right" size="sm" className="text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all ml-auto" />
                      </a>
                      <a href="#" className="flex items-center gap-3 group">
                        <Icon name="message-square" className="text-muted-foreground group-hover:text-primary transition-colors" />
                        <span className="text-sm group-hover:text-primary transition-colors">Join our Discord Community</span>
                        <Icon name="arrow-right" size="sm" className="text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all ml-auto" />
                      </a>
                      <a href="#" className="flex items-center gap-3 group">
                        <Icon name="twitter" className="text-muted-foreground group-hover:text-primary transition-colors" />
                        <span className="text-sm group-hover:text-primary transition-colors">Follow us on Twitter</span>
                        <Icon name="arrow-right" size="sm" className="text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all ml-auto" />
                      </a>
                    </div>
                  </div>

                  {/* FAQ Teaser */}
                  <div className="bg-background border-4 border-border p-8">
                    <h3 className="font-display font-bold uppercase tracking-wider mb-4">Frequently Asked</h3>
                    <p className="text-sm text-muted-foreground mb-6">
                      Check our FAQ section for quick answers to common questions about the design system.
                    </p>
                    <a href="#" className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-primary hover:underline decoration-2 underline-offset-4">
                      View FAQ
                      <Icon name="arrow-right" size="sm" />
                    </a>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </section>

        {/* Map/CTA Section */}
        <section className="bg-foreground text-background py-16">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="font-display text-3xl md:text-4xl font-bold uppercase tracking-tighter mb-4">
                  Based in <span className="text-primary">Amsterdam</span>
                </h2>
                <p className="text-background/70 mb-6">
                  Our team works remotely across Europe, with our headquarters in the Netherlands.
                  We embrace the Dutch design philosophy of simplicity and functionality.
                </p>
                <div className="flex gap-4">
                  <div className="bg-primary text-primary-foreground px-6 py-3">
                    <p className="font-display text-2xl font-bold">CET</p>
                    <p className="text-xs uppercase tracking-wider opacity-70">Timezone</p>
                  </div>
                  <div className="bg-background text-foreground px-6 py-3">
                    <p className="font-display text-2xl font-bold">EN/NL</p>
                    <p className="text-xs uppercase tracking-wider text-muted-foreground">Languages</p>
                  </div>
                </div>
              </div>
              <div className="bg-muted/10 p-8 border-4 border-primary/30">
                <div className="aspect-video flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="96" height="96" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="text-primary/40">
                    <path d="M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0z" />
                    <path d="M15 5.764v15" />
                    <path d="M9 3.236v15" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer
        siteName="Dutchy"
        description="Built with the Dutchy Design System. Bold, structured, confident."
        columns={[
          {
            title: 'Resources',
            links: [
              { href: '/showcase', label: 'Documentation' },
              { href: '/showcase/categories', label: 'Components' },
              { href: '/showcase/blog', label: 'Examples' },
            ],
          },
          {
            title: 'Community',
            links: [
              { href: '#', label: 'GitHub' },
              { href: '#', label: 'Discord' },
              { href: '#', label: 'Twitter' },
            ],
          },
        ]}
        copyright="&copy; 2025 Dutchy Design System. Open Source under MIT License."
      />

      <ToastContainer />
    </Layout>
  );
};

export default ContactPage;
