import type { FC } from 'react';
import Activity from '@/components/Activity';
import Badge from '@/components/Badge';
import Button from '@/components/Button';
import DataTable from '@/components/DataTable';
import Flex from '@/components/Flex';
import Icon, { type IconName } from '@/components/Icon';
import Input from '@/components/Input';
import Layout from '@/components/Layout';
import Progress from '@/components/Progress';
import Sidebar from '@/components/Sidebar';
import Skeleton from '@/components/Skeleton';
import StatsGrid from '@/components/StatsGrid';
import { ToastContainer } from '@/components/Toast';
import Tooltip from '@/components/Tooltip';

interface AdminNavItem {
  icon: IconName;
  label: string;
  href: string;
}

const adminNavItems: AdminNavItem[] = [
  { icon: 'dashboard', label: 'Dashboard', href: '/showcase/admin' },
  { icon: 'package', label: 'Products', href: '/showcase/cart' },
  { icon: 'file', label: 'Orders', href: '/showcase/data' },
  { icon: 'users', label: 'Customers', href: '/showcase/register' },
  { icon: 'bar-chart', label: 'Analytics', href: '/showcase/search?q=analytics' },
];

const adminBottomItems: AdminNavItem[] = [
  { icon: 'settings', label: 'Settings', href: '/showcase/notifications' },
  { icon: 'logout', label: 'Logout', href: '/showcase/login' },
];

const recentOrders = [
  {
    order: '#3210',
    customer: 'Olivia Martin',
    status: 'completed',
    amount: '$1,999.00',
  },
  {
    order: '#3209',
    customer: 'Jackson Lee',
    status: 'processing',
    amount: '$39.00',
  },
  {
    order: '#3208',
    customer: 'Isabella Nguyen',
    status: 'completed',
    amount: '$299.00',
  },
  {
    order: '#3207',
    customer: 'William Kim',
    status: 'shipped',
    amount: '$99.00',
  },
  {
    order: '#3206',
    customer: 'Sofia Davis',
    status: 'cancelled',
    amount: '$150.00',
  },
];

const salesChannels = [
  { label: 'Direct Store', value: 82, variant: 'primary' as const },
  { label: 'Marketplace', value: 64, variant: 'foreground' as const },
  { label: 'Retail Partners', value: 48, variant: 'success' as const },
];

