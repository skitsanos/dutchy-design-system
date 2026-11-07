import type { FC } from 'react';
import ComponentPageLayout from '@/components/ComponentPageLayout';
import DataTable from '@/components/DataTable';
import EmptyState from '@/components/EmptyState';
import Flex from '@/components/Flex';

const usageExample = `import EmptyState from '@/components/EmptyState';

<EmptyState
  icon="dashboard"
  title="Create your first dashboard"
  description="Choose a starting layout for your project."
  actionText="Explore dashboard example"
  actionHref="/showcase/admin"
/>`;

const propReference = [
  {
    prop: 'title',
    type: 'string · required',
    description: 'The heading that explains the next step. Rendered as an h3 element.',
  },
  {
    prop: 'description',
    type: 'string',
    description: 'Supporting copy that explains the context and helps people continue.',
  },
  {
    prop: 'icon',
    type: 'IconName',
    description: 'An optional Dutchy icon, such as search or dashboard.',
  },
  {
    prop: 'actionText',
    type: 'string',
    description:
      'The visible label for the primary action. Omit it for a message without an action.',
  },
  {
    prop: 'actionHref',
    type: 'string',
    description:
      'With actionText, renders a navigation link. Without actionHref, the action renders as a button.',
  },
  {
    prop: 'className',
    type: 'string',
    description:
      'Additional classes for the outer container, including spacing and layout utilities.',
  },
];

const EmptyStatePage: FC = () => (
  <ComponentPageLayout componentId="emptystate">
    <div className="min-w-0 space-y-10">
      <section aria-labelledby="empty-state-guide">
        <h2 id="empty-state-guide" className="font-display text-2xl font-bold uppercase mb-4">
          Empty State component guide
        </h2>
        <div className="space-y-4 leading-relaxed">
          <p>
            Empty State helps people add the first items to a collection, refine a search, or
            configure a dashboard. The component combines an optional icon, a heading, supporting
            copy, and a primary action in a centered layout.
          </p>
          <p>
            This guide documents the Dutchy component API, Bun SSR integration, and two interface
            patterns. Use the examples as starting points for your own application, adapting the
            message and destination to the task your users are completing.
          </p>
        </div>
      </section>

      <section aria-labelledby="empty-state-patterns">
        <h2 id="empty-state-patterns" className="font-display text-2xl font-bold uppercase mb-4">
          Choosing a pattern
        </h2>
        <ul className="list-disc pl-6 space-y-3 leading-relaxed">
          <li>
            <strong>First use:</strong> explain what a collection will contain and offer an action
            that creates the first item or opens a useful starting template.
          </li>
          <li>
            <strong>Filtered views:</strong> keep search and filter controls available, explain how
            to broaden the selection, and provide a route back to the full collection.
          </li>
          <li>
            <strong>Setup:</strong> describe the information or configuration needed to populate a
            dashboard, then link to the next step in the workflow.
          </li>
        </ul>
      </section>

      <section aria-labelledby="empty-state-examples">
        <h2 id="empty-state-examples" className="font-display text-2xl font-bold uppercase mb-4">
          Component examples
        </h2>
        <p className="text-muted-foreground leading-relaxed mb-6">
          These previews demonstrate search guidance and dashboard onboarding. Their actions open
          the component catalog and a populated dashboard showcase.
        </p>
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
          <figure className="bg-background border-4 border-border">
            <figcaption className="border-b-2 border-border p-4 font-display text-sm font-bold uppercase tracking-wide">
              Search guidance example
            </figcaption>
            <EmptyState
              icon="search"
              title="Refine your search"
              description="Try a broader term or explore the full component catalog."
              actionText="Browse components"
              actionHref="/components"
            />
          </figure>

          <figure className="bg-background border-4 border-dashed border-border">
            <figcaption className="border-b-2 border-border p-4 font-display text-sm font-bold uppercase tracking-wide">
              Dashboard onboarding example
            </figcaption>
            <EmptyState
              icon="dashboard"
              title="Create your first dashboard"
              description="Choose a starting layout and explore metrics for your project."
              actionText="Explore dashboard example"
              actionHref="/showcase/admin"
            />
          </figure>
        </div>
      </section>

      <section aria-labelledby="empty-state-usage">
        <h2 id="empty-state-usage" className="font-display text-2xl font-bold uppercase mb-4">
          Bun SSR usage
        </h2>
        <p className="leading-relaxed mb-6">
          Import EmptyState into a TypeScript/JSX route and provide a title that describes the next
          step. Bun renders the component as HTML on the server. The navigation example below uses a
          regular link and works without a client-side React runtime.
        </p>
        <pre className="bg-foreground text-background p-6 overflow-x-auto">
          <code className="text-sm font-mono language-tsx">{usageExample}</code>
        </pre>
        <p className="text-sm text-muted-foreground leading-relaxed mt-4">
          Supplying actionText without actionHref renders a native button. Connect that button to
          your application&apos;s vanilla JavaScript handler when it needs to update the current
          view.
        </p>
      </section>

      <section aria-labelledby="empty-state-props">
        <h2 id="empty-state-props" className="font-display text-2xl font-bold uppercase mb-4">
          Prop reference
        </h2>
        <p className="leading-relaxed mb-6">
          The title prop is required. All other props are optional, so the same component can
          support a concise message or a guided first-use experience.
        </p>
        <DataTable
          columns={[
            { key: 'prop', label: 'Prop', className: 'font-mono' },
            { key: 'type', label: 'Type' },
            { key: 'description', label: 'Description' },
          ]}
          data={propReference}
        />
      </section>

      <section aria-labelledby="empty-state-accessibility">
        <h2
          id="empty-state-accessibility"
          className="font-display text-2xl font-bold uppercase mb-4"
        >
          Accessibility and integration
        </h2>
        <ul className="list-disc pl-6 space-y-3 leading-relaxed">
          <li>
            Place the component beneath a section heading. Its title is an h3, which should fit the
            heading hierarchy of the surrounding page.
          </li>
          <li>
            Write an action label that describes its destination or effect, and provide a working
            link or a keyboard-accessible button handler.
          </li>
          <li>
            When results change after a user action, announce the update through a polite live
            region and preserve access to the controls that produced the result.
          </li>
          <li>
            Use the surrounding collection&apos;s layout and spacing so the guidance remains easy to
            read at narrow viewport sizes.
          </li>
        </ul>
      </section>

      <section aria-labelledby="empty-state-related">
        <h2 id="empty-state-related" className="font-display text-2xl font-bold uppercase mb-4">
          Related components
        </h2>
        <p className="leading-relaxed mb-4">
          Combine Empty State with Data Table for collections, Buttons for view actions, and
          Skeleton for content that is still loading.
        </p>
        <nav aria-label="Related components">
          <Flex wrap gap={6}>
            <a className="font-bold underline" href="/components/datatable">
              Data Table
            </a>
            <a className="font-bold underline" href="/components/buttons">
              Buttons
            </a>
            <a className="font-bold underline" href="/components/skeleton">
              Skeleton
            </a>
          </Flex>
        </nav>
      </section>
    </div>
  </ComponentPageLayout>
);

export default EmptyStatePage;
