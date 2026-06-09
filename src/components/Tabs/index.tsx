import type { FC, ReactNode } from 'react';
import Icon from '@/components/Icon';

interface Tab {
  id: string;
  label: string;
  content: ReactNode;
}

interface TabsProps {
  tabs: Tab[];
  variant?: 'underline' | 'segmented';
  defaultTab?: string;
  scrollable?: boolean;
  closable?: boolean;
  className?: string;
}

const Tabs: FC<TabsProps> = ({
  tabs,
  variant = 'underline',
  defaultTab,
  scrollable = false,
  closable = false,
  className = '',
}) => {
  const activeTabId = defaultTab || tabs[0]?.id;
  const isSegmented = variant === 'segmented';

  const renderCloseButton = (tab: Tab) => (
    <span
      data-tab-close={tab.id}
      className="ml-1 w-4 h-4 inline-flex items-center justify-center opacity-50 hover:opacity-100 transition-opacity"
      title={`Close ${tab.label}`}
    >
      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
    </span>
  );

  const renderTabButtons = () =>
    tabs.map((tab) => {
      const isActive = tab.id === activeTabId;

      if (isSegmented) {
        return (
          <button
            type="button"
            key={tab.id}
            role="tab"
            className={`${scrollable ? 'whitespace-nowrap px-6' : 'flex-1'} py-3 text-sm font-bold uppercase tracking-wide${closable ? ' flex items-center justify-center gap-1' : ''} ${
              isActive
                ? 'bg-background text-foreground'
                : 'text-muted-foreground hover:text-foreground transition-colors'
            }`}
            data-tab-trigger={tab.id}
            aria-selected={isActive}
          >
            {closable ? (
              <>
                <span>{tab.label}</span>
                {renderCloseButton(tab)}
              </>
            ) : (
              tab.label
            )}
          </button>
        );
      }

      return (
        <button
          type="button"
          key={tab.id}
          role="tab"
          className={`px-6 py-4 text-sm font-bold uppercase tracking-wide${scrollable ? ' whitespace-nowrap' : ' -mb-0.5'} border-b-4${closable ? ' flex items-center gap-1' : ''} ${
            isActive
              ? 'border-primary text-foreground'
              : 'border-transparent text-muted-foreground hover:text-foreground transition-colors'
          }`}
          data-tab-trigger={tab.id}
          aria-selected={isActive}
        >
          {closable ? (
            <>
              <span>{tab.label}</span>
              {renderCloseButton(tab)}
            </>
          ) : (
            tab.label
          )}
        </button>
      );
    });

  const renderOverflowDropdown = () => (
    <div data-tabs-overflow-dropdown="" className="relative flex items-center hidden">
      <button
        type="button"
        data-tabs-overflow-trigger=""
        className="p-2 text-muted-foreground hover:text-foreground transition-colors"
        aria-label="Show all tabs"
      >
        <Icon name="chevron-down" size="sm" />
      </button>
      <div
        data-tabs-overflow-menu=""
        className="hidden absolute right-0 top-full mt-1 bg-background border-2 border-border shadow-lg z-50 min-w-48"
      >
        {tabs.map((tab) => {
          const isActive = tab.id === activeTabId;
          return (
            <button
              type="button"
              key={tab.id}
              data-tabs-overflow-item={tab.id}
              className={`block w-full text-left px-4 py-2 text-sm ${
                isActive
                  ? 'bg-muted font-bold text-foreground'
                  : 'text-muted-foreground hover:bg-muted hover:text-foreground'
              }`}
            >
              {tab.label}
            </button>
          );
        })}
      </div>
    </div>
  );

  const tabButtons = renderTabButtons();

  const renderScrollArrows = () => (
    <>
      <button
        type="button"
        data-tabs-scroll-left=""
        className="hidden p-1 text-muted-foreground hover:text-foreground transition-colors flex-shrink-0"
        aria-label="Scroll left"
      >
        <Icon name="chevron-left" size="sm" />
      </button>
    </>
  );

  const renderScrollArrowRight = () => (
    <button
      type="button"
      data-tabs-scroll-right=""
      className="hidden p-1 text-muted-foreground hover:text-foreground transition-colors flex-shrink-0"
      aria-label="Scroll right"
    >
      <Icon name="chevron-right" size="sm" />
    </button>
  );

  const renderNav = () => {
    if (isSegmented) {
      if (scrollable) {
        return (
          <div className="bg-muted p-1">
            <div data-tabs-nav-wrapper="" className="flex min-w-0 items-center">
              {renderScrollArrows()}
              <div
                data-tabs-nav=""
                className="dutchy-scrollbar-hide flex min-w-0 flex-1 overflow-x-auto"
                role="tablist"
              >
                {tabButtons}
              </div>
              {renderScrollArrowRight()}
              {renderOverflowDropdown()}
            </div>
          </div>
        );
      }

      return (
        <div className="flex overflow-x-auto bg-muted p-1" role="tablist">
          {tabButtons}
        </div>
      );
    }

    // Underline variant
    if (scrollable) {
      return (
        <div className="border-b-2 border-border">
          <div data-tabs-nav-wrapper="" className="flex min-w-0 items-center">
            {renderScrollArrows()}
            <div
              data-tabs-nav=""
              className="dutchy-scrollbar-hide flex min-w-0 flex-1 gap-0 overflow-x-auto"
              role="tablist"
            >
              {tabButtons}
            </div>
            {renderScrollArrowRight()}
            {renderOverflowDropdown()}
          </div>
        </div>
      );
    }

    return (
      <div className="border-b-2 border-border">
        <div className="flex gap-0 overflow-x-auto" role="tablist">
          {tabButtons}
        </div>
      </div>
    );
  };

  return (
    <div
      data-tabs={isSegmented ? 'boxed' : ''}
      {...(scrollable ? { 'data-tabs-scrollable': '' } : {})}
      {...(closable ? { 'data-tabs-closable': '' } : {})}
      className={`min-w-0 max-w-full ${className}`}
    >
      {renderNav()}

      {/* Tab panels */}
      {tabs.map((tab) => {
        const isActive = tab.id === activeTabId;
        return (
          <div
            key={tab.id}
            className={`p-6 ${isActive ? '' : 'hidden'}`}
            data-tab-panel={tab.id}
            role="tabpanel"
          >
            {tab.content}
          </div>
        );
      })}
    </div>
  );
};

export default Tabs;
