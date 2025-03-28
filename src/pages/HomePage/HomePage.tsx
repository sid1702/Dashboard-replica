import { useState, useEffect } from 'react';
import { Routes, Route, Navigate, useNavigate, useLocation } from 'react-router-dom';
import Sidebar from '../../components/Sidebar/Sidebar';
import Header from '../../components/Header/Header';
import Sales from '../Sales/Sales';
import { navSections } from '../../data/navigation';
import './HomePage.css';

const HomePage = () => {
  const [activePage, setActivePage] = useState('Sales');
  const navigate = useNavigate();
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const findPageNameFromPath = (path: string): string => {
    for (const section of navSections) {
      if (section.type === 'item' && section.subItems) {
        const matchingSubItem = section.subItems.find(subItem => 
          subItem.path === path || subItem.path === `/${path}`
        );
        if (matchingSubItem) {
          return matchingSubItem.name;
        }
      }
    }
    return 'Sales';
  };

  useEffect(() => {
    const currentPath = location.pathname;
    const pageName = findPageNameFromPath(currentPath);
    setActivePage(pageName);
  }, [location.pathname]);

  const handlePageChange = (page: string) => {
    setActivePage(page);
    
    for (const section of navSections) {
      if (section.type === 'item' && section.subItems) {
        const matchingSubItem = section.subItems.find(subItem => 
          subItem.name === page
        );
        if (matchingSubItem) {
          navigate(matchingSubItem.path);
          return;
        }
      }
    }
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    document.body.classList.toggle('sidebar-open', !isMobileMenuOpen);
  };

  const handleMobileClose = () => {
    setIsMobileMenuOpen(false);
    document.body.classList.remove('sidebar-open');
  };

  return (
    <div className="homePage">
      <div 
        className={`sidebar-overlay ${isMobileMenuOpen ? 'show' : ''}`} 
        onClick={handleMobileClose}
      />
      <Sidebar 
        activePage={activePage} 
        setActivePage={handlePageChange}
        isMobileOpen={isMobileMenuOpen}
        onMobileClose={handleMobileClose}
      />
      <div className="main-content">
        <Header 
          activePage={activePage} 
          onMobileMenuClick={toggleMobileMenu}
        />
        <Routes>
          <Route path="/analytics" element={<div>Analytics Page</div>} />
          <Route path="/sales" element={<Sales />} />
          <Route path="/pages/profile" element={<div>Profile Page</div>} />
          <Route path="/pages/settings" element={<div>Settings Page</div>} />
          <Route path="/applications/calendar" element={<div>Calendar Page</div>} />
          <Route path="/applications/kanban" element={<div>Kanban Page</div>} />
          <Route path="/ecommerce/products" element={<div>Products Page</div>} />
          <Route path="/ecommerce/orders" element={<div>Orders Page</div>} />
          <Route path="/auth/signin" element={<div>Sign In Page</div>} />
          <Route path="/auth/signup" element={<div>Sign Up Page</div>} />
          <Route path="/docs/basic/intro" element={<div>Introduction Page</div>} />
          <Route path="/docs/basic/start" element={<div>Getting Started Page</div>} />
          <Route path="/docs/components/alerts" element={<div>Alerts Page</div>} />
          <Route path="/docs/components/buttons" element={<div>Buttons Page</div>} />
          <Route path="/docs/changelog/v1" element={<div>Version 1.0 Page</div>} />
          <Route path="/docs/changelog/v2" element={<div>Version 2.0 Page</div>} />
          <Route path="/" element={<Navigate to="/sales" replace />} />
        </Routes>
      </div>
    </div>
  );
};

export default HomePage; 