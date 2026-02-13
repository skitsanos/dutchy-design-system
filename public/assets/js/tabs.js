(function () {
  const tabContainers = document.querySelectorAll('[data-tabs]');

  tabContainers.forEach((container) => {
    const variant = container.dataset.tabs; // '' for underline, 'boxed' for segmented
    const isScrollable = container.hasAttribute('data-tabs-scrollable');
    const isClosable = container.hasAttribute('data-tabs-closable');

    // ── Core: activate a tab by ID ──
    function activateTab(tabId) {
      const triggers = container.querySelectorAll('[data-tab-trigger]');
      const panels = container.querySelectorAll('[data-tab-panel]');

      triggers.forEach((t) => {
        const isActive = t.dataset.tabTrigger === tabId;

        if (variant === 'boxed') {
          t.classList.toggle('bg-background', isActive);
          t.classList.toggle('text-foreground', isActive);
          t.classList.toggle('text-muted-foreground', !isActive);
        } else {
          t.classList.toggle('border-primary', isActive);
          t.classList.toggle('text-foreground', isActive);
          t.classList.toggle('border-transparent', !isActive);
          t.classList.toggle('text-muted-foreground', !isActive);

          if (isActive) {
            t.classList.add('border-b-4');
            t.classList.remove('border-transparent');
          } else {
            t.classList.remove('border-primary');
            t.classList.add('border-transparent');
          }
        }

        t.setAttribute('aria-selected', String(isActive));
      });

      panels.forEach((panel) => {
        panel.classList.toggle('hidden', panel.dataset.tabPanel !== tabId);
      });

      // Sync overflow dropdown active indicator
      if (isScrollable) {
        const overflowItems = container.querySelectorAll(
          '[data-tabs-overflow-item]',
        );
        overflowItems.forEach((item) => {
          const isActive = item.dataset.tabsOverflowItem === tabId;
          item.classList.toggle('bg-muted', isActive);
          item.classList.toggle('font-bold', isActive);
          item.classList.toggle('text-foreground', isActive);
          item.classList.toggle('text-muted-foreground', !isActive);
        });

        // Scroll active trigger into view
        const activeEl = container.querySelector(
          `[data-tab-trigger="${tabId}"]`,
        );
        if (activeEl) {
          activeEl.scrollIntoView({
            behavior: 'smooth',
            block: 'nearest',
            inline: 'nearest',
          });
        }
      }
    }

    // ── Closable: remove a tab ──
    function closeTab(tabId) {
      const triggers = container.querySelectorAll('[data-tab-trigger]');
      if (triggers.length <= 1) return; // never close the last tab

      const trigger = container.querySelector(
        `[data-tab-trigger="${tabId}"]`,
      );
      const panel = container.querySelector(`[data-tab-panel="${tabId}"]`);
      const overflowItem = container.querySelector(
        `[data-tabs-overflow-item="${tabId}"]`,
      );

      const wasActive =
        trigger && trigger.getAttribute('aria-selected') === 'true';

      if (wasActive) {
        const arr = Array.from(triggers);
        const idx = arr.indexOf(trigger);
        const next = arr[idx + 1] || arr[idx - 1];
        if (next) activateTab(next.dataset.tabTrigger);
      }

      trigger?.remove();
      panel?.remove();
      overflowItem?.remove();

      if (isScrollable && updateScrollState) updateScrollState();
    }

    // ── Event delegation on nav ──
    const navElement =
      container.querySelector('[data-tabs-nav]') ||
      container.querySelector('[role="tablist"]');

    if (navElement) {
      navElement.addEventListener('click', (e) => {
        const closeBtn = e.target.closest('[data-tab-close]');
        if (closeBtn) {
          e.stopPropagation();
          closeTab(closeBtn.dataset.tabClose);
          return;
        }
        const trigger = e.target.closest('[data-tab-trigger]');
        if (trigger) activateTab(trigger.dataset.tabTrigger);
      });

      // Keyboard: Enter / Space on close button
      if (isClosable) {
        navElement.addEventListener('keydown', (e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            const closeBtn = e.target.closest('[data-tab-close]');
            if (closeBtn) {
              e.preventDefault();
              e.stopPropagation();
              closeTab(closeBtn.dataset.tabClose);
            }
          }
        });
      }
    }

    // ── Scrollable: arrows + overflow dropdown ──
    var updateScrollState = null;

    if (isScrollable) {
      const nav = container.querySelector('[data-tabs-nav]');
      const scrollLeftBtn = container.querySelector('[data-tabs-scroll-left]');
      const scrollRightBtn = container.querySelector(
        '[data-tabs-scroll-right]',
      );
      const overflowDropdown = container.querySelector(
        '[data-tabs-overflow-dropdown]',
      );
      const overflowTrigger = container.querySelector(
        '[data-tabs-overflow-trigger]',
      );
      const overflowMenu = container.querySelector(
        '[data-tabs-overflow-menu]',
      );

      updateScrollState = function () {
        if (!nav) return;
        const hasOverflow = nav.scrollWidth > nav.clientWidth + 1;

        if (scrollLeftBtn)
          scrollLeftBtn.classList.toggle(
            'hidden',
            !hasOverflow || nav.scrollLeft <= 0,
          );
        if (scrollRightBtn)
          scrollRightBtn.classList.toggle(
            'hidden',
            !hasOverflow ||
              nav.scrollLeft >= nav.scrollWidth - nav.clientWidth - 1,
          );
        if (overflowDropdown)
          overflowDropdown.classList.toggle('hidden', !hasOverflow);
      };

      // Scroll arrow clicks
      if (scrollLeftBtn) {
        scrollLeftBtn.addEventListener('click', function () {
          nav.scrollBy({ left: -200, behavior: 'smooth' });
        });
      }
      if (scrollRightBtn) {
        scrollRightBtn.addEventListener('click', function () {
          nav.scrollBy({ left: 200, behavior: 'smooth' });
        });
      }

      // Recalculate on scroll & resize
      if (nav) {
        nav.addEventListener('scroll', updateScrollState);
        var ro = new ResizeObserver(updateScrollState);
        ro.observe(nav);
      }

      // Overflow dropdown
      if (overflowTrigger && overflowMenu && overflowDropdown) {
        overflowTrigger.addEventListener('click', function (e) {
          e.stopPropagation();
          var wasHidden = overflowMenu.classList.contains('hidden');
          overflowMenu.classList.toggle('hidden');

          // Refresh active indicators when opening
          if (wasHidden) {
            var activeTrigger = container.querySelector(
              '[data-tab-trigger][aria-selected="true"]',
            );
            var activeId = activeTrigger
              ? activeTrigger.dataset.tabTrigger
              : null;
            overflowMenu
              .querySelectorAll('[data-tabs-overflow-item]')
              .forEach(function (item) {
                var isActive = item.dataset.tabsOverflowItem === activeId;
                item.classList.toggle('bg-muted', isActive);
                item.classList.toggle('font-bold', isActive);
                item.classList.toggle('text-foreground', isActive);
                item.classList.toggle('text-muted-foreground', !isActive);
              });
          }
        });

        // Overflow item click → activate tab + close dropdown
        overflowMenu.addEventListener('click', function (e) {
          var item = e.target.closest('[data-tabs-overflow-item]');
          if (item) {
            activateTab(item.dataset.tabsOverflowItem);
            overflowMenu.classList.add('hidden');
          }
        });

        // Close dropdown on outside click
        document.addEventListener('click', function (e) {
          if (!overflowDropdown.contains(e.target)) {
            overflowMenu.classList.add('hidden');
          }
        });

        // Close dropdown on Escape
        document.addEventListener('keydown', function (e) {
          if (e.key === 'Escape') {
            overflowMenu.classList.add('hidden');
          }
        });
      }

      // Initial state
      updateScrollState();
    }
  });
})();
