# Stepper / Progress Tracker

## Philosophy

Steppers visualize multi-step workflows, showing where users are and what's ahead. The Dutchy system uses bold numbering, strong connector lines, and clear state indicators (completed, current, upcoming) to orient users through sequential processes.

## Horizontal Stepper

```html
<div class="flex items-center">
  <!-- Step 1: Completed -->
  <div class="flex items-center">
    <div class="w-10 h-10 bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm">
      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
      </svg>
    </div>
    <span class="ml-3 text-sm font-bold uppercase tracking-wide">Account</span>
  </div>

  <!-- Connector -->
  <div class="flex-1 h-0.5 bg-primary mx-4"></div>

  <!-- Step 2: Current -->
  <div class="flex items-center">
    <div class="w-10 h-10 border-4 border-primary text-primary flex items-center justify-center font-bold text-sm">
      2
    </div>
    <span class="ml-3 text-sm font-bold uppercase tracking-wide">Details</span>
  </div>

  <!-- Connector -->
  <div class="flex-1 h-0.5 bg-border mx-4"></div>

  <!-- Step 3: Upcoming -->
  <div class="flex items-center">
    <div class="w-10 h-10 border-2 border-border text-muted-foreground flex items-center justify-center font-bold text-sm">
      3
    </div>
    <span class="ml-3 text-sm font-bold uppercase tracking-wide text-muted-foreground">Review</span>
  </div>

  <!-- Connector -->
  <div class="flex-1 h-0.5 bg-border mx-4"></div>

  <!-- Step 4: Upcoming -->
  <div class="flex items-center">
    <div class="w-10 h-10 border-2 border-border text-muted-foreground flex items-center justify-center font-bold text-sm">
      4
    </div>
    <span class="ml-3 text-sm font-bold uppercase tracking-wide text-muted-foreground">Confirm</span>
  </div>
</div>
```

## Vertical Stepper

```html
<div class="space-y-0">
  <!-- Step 1: Completed -->
  <div class="flex gap-4">
    <div class="flex flex-col items-center">
      <div class="w-10 h-10 bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm shrink-0">
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
        </svg>
      </div>
      <div class="w-0.5 flex-1 bg-primary my-2"></div>
    </div>
    <div class="pb-8">
      <p class="font-bold uppercase text-sm tracking-wide">Create Account</p>
      <p class="text-sm text-muted-foreground mt-1">Enter your email and set a password.</p>
    </div>
  </div>

  <!-- Step 2: Current -->
  <div class="flex gap-4">
    <div class="flex flex-col items-center">
      <div class="w-10 h-10 border-4 border-primary text-primary flex items-center justify-center font-bold text-sm shrink-0">
        2
      </div>
      <div class="w-0.5 flex-1 bg-border my-2"></div>
    </div>
    <div class="pb-8">
      <p class="font-bold uppercase text-sm tracking-wide">Personal Details</p>
      <p class="text-sm text-muted-foreground mt-1">Fill in your name and contact information.</p>
    </div>
  </div>

  <!-- Step 3: Upcoming -->
  <div class="flex gap-4">
    <div class="flex flex-col items-center">
      <div class="w-10 h-10 border-2 border-border text-muted-foreground flex items-center justify-center font-bold text-sm shrink-0">
        3
      </div>
      <div class="w-0.5 flex-1 bg-border my-2"></div>
    </div>
    <div class="pb-8">
      <p class="font-bold uppercase text-sm tracking-wide text-muted-foreground">Review</p>
      <p class="text-sm text-muted-foreground mt-1">Verify your information before submitting.</p>
    </div>
  </div>

  <!-- Step 4: Upcoming (last, no connector) -->
  <div class="flex gap-4">
    <div class="flex flex-col items-center">
      <div class="w-10 h-10 border-2 border-border text-muted-foreground flex items-center justify-center font-bold text-sm shrink-0">
        4
      </div>
    </div>
    <div>
      <p class="font-bold uppercase text-sm tracking-wide text-muted-foreground">Confirmation</p>
      <p class="text-sm text-muted-foreground mt-1">Your account is ready to go.</p>
    </div>
  </div>
</div>
```

## Compact Stepper

