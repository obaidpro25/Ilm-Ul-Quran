import React, { useState } from 'react';
import { Clock, CheckCircle, PencilLine } from 'lucide-react';
import { cn } from '../utils/cn';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const PricingCard = ({ plan, price, duration, features, isPopular, className, billing = 'month' }) => {
  const [chosenFee, setChosenFee] = useState(price);

  return <motion.div initial={{opacity:0,y:45,scale:.96}} whileInView={{opacity:1,y:0,scale:1}} viewport={{once:true,margin:'-60px'}} transition={{duration:.55,type:'spring',bounce:.18}} whileHover={{y:-9}} className={cn(
    "relative flex h-full min-h-0 flex-col overflow-visible rounded-[1.6rem] bg-white/90 p-6 backdrop-blur-md transition-shadow duration-500 sm:rounded-[2rem] sm:p-8",
    isPopular ? "border-2 border-accent shadow-[0_24px_60px_rgba(245,158,11,.16)] z-10" : "border border-emerald-100 shadow-[0_18px_50px_rgba(6,78,59,.08)] hover:shadow-[0_28px_65px_rgba(6,78,59,.14)]"
    , className
  )}>
    {isPopular && (
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-accent text-white px-5 py-1.5 rounded-full text-sm font-bold shadow-lg whitespace-nowrap">
        Most Popular
      </div>
    )}
    <h3 className="mb-2 min-h-8 font-serif text-2xl font-bold text-slate-900">{plan}</h3>
    <label className="mb-4 block rounded-2xl border-2 border-amber-400 bg-gradient-to-br from-amber-50 to-emerald-50 p-4 shadow-[0_12px_30px_rgba(217,154,6,.13)] ring-4 ring-amber-100/70 transition focus-within:border-emerald-700 focus-within:ring-emerald-100">
      <div className="flex min-h-9 items-start justify-between gap-3">
        <span className="flex min-w-0 items-center gap-2 text-[10px] font-extrabold uppercase leading-4 tracking-[.12em] text-emerald-900"><PencilLine size={14} className="shrink-0" />Choose Your Hadiyah <span className="whitespace-nowrap text-amber-700" lang="ur" dir="rtl">(ہدیہ)</span></span>
        <span className="choice-badge min-w-[78px] shrink-0 whitespace-nowrap rounded-full px-2.5 py-1.5 text-center text-[9px] font-black uppercase tracking-[.08em]">Your Choice</span>
      </div>
      <span className="mt-2 flex items-center gap-2">
        <span className="text-sm font-black text-emerald-900">PKR</span>
        <input aria-label={`${plan} Hadiyah in PKR`} min="0" step="500" type="number" value={chosenFee} onChange={event => setChosenFee(event.target.value)} className="min-w-0 flex-1 border-0 bg-transparent text-4xl font-black text-primary-dark outline-none" />
        <span className="text-xs font-bold text-slate-400">/{billing}</span>
      </span>
    </label>
    <div className="mb-3 rounded-xl bg-amber-50 px-3 py-2 text-xs font-semibold leading-5 text-amber-900">
      Choose a comfortable Hadiyah amount; the final schedule is confirmed with our learning advisor.
    </div>
    <p className="mb-6 flex min-h-10 items-start gap-2 text-sm font-medium text-accent-dark">
      <Clock size={16} /> {duration}
    </p>
    
    <div className="mb-8 flex-grow space-y-4 border-t border-slate-100 pt-6">
      {features.map((feature, idx) => (
        <div key={idx} className="flex items-start gap-3 text-slate-600">
          <CheckCircle size={18} className="text-primary-dark shrink-0 mt-0.5" />
          <span className="text-sm leading-relaxed">{feature}</span>
        </div>
      ))}
    </div>
    
    <Link to="/contact" state={{plan, fee: `${chosenFee} PKR / ${billing}`, intention: 'Regular Classes'}} className={cn(
      "mt-auto flex w-full items-center justify-center rounded-xl py-3.5 text-center font-bold shadow-md transition-all duration-300",
      isPopular ? "bg-primary-dark text-white hover:bg-primary hover:shadow-lg" : "bg-slate-50 text-primary-dark border border-primary-dark/20 hover:bg-base"
    )}>
      Continue with this Hadiyah
    </Link>
  </motion.div>
};

export default PricingCard;