const inventoryAlerts = [
  { sku: 'WATCH-42-SLV', label: 'Premium Watch', stock: '8 left', variant: 'warning' as const },
  { sku: 'WALLET-BRN', label: 'Leather Wallet', stock: '14 left', variant: 'primary' as const },
  { sku: 'SUN-CLASSIC', label: 'Sunglasses', stock: '3 left', variant: 'destructive' as const },
];

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
        '/assets/js/admin-dashboard.js',
      ]}
    >
      <Flex className="min-h-screen">
        <Sidebar
          brand="Admin"
          brandHref="/showcase/admin"
          currentPath="/showcase/admin"
          items={adminNavItems}
          bottomItems={adminBottomItems}
        />

        {/* Main Content */}
        <Flex direction="col" className="flex-1">
          {/* Header */}
          <header className="bg-background border-b-4 border-primary">
            <Flex align="center" justify="between" className="px-6 h-16">
              {/* Mobile menu button */}
              <Button
                variant="ghost"
                icon
                size="sm"
                className="lg:hidden"
                aria-label="Open menu"
                id="mobile-menu-btn"
                aria-expanded="false"
                aria-controls="mobile-nav"
              >
                <Icon name="menu" size="lg" />
              </Button>

              {/* Search */}
              <div className="hidden md:block relative grow max-w-md">
                <Input
                  id="adminSearch"
                  type="search"
                  placeholder="Search orders..."
                  aria-label="Search recent orders"
                  className="pl-10 pr-4 py-2 text-sm"
                />
                <Icon
                  name="search"
                  size="sm"
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
                />
              </div>

              {/* Right side */}
              <Flex align="center" gap={4}>
                {/* Notifications */}
                <Tooltip text="Notifications" position="bottom">
                  <Button
                    variant="ghost"
                    icon
                    size="sm"
                    id="notifBell"
                    className="relative"
                    data-toast-trigger=""
                    data-toast-variant="info"
                    data-toast-title="Notifications"
                    data-toast-message="You have 3 open operational alerts."
                  >
                    <Icon name="bell" />
                    <span className="absolute top-1 right-1 w-2 h-2 bg-primary" />
                  </Button>
                </Tooltip>

                {/* Profile */}
                <Flex align="center" gap={3}>
                  <Flex align="center" justify="center" className="w-8 h-8 bg-foreground">
                    <span className="text-background text-sm font-bold">JD</span>
                  </Flex>
                  <span className="hidden md:block text-sm font-medium">John Doe</span>
                </Flex>
              </Flex>
            </Flex>
            <nav id="mobile-nav" className="hidden lg:hidden bg-foreground text-background">
              <div className="px-4 py-4 space-y-1">
                {[...adminNavItems, ...adminBottomItems].map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className={`flex items-center gap-3 px-4 py-3 text-sm font-bold uppercase tracking-wide ${
                      item.href === '/showcase/admin'
                        ? 'bg-background/10 text-background'
                        : 'text-background/70 hover:text-background hover:bg-background/5 transition-colors'
                    }`}
                  >
                    <Icon name={item.icon} />
                    {item.label}
                  </a>
                ))}
              </div>
            </nav>
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
                  {
                    value: '$45,231',
                    label: 'Total Revenue',
                    trend: { value: '+20.1% from last month', direction: 'up' },
                  },
                  {
                    value: '2,350',
                    label: 'Orders',
                    trend: { value: '+15.3% from last month', direction: 'up' },
                  },
                  {
                    value: '1,247',
                    label: 'Customers',
                    trend: { value: '+12.5% from last month', direction: 'up' },
                  },
                  { value: '573', label: 'Active Now' },
                ]}
                columns={4}
                size="sm"
              />
            </div>

            {/* Two Column Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Recent Orders */}
              <div className="lg:col-span-2 border-l-4 border-primary relative">
                <Flex
                  align="center"
                  justify="between"
                  className="bg-background border-b border-border px-6 py-4"
                >
                  <h2 className="font-display text-lg font-bold uppercase">Recent Orders</h2>
                  <Button
                    variant="outline"
                    size="sm"
                    id="skeletonToggle"
                    aria-pressed="false"
                    data-loading-label="Hide Loading"
                    data-idle-label="Toggle Loading"
                  >
                    Toggle Loading
                  </Button>
                </Flex>
                <DataTable
                  id="adminOrdersTable"
                  tbodyId="adminOrdersBody"
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
                        return (
                          <Badge variant={variants[label] || 'default'}>
                            {label.charAt(0).toUpperCase() + label.slice(1)}
                          </Badge>
                        );
                      },
                    },
                    {
                      key: 'amount',
                      label: 'Amount',
                      sortable: true,
                      align: 'right',
                      className: 'font-medium',
                    },
                  ]}
                  data={recentOrders}
                />
                <div
                  data-admin-loading=""
                  className="hidden absolute inset-x-0 bottom-0 top-16 bg-background/95 p-6"
                >
                  <Skeleton variant="table-row" count={5} />
                </div>
                <div
                  id="adminNoResults"
                  className="hidden bg-background px-6 py-10 text-center border-t border-border"
                >
                  <p className="font-display font-bold uppercase text-sm text-muted-foreground">
                    No orders match your search
                  </p>
                </div>
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

            {/* Operations Overview */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
              <div className="bg-background border-l-4 border-primary">
                <div className="border-b border-border px-6 py-4">
                  <h2 className="font-display text-lg font-bold uppercase">Sales Channels</h2>
                </div>
                <div className="p-6 space-y-6">
                  {salesChannels.map((channel) => (
                    <Progress
                      key={channel.label}
                      label={channel.label}
                      value={channel.value}
                      variant={channel.variant}
                      showValue
                    />
                  ))}
                </div>
              </div>

              <div className="bg-background border-l-4 border-warning">
                <div className="border-b border-border px-6 py-4">
                  <h2 className="font-display text-lg font-bold uppercase">Inventory Watchlist</h2>
                </div>
                <div className="divide-y divide-border">
                  {inventoryAlerts.map((item) => (
                    <Flex
                      key={item.sku}
                      align="center"
                      justify="between"
                      gap={4}
                      className="px-6 py-4"
                    >
                      <div>
                        <p className="font-medium text-sm">{item.label}</p>
                        <p className="font-mono text-xs text-muted-foreground mt-1">{item.sku}</p>
                      </div>
                      <Badge variant={item.variant} className="text-[10px] shrink-0">
                        {item.stock}
                      </Badge>
                    </Flex>
                  ))}
                </div>
              </div>
            </div>
          </main>
        </Flex>
      </Flex>

      <ToastContainer />
    </Layout>
  );
};

export default AdminDashboardPage;