```html
<div class="flex items-center gap-2">
  <div class="w-8 h-8 bg-primary text-primary-foreground flex items-center justify-center font-bold text-xs">1</div>
  <div class="w-8 h-0.5 bg-primary"></div>
  <div class="w-8 h-8 bg-primary text-primary-foreground flex items-center justify-center font-bold text-xs">2</div>
  <div class="w-8 h-0.5 bg-primary"></div>
  <div class="w-8 h-8 border-4 border-primary text-primary flex items-center justify-center font-bold text-xs">3</div>
  <div class="w-8 h-0.5 bg-border"></div>
  <div class="w-8 h-8 border-2 border-border text-muted-foreground flex items-center justify-center font-bold text-xs">4</div>
  <div class="w-8 h-0.5 bg-border"></div>
  <div class="w-8 h-8 border-2 border-border text-muted-foreground flex items-center justify-center font-bold text-xs">5</div>
</div>
```

## Progress Bar Variant

```html
<div>
  <div class="flex justify-between mb-2">
    <span class="text-sm font-bold uppercase tracking-wide">Step 2 of 4</span>
    <span class="text-sm text-muted-foreground">50%</span>
  </div>
  <div class="h-2 bg-muted w-full">
    <div class="h-full bg-primary" style="width: 50%"></div>
  </div>
  <div class="flex justify-between mt-2">
    <span class="text-xs text-muted-foreground uppercase tracking-wider">Account</span>
    <span class="text-xs font-bold uppercase tracking-wider">Details</span>
    <span class="text-xs text-muted-foreground uppercase tracking-wider">Review</span>
    <span class="text-xs text-muted-foreground uppercase tracking-wider">Confirm</span>
  </div>
</div>
```

## CSS Implementation

```css
.stepper {
  display: flex;
  align-items: center;
}

.step-indicator {
  width: 2.5rem;
  height: 2.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 0.875rem;
  flex-shrink: 0;
}

.step-completed {
  background-color: hsl(var(--primary));
  color: hsl(var(--primary-foreground));
}

.step-current {
  border: 4px solid hsl(var(--primary));
  color: hsl(var(--primary));
}

.step-upcoming {
  border: 2px solid hsl(var(--border));
  color: hsl(var(--muted-foreground));
}

.step-connector {
  flex: 1;
  height: 2px;
  margin: 0 1rem;
}

.step-connector-completed {
  background-color: hsl(var(--primary));
}

.step-connector-upcoming {
  background-color: hsl(var(--border));
}

.step-label {
  font-weight: 700;
  text-transform: uppercase;
  font-size: 0.875rem;
  letter-spacing: 0.05em;
}

.step-label-upcoming {
  color: hsl(var(--muted-foreground));
}
```

## React Component Example

```tsx
function Stepper({ steps, currentStep }) {
  return (
    <div className="flex items-center">
      {steps.map((step, i) => (
        <Fragment key={i}>
          <div className="flex items-center">
            <div className={`w-10 h-10 flex items-center justify-center font-bold text-sm ${
              i < currentStep ? 'bg-primary text-primary-foreground' :
              i === currentStep ? 'border-4 border-primary text-primary' :
              'border-2 border-border text-muted-foreground'
            }`}>
              {i < currentStep ? (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"/>
                </svg>
              ) : i + 1}
            </div>
            <span className={`ml-3 text-sm font-bold uppercase tracking-wide ${
              i > currentStep ? 'text-muted-foreground' : ''
            }`}>
              {step}
            </span>
          </div>
          {i < steps.length - 1 && (
            <div className={`flex-1 h-0.5 mx-4 ${
              i < currentStep ? 'bg-primary' : 'bg-border'
            }`} />
          )}
        </Fragment>
      ))}
    </div>
  );
}
```

## Accessibility

- Use `aria-current="step"` on the current step.
- Use `role="list"` and `role="listitem"` for the step sequence (or an ordered list).
- Completed steps should indicate their state with text (e.g., "Completed") in addition to the checkmark icon.
- Ensure the step labels have sufficient contrast.
- Connector lines should be decorative (`aria-hidden="true"`).
- Provide a text summary like "Step 2 of 4" for screen readers.
- Avoid relying solely on color to distinguish step states.
