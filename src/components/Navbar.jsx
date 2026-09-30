import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowRight } from 'lucide-react';
import { cn } from '../utils/cn';
import BrandLogo from './BrandLogo';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Courses', path: '/courses' },
    { name: 'Tutors', path: '/tutors' },
    { name: 'Charity', path: '/charity' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="fixed w-full z-50 bg-white/70 backdrop-blur-lg border-b border-slate-200/50 transition-all duration-300">
      <div className="section-shell">
        <div className="flex justify-between items-center h-20">
          <BrandLogo />
          
          {/* Desktop Nav */}
          <div className="hidden items-center space-x-7 xl:flex">
            {navLinks.map((item) => (
              <Link 
                key={item.name} 
                to={item.path} 
                className={cn(
                  "font-medium font-sans transition-colors relative group py-2",
                  location.pathname === item.path ? "text-primary-dark" : "text-slate-600 hover:text-primary-dark"
                )}
              >
                {item.name}
                <span className={cn(
                  "absolute left-0 bottom-0 h-0.5 bg-accent transition-all duration-300 ease-out",
                  location.pathname === item.path ? "w-full" : "w-0 group-hover:w-full"
                )}></span>
              </Link>
            ))}
          </div>

          <div className="hidden xl:block">
            <Link to="/contact" state={{ intention: 'Free Trial' }} className="intent-cta flex items-center gap-2 rounded-full px-5 py-2.5 font-bold text-white transition duration-300 hover:-translate-y-0.5"><span className="h-2 w-2 animate-pulse rounded-full bg-current" />Free Trial &amp; Regular Classes <ArrowRight size={16}/></Link>
          </div>

          {/* Mobile Toggle */}
          <div className="flex items-center xl:hidden">
            <button onClick={() => setIsOpen(!isOpen)} aria-label={isOpen ? 'Close menu' : 'Open menu'} className="rounded-xl p-2 text-primary-dark hover:bg-emerald-50">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute left-0 top-20 flex h-[calc(100vh-5rem)] w-full flex-col space-y-5 overflow-y-auto border-t border-slate-100 bg-white/95 p-5 backdrop-blur-xl sm:p-8 xl:hidden">
          {navLinks.map((item) => (
            <Link 
              key={item.name} 
              to={item.path} 
              onClick={() => setIsOpen(false)}
              className="text-2xl font-serif font-bold text-slate-900 hover:text-primary-dark transition-colors border-b border-slate-100 pb-4"
            >
              {item.name}
            </Link>
          ))}
          <Link onClick={()=>setIsOpen(false)} to="/contact" state={{ intention: 'Free Trial' }} className="intent-cta mt-8 rounded-xl px-6 py-4 text-center text-lg font-bold text-white shadow-lg transition-transform active:scale-95">Free Trial &amp; Regular Classes</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
