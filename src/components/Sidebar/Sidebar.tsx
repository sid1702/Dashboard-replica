import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';
import { navSections } from '../../data/navigation';

const user = {
  name: 'Brooklyn Alice',
  avatar: 'https://api.dicebear.com/7.x/lorelei/svg?seed=JohnDoe'
};

interface SidebarProps {
  activePage: string;
  setActivePage: (page: string) => void;
  isMobileOpen: boolean;
  onMobileClose?: () => void;
}

const Sidebar = ({ activePage, setActivePage, isMobileOpen, onMobileClose }: SidebarProps) => {
  const [expandedItems, setExpandedItems] = useState<Record<string, boolean>>({
    Dashboards: true
  });
  const [userExpanded, setUserExpanded] = useState(false);

  const toggleExpand = (itemName: string) => {
    setExpandedItems(prev => ({
      ...prev,
      [itemName]: !prev[itemName]
    }));
  };

  const toggleUserExpand = () => {
    setUserExpanded(!userExpanded);
  };

  const handleSubItemClick = (name: string) => {
    setActivePage(name);
    if (window.innerWidth <= 480 && onMobileClose) {
      onMobileClose();
    }
  };

  const renderNavElement = (element: any, index: number) => {
    if (element.type === 'heading') {
      return (
        <li key={`heading-${index}`} className="nav-heading-container">
          <span className="nav-heading">{element.title}</span>
        </li>
      );
    } else if (element.type === 'divider') {
      return <li key={`divider-${index}`} className="nav-divider"></li>;
    } else if (element.type === 'item') {
      return (
        <li key={element.name}>
          <div 
            className={`nav-item ${activePage === element.name ? 'active' : ''}`}
            onClick={() => toggleExpand(element.name)}
          >
            <span className="nav-icon">{element.icon}</span>
            <span className="nav-text">{element.name}</span>
            <span className={`expand-icon ${expandedItems[element.name] ? 'expanded' : ''}`}>
              ❯
            </span>
          </div>
          
          {expandedItems[element.name] && (
            <ul className="sub-menu">
              {element.subItems.map((subItem: any) => (
                <li key={subItem.name}>
                  <Link 
                    to={subItem.path}
                    className={`sub-item ${activePage === subItem.name ? 'active' : ''}`}
                    onClick={() => handleSubItemClick(subItem.name)}
                  >
                    <span className="sub-icon">{subItem.icon}</span>
                    <span>{subItem.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </li>
      );
    }
    return null;
  };

  return (
    <div className={`sidebar ${isMobileOpen ? 'mobile-open' : ''}`}>
      <div className="sidebar-title">
        <h2><span className="dashboard-icon">⚡</span> Material Dashboard PRO</h2>
      </div>
      
      <div className="sidebar-user" onClick={toggleUserExpand}>
        <img src={user.avatar} alt="User avatar" className="user-avatar" />
        <span className="user-name">{user.name}</span>
        <span className={`expand-icon ${userExpanded ? 'expanded' : ''}`}>
          ❯
        </span>
      </div>
      
      <nav className="sidebar-nav">
        <ul>
          {navSections.map((element, index) => renderNavElement(element, index))}
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar; 