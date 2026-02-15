import type { FC } from 'react';
import Layout from '@/components/Layout';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Icon from '@/components/Icon';
import Badge from '@/components/Badge';
import Breadcrumbs from '@/components/Breadcrumbs';
import Accordion from '@/components/Accordion';
import Modal from '@/components/Modal';
import Button from '@/components/Button';
import Input from '@/components/Input';
import Select from '@/components/Select';
import Tooltip from '@/components/Tooltip';
import Checkbox from '@/components/Checkbox';
import StatsGrid from '@/components/StatsGrid';
import { ToastContainer } from '@/components/Toast';

const DataManagementPage: FC<{ request: Request }> = () => {
  const users = [
    {
      name: 'Alice Johnson',
      email: 'alice@company.com',
      role: 'Admin',
      roleVariant: 'primary' as const,
      status: 'Active',
      statusVariant: 'success' as const,
      lastActive: '2 hours ago',
      dataName: 'Alice Johnson',
      dataEmail: 'alice@company.com',
      dataLastactive: '2025-01-15',
    },
    {
      name: 'Bob Smith',
      email: 'bob@company.com',
      role: 'Editor',
      roleVariant: 'muted' as const,
      status: 'Active',
      statusVariant: 'success' as const,
      lastActive: '1 day ago',
      dataName: 'Bob Smith',
      dataEmail: 'bob@company.com',
      dataLastactive: '2025-01-14',
    },
    {
      name: 'Carol White',
      email: 'carol@company.com',
      role: 'Viewer',
      roleVariant: 'muted' as const,
      status: 'Inactive',
      statusVariant: 'muted' as const,
      lastActive: '5 days ago',
      dataName: 'Carol White',
      dataEmail: 'carol@company.com',
      dataLastactive: '2025-01-10',
    },
    {
      name: 'Dave Brown',
      email: 'dave@company.com',
      role: 'Editor',
      roleVariant: 'muted' as const,
      status: 'Suspended',
      statusVariant: 'destructive' as const,
      lastActive: '3 weeks ago',
      dataName: 'Dave Brown',
      dataEmail: 'dave@company.com',
      dataLastactive: '2024-12-20',
    },
    {
      name: 'Eve Davis',
      email: 'eve@company.com',
      role: 'Admin',
      roleVariant: 'primary' as const,
      status: 'Active',
      statusVariant: 'success' as const,
      lastActive: 'Just now',
      dataName: 'Eve Davis',
      dataEmail: 'eve@company.com',
      dataLastactive: '2025-01-15',
    },
  ];

  return (
    <Layout
      title="User Management | Dutchy"
      meta={{
        description: 'Manage users with the Dutchy data management interface.',
        keywords: 'users, management, admin, data',
      }}
      scripts={[
        '/assets/js/mobile-menu.js',
        '/assets/js/sortable-table.js',
        '/assets/js/modal.js',
        '/assets/js/select.js',
        '/assets/js/accordion.js',
        '/assets/js/badge-close.js',
        '/assets/js/toast.js',
      ]}
    >
      <Header
        siteName="Dutchy"
        currentPath="/showcase/data"
        navLinks={[
          { href: '/showcase', label: 'Home' },
          { href: '/showcase/categories', label: 'Categories' },
          { href: '/showcase/pricing', label: 'Pricing' },
          { href: '/showcase/blog', label: 'Blog' },
        ]}
        ctaText="Contact Us"
        ctaHref="/showcase/contact"
      />

      <main className="py-8">
        <div className="container mx-auto px-4 md:px-6">
          {/* Breadcrumb */}
          <Breadcrumbs
            items={[
              { label: 'Home', href: '/showcase' },
              { label: 'Admin', href: '/showcase/admin' },
              { label: 'Users' },
            ]}
            className="mb-6"
          />

          <h1 className="font-display text-3xl md:text-4xl font-bold uppercase tracking-tighter mb-8">User Management</h1>

          {/* Stats Row */}
          <div className="mb-8">
            <StatsGrid
              columns={3}
              size="sm"
              stats={[
                { value: '1,247', label: 'Total Users' },
                { value: '1,089', label: 'Active' },
                { value: '142', label: 'New This Month' },
              ]}
            />
          </div>

          {/* Filter Accordion */}
          <Accordion
            singleOpen
            defaultOpenIndex={0}
            className="mb-6"
            items={[
              {
                title: 'Status Filter',
                content: (
                  <div className="flex flex-wrap gap-2">
                    <Checkbox label="Active" defaultChecked data-filter-status="active" />
                    <Checkbox label="Inactive" defaultChecked data-filter-status="inactive" />
                    <Checkbox label="Suspended" defaultChecked data-filter-status="suspended" />
                  </div>
                ),
              },
              {
                title: 'Role Filter',
                content: (
                  <div className="flex flex-wrap gap-2">
                    <Checkbox label="Admin" defaultChecked data-filter-role="admin" />
                    <Checkbox label="Editor" defaultChecked data-filter-role="editor" />
                    <Checkbox label="Viewer" defaultChecked data-filter-role="viewer" />
                  </div>
                ),
              },
              {
                title: 'Date Range',
                content: (
                  <div className="flex gap-4">
                    <Input label="From" type="date" />
                    <Input label="To" type="date" />
                  </div>
                ),
              },
            ]}
          />

          {/* Action Bar */}
          <div className="bg-background border-l-4 border-primary p-4 mb-6">
            <div className="flex flex-wrap items-center gap-3">
              <Button size="sm" data-modal-open="edit-modal">Add User</Button>
              <div className="relative flex-1 max-w-xs">
                <Input
                  type="search"
                  placeholder="Search users..."
                  className="pl-9 py-2 text-sm"
                />
                <Icon name="search" size="sm" className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
              </div>
              <div id="activeFilters" className="flex flex-wrap gap-1" />
              <Button variant="ghost" size="sm" id="clearFilters" className="hidden">Clear Filters</Button>
              <div className="ml-auto flex gap-2">
                <Tooltip text="Simulate loading">
                  <Button variant="outline" size="sm" id="skeletonBtn">Loading</Button>
                </Tooltip>
                <Tooltip text="Toggle empty state">
                  <Button variant="outline" size="sm" id="emptyBtn">Empty</Button>
                </Tooltip>
              </div>
            </div>
          </div>

          {/* Data Table */}
          <div className="bg-background border-l-4 border-foreground" id="tableWrapper">
            <div className="overflow-x-auto">
              <table className="w-full" data-sortable="" id="usersTable">
                <thead>
                  <tr className="border-b-2 border-border">
                    <th className="text-left px-6 py-3 text-xs font-bold uppercase tracking-wider text-muted-foreground cursor-pointer select-none" data-sort="name">
                      <span className="flex items-center gap-1">
                        Name
                        <svg className="sort-icon w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" /></svg>
                      </span>
                    </th>
                    <th className="text-left px-6 py-3 text-xs font-bold uppercase tracking-wider text-muted-foreground cursor-pointer select-none" data-sort="email">
                      <span className="flex items-center gap-1">
                        Email
                        <svg className="sort-icon w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" /></svg>
                      </span>
                    </th>
                    <th className="text-left px-6 py-3 text-xs font-bold uppercase tracking-wider text-muted-foreground">Role</th>
                    <th className="text-left px-6 py-3 text-xs font-bold uppercase tracking-wider text-muted-foreground">Status</th>
                    <th className="text-left px-6 py-3 text-xs font-bold uppercase tracking-wider text-muted-foreground cursor-pointer select-none" data-sort="lastActive">
                      <span className="flex items-center gap-1">
                        Last Active
                        <svg className="sort-icon w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" /></svg>
                      </span>
                    </th>
                    <th className="text-right px-6 py-3 text-xs font-bold uppercase tracking-wider text-muted-foreground">Actions</th>
                  </tr>
                </thead>
                <tbody id="usersBody">
                  {users.map((user, index) => (
                    <tr
                      key={index}
                      className={`hover:bg-muted/30 transition-colors ${index < users.length - 1 ? 'border-b border-border' : ''}`}
                      data-name={user.dataName}
                      data-email={user.dataEmail}
                      data-lastactive={user.dataLastactive}
                    >
                      <td className="px-6 py-4 text-sm font-medium">{user.name}</td>
                      <td className="px-6 py-4 text-sm font-mono text-muted-foreground">{user.email}</td>
                      <td className="px-6 py-4">
                        <Badge variant={user.roleVariant} className="text-[10px]">{user.role}</Badge>
                      </td>
                      <td className="px-6 py-4">
                        <Badge variant={user.statusVariant} className="text-[10px]">{user.status}</Badge>
                      </td>
                      <td className="px-6 py-4 text-sm text-muted-foreground font-mono">{user.lastActive}</td>
                      <td className="px-6 py-4 text-right">
                        <Tooltip text="Edit">
                          <Button variant="ghost" size="sm" icon className="p-1 text-muted-foreground hover:text-primary" data-modal-open="edit-modal">
                            <Icon name="edit" size="sm" />
                          </Button>
                        </Tooltip>
                        <Tooltip text="Delete">
                          <Button variant="ghost" size="sm" icon className="p-1 text-muted-foreground hover:text-destructive" data-modal-open="delete-modal">
                            <Icon name="trash" size="sm" />
                          </Button>
                        </Tooltip>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Empty State */}
            <div id="emptyState" className="hidden text-center py-16 px-6">
              <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="mx-auto mb-4 text-muted-foreground/40">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
              </svg>
              <h3 className="font-display text-xl font-bold uppercase tracking-tight mb-2">No Users Found</h3>
              <p className="text-sm text-muted-foreground max-w-sm mx-auto mb-4">
                No users match the current filters. Try adjusting your search criteria or add a new user.
              </p>
              <Button size="sm" data-modal-open="edit-modal">Add User</Button>
            </div>

            {/* Pagination */}
            <div className="border-t border-border px-6 py-4 flex items-center justify-between" id="pagination">
              <p className="text-sm text-muted-foreground">
                Showing <span className="font-bold text-foreground">1-5</span> of <span className="font-bold text-foreground">24</span> users
              </p>
              <div className="flex gap-1">
                <Button variant="outline" size="sm" icon className="w-10 h-10" disabled>&laquo;</Button>
                <Button variant="secondary" size="sm" icon className="w-10 h-10">1</Button>
                <Button variant="outline" size="sm" icon className="w-10 h-10">2</Button>
                <Button variant="outline" size="sm" icon className="w-10 h-10">3</Button>
                <Button variant="outline" size="sm" icon className="w-10 h-10">4</Button>
                <Button variant="outline" size="sm" icon className="w-10 h-10">5</Button>
                <Button variant="outline" size="sm" icon className="w-10 h-10">&raquo;</Button>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer
        siteName="Dutchy"
        description="Built with the Dutchy Design System."
        columns={[
          {
            title: 'Navigation',
            links: [
              { href: '/showcase', label: 'Home' },
              { href: '/showcase/admin', label: 'Admin' },
              { href: '/showcase/contact', label: 'Contact' },
            ],
          },
          {
            title: 'Legal',
            links: [
              { href: '#', label: 'Privacy Policy' },
              { href: '#', label: 'Terms of Service' },
            ],
          },
        ]}
        copyright="&copy; 2025 Dutchy Design System. Open Source under MIT License."
      />

      {/* Edit Modal */}
      <Modal
        id="edit-modal"
        title="Edit User"
        maxWidth="max-w-lg"
        footer={
          <>
            <Button variant="ghost" data-close-modal="" size="sm" className="px-6 border-2 border-border">Cancel</Button>
            <Button data-close-modal="" size="sm" className="px-6">Save</Button>
          </>
        }
      >
        <div className="space-y-4">
          <Input label="Name" type="text" defaultValue="Alice Johnson" />
          <Input label="Email" type="email" defaultValue="alice@company.com" />
          <Select
            label="Role"
            defaultValue="Admin"
            options={[
              { value: 'Admin', label: 'Admin' },
              { value: 'Editor', label: 'Editor' },
              { value: 'Viewer', label: 'Viewer' },
            ]}
          />
        </div>
      </Modal>

      {/* Delete Confirmation Modal */}
      <Modal
        id="delete-modal"
        title="Delete User?"
        footer={
          <>
            <Button variant="ghost" data-close-modal="" size="sm" className="px-6 border-2 border-border">Cancel</Button>
            <Button variant="destructive" data-close-modal="" size="sm" className="px-6">Delete</Button>
          </>
        }
      >
        <div className="text-center">
          <div className="w-12 h-12 bg-destructive/10 flex items-center justify-center mx-auto mb-4">
            <Icon name="warning" className="text-destructive" size="lg" />
          </div>
          <p className="text-sm text-muted-foreground">
            This action cannot be undone. The user's data will be permanently removed.
          </p>
        </div>
      </Modal>

      <ToastContainer />
    </Layout>
  );
};

export default DataManagementPage;
