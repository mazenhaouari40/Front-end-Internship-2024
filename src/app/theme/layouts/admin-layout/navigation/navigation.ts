export interface NavigationItem {
  id: string;
  title: string;
  type: 'item' | 'collapse' | 'group';
  translate?: string;
  icon?: string;
  hidden?: boolean;
  url?: string;
  classes?: string;
  groupClasses?: string;
  exactMatch?: boolean;
  external?: boolean;
  target?: boolean;
  breadcrumbs?: boolean;
  children?: NavigationItem[];
  link?: string;
  description?: string;
  path?: string;
}

export const NavigationItems: NavigationItem[] = [
  // {
  //   id: 'dashboard',
  //   title: 'Dashboard',
  //   type: 'group',
  //   icon: 'icon-navigation',
  //   children: [
  //     {
  //       id: 'default',
  //       title: 'Default',
  //       type: 'item',
  //       classes: 'nav-item',
  //       url: '/dashboard/default',
  //       icon: 'dashboard',
  //       breadcrumbs: false
  //     }
  //   ]
  // },
  // {
  //   id: 'authentication',
  //   title: 'Authentication',
  //   type: 'group',
  //   icon: 'icon-navigation',
  //   children: [
  //     {
  //       id: 'login',
  //       title: 'Login',
  //       type: 'item',
  //       classes: 'nav-item',
  //       url: '/login',
  //       icon: 'login',
  //       target: true,
  //       breadcrumbs: false
  //     },
  //     {
  //       id: 'register',
  //       title: 'Register',
  //       type: 'item',
  //       classes: 'nav-item',
  //       url: '/register',
  //       icon: 'profile',
  //       target: true,
  //       breadcrumbs: false
  //     }
  //   ]
  // },
  // {
  //   id: 'utilities',
  //   title: 'UI Components',
  //   type: 'group',
  //   icon: 'icon-navigation',
  //   children: [
  //     {
  //       id: 'typography',
  //       title: 'Typography',
  //       type: 'item',
  //       classes: 'nav-item',
  //       url: '/typography',
  //       icon: 'font-size'
  //     },
  //     {
  //       id: 'color',
  //       title: 'Colors',
  //       type: 'item',
  //       classes: 'nav-item',
  //       url: '/color',
  //       icon: 'bg-colors'
  //     },

  //   ]
  // },
  // {
  //   id: 'other',
  //   title: 'Other',
  //   type: 'group',
  //   icon: 'icon-navigation',
  //   children: [
  //     {
  //       id: 'sample-page',
  //       title: 'Sample Page',
  //       type: 'item',
  //       url: '/sample-page',
  //       classes: 'nav-item',
  //       icon: 'chrome'
  //     }
  //   ]
  // },


//mon travail
{
  id: 'admin',
  title: 'Admin',
  type: 'group',
  children: [
    {
      id: 'Dashboard',
      title: 'Dashboard',
      type: 'item',
      url: '/Dashboard',
      classes: 'nav-item',
      icon: 'dashboard'
    },
  ]
},
  {
    id: '13',
    title: 'Collaborateur',
    type: 'group',
    children: [
      {
        id: 'listeabsence',
        title: 'Liste-absences',
        type: 'item',
        url: '/liste-absence',
        classes: 'nav-item',
        icon: 'unordered-list'
      },
      {
        id: '15',
        title: 'Demande-Absence',
        type: 'item',
        url: '/DemandeAbsence',
        classes: 'nav-item',
        icon: 'edit'
      },
    ]
  },
  {
    id: '14',
    title: 'Manager',
    type: 'group',
    children: [
      {
        id: 'Validationabsence',
        title: 'Validation-Absence',
        type: 'item',
        url: '/ValidationAbsence',
        classes: 'nav-item',
        icon: 'check-circle'
      }

    ]
  }




];
