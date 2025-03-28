export interface SubItem {
  name: string;
  icon: string;
  path: string;
}

export interface NavItem {
  type: 'item' | 'heading' | 'divider';
  name?: string;
  icon?: string;
  path?: string;
  expandable?: boolean;
  subItems?: SubItem[];
  title?: string;
}

export const navSections: NavItem[] = [
    {
        type: 'item',
        name: 'Dashboards',
        icon: '📊',
        path: '#',
        expandable: true,
        subItems: [
            { name: 'Analytics', icon: "📈", path: '/analytics' },
            { name: 'Sales', icon: "💰", path: '/sales' }
        ]
    },
    {
        type: 'heading',
        title: 'PAGES'
    },
    {
        type: 'item',
        name: 'Pages',
        icon: '📄',
        path: '#',
        expandable: true,
        subItems: [
            { name: 'Profile', icon: "👤", path: '/pages/profile' },
            { name: 'Settings', icon: "⚙️", path: '/pages/settings' }
        ]
    },
    {
        type: 'item',
        name: 'Applications',
        icon: '📱',
        path: '#',
        expandable: true,
        subItems: [
            { name: 'Calendar', icon: "📅", path: '/applications/calendar' },
            { name: 'Kanban', icon: "📋", path: '/applications/kanban' }
        ]
    },
    {
        type: 'item',
        name: 'Ecommerce',
        icon: '🛒',
        path: '#',
        expandable: true,
        subItems: [
            { name: 'Products', icon: "📦", path: '/ecommerce/products' },
            { name: 'Orders', icon: "📝", path: '/ecommerce/orders' }
        ]
    },
    {
        type: 'item',
        name: 'Authentication',
        icon: '🔒',
        path: '#',
        expandable: true,
        subItems: [
            { name: 'Sign In', icon: "🔑", path: '/auth/signin' },
            { name: 'Sign Up', icon: "✏️", path: '/auth/signup' }
        ]
    },
    {
        type: 'divider'
    },
    {
        type: 'heading',
        title: 'DOCS'
    },
    {
        type: 'item',
        name: 'Basic',
        icon: '📘',
        path: '#',
        expandable: true,
        subItems: [
            { name: 'Introduction', icon: "ℹ️", path: '/docs/basic/intro' },
            { name: 'Getting Started', icon: "🚀", path: '/docs/basic/start' }
        ]
    },
    {
        type: 'item',
        name: 'Components',
        icon: '🧩',
        path: '#',
        expandable: true,
        subItems: [
            { name: 'Alerts', icon: "⚠️", path: '/docs/components/alerts' },
            { name: 'Buttons', icon: "🔘", path: '/docs/components/buttons' }
        ]
    },
    {
        type: 'item',
        name: 'Change Log',
        icon: '📝',
        path: '#',
        expandable: true,
        subItems: [
            { name: 'Version 1.0', icon: "🔄", path: '/docs/changelog/v1' },
            { name: 'Version 2.0', icon: "🔄", path: '/docs/changelog/v2' }
        ]
    }
];

export const findParentSection = (pageName: string): string => {
  for (const section of navSections) {
    if (section.type === 'item' && section.subItems) {
      for (const subItem of section.subItems) {
        if (subItem.name === pageName) {
          return section.name || '';
        }
      }
    }
  }
  return 'Dashboards';
}; 