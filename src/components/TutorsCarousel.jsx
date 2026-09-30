import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const tutors = [
  { id: 1, name: 'Female Qaida Tutor', role: 'Qaida & Kids Specialist', image: '/images/tutors/maryam-niqab-v2.jpg' },
  { id: 2, name: 'Female Hifz Tutor', role: 'Hifz Mentor', image: '/images/tutors/safiya-niqab-v2.jpg' },
  { id: 3, name: 'Male Arabic Tutor', role: 'Quranic Arabic Teacher', image: '/images/tutors/yusuf.jpg' },
  { id: 4, name: 'Female Support Tutor', role: 'Women & Revert Mentor', image: '/images/tutors/maryam-niqab-v2.jpg' },
];

const variants = {
  center: { x: 0, scale: 1, zIndex: 30, opacity: 1, filter: 'brightness(1)' },
  left: { x: '-55%', scale: 0.85, zIndex: 20, opacity: 0.8, filter: 'brightness(0.3)' },
  right: { x: '55%', scale: 0.85, zIndex: 20, opacity: 0.8, filter: 'brightness(0.3)' },
  hidden: { x: 0, scale: 0.6, zIndex: 10, opacity: 0, filter: 'brightness(0)' }
};

const getPosition = (index, activeIndex, length) => {
  if (index === activeIndex) return 'center';
  if (index === (activeIndex - 1 + length) % length) return 'left';
  if (index === (activeIndex + 1) % length) return 'right';
  return 'hidden';
};

const TutorsCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const next = () => setActiveIndex((prev) => (prev + 1) % tutors.length);
  const prev = () => setActiveIndex((prev) => (prev - 1 + tutors.length) % tutors.length);

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(next, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative mx-auto flex h-[430px] w-full max-w-5xl items-center justify-center sm:h-[500px]">
      
      {/* Decorative Top Left Pill (From UI reference) */}
      <motion.div 
        animate={{ y: [0, -10, 0] }} 
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-4 left-1/4 z-40 bg-white/5 backdrop-blur-xl border border-white/10 px-5 py-2.5 rounded-full flex gap-1.5 shadow-2xl hidden md:flex"
      >
        <div className="w-1.5 h-1.5 rounded-full bg-white"></div>
        <div className="w-1.5 h-1.5 rounded-full bg-white"></div>
        <div className="w-1.5 h-1.5 rounded-full bg-white"></div>
      </motion.div>

      {/* Cards Container */}
      <div className="relative flex h-full w-full items-center justify-center overflow-hidden sm:overflow-visible">
        <AnimatePresence initial={false}>
          {tutors.map((tutor, index) => {
            const position = getPosition(index, activeIndex, tutors.length);
            
            return (
              <motion.div
                key={tutor.id}
                variants={variants}
                initial="hidden"
                animate={position}
                transition={{ duration: 0.7, ease: [0.32, 0.72, 0, 1] }}
                className="absolute h-[370px] w-[min(82vw,280px)] cursor-pointer overflow-hidden rounded-[1.6rem] shadow-[0_24px_50px_rgba(0,0,0,0.45)] ring-1 ring-white/20 sm:h-[450px] sm:w-[320px] sm:rounded-[2rem] sm:shadow-[0_30px_60px_rgba(0,0,0,0.5)]"
                onClick={() => {
                  if (position === 'left') prev();
                  if (position === 'right') next();
                }}
              >
                {/* Image */}
                <img src={tutor.image} alt={tutor.name} loading="lazy" decoding="async" className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-700 hover:scale-105" />
                
                {/* Gradient Overlay for Text */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#021f12] via-black/20 to-transparent"></div>
                
                {/* Bottom Content */}
                <div className="absolute bottom-6 left-6 right-6 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full overflow-hidden border border-white/30 shrink-0 shadow-lg">
                    <img src={tutor.image} alt="avatar" className="w-full h-full object-cover"/>
                  </div>
                  <div>
                    <h4 className="text-white font-serif font-bold text-xl leading-tight drop-shadow-md">{tutor.name}</h4>
                    <p className="text-white/70 font-sans text-sm font-medium">{tutor.role}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>

      <button onClick={prev} aria-label="Previous tutor" className="absolute bottom-0 left-[calc(50%-76px)] z-50 grid h-11 w-11 place-items-center rounded-full border border-white/15 bg-white/10 text-white backdrop-blur-md transition hover:bg-white hover:text-emerald-900 sm:bottom-1/2 sm:left-4 lg:left-10"><ChevronLeft size={21}/></button>
      <button onClick={next} aria-label="Next tutor" className="absolute bottom-0 right-[calc(50%-76px)] z-50 grid h-11 w-11 place-items-center rounded-full border border-white/15 bg-white/10 text-white backdrop-blur-md transition hover:bg-white hover:text-emerald-900 sm:bottom-1/2 sm:right-4 lg:right-10"><ChevronRight size={21}/></button>
      <div className="absolute bottom-4 left-1/2 z-40 hidden -translate-x-1/2 gap-2 sm:flex">{tutors.map((tutor,index)=><button key={tutor.id} onClick={()=>setActiveIndex(index)} aria-label={`Show ${tutor.name}`} className={`h-1.5 rounded-full transition-all ${activeIndex===index?'w-7 bg-amber-400':'w-2 bg-white/35'}`}/>)}</div>

    </div>
  );
}

export default TutorsCarousel;
