import type { FC } from 'react';
import ComponentPageLayout from '@/components/ComponentPageLayout';
import Tabs from '@/components/Tabs';

const TabsPage: FC = () => (
  <ComponentPageLayout componentId="tabs">
    <>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Underline Tabs */}
        <div className="bg-background border-4 border-border">
          <h3 className="font-display font-bold uppercase text-xs tracking-wider p-6 pb-0 text-muted-foreground">
            Underline Tabs
          </h3>
          <div className="px-6 pt-4">
            <Tabs
              tabs={[
                {
                  id: 'overview',
                  label: 'Overview',
                  content: (
                    <p className="text-muted-foreground text-sm">
                      Overview panel content. Bold interfaces start here.
                    </p>
                  ),
                },
                {
                  id: 'features',
                  label: 'Features',
                  content: (
                    <p className="text-muted-foreground text-sm">
                      Features panel. Zero border radius, strong borders.
                    </p>
                  ),
                },
                {
                  id: 'pricing',
                  label: 'Pricing',
                  content: (
                    <p className="text-muted-foreground text-sm">
                      Pricing panel. Check our plans and pricing details.
                    </p>
                  ),
                },
              ]}
            />
          </div>
        </div>

        {/* Boxed Tabs */}
        <div className="bg-background border-4 border-border">
          <h3 className="font-display font-bold uppercase text-xs tracking-wider p-6 pb-0 text-muted-foreground">
            Segmented Control
          </h3>
          <div className="px-6 pt-4">
            <Tabs
              variant="segmented"
              tabs={[
                {
                  id: 'monthly',
                  label: 'Monthly',
                  content: (
                    <p className="text-muted-foreground text-sm">
                      Monthly billing: $29/mo per seat.
                    </p>
                  ),
                },
                {
                  id: 'yearly',
                  label: 'Yearly',
                  content: (
                    <p className="text-muted-foreground text-sm">
                      Yearly billing: $290/yr per seat (save 17%).
                    </p>
                  ),
                },
              ]}
            />
          </div>
        </div>
      </div>

      {/* Closable Tabs */}
      <div className="mt-8 bg-background border-4 border-border">
        <h3 className="font-display font-bold uppercase text-xs tracking-wider p-6 pb-0 text-muted-foreground">
          Closable Tabs
        </h3>
        <div className="px-6 pt-4">
          <Tabs
            closable
            tabs={[
              {
                id: 'readme',
                label: 'README.md',
                content: (
                  <p className="text-muted-foreground text-sm">
                    Project documentation and getting started guide.
                  </p>
                ),
              },
              {
                id: 'changelog',
                label: 'CHANGELOG.md',
                content: (
                  <p className="text-muted-foreground text-sm">
                    Version history and release notes.
                  </p>
                ),
              },
              {
                id: 'license',
                label: 'LICENSE',
                content: (
                  <p className="text-muted-foreground text-sm">
                    MIT License — open source and free to use.
                  </p>
                ),
              },
              {
                id: 'contributing',
                label: 'CONTRIBUTING.md',
                content: (
                  <p className="text-muted-foreground text-sm">
                    Guidelines for contributing to the project.
                  </p>
                ),
              },
              {
                id: 'security',
                label: 'SECURITY.md',
                content: (
                  <p className="text-muted-foreground text-sm">
                    Security policy and vulnerability reporting.
                  </p>
                ),
              },
            ]}
          />
        </div>
      </div>

      {/* Scrollable Tabs */}
      <div className="mt-8 bg-background border-4 border-border">
        <h3 className="font-display font-bold uppercase text-xs tracking-wider p-6 pb-0 text-muted-foreground">
          Scrollable Tabs
        </h3>
        <div className="px-6 pt-4">
          <Tabs
            scrollable
            tabs={[
              {
                id: 'dashboard',
                label: 'Dashboard',
                content: (
                  <p className="text-muted-foreground text-sm">
                    Dashboard overview with key metrics and charts.
                  </p>
                ),
              },
              {
                id: 'analytics',
                label: 'Analytics',
                content: (
                  <p className="text-muted-foreground text-sm">
                    Detailed analytics and reporting tools.
                  </p>
                ),
              },
              {
                id: 'reports',
                label: 'Reports',
                content: (
                  <p className="text-muted-foreground text-sm">
                    Generate and export custom reports.
                  </p>
                ),
              },
              {
                id: 'customers',
                label: 'Customers',
                content: (
                  <p className="text-muted-foreground text-sm">
                    Customer management and profiles.
                  </p>
                ),
              },
              {
                id: 'products',
                label: 'Products',
                content: (
                  <p className="text-muted-foreground text-sm">
                    Product catalog and inventory.
                  </p>
                ),
              },
              {
                id: 'orders',
                label: 'Orders',
                content: (
                  <p className="text-muted-foreground text-sm">
                    Order management and fulfillment.
                  </p>
                ),
              },
              {
                id: 'invoices',
                label: 'Invoices',
                content: (
                  <p className="text-muted-foreground text-sm">
                    Invoice generation and payment tracking.
                  </p>
                ),
              },
              {
                id: 'shipping',
                label: 'Shipping',
                content: (
                  <p className="text-muted-foreground text-sm">
                    Shipping configuration and tracking.
                  </p>
                ),
              },
              {
                id: 'integrations',
                label: 'Integrations',
                content: (
                  <p className="text-muted-foreground text-sm">
                    Third-party integrations and API connections.
                  </p>
                ),
              },
              {
                id: 'webhooks',
                label: 'Webhooks',
                content: (
                  <p className="text-muted-foreground text-sm">
                    Webhook configuration and event subscriptions.
                  </p>
                ),
              },
              {
                id: 'team',
                label: 'Team',
                content: (
                  <p className="text-muted-foreground text-sm">
                    Team member management and roles.
                  </p>
                ),
              },
              {
                id: 'settings-tab',
                label: 'Settings',
                content: (
                  <p className="text-muted-foreground text-sm">
                    Application settings and preferences.
                  </p>
                ),
              },
            ]}
          />
        </div>
      </div>

      {/* Document Editor — scrollable + closable */}
      <div className="mt-8 bg-background border-4 border-border">
        <h3 className="font-display font-bold uppercase text-xs tracking-wider p-6 pb-0 text-muted-foreground">
          Document Editor
        </h3>
        <div className="px-6 pt-4">
          <Tabs
            scrollable
            closable
            tabs={[
              {
                id: 'index-tsx',
                label: 'index.tsx',
                content: (
                  <pre className="text-muted-foreground text-sm font-mono bg-muted p-4">
                    {'export default function App() {\n  return <div>Hello World</div>;\n}'}
                  </pre>
                ),
              },
              {
                id: 'styles-css',
                label: 'styles.css',
                content: (
                  <pre className="text-muted-foreground text-sm font-mono bg-muted p-4">
                    {'body {\n  margin: 0;\n  font-family: sans-serif;\n}'}
                  </pre>
                ),
              },
              {
                id: 'package-json',
                label: 'package.json',
                content: (
                  <pre className="text-muted-foreground text-sm font-mono bg-muted p-4">
                    {'{\n  "name": "my-app",\n  "version": "1.0.0"\n}'}
                  </pre>
                ),
              },
              {
                id: 'tsconfig',
                label: 'tsconfig.json',
                content: (
                  <pre className="text-muted-foreground text-sm font-mono bg-muted p-4">
                    {'{\n  "compilerOptions": {\n    "strict": true\n  }\n}'}
                  </pre>
                ),
              },
              {
                id: 'readme-doc',
                label: 'README.md',
                content: (
                  <pre className="text-muted-foreground text-sm font-mono bg-muted p-4">
                    {'# My Project\n\nA sample project for demonstration.'}
                  </pre>
                ),
              },
              {
                id: 'utils-ts',
                label: 'utils.ts',
                content: (
                  <pre className="text-muted-foreground text-sm font-mono bg-muted p-4">
                    {'export function formatDate(d: Date) {\n  return d.toLocaleDateString();\n}'}
                  </pre>
                ),
              },
              {
                id: 'api-ts',
                label: 'api.ts',
                content: (
                  <pre className="text-muted-foreground text-sm font-mono bg-muted p-4">
                    {'export async function fetchData() {\n  return fetch("/api/data");\n}'}
                  </pre>
                ),
              },
              {
                id: 'types-ts',
                label: 'types.ts',
                content: (
                  <pre className="text-muted-foreground text-sm font-mono bg-muted p-4">
                    {'export interface User {\n  id: string;\n  name: string;\n}'}
                  </pre>
                ),
              },
              {
                id: 'env',
                label: '.env.example',
                content: (
                  <pre className="text-muted-foreground text-sm font-mono bg-muted p-4">
                    {'API_URL=https://api.example.com\nDEBUG=false'}
                  </pre>
                ),
              },
              {
                id: 'dockerfile',
                label: 'Dockerfile',
                content: (
                  <pre className="text-muted-foreground text-sm font-mono bg-muted p-4">
                    {'FROM node:20-alpine\nWORKDIR /app\nCOPY . .\nRUN npm install'}
                  </pre>
                ),
              },
            ]}
          />
        </div>
      </div>
    </>
  </ComponentPageLayout>
);

export default TabsPage;
