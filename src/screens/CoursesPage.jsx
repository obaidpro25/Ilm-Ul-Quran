import { useMemo, useState } from 'react';
import { ArrowRight, BookOpen, Check, Search } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { courses } from '../data';

const filters = ['All', 'Beginner', 'Intermediate', 'Advanced', 'All levels'];
const fallbackImage = '/images/courses/tajweed-recitation.jpg';

function CourseCatalogCard({ course, index }) {
  return <motion.article
    initial={{ opacity: 0, y: 50, rotateX: 8 }}
    whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
    viewport={{ once: true, margin: '-60px' }}
    transition={{ delay: index * .07, duration: .6, type: 'spring', bounce: .18 }}
    className="glass-card group overflow-hidden rounded-[2rem] transition duration-500 hover:-translate-y-2 hover:shadow-[0_28px_70px_rgba(4,61,45,.15)]"
  >
    <div className={`relative h-52 overflow-hidden bg-gradient-to-br ${course.accent}`}>
      <img src={course.image || fallbackImage} alt="" loading="lazy" decoding="async" className="h-full w-full object-cover transition duration-700 group-hover:scale-110" />
      <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/90 via-emerald-950/10 to-transparent" />
      <span className="absolute bottom-5 left-5 rounded-full bg-white/15 px-3 py-1 text-xs font-bold uppercase tracking-wider text-white backdrop-blur-md ring-1 ring-white/25">{course.category}</span>
      <BookOpen className="absolute right-5 top-5 text-amber-300 drop-shadow" />
    </div>
    <div className="p-7">
      <p className="text-xs font-bold uppercase tracking-widest text-amber-700">{course.duration}</p>
      <h2 className="mt-2 text-2xl font-bold transition-colors group-hover:text-emerald-800">{course.title}</h2>
      <p className="mt-3 leading-7 text-slate-600">{course.description}</p>
      <ul className="mt-5 space-y-2">{course.syllabus.slice(0, 3).map(item => <li key={item} className="flex gap-2 text-sm text-slate-600"><Check size={17} className="mt-0.5 text-emerald-700" />{item}</li>)}</ul>
      <Link to="/contact" state={{ course: course.title }} className="mt-7 inline-flex items-center gap-2 font-bold text-emerald-800 hover:text-amber-700">Enquire now <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" /></Link>
    </div>
  </motion.article>;
}

export default function CoursesPage() {
  const [filter, setFilter] = useState('All');
  const [query, setQuery] = useState('');
  const visibleCourses = useMemo(() => courses.filter(course =>
    (filter === 'All' || course.category === filter) &&
    `${course.title} ${course.description}`.toLowerCase().includes(query.toLowerCase())
  ), [filter, query]);

  return <div className="pt-20">
    <section className="relative overflow-hidden bg-[#043d2d] py-16 text-white sm:py-20 lg:py-24">
      <div className="islamic-pattern absolute inset-0 opacity-10" />
      <div className="section-shell relative text-left lg:text-center"><span className="eyebrow !text-amber-300">A path for every learner</span><h1 className="mt-5 max-w-4xl text-4xl font-bold text-white sm:text-5xl md:text-6xl lg:mx-auto">Learn with clarity and purpose.</h1><p className="mt-5 max-w-2xl text-base leading-7 text-emerald-100/80 sm:text-lg sm:leading-8 lg:mx-auto">Structured one-to-one programs, live feedback and clear milestones—from your first Arabic letter to advanced recitation.</p></div>
    </section>
    <section className="section-shell py-12 sm:py-16 lg:py-20">
      <div className="mb-8 flex flex-col gap-4 rounded-2xl bg-white p-4 shadow-xl sm:mb-10 sm:rounded-3xl sm:p-5 lg:flex-row lg:items-center lg:justify-between"><div className="relative w-full lg:w-80"><Search className="absolute left-4 top-3.5 text-slate-400" size={20} /><input value={query} onChange={event => setQuery(event.target.value)} placeholder="Search courses…" className="w-full rounded-full border border-slate-200 py-3 pl-12 pr-4 outline-none focus:border-emerald-600" /></div><div className="flex max-w-full gap-2 overflow-x-auto pb-1 lg:flex-wrap lg:overflow-visible">{filters.map(item => <button key={item} onClick={() => setFilter(item)} className={`shrink-0 rounded-full px-4 py-2 text-sm font-bold transition ${filter === item ? 'bg-primary-dark text-white' : 'bg-slate-100 text-slate-600 hover:bg-emerald-50'}`}>{item}</button>)}</div></div>
      <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3 xl:gap-7">{visibleCourses.map((course, index) => <CourseCatalogCard key={course.title} course={course} index={index} />)}</div>
      {!visibleCourses.length && <p className="py-16 text-center text-slate-500">No courses match your search.</p>}
    </section>
  </div>;
}
