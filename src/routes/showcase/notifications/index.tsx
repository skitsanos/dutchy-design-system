import type { FC } from 'react';
import Layout from '@/components/Layout';
import Icon from '@/components/Icon';
import Input from '@/components/Input';
import Badge from '@/components/Badge';
import Breadcrumbs from '@/components/Breadcrumbs';
import Modal from '@/components/Modal';
import Button from '@/components/Button';
import Drawer from '@/components/Drawer';
import Tooltip from '@/components/Tooltip';
import EmptyState from '@/components/EmptyState';
import { ToastContainer } from '@/components/Toast';
import Sidebar from '@/components/Sidebar';
import Tabs from '@/components/Tabs';
import Checkbox from '@/components/Checkbox';

const NotificationsPage: FC<{ request: Request }> = () => {
  const notifications = [
    {
      id: '1',
      type: 'Update',
      typeVariant: 'primary' as const,
      borderColor: 'hsl(25 95% 53%)',
      time: '2 min ago',
      title: 'New version 2.5.0 released',
      description: 'Includes new components and bug fixes.',
      tabGroup: 'all unread',
    },
    {
      id: '2',
      type: 'Success',
      typeVariant: 'success' as const,
      borderColor: 'hsl(142 76% 36%)',
      time: '1 hour ago',
      title: 'Deployment completed',
      description: 'Production build deployed successfully.',
      tabGroup: 'all unread',
    },
    {
      id: '3',
      type: 'Error',
      typeVariant: 'destructive' as const,
      borderColor: 'hsl(0 84% 60%)',
      time: '3 hours ago',
      title: 'Build failed on staging',
      description: 'TypeScript compilation error in module.',
      tabGroup: 'all',
    },
    {
      id: '4',
      type: 'Warning',
      typeVariant: 'warning' as const,
      borderColor: 'hsl(38 92% 50%)',
      time: 'Yesterday',
      title: 'API rate limit approaching',
      description: "You've used 85% of your monthly API quota.",
      tabGroup: 'all',
    },
  ];

  return (
    <Layout
      title="Notifications | Dutchy"
      meta={{
        description: 'View and manage your notifications.',
        keywords: 'notifications, alerts, updates',
      }}
      scripts={[
        '/assets/js/mobile-menu.js',
        '/assets/js/tabs.js',
        '/assets/js/modal.js',
        '/assets/js/drawer.js',
        '/assets/js/toast.js',
        '/assets/js/badge-close.js',
      ]}
    >
      <div className="min-h-screen flex">
        {/* Sidebar */}
        <Sidebar
          brand="Admin"
          brandHref="/showcase/admin"
          items={[
            { icon: 'dashboard', label: 'Dashboard', href: '/showcase/admin' },
            { icon: 'bell', label: 'Notifications', href: '/showcase/notifications' },
          ]}
          bottomItems={[
            { icon: 'settings', label: 'Settings', href: '#' },
          ]}
          currentPath="/showcase/notifications"
        />

        {/* Main Content */}
        <div className="flex-1 flex flex-col">
          {/* Header */}
          <header className="bg-background border-b-4 border-primary">
            <div className="px-6 h-16 flex items-center justify-between">
              <div className="hidden md:block font-display text-lg font-bold uppercase tracking-tight">Notification Center</div>
              <div className="flex items-center gap-4">
                <Tooltip text="Preferences">
                  <Button variant="ghost" icon size="sm" id="settingsBtn" data-drawer-open="preferences-drawer">
                    <Icon name="settings" />
                  </Button>
                </Tooltip>
                <div className="w-8 h-8 bg-foreground flex items-center justify-center">
                  <span className="text-background text-sm font-bold">JD</span>
                </div>
              </div>
            </div>
          </header>

          <main className="flex-1 p-6">
            {/* Breadcrumb */}
            <Breadcrumbs
              items={[
                { label: 'Home', href: '/showcase' },
                { label: 'Settings', href: '#' },
                { label: 'Notifications' },
              ]}
              className="mb-6"
            />

            {/* Toast Demo Strip */}
            <div className="bg-background border-l-4 border-foreground p-4 mb-6">
              <p className="font-display font-bold uppercase text-sm tracking-wider mb-3">Toast Demo</p>
              <div className="flex flex-wrap gap-2">
                <Button size="sm" className="bg-success text-success-foreground hover:bg-success/90" data-toast-trigger="" data-toast-variant="success" data-toast-message="Operation completed!">Success</Button>
                <Button size="sm" variant="destructive" data-toast-trigger="" data-toast-variant="error" data-toast-message="Something went wrong.">Error</Button>
                <Button size="sm" data-toast-trigger="" data-toast-variant="info" data-toast-message="New update available.">Info</Button>
                <Button size="sm" className="bg-warning text-warning-foreground hover:bg-warning/90" data-toast-trigger="" data-toast-variant="warning" data-toast-message="Low disk space warning.">Warning</Button>
              </div>
            </div>

            {/* Tabs + Notification Content */}
            <Tabs
              defaultTab="all"
              tabs={[
                {
                  id: 'all',
                  label: 'All',
                  content: (
                    <>
                      <div className="flex items-center justify-between mb-4">
                        <p className="text-sm text-muted-foreground"><span id="notifCount">4</span> notifications</p>
                        <Tooltip text="Remove all notifications">
                          <Button variant="ghost" size="sm" id="clearAllBtn" className="text-destructive hover:text-destructive" data-modal-open="confirm-modal">
                            Clear All
                          </Button>
                        </Tooltip>
                      </div>
                      <div className="space-y-2">
                        {notifications.map((notif) => (
                          <div
                            key={notif.id}
                            className="notif-item bg-background border-l-4 p-4 cursor-pointer hover:bg-muted/30 transition-colors"
                            style={{ borderLeftColor: notif.borderColor }}
                            data-notif={notif.id}
                            data-modal-open="content-modal"
                          >
                            <div className="flex items-start justify-between">
                              <div className="flex-1">
                                <div className="flex items-center gap-2 mb-1">
                                  <Badge variant={notif.typeVariant} className="text-[10px]">{notif.type}</Badge>
                                  <span className="text-xs text-muted-foreground font-mono">{notif.time}</span>
                                </div>
                                <p className="font-medium text-sm">{notif.title}</p>
                                <p className="text-xs text-muted-foreground mt-1">{notif.description}</p>
                              </div>
                              <div className="flex gap-1 ml-4">
                                <Tooltip text="Archive">
                                  <Button variant="ghost" icon size="sm" className="w-auto h-auto p-1">
                                    <Icon name="archive" size="sm" />
                                  </Button>
                                </Tooltip>
                                <Tooltip text="Delete">
                                  <Button variant="ghost" icon size="sm" className="w-auto h-auto p-1 hover:text-destructive">
                                    <Icon name="trash" size="sm" />
                                  </Button>
                                </Tooltip>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </>
                  ),
                },
                {
                  id: 'unread',
                  label: 'Unread',
                  content: (
                    <>
                      <p className="text-sm text-muted-foreground mb-4">2 unread notifications</p>
                      <div className="space-y-2">
                        {notifications.filter((n) => n.tabGroup.includes('unread')).map((notif) => (
                          <div
                            key={notif.id}
                            className="notif-item bg-background border-l-4 p-4 cursor-pointer hover:bg-muted/30 transition-colors"
                            style={{ borderLeftColor: notif.borderColor }}
                            data-notif={notif.id}
                            data-modal-open="content-modal"
                          >
                            <div className="flex items-start justify-between">
                              <div className="flex-1">
                                <div className="flex items-center gap-2 mb-1">
                                  <Badge variant={notif.typeVariant} className="text-[10px]">{notif.type}</Badge>
                                  <span className="text-xs text-muted-foreground font-mono">{notif.time}</span>
                                </div>
                                <p className="font-medium text-sm">{notif.title}</p>
                                <p className="text-xs text-muted-foreground mt-1">{notif.description}</p>
                              </div>
                              <div className="flex gap-1 ml-4">
                                <Tooltip text="Archive">
                                  <Button variant="ghost" icon size="sm" className="w-auto h-auto p-1">
                                    <Icon name="archive" size="sm" />
                                  </Button>
                                </Tooltip>
                                <Tooltip text="Delete">
                                  <Button variant="ghost" icon size="sm" className="w-auto h-auto p-1 hover:text-destructive">
                                    <Icon name="trash" size="sm" />
                                  </Button>
                                </Tooltip>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </>
                  ),
                },
                {
                  id: 'archived',
                  label: 'Archived',
                  content: (
                    <EmptyState
                      icon="archive"
                      title="No Archived Notifications"
                      description="Archived notifications will appear here. Use the archive button on any notification to move it here."
                    />
                  ),
                },
              ]}
            />
          </main>

          {/* Footer */}
          <footer className="bg-foreground text-background py-4 px-6">
            <p className="font-mono text-xs opacity-60 uppercase tracking-widest text-center">&copy; 2025 Dutchy Design System</p>
          </footer>
        </div>
      </div>

      {/* Content Modal */}
      <Modal id="content-modal" title="Notification Details">
        <p className="text-sm text-muted-foreground">Notification details will appear here.</p>
      </Modal>

      {/* Confirmation Modal */}
      <Modal
        id="confirm-modal"
        title="Clear All Notifications?"
        footer={
          <>
            <Button variant="ghost" data-close-modal="" size="sm" className="px-6 border-2 border-border">Cancel</Button>
            <Button variant="destructive" data-close-modal="" size="sm" className="px-6">Delete All</Button>
          </>
        }
      >
        <div className="text-center">
          <div className="w-12 h-12 bg-destructive/10 flex items-center justify-center mx-auto mb-4">
            <Icon name="warning" className="text-destructive" size="lg" />
          </div>
          <p className="text-sm text-muted-foreground">
            This action cannot be undone. All notifications will be permanently removed.
          </p>
        </div>
      </Modal>

      {/* Preferences Drawer */}
      <Drawer id="preferences-drawer" title="Preferences" position="right">
        <div className="space-y-6">
          <div>
            <h4 className="font-display font-bold uppercase text-sm tracking-wider mb-3">Email Notifications</h4>
            <div className="space-y-3">
              <Checkbox label="Deployment alerts" defaultChecked />
              <Checkbox label="Build failures" defaultChecked />
              <Checkbox label="Weekly digest" />
            </div>
          </div>
          <div>
            <h4 className="font-display font-bold uppercase text-sm tracking-wider mb-3">Push Notifications</h4>
            <div className="space-y-3">
              <Checkbox label="Critical errors" defaultChecked />
              <Checkbox label="New releases" />
            </div>
          </div>
          <div>
            <h4 className="font-display font-bold uppercase text-sm tracking-wider mb-3">Quiet Hours</h4>
            <div className="grid grid-cols-2 gap-3">
              <Input label="From" type="time" defaultValue="22:00" />
              <Input label="To" type="time" defaultValue="07:00" />
            </div>
          </div>
        </div>
        <div className="border-t border-border mt-6 pt-4">
          <Button fullWidth data-drawer-close="">Save Preferences</Button>
        </div>
      </Drawer>

      <ToastContainer />
    </Layout>
  );
};

export default NotificationsPage;
