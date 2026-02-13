import type { FC } from 'react';
import Layout from '@/components/Layout';
import Icon from '@/components/Icon';
import Input from '@/components/Input';
import Badge from '@/components/Badge';
import Button from '@/components/Button';
import Tooltip from '@/components/Tooltip';
import StatsGrid from '@/components/StatsGrid';
import Sidebar from '@/components/Sidebar';
import Activity from '@/components/Activity';
import DataTable from '@/components/DataTable';
import { ToastContainer } from '@/components/Toast';

const AdminDashboardPage: FC<{ request: Request }> = () => {
  return (
    <Layout
      title="Admin Dashboard | Dutchy"
      meta={{
        description: 'Manage your store with the Dutchy admin dashboard.',
        keywords: 'admin, dashboard, orders, analytics',
      }}
      scripts={[
        '/assets/js/mobile-menu.js',
        '/assets/js/sortable-table.js',
        '/assets/js/toast.js',
        '/assets/js/badge-close.js',
      ]}
    >
      <div className="min-h-screen flex">
        <Sidebar
          brand="Admin"
          brandHref="/showcase/admin"
          currentPath="/showcase/admin"
          items={[
            { icon: 'dashboard', label: 'Dashboard', href: '/showcase/admin' },
            { icon: 'package', label: 'Products', href: '#' },
            { icon: 'file', label: 'Orders', href: '#' },
            { icon: 'users', label: 'Customers', href: '#' },
            { icon: 'bar-chart', label: 'Analytics', href: '#' },
          ]}
          bottomItems={[
            { icon: 'settings', label: 'Settings', href: '#' },
            { icon: 'logout', label: 'Logout', href: '/showcase/login' },
          ]}
        />

        {/* Main Content */}
        <div className="flex-1 flex flex-col">
          {/* Header */}
          <header className="bg-background border-b-4 border-primary">
            <div className="px-6 h-16 flex items-center justify-between">
              {/* Mobile menu button */}
              <Button variant="ghost" icon size="sm" className="lg:hidden" aria-label="Open menu" id="mobile-menu-btn">
                <Icon name="menu" size="lg" />
              </Button>

              {/* Search */}
              <div className="hidden md:block relative flex-1 max-w-md">
                <Input
                  type="search"
                  placeholder="Search..."
                  className="pl-10 pr-4 py-2 text-sm"
                />
                <Icon name="search" size="sm" className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
              </div>

              {/* Right side */}
              <div className="flex items-center gap-4">
                {/* Notifications */}
                <Tooltip text="Notifications">
                  <Button variant="ghost" icon size="sm" id="notifBell" className="relative">
                    <Icon name="bell" />
                    <span className="absolute top-1 right-1 w-2 h-2 bg-primary" />
                  </Button>
                </Tooltip>

                {/* Profile */}
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-foreground flex items-center justify-center">
                    <span className="text-background text-sm font-bold">JD</span>
                  </div>
                  <span className="hidden md:block text-sm font-medium">John Doe</span>
                </div>
              </div>
            </div>
          </header>

          {/* Page Content */}
          <main className="flex-1 p-6 bg-muted">
            {/* Page Title */}
            <div className="mb-8">
              <h1 className="font-display text-3xl font-bold uppercase tracking-tighter mb-2">
                Dashboard
              </h1>
              <p className="text-muted-foreground">Welcome back, John. Here's what's happening.</p>
            </div>

            {/* Stats Grid */}
            <div className="mb-8">
              <StatsGrid
                stats={[
                  { value: '$45,231', label: 'Total Revenue', trend: { value: '+20.1% from last month', direction: 'up' } },
                  { value: '2,350', label: 'Orders', trend: { value: '+15.3% from last month', direction: 'up' } },
                  { value: '1,247', label: 'Customers', trend: { value: '+12.5% from last month', direction: 'up' } },
                  { value: '573', label: 'Active Now' },
                ]}
                columns={4}
                size="sm"
              />
            </div>

            {/* Two Column Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Recent Orders */}
              <div className="lg:col-span-2 border-l-4 border-primary">
                <div className="bg-background border-b border-border px-6 py-4 flex items-center justify-between">
                  <h2 className="font-display text-lg font-bold uppercase">Recent Orders</h2>
                  <Button variant="outline" size="sm" id="skeletonToggle">
                    Toggle Loading
                  </Button>
                </div>
                <DataTable
                  bordered={false}
                  columns={[
                    { key: 'order', label: 'Order', sortable: true, className: 'font-mono' },
                    { key: 'customer', label: 'Customer', sortable: true },
                    {
                      key: 'status',
                      label: 'Status',
                      sortable: true,
                      render: (value) => {
                        const variants: Record<string, 'success' | 'primary' | 'destructive'> = {
                          completed: 'success',
                          processing: 'primary',
                          shipped: 'primary',
                          cancelled: 'destructive',
                        };
                        const label = String(value);
                        return <Badge variant={variants[label] || 'default'}>{label.charAt(0).toUpperCase() + label.slice(1)}</Badge>;
                      },
                    },
                    { key: 'amount', label: 'Amount', sortable: true, align: 'right', className: 'font-medium' },
                  ]}
                  data={[
                    { order: '#3210', customer: 'Olivia Martin', status: 'completed', amount: '$1,999.00' },
                    { order: '#3209', customer: 'Jackson Lee', status: 'processing', amount: '$39.00' },
                    { order: '#3208', customer: 'Isabella Nguyen', status: 'completed', amount: '$299.00' },
                    { order: '#3207', customer: 'William Kim', status: 'shipped', amount: '$99.00' },
                    { order: '#3206', customer: 'Sofia Davis', status: 'cancelled', amount: '$150.00' },
                  ]}
                />
              </div>

              {/* Recent Activity */}
              <Activity
                items={[
                  { title: 'New order received', time: '2 minutes ago', color: 'primary' },
                  { title: 'Payment confirmed', time: '15 minutes ago', color: 'success' },
                  { title: 'Order shipped', time: '1 hour ago', color: 'primary' },
                  { title: 'New customer registered', time: '2 hours ago', color: 'foreground' },
                  { title: 'Low stock alert', time: '3 hours ago', color: 'warning' },
                ]}
              />
            </div>
          </main>
        </div>
      </div>

      <ToastContainer />
    </Layout>
  );
};

export default AdminDashboardPage;
