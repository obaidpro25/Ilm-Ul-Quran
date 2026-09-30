import { Award, Calendar, CheckCircle, Languages, ShieldCheck, Star } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { tutors } from '../data';

function TutorProfile({ tutor, index }) {
  return <motion.article
    initial={{ opacity: 0, y: 40, scale: .96 }}
    whileInView={{ opacity: 1, y: 0, scale: 1 }}
    viewport={{ once: true, margin: '-60px' }}
    transition={{ delay: index * .07, duration: .55 }}
    className="group overflow-hidden rounded-[1.6rem] border border-emerald-100 bg-[#fbfdf9] transition duration-500 hover:-translate-y-3 hover:shadow-[0_28px_70px_rgba(4,61,45,.16)] sm:rounded-[2rem]"
  >
    <div className="relative h-64 overflow-hidden bg-emerald-900 sm:h-72">
      <img src={tutor.image} alt={tutor.name} loading="lazy" decoding="async" className="h-full w-full object-cover object-top transition duration-700 group-hover:scale-105" />
      <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/75 via-transparent to-transparent" />
      <span className="absolute bottom-4 left-5 rounded-full bg-white/15 px-3 py-1 text-xs font-bold text-white backdrop-blur-md ring-1 ring-white/20">Available for trial</span>
    </div>
    <div className="p-5 sm:p-7">
      <h3 className="text-xl font-bold sm:text-2xl">{tutor.name}</h3>
      <p className="mt-1 text-sm font-semibold text-amber-700">{tutor.role}</p>
      <div className="mt-3 flex text-amber-500">{[1, 2, 3, 4, 5].map(number => <Star key={number} size={14} fill="currentColor" />)}</div>
      <div className="mt-5 flex flex-col gap-3 border-t border-slate-200 pt-5 text-sm text-slate-600 sm:mt-6 sm:flex-row sm:justify-between">
        <span className="flex gap-2"><Award size={18} />{tutor.experience}</span>
        <span className="flex gap-2"><Languages size={18} />{tutor.languages.join(' · ')}</span>
      </div>
    </div>
  </motion.article>;
}

export default function TutorsPage() {
  return <div className="pt-20">
    <section className="section-shell grid items-center gap-10 py-14 sm:py-20 lg:grid-cols-2 lg:gap-14 lg:py-28">
      <div><span className="eyebrow"><Award size={15} /> Carefully selected educators</span><h1 className="mt-5 text-4xl font-bold leading-[1.08] sm:text-5xl md:text-6xl">A teacher who understands <span className="text-emerald-700">your pace.</span></h1><p className="mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:mt-6 sm:text-lg sm:leading-8">Every teacher is screened for recitation, teaching ability, communication and child safety. Choose male or female tutors and learn in your preferred language.</p><div className="mt-7 flex flex-col gap-3 text-sm font-bold text-slate-700 sm:flex-row sm:flex-wrap sm:gap-5"><span className="flex gap-2"><ShieldCheck className="text-emerald-700" />Background checked</span><span className="flex gap-2"><CheckCircle className="text-emerald-700" />Demo evaluated</span></div></div>
      <div className="rounded-[2rem] bg-emerald-950 p-6 text-white shadow-2xl sm:p-9 lg:rounded-[3rem]"><p className="font-serif text-xl leading-8 text-emerald-50 sm:text-2xl sm:leading-10">“The best teacher is not only one who knows the subject, but one who helps a learner love the journey.”</p><div className="mt-7 grid grid-cols-3 gap-2 border-t border-white/10 pt-6 text-center sm:mt-8 sm:gap-3 sm:pt-7"><div><b className="text-xl text-amber-300 sm:text-2xl">500+</b><small className="block text-[10px] text-emerald-200/70 sm:text-xs">Tutors</small></div><div><b className="text-xl text-amber-300 sm:text-2xl">4.9</b><small className="block text-[10px] text-emerald-200/70 sm:text-xs">Rating</small></div><div><b className="text-xl text-amber-300 sm:text-2xl">24/7</b><small className="block text-[10px] text-emerald-200/70 sm:text-xs">Availability</small></div></div></div>
    </section>
    <section className="bg-white py-14 sm:py-20"><div className="section-shell"><div className="mb-9 text-left sm:mb-12 lg:text-center"><span className="eyebrow">Meet the team</span><h2 className="mt-3 text-3xl font-bold sm:text-4xl">Qualified. Patient. Encouraging.</h2></div><div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3 xl:gap-7">{tutors.map((tutor, index) => <TutorProfile key={tutor.name} tutor={tutor} index={index} />)}</div><div className="mt-10 sm:text-center"><Link to="/contact" className="primary-button w-full sm:w-auto"><Calendar size={19} />Find my tutor</Link></div></div></section>
  </div>;
}
