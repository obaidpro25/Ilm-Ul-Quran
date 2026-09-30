import React from 'react';
import { motion } from 'framer-motion';

const TutorCard = ({ name, title, skills, index = 0 }) => (
  <motion.div 
    initial={{ opacity: 0, scale: 0.9 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.4, delay: index * 0.1 }}
    className="flex flex-col items-center p-8 bg-white/80 backdrop-blur-md border border-slate-100 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_20px_50px_rgb(0,0,0,0.12)] group cursor-pointer"
  >
    <div className="relative w-28 h-28 mb-6">
      <div className="absolute inset-0 bg-accent rounded-full animate-ping opacity-20 group-hover:opacity-40 transition-opacity"></div>
      <div className="w-full h-full rounded-full border-[3px] border-accent p-1 relative z-10 bg-white">
        <div className="w-full h-full rounded-full bg-slate-200 overflow-hidden">
          {/* Placeholder for tutor image */}
          <div className="w-full h-full bg-gradient-to-br from-slate-200 to-slate-300"></div>
        </div>
      </div>
    </div>
    
    <h4 className="font-serif font-bold text-xl text-slate-900 group-hover:text-primary-dark transition-colors">{name}</h4>
    <p className="text-accent-dark text-sm font-bold mb-4 uppercase tracking-wider">{title}</p>
    
    <div className="flex flex-wrap justify-center gap-2">
      {skills.map((skill, idx) => (
        <span key={idx} className="bg-primary-light/50 text-primary-dark font-medium text-xs px-3 py-1.5 rounded-lg border border-primary-light transition-colors group-hover:bg-primary-light">
          {skill}
        </span>
      ))}
    </div>
  </motion.div>
);

export default TutorCard;
