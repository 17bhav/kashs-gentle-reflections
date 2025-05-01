
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navigation: React.FC = () => {
  const location = useLocation();
  
  return (
    <nav className="py-4">
      <div className="max-w-2xl mx-auto flex justify-center gap-8 md:gap-12">
        <NavLink to="/" isActive={location.pathname === '/'}>
          Letter
        </NavLink>
        <NavLink to="/memories" isActive={location.pathname === '/memories'}>
          Memories
        </NavLink>
        <NavLink to="/closing" isActive={location.pathname === '/closing'}>
          Closing
        </NavLink>
      </div>
    </nav>
  );
};

interface NavLinkProps {
  to: string;
  isActive: boolean;
  children: React.ReactNode;
}

const NavLink: React.FC<NavLinkProps> = ({ to, isActive, children }) => {
  return (
    <Link
      to={to}
      className={`text-sm md:text-base relative py-1 px-1 transition-colors duration-300 ${
        isActive 
        ? 'text-primary font-medium' 
        : 'text-primary/70 hover:text-primary'
      }`}
    >
      {children}
      {isActive && (
        <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gentle-brown animate-fade-in"></span>
      )}
    </Link>
  );
};

export default Navigation;
