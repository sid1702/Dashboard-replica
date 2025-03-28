import './Header.css';
import { PageProps } from '../../types';
import { findParentSection } from '../../data/navigation';

interface HeaderProps extends PageProps {
  onMobileMenuClick: () => void;
}

const Header = ({ activePage, onMobileMenuClick }: HeaderProps) => {
  const parentSection = findParentSection(activePage);
  
  return (
    <div className="header">
      <div className="breadcrumb">
        <div className="breadcrumb-left">
          <div className="breadcrumb-path">
            <span className="home-icon">⌂</span> / {parentSection} / {activePage}
          </div>
          <div className="active-page">
            {activePage}
          </div>
        </div>
        <div className="breadcrumb-right">
          <button className="menu-button mobile-only" onClick={onMobileMenuClick}>☰</button>
        </div>
      </div>
      <div className="header-actions">
        <div className="search-bar">
          <input type="text" placeholder="Search here"/>
        </div>
        <div className="action-buttons">
          <button className="action-button profile-button">👤</button>
          <button className="action-button">⚙️</button>
          <button className="action-button">🔔</button>
        </div>
      </div>
    </div>
  );
};

export default Header; 