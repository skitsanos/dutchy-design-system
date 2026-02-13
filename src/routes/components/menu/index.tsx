import type { FC } from 'react';
import ComponentPageLayout from '@/components/ComponentPageLayout';
import Flex from '@/components/Flex';
import Icon from '@/components/Icon';
import Button from '@/components/Button';
import Menu, { MenuDivider, MenuGroup } from '@/components/Menu';
import MenuItem from '@/components/MenuItem';
import Dropdown from '@/components/Dropdown';

const MenuPage: FC = () => (
  <ComponentPageLayout componentId="menu">
    <>
      {/* Basic Menu */}
      <div className="bg-background border-4 border-border p-8 md:p-12 mb-8">
        <h3 className="font-display font-bold uppercase text-sm tracking-wider mb-6 text-muted-foreground">Basic</h3>
        <Menu>
          <MenuItem>New File</MenuItem>
          <MenuItem>Open</MenuItem>
          <MenuItem>Save</MenuItem>
          <MenuDivider />
          <MenuItem>Export</MenuItem>
        </Menu>
      </div>

      {/* With Icons */}
      <div className="bg-background border-4 border-border p-8 md:p-12 mb-8">
        <h3 className="font-display font-bold uppercase text-sm tracking-wider mb-6 text-muted-foreground">With Icons</h3>
        <Menu>
          <MenuItem icon={<Icon name="file" size="sm" />}>New File</MenuItem>
          <MenuItem icon={<Icon name="folder" size="sm" />}>Open Folder</MenuItem>
          <MenuItem icon={<Icon name="save" size="sm" />}>Save</MenuItem>
          <MenuItem icon={<Icon name="download" size="sm" />}>Download</MenuItem>
        </Menu>
      </div>

      {/* With Shortcuts */}
      <div className="bg-background border-4 border-border p-8 md:p-12 mb-8">
        <h3 className="font-display font-bold uppercase text-sm tracking-wider mb-6 text-muted-foreground">With Shortcuts</h3>
        <Menu width="sm">
          <MenuItem icon={<Icon name="copy" size="sm" />} shortcut="Ctrl+C">Copy</MenuItem>
          <MenuItem icon={<Icon name="edit" size="sm" />} shortcut="Ctrl+V">Paste</MenuItem>
          <MenuItem icon={<Icon name="search" size="sm" />} shortcut="Ctrl+F">Find</MenuItem>
          <MenuDivider />
          <MenuItem icon={<Icon name="settings" size="sm" />} shortcut="Ctrl+,">Settings</MenuItem>
        </Menu>
      </div>

      {/* Destructive Items */}
      <div className="bg-background border-4 border-border p-8 md:p-12 mb-8">
        <h3 className="font-display font-bold uppercase text-sm tracking-wider mb-6 text-muted-foreground">Destructive</h3>
        <Menu>
          <MenuItem icon={<Icon name="edit" size="sm" />}>Edit</MenuItem>
          <MenuItem icon={<Icon name="copy" size="sm" />}>Duplicate</MenuItem>
          <MenuItem icon={<Icon name="archive" size="sm" />}>Archive</MenuItem>
          <MenuDivider />
          <MenuItem variant="destructive" icon={<Icon name="trash" size="sm" />}>Delete</MenuItem>
        </Menu>
      </div>

      {/* In a Dropdown */}
      <div className="bg-background border-4 border-border p-8 md:p-12 mb-8">
        <h3 className="font-display font-bold uppercase text-sm tracking-wider mb-6 text-muted-foreground">In a Dropdown</h3>
        <Flex gap={6} wrap>
          <Dropdown
            trigger={
              <Button variant="outline" size="sm" className="px-6 border-border hover:border-foreground">
                File
                <Icon name="chevron-down" size="sm" />
              </Button>
            }
            width="min-w-[220px]"
          >
            <MenuItem icon={<Icon name="file" size="sm" />} shortcut="Ctrl+N">New</MenuItem>
            <MenuItem icon={<Icon name="folder" size="sm" />} shortcut="Ctrl+O">Open</MenuItem>
            <MenuItem icon={<Icon name="save" size="sm" />} shortcut="Ctrl+S">Save</MenuItem>
            <MenuDivider />
            <MenuItem icon={<Icon name="download" size="sm" />}>Export as PDF</MenuItem>
          </Dropdown>

          <Dropdown
            trigger={
              <Button variant="outline" size="sm" className="px-6 border-border hover:border-foreground">
                Edit
                <Icon name="chevron-down" size="sm" />
              </Button>
            }
            width="min-w-[220px]"
          >
            <MenuItem icon={<Icon name="copy" size="sm" />} shortcut="Ctrl+C">Copy</MenuItem>
            <MenuItem icon={<Icon name="edit" size="sm" />} shortcut="Ctrl+V">Paste</MenuItem>
            <MenuDivider />
            <MenuItem variant="destructive" icon={<Icon name="trash" size="sm" />} shortcut="Del">Delete</MenuItem>
          </Dropdown>
        </Flex>
      </div>

      {/* Grouped Sections */}
      <div className="bg-background border-4 border-border p-8 md:p-12 mb-8">
        <h3 className="font-display font-bold uppercase text-sm tracking-wider mb-6 text-muted-foreground">Grouped Sections</h3>
        <Menu width="sm">
          <MenuGroup label="Account">
            <MenuItem icon={<Icon name="profile" size="sm" />}>Profile</MenuItem>
            <MenuItem icon={<Icon name="settings" size="sm" />}>Settings</MenuItem>
            <MenuItem icon={<Icon name="key" size="sm" />}>API Keys</MenuItem>
          </MenuGroup>
          <MenuGroup label="Team">
            <MenuItem icon={<Icon name="users" size="sm" />}>Members</MenuItem>
            <MenuItem icon={<Icon name="shield" size="sm" />}>Permissions</MenuItem>
          </MenuGroup>
          <MenuDivider />
          <MenuItem variant="destructive" icon={<Icon name="logout" size="sm" />}>Sign Out</MenuItem>
        </Menu>
      </div>

      {/* API Reference */}
      <div className="bg-white border-4 border-border p-8 md:p-12">
        <h3 className="font-display font-bold uppercase text-sm tracking-wider mb-6 text-muted-foreground">API</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-muted border-b-2 border-border">
                <th className="text-left px-4 py-3 font-display font-bold uppercase text-xs tracking-wider">Component</th>
                <th className="text-left px-4 py-3 font-display font-bold uppercase text-xs tracking-wider">Prop</th>
                <th className="text-left px-4 py-3 font-display font-bold uppercase text-xs tracking-wider">Type</th>
                <th className="text-left px-4 py-3 font-display font-bold uppercase text-xs tracking-wider">Default</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              <tr><td className="px-4 py-3 font-mono font-bold text-xs">Menu</td><td className="px-4 py-3 font-mono text-xs">width</td><td className="px-4 py-3 font-mono text-xs text-muted-foreground">"xs" | "sm" | "md"</td><td className="px-4 py-3 font-mono text-xs">"xs"</td></tr>
              <tr className="bg-muted/30"><td className="px-4 py-3 font-mono font-bold text-xs">MenuItem</td><td className="px-4 py-3 font-mono text-xs">variant</td><td className="px-4 py-3 font-mono text-xs text-muted-foreground">"default" | "destructive"</td><td className="px-4 py-3 font-mono text-xs">"default"</td></tr>
              <tr><td className="px-4 py-3 font-mono font-bold text-xs">MenuItem</td><td className="px-4 py-3 font-mono text-xs">icon</td><td className="px-4 py-3 font-mono text-xs text-muted-foreground">ReactNode</td><td className="px-4 py-3 font-mono text-xs">—</td></tr>
              <tr className="bg-muted/30"><td className="px-4 py-3 font-mono font-bold text-xs">MenuItem</td><td className="px-4 py-3 font-mono text-xs">shortcut</td><td className="px-4 py-3 font-mono text-xs text-muted-foreground">string</td><td className="px-4 py-3 font-mono text-xs">—</td></tr>
              <tr><td className="px-4 py-3 font-mono font-bold text-xs">MenuGroup</td><td className="px-4 py-3 font-mono text-xs">label</td><td className="px-4 py-3 font-mono text-xs text-muted-foreground">string</td><td className="px-4 py-3 font-mono text-xs">—</td></tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  </ComponentPageLayout>
);

export default MenuPage;
