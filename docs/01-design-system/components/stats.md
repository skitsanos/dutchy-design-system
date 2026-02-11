# Stats / KPI Cards

## Philosophy

Stats cards surface key metrics at a glance. Bold numbers, subtle labels, and optional trend indicators let users instantly assess performance. The Dutchy approach uses large display type and accent borders for visual weight.

## Basic Stat Card

```html
<div class="border-4 border-border p-6">
  <p class="font-display font-bold uppercase text-xs tracking-wider text-muted-foreground mb-2">Total Revenue</p>
  <p class="font-display text-4xl font-bold tracking-tight">$48,290</p>
</div>
```

## Stat Card with Trend

```html
<div class="border-4 border-border p-6">
  <p class="font-display font-bold uppercase text-xs tracking-wider text-muted-foreground mb-2">Total Revenue</p>
  <p class="font-display text-4xl font-bold tracking-tight mb-2">$48,290</p>
  <div class="flex items-center gap-1.5">
    <svg class="w-4 h-4" style="color: hsl(142 76% 36%)" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 17l5-5 5 5m0-8l-5 5-5-5"/>
    </svg>
    <span class="text-sm font-bold" style="color: hsl(142 76% 36%)">+12.5%</span>
    <span class="text-sm text-muted-foreground">vs last month</span>
  </div>
</div>
```

## Stat Card with Down Trend

```html
<div class="border-4 border-border p-6">
  <p class="font-display font-bold uppercase text-xs tracking-wider text-muted-foreground mb-2">Bounce Rate</p>
  <p class="font-display text-4xl font-bold tracking-tight mb-2">34.2%</p>
  <div class="flex items-center gap-1.5">
    <svg class="w-4 h-4 text-destructive" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 7l-5 5-5-5m0 8l5-5 5 5"/>
    </svg>
    <span class="text-sm font-bold text-destructive">+8.1%</span>
    <span class="text-sm text-muted-foreground">vs last month</span>
  </div>
</div>
```

## Stats Grid

```html
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
  <div class="border-4 border-border p-6">
    <p class="font-display font-bold uppercase text-xs tracking-wider text-muted-foreground mb-2">Revenue</p>
    <p class="font-display text-3xl font-bold tracking-tight">$48.2K</p>
  </div>
  <div class="border-4 border-border p-6">
    <p class="font-display font-bold uppercase text-xs tracking-wider text-muted-foreground mb-2">Orders</p>
    <p class="font-display text-3xl font-bold tracking-tight">1,429</p>
  </div>
  <div class="border-4 border-border p-6">
    <p class="font-display font-bold uppercase text-xs tracking-wider text-muted-foreground mb-2">Conversion</p>
    <p class="font-display text-3xl font-bold tracking-tight">3.24%</p>
  </div>
  <div class="border-4 border-border p-6">
    <p class="font-display font-bold uppercase text-xs tracking-wider text-muted-foreground mb-2">Avg. Order</p>
    <p class="font-display text-3xl font-bold tracking-tight">$33.80</p>
  </div>
</div>
```

## Compact Stats Row

```html
<div class="flex divide-x-2 divide-border border-2 border-border">
  <div class="flex-1 p-4 text-center">
    <p class="font-display text-2xl font-bold">2,847</p>
    <p class="text-xs text-muted-foreground uppercase tracking-wider font-bold mt-1">Users</p>
  </div>
  <div class="flex-1 p-4 text-center">
    <p class="font-display text-2xl font-bold">14,209</p>
    <p class="text-xs text-muted-foreground uppercase tracking-wider font-bold mt-1">Views</p>
  </div>
  <div class="flex-1 p-4 text-center">
    <p class="font-display text-2xl font-bold">89%</p>
    <p class="text-xs text-muted-foreground uppercase tracking-wider font-bold mt-1">Uptime</p>
  </div>
  <div class="flex-1 p-4 text-center">
    <p class="font-display text-2xl font-bold">3.2s</p>
    <p class="text-xs text-muted-foreground uppercase tracking-wider font-bold mt-1">Avg Load</p>
  </div>
</div>
```

## Detailed Stat Card

```html
<div class="border-l-4 border-primary p-6 bg-background">
  <div class="flex items-start justify-between mb-4">
    <div>
      <p class="font-display font-bold uppercase text-xs tracking-wider text-muted-foreground">Monthly Revenue</p>
      <p class="font-display text-4xl font-bold tracking-tight mt-1">$48,290</p>
    </div>
    <div class="w-12 h-12 bg-primary/10 flex items-center justify-center">
      <svg class="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
      </svg>
    </div>
  </div>
  <div class="flex items-center gap-1.5">
    <span class="text-sm font-bold" style="color: hsl(142 76% 36%)">+12.5%</span>
    <span class="text-sm text-muted-foreground">from $42,924 last month</span>
  </div>
</div>
```

## CSS Implementation

```css
.stat-card {
  padding: 1.5rem;
  border: 4px solid hsl(var(--border));
}

.stat-label {
  font-weight: 700;
  text-transform: uppercase;
  font-size: 0.75rem;
  letter-spacing: 0.05em;
  color: hsl(var(--muted-foreground));
  margin-bottom: 0.5rem;
}

.stat-value {
  font-family: var(--font-display);
  font-weight: 700;
  font-size: 2.25rem;
  letter-spacing: -0.025em;
}

.stat-trend {
  display: flex;
  align-items: center;
  gap: 0.375rem;
  font-size: 0.875rem;
  margin-top: 0.5rem;
}

.stat-trend-up { color: hsl(142 76% 36%); }
.stat-trend-down { color: hsl(var(--destructive)); }
```

## React Component Example

```tsx
function StatCard({ label, value, trend, trendLabel }) {
  const isPositive = trend && trend > 0;
  const trendColor = isPositive ? 'text-[hsl(142,76%,36%)]' : 'text-destructive';

  return (
    <div className="border-4 border-border p-6">
      <p className="font-display font-bold uppercase text-xs tracking-wider text-muted-foreground mb-2">
        {label}
      </p>
      <p className="font-display text-4xl font-bold tracking-tight mb-2">{value}</p>
      {trend !== undefined && (
        <div className="flex items-center gap-1.5">
          <span className={`text-sm font-bold ${trendColor}`}>
            {isPositive ? '+' : ''}{trend}%
          </span>
          {trendLabel && (
            <span className="text-sm text-muted-foreground">{trendLabel}</span>
          )}
        </div>
      )}
    </div>
  );
}
```

## Accessibility

- Use descriptive labels for each metric so screen readers provide full context.
- Ensure trend indicators include text (e.g., "+12.5%"), not just arrows.
- Decorative trend icons should use `aria-hidden="true"`.
- Consider `role="group"` and `aria-label` on a stats grid for grouped context.
- Maintain sufficient contrast between stat values and the background.
