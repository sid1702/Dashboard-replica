export interface PageProps {
  activePage: string;
}

export interface SidebarProps extends PageProps {
  setActivePage: (page: string) => void;
} 