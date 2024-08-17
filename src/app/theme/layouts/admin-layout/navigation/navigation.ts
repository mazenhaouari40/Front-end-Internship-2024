export interface NavigationItem {
  id: string;
  title: string;
  role?: string;
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

{
  id: 'admin',
  title: 'Admin',
  type: 'group',
  role :'admin',
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
    role :'collaborateur',
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
      // {
      //   id: '15',
      //   title: 'Demande-Absence',
      //   type: 'item',
      //   url: '/DemandeAbsence',
      //   classes: 'nav-item',
      //   icon: 'edit'
      // },
    ]
  },
  {
    id: '14',
    title: 'Manager',
    role :'manager',
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
