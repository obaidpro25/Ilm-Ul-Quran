import React, { useState } from 'react';
import { Clock, CheckCircle, X, BookOpen, User, Star } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

const CourseCard = ({ title, category, duration, description, syllabus, image, index = 0 }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* The Clickable Course Card */}
      <motion.div 
        initial={{ opacity: 0, y: 60, rotateX: 8, scale: .96 }}
        whileInView={{ opacity: 1, y: 0, rotateX: 0, scale: 1 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.65, delay: index * 0.1, type: 'spring', bounce: .16 }}
        onClick={() => setIsOpen(true)}
        className="group bg-white/90 backdrop-blur-md border border-emerald-100 rounded-[2rem] overflow-hidden shadow-[0_12px_40px_rgba(6,78,59,.07)] cursor-pointer hover:shadow-[0_28px_70px_rgba(6,78,59,.18)] transition-all duration-500 hover:-translate-y-3 flex flex-col h-full relative"
      >
        <div className="relative h-56 overflow-hidden bg-primary-dark">
          {/* Background Image or Pattern */}
          {image ? (
            <img src={image} alt={title} loading="lazy" decoding="async" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
          ) : (
            <div className="absolute inset-0 opacity-30 transition-transform duration-700 group-hover:scale-110" style={{ backgroundImage: 'radial-gradient(#F59E0B 2px, transparent 2px)', backgroundSize: '24px 24px' }}></div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent"></div>
          
          <div className="absolute top-4 left-4 bg-white/20 backdrop-blur-md text-white px-4 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase border border-white/20 shadow-lg">
            {category}
          </div>
          
          <div className="absolute bottom-5 left-5 right-5">
             <h3 className="text-2xl font-serif font-bold text-white mb-2 drop-shadow-md group-hover:text-accent transition-colors duration-300">{title}</h3>
             <div className="flex items-center text-primary-light text-sm font-medium gap-2">
               <Clock size={16} className="text-accent" /> {duration}
             </div>
          </div>
        </div>

        <div className="p-6 flex flex-col flex-grow">
          <p className="text-slate-600 text-sm mb-6 line-clamp-3 leading-relaxed">{description}</p>
          
          <div className="mt-auto pt-4 border-t border-slate-100 flex items-center justify-between">
            <div className="flex items-center gap-2 text-primary-dark font-bold text-sm group-hover:text-primary transition-colors">
              View Curriculum <motion.div className="group-hover:translate-x-1 transition-transform"><BookOpen size={18}/></motion.div>
            </div>
            <div className="flex -space-x-2">
              <div className="w-8 h-8 rounded-full border-2 border-white bg-slate-200"></div>
              <div className="w-8 h-8 rounded-full border-2 border-white bg-slate-300"></div>
              <div className="w-8 h-8 rounded-full border-2 border-white bg-primary-light flex items-center justify-center text-[10px] font-bold text-primary-dark">+2</div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* The Animated Details Modal */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
            {/* Backdrop */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setIsOpen(false)}
              className="absolute inset-0 bg-slate-900/40 backdrop-blur-md"
            />
            
            {/* Modal Content */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-2xl bg-base rounded-[2rem] shadow-2xl overflow-hidden flex flex-col max-h-[90vh] sm:max-h-[85vh]"
            >
              {/* Modal Header */}
              <div className="relative h-48 sm:h-56 bg-primary-dark flex-shrink-0 overflow-hidden">
                {image ? (
                  <img src={image} alt={title} decoding="async" className="absolute inset-0 w-full h-full object-cover" />
                ) : (
                  <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(#F59E0B 2px, transparent 2px)', backgroundSize: '20px 20px' }}></div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent"></div>
                <button 
                  onClick={() => setIsOpen(false)}
                  className="absolute top-4 right-4 w-10 h-10 bg-white/10 hover:bg-white/30 backdrop-blur-md rounded-full flex items-center justify-center text-white transition-colors border border-white/20 z-10"
                >
                  <X size={24} />
                </button>
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-accent/90 text-white px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase inline-block mb-3 shadow-sm">
                    {category}
                  </div>
                  <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white drop-shadow-lg leading-tight">{title}</h2>
                </div>
              </div>

              {/* Modal Body */}
              <div className="p-6 sm:p-8 overflow-y-auto custom-scrollbar">
                <div className="flex flex-wrap gap-4 mb-8">
                  <div className="flex items-center gap-3 bg-white px-5 py-3 rounded-2xl shadow-sm border border-slate-100/60">
                    <Clock className="text-accent" size={24} />
                    <div>
                      <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Duration</p>
                      <p className="text-sm font-bold text-slate-800">{duration}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 bg-white px-5 py-3 rounded-2xl shadow-sm border border-slate-100/60">
                    <User className="text-accent" size={24} />
                    <div>
                      <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Format</p>
                      <p className="text-sm font-bold text-slate-800">1-on-1 Live</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 bg-white px-5 py-3 rounded-2xl shadow-sm border border-slate-100/60">
                    <Star className="text-accent" size={24} />
                    <div>
                      <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Level</p>
                      <p className="text-sm font-bold text-slate-800">{category}</p>
                    </div>
                  </div>
                </div>

                <div className="mb-10">
                  <h4 className="text-2xl font-serif font-bold text-primary-dark mb-4 flex items-center gap-2">
                    <BookOpen size={24} className="text-accent" /> Course Overview
                  </h4>
                  <p className="text-slate-600 text-lg leading-relaxed">{description}</p>
                </div>

                <div>
                  <h4 className="text-2xl font-serif font-bold text-primary-dark mb-5 flex items-center gap-2">
                     <CheckCircle size={24} className="text-accent" /> What You Will Learn
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {syllabus.map((item, idx) => (
                      <motion.div 
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 + (idx * 0.1), type: "spring", stiffness: 100 }}
                        key={idx} 
                        className="flex items-start gap-3 bg-white p-4 rounded-xl border border-slate-100 shadow-[0_2px_10px_rgb(0,0,0,0.02)] hover:shadow-md transition-shadow"
                      >
                        <div className="bg-primary-light p-1.5 rounded-full shrink-0">
                          <CheckCircle size={18} className="text-primary-dark" />
                        </div>
                        <span className="text-sm font-semibold text-slate-700 leading-snug pt-0.5">{item}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Modal Footer */}
              <div className="p-6 border-t border-slate-100 bg-white/50 backdrop-blur-md flex justify-end flex-shrink-0">
                <Link to="/contact" state={{course:title}} onClick={() => setIsOpen(false)} className="bg-primary-dark text-white px-10 py-4 rounded-full font-bold shadow-[0_8px_20px_rgb(6,78,59,0.3)] hover:shadow-[0_12px_25px_rgb(6,78,59,0.4)] hover:bg-primary transition-all duration-300 hover:-translate-y-1 active:scale-95 w-full sm:w-auto text-lg text-center">
                  Enroll in this Course
                </Link>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

export default CourseCard;
