import React from 'react';
import { Globe, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import BrandLogo from './BrandLogo';

const Footer = () => {
  return (
    <footer className="border-t-[6px] border-accent bg-[#022c22] pb-8 pt-14 text-primary-light sm:pt-16 lg:pt-20">
      <div className="section-shell">
        <div className="mb-12 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:mb-16 lg:grid-cols-4 lg:gap-12">
          <div className="space-y-6">
            <BrandLogo light />
            <p className="text-primary-light/80 text-sm font-sans leading-relaxed">
              Dedicated to spreading the light of the Holy Quran globally through interactive, high-quality, and personalized online education.
            </p>
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full bg-primary-dark flex items-center justify-center hover:bg-accent text-white cursor-pointer transition-colors"><Globe size={20} /></div>
              <div className="w-10 h-10 rounded-full bg-primary-dark flex items-center justify-center hover:bg-accent text-white cursor-pointer transition-colors"><Users size={20} /></div>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6 text-white font-serif">Quick Links</h4>
            <ul className="space-y-3 text-primary-light/80 text-sm">
              <li><Link to="/" className="hover:text-accent transition-colors">Home</Link></li>
              <li><Link to="/courses" className="hover:text-accent transition-colors">Courses</Link></li>
              <li><Link to="/tutors" className="hover:text-accent transition-colors">Tutors</Link></li>
              <li><Link to="/charity" className="hover:text-accent transition-colors">Islamic Charity</Link></li>
              <li><Link to="/contact" className="hover:text-accent transition-colors">Contact</Link></li>
              <li><Link to="/about" className="hover:text-accent transition-colors">About Us</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6 text-white font-serif">Our Courses</h4>
            <ul className="space-y-3 text-primary-light/80 text-sm">
              <li><Link to="/courses" className="hover:text-accent transition-colors">Noorani Qaida</Link></li>
              <li><Link to="/courses" className="hover:text-accent transition-colors">Quran Reading</Link></li>
              <li><Link to="/courses" className="hover:text-accent transition-colors">Quran Memorization</Link></li>
              <li><Link to="/courses" className="hover:text-accent transition-colors">Islamic Studies</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6 text-white font-serif">Contact Us</h4>
            <div className="space-y-4 text-primary-light/80 text-sm">
              <div className="bg-primary-dark/40 p-4 rounded-xl border border-primary-dark/50">
                <p className="text-xs text-accent mb-1 font-semibold uppercase">WhatsApp / Call</p>
                <a href="https://wa.me/923125186414" target="_blank" rel="noreferrer" className="font-bold text-white text-lg hover:text-accent transition-colors">+92 3125186414</a>
              </div>
              <div className="bg-primary-dark/40 p-4 rounded-xl border border-primary-dark/50">
                <p className="text-xs text-accent mb-1 font-semibold uppercase">Email Support</p>
                <a href="mailto:Muhammadzahidalam@gmail.com" className="font-bold text-white break-all hover:text-accent transition-colors">Muhammadzahidalam@gmail.com</a>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-start justify-between gap-4 border-t border-primary-dark pt-7 text-left text-sm text-primary-light/60 sm:flex-row sm:items-center sm:text-center">
          <p>© {new Date().getFullYear()} Ilm-ul-Quran. All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
