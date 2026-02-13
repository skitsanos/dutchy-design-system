import type { FC } from 'react';
import ComponentPageLayout from '@/components/ComponentPageLayout';
import Button from '@/components/Button';
import Flex from '@/components/Flex';
import Icon from '@/components/Icon';
import MenuItem from '@/components/MenuItem';
import Dropdown from '@/components/Dropdown';

const DropdownsPage: FC = () => (
  <ComponentPageLayout componentId="dropdowns">
    <>
      <Flex wrap gap={8} align="start">
        {/* Basic Dropdown */}
        <div>
          <h3 className="font-display font-bold uppercase text-sm tracking-wider mb-4 text-muted-foreground">Action Menu</h3>
          <Dropdown
            trigger={
              <Button variant="outline" size="sm" className="px-6 border-border hover:border-foreground">
                Actions
                <Icon name="chevron-down" size="sm" />
              </Button>
            }
          >
            <MenuItem>Edit</MenuItem>
            <MenuItem className="border-t border-border">Duplicate</MenuItem>
            <MenuItem className="border-t border-border">Archive</MenuItem>
            <div className="border-t-2 border-border" />
            <MenuItem variant="destructive">Delete</MenuItem>
          </Dropdown>
        </div>

        {/* Dropdown with Icons */}
        <div>
          <h3 className="font-display font-bold uppercase text-sm tracking-wider mb-4 text-muted-foreground">With Icons</h3>
          <Dropdown
            trigger={
              <Button variant="outline" size="sm" className="px-6 border-border hover:border-foreground">
                More
                <Icon name="chevron-down" size="sm" />
              </Button>
            }
            width="min-w-[220px]"
          >
            <MenuItem icon={<Icon name="edit" size="sm" />}>Edit</MenuItem>
            <MenuItem icon={<Icon name="copy" size="sm" />} className="border-t border-border">Duplicate</MenuItem>
            <MenuItem icon={<Icon name="archive" size="sm" />} className="border-t border-border">Archive</MenuItem>
          </Dropdown>
        </div>

        {/* Command Palette Trigger */}
        <div>
          <h3 className="font-display font-bold uppercase text-sm tracking-wider mb-4 text-muted-foreground">Command Palette</h3>
          <Button variant="outline" data-open-modal="command-palette" size="sm" className="px-6 border-border hover:border-foreground">
            <Icon name="search" size="sm" />
            Search...
            <kbd className="ml-2 text-xs font-mono text-muted-foreground bg-muted px-2 py-0.5 border border-border">Ctrl+K</kbd>
          </Button>
        </div>
      </Flex>

      {/* Command Palette Dialog */}
      <dialog id="command-palette" className="bg-background border-4 border-border p-0 w-full max-w-lg backdrop:bg-foreground/50">
        <div className="p-4 border-b-2 border-border">
          <Flex align="center" gap={3}>
            <Icon name="search" className="text-muted-foreground shrink-0" />
            <input type="text" placeholder="Type a command or search..." className="w-full bg-transparent focus:outline-none text-sm" autoFocus />
          </Flex>
        </div>
        <div className="max-h-80 overflow-auto">
          <div className="px-4 py-2"><p className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Pages</p></div>
          <MenuItem icon={<Icon name="home" size="sm" />} shortcut="G H">Home</MenuItem>
          <MenuItem icon={<Icon name="grid" size="sm" />} shortcut="G C" className="border-t border-border">Components</MenuItem>
          <div className="px-4 py-2 border-t-2 border-border"><p className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Actions</p></div>
          <MenuItem icon={<Icon name="plus" size="sm" />} shortcut="Ctrl+N" data-close-modal>Create New...</MenuItem>
        </div>
      </dialog>
    </>
  </ComponentPageLayout>
);

export default DropdownsPage;
