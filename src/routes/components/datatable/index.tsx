import type { FC, ReactNode } from 'react';
import ComponentPageLayout from '@/components/ComponentPageLayout';
import DataTable from '@/components/DataTable';
import Badge from '@/components/Badge';
import Flex from '@/components/Flex';
import Icon from '@/components/Icon';
import Button from '@/components/Button';

const statusVariant: Record<string, 'success' | 'muted' | 'destructive'> = {
  Active: 'success',
  Pending: 'muted',
  Inactive: 'destructive',
};

const columns = [
  {
    key: 'name',
    label: 'Name',
    sortable: true,
    render: (val: ReactNode) => <span className="font-bold">{val}</span>,
  },
  {
    key: 'status',
    label: 'Status',
    sortable: true,
    render: (val: ReactNode) => (
      <Badge variant={statusVariant[val as string] ?? 'muted'}>
        {val}
      </Badge>
    ),
  },
  {
    key: 'role',
    label: 'Role',
    render: (val: ReactNode) => (
      <span className="text-muted-foreground">{val}</span>
    ),
  },
  {
    key: 'amount',
    label: 'Amount',
    sortable: true,
    align: 'right' as const,
    render: (val: ReactNode) => <span className="font-mono">{val}</span>,
  },
];

const data = [
  { name: 'Alice Johnson', status: 'Active', role: 'Admin', amount: '$1,200' },
  { name: 'Bob Smith', status: 'Pending', role: 'Editor', amount: '$800' },
  { name: 'Carol Davis', status: 'Active', role: 'Admin', amount: '$2,400' },
  { name: 'David Wilson', status: 'Inactive', role: 'Viewer', amount: '$350' },
  { name: 'Eve Martinez', status: 'Active', role: 'Editor', amount: '$1,850' },
];

const emptyColumns = [
  { key: 'name', label: 'Name' },
  { key: 'email', label: 'Email' },
  { key: 'actions', label: 'Actions', align: 'right' as const },
];

const actionsData = [
  { name: 'Alice Johnson', email: 'alice@example.com', role: 'Admin' },
  { name: 'Bob Smith', email: 'bob@example.com', role: 'Editor' },
  { name: 'Carol Davis', email: 'carol@example.com', role: 'Admin' },
  { name: 'David Wilson', email: 'david@example.com', role: 'Viewer' },
];

const actionsColumns = [
  {
    key: 'name',
    label: 'Name',
    render: (val: ReactNode) => <span className="font-bold">{val}</span>,
  },
  {
    key: 'email',
    label: 'Email',
    render: (val: ReactNode) => (
      <span className="text-muted-foreground">{val}</span>
    ),
  },
  {
    key: 'role',
    label: 'Role',
  },
  {
    key: 'actions',
    label: '',
    align: 'right' as const,
    render: (_val: ReactNode, record: Record<string, ReactNode>) => (
      <Flex gap={2} justify="end">
        <Button
          variant="ghost"
          size="sm"
          data-toast-trigger=""
          data-toast-variant="info"
          data-toast-message={`Editing ${record.name}`}
        >
          <Icon name="edit" size="sm" />
          Edit
        </Button>
        <Button
          variant="ghost"
          size="sm"
          className="text-destructive hover:text-destructive"
          data-open-modal="delete-confirm"
        >
          <Icon name="trash" size="sm" />
          Delete
        </Button>
      </Flex>
    ),
  },
];

const DataTablePage: FC = () => (
  <ComponentPageLayout componentId="datatable">
    <>
      {/* Sortable Table */}
      <DataTable
        columns={columns}
        data={data}
        striped
        headerClassName="bg-muted border-b-2 border-border"
        className="mb-8"
      />

      {/* Table with Actions */}
      <div className="mb-8">
        <h3 className="font-display font-bold uppercase text-sm tracking-wider mb-4 text-muted-foreground">With Actions</h3>
        <DataTable
          columns={actionsColumns}
          data={actionsData}
          headerClassName="bg-muted border-b-2 border-border"
        />
      </div>

      {/* Loading State */}
      <div className="mb-8">
        <h3 className="font-display font-bold uppercase text-sm tracking-wider mb-4 text-muted-foreground">Loading State</h3>
        <DataTable
          columns={columns}
          data={data}
          loading
          headerClassName="bg-muted border-b-2 border-border"
        />
      </div>

      {/* Table with empty state */}
      <DataTable
        columns={emptyColumns}
        data={[]}
        headerClassName="bg-muted border-b-2 border-border"
        emptyText={
          <>
            <p className="font-display font-bold uppercase text-sm mb-1">
              No data available
            </p>
            <p className="text-sm text-muted-foreground">
              Try adjusting your search or filters.
            </p>
          </>
        }
      />

      {/* Delete Confirmation Dialog */}
      <dialog id="delete-confirm" className="bg-background border-4 border-border p-0 w-full max-w-md backdrop:bg-foreground/50">
        <div className="p-8">
          <Flex align="center" gap={3} className="mb-4">
            <div className="w-10 h-10 bg-destructive/10 flex items-center justify-center flex-shrink-0">
              <Icon name="trash" className="text-destructive" />
            </div>
            <h2 className="font-display text-xl font-bold uppercase tracking-tight">Delete Item</h2>
          </Flex>
          <p className="text-muted-foreground text-sm mb-8">Are you sure you want to delete this item? This action cannot be undone.</p>
          <Flex justify="end" gap={3}>
            <Button variant="ghost" data-close-modal size="sm" className="px-6 border-2 border-border">Cancel</Button>
            <Button variant="destructive" data-close-modal size="sm" className="px-6">Delete</Button>
          </Flex>
        </div>
      </dialog>

      {/* Toast Container */}
      <div id="toast-container" className="fixed bottom-6 right-6 z-[100] space-y-3" aria-live="polite"></div>
    </>
  </ComponentPageLayout>
);

export default DataTablePage;
