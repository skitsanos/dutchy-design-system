import type { FC } from 'react';
import ComponentPageLayout from '@/components/ComponentPageLayout';
import Button from '@/components/Button';
import Flex from '@/components/Flex';
import Icon from '@/components/Icon';
import Input from '@/components/Input';
import Textarea from '@/components/Textarea';
import Checkbox from '@/components/Checkbox';
import Radio from '@/components/Radio';
import Select from '@/components/Select';
import Form from '@/components/Form';
import FormField from '@/components/FormField';

const FormsPage: FC = () => (
  <ComponentPageLayout componentId="forms">
    <>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Text Inputs */}
        <div className="bg-background border-4 border-border p-8">
          <h3 className="font-display font-bold uppercase text-sm tracking-wider mb-6">Text Inputs</h3>
          <Form spacing="md">
            <Input label="Default Input" placeholder="Enter text..." />
            <Input
              label="With Help Text"
              type="email"
              placeholder="email@example.com"
              helpText="We'll never share your email."
            />
            <Input
              label="Disabled"
              placeholder="Disabled input"
              disabled
            />
          </Form>
        </div>

        {/* Search Input */}
        <div className="bg-background border-4 border-border p-8">
          <h3 className="font-display font-bold uppercase text-sm tracking-wider mb-6">Search</h3>
          <Form spacing="md">
            <div className="relative">
              <Input type="search" placeholder="Search components..." className="pr-12" />
              <Button icon size="sm" className="absolute right-2 top-1/2 -translate-y-1/2">
                <Icon name="search" size="sm" />
              </Button>
            </div>
            <Flex gap={0}>
              <Input type="search" placeholder="Search..." className="border-r-0" />
              <Button className="border-2 border-primary flex-shrink-0">
                Search
              </Button>
            </Flex>
          </Form>
        </div>

        {/* Password Input */}
        <div className="bg-background border-4 border-border p-8">
          <h3 className="font-display font-bold uppercase text-sm tracking-wider mb-6">Password</h3>
          <Form spacing="md">
            <div className="relative" data-password-toggle="">
              <Input type="password" label="Password" placeholder="Enter password..." className="pr-12" />
              <Button
                variant="ghost"
                icon
                size="sm"
                data-toggle-btn=""
                className="absolute right-2 bottom-1"
                aria-label="Toggle password visibility"
              >
                <Icon name="eye" size="sm" />
              </Button>
            </div>
            <div className="relative" data-password-toggle="">
              <Input type="password" label="Confirm Password" placeholder="Confirm password..." className="pr-12" />
              <Button
                variant="ghost"
                icon
                size="sm"
                data-toggle-btn=""
                className="absolute right-2 bottom-1"
                aria-label="Toggle password visibility"
              >
                <Icon name="eye" size="sm" />
              </Button>
            </div>
          </Form>
        </div>

        {/* Select & Textarea */}
        <div className="bg-background border-4 border-border p-8">
          <h3 className="font-display font-bold uppercase text-sm tracking-wider mb-6">Select &amp; Textarea</h3>
          <Form spacing="md">
            <Select
              label="Select"
              placeholder="Select an option..."
              options={[
                { value: 'option1', label: 'Option 1' },
                { value: 'option2', label: 'Option 2' },
                { value: 'option3', label: 'Option 3' },
              ]}
            />
            <Textarea label="Textarea" rows={4} placeholder="Enter your message..." resize="none" />
          </Form>
        </div>

        {/* Checkboxes & Radios */}
        <div className="bg-background border-4 border-border p-8">
          <h3 className="font-display font-bold uppercase text-sm tracking-wider mb-6">Checkboxes &amp; Radios</h3>
          <div className="space-y-6">
            <div className="space-y-3">
              <Checkbox label="Option checked" defaultChecked />
              <Checkbox label="Option unchecked" />
            </div>
            <div className="border-t border-border pt-6 space-y-3">
              <Radio name="radio-demo" label="Radio option 1" defaultChecked />
              <Radio name="radio-demo" label="Radio option 2" />
            </div>
          </div>
        </div>
      </div>

      {/* Complete Form Example */}
      <div className="mt-8 mb-8 bg-background border-4 border-border p-8 md:p-12">
        <h3 className="font-display font-bold uppercase text-sm tracking-wider mb-8">Complete Form Example</h3>
        <Form maxWidth="lg">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Input label="First Name" placeholder="John" required />
            <Input label="Last Name" placeholder="Doe" required />
          </div>
          <Input label="Email" type="email" placeholder="john@example.com" required />
          <Textarea label="Message" rows={4} placeholder="Your message..." resize="none" />
          <Checkbox label="I agree to the terms and conditions" />
          <div>
            <Button type="submit" size="lg">
              Submit Form
            </Button>
          </div>
        </Form>
      </div>

      {/* Form Validation - Live Demo */}
      <div className="mb-8 bg-white border-4 border-border p-8 md:p-12">
        <h3 className="font-display font-bold uppercase text-sm tracking-wider mb-6 text-muted-foreground">Form Validation</h3>
        <Form id="validation-demo" maxWidth="md" noValidate>
          <FormField>
            <Input name="fullname" label="Full Name" placeholder="John Doe" />
          </FormField>
          <FormField>
            <Input name="email" label="Email" placeholder="john@example.com" />
          </FormField>
          <FormField>
            <Input name="password" type="password" label="Password" placeholder="Min 8 chars, uppercase + number" />
          </FormField>
          <FormField>
            <Input name="website" label="Website" placeholder="https://example.com" helpText="Optional" />
          </FormField>
          <FormField>
            <Textarea name="bio" label="Bio" rows={3} placeholder="Tell us about yourself..." resize="none" showCount maxLength={200} />
          </FormField>
          <Flex gap={4}>
            <Button type="submit">Submit</Button>
            <Button variant="outline" type="reset">Reset</Button>
          </Flex>
        </Form>
      </div>

      {/* Validation Code Example */}
      <div className="bg-white border-4 border-border p-8 md:p-12">
        <h3 className="font-display font-bold uppercase text-sm tracking-wider mb-6 text-muted-foreground">Validation Usage</h3>
        <pre className="bg-foreground text-background p-6 overflow-x-auto">
          <code className="text-sm">{`const form = DutchyForm.create(document.getElementById('my-form'), {
  rules: {
    email: [
      { required: true, message: 'Email is required' },
      { type: 'email', message: 'Enter a valid email' },
    ],
    password: [
      { required: true, message: 'Password is required' },
      { min: 8, message: 'At least 8 characters' },
      { pattern: /[A-Z]/, message: 'Include an uppercase letter' },
      { pattern: /[0-9]/, message: 'Include a number' },
    ],
  },
  validateTrigger: 'onBlur',
});

form.addEventListener('dutchy:submit', (e) => {
  console.log('Valid:', e.detail);
});`}</code>
        </pre>
      </div>
    </>
  </ComponentPageLayout>
);

export default FormsPage;
