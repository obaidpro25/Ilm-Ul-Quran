import { ArrowLeft, BadgeCheck, BookOpen, Heart, ShieldCheck, Sparkles, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const policies = {
  privacy: { title: 'Privacy Policy', intro: 'We collect only the information needed to arrange lessons, support learners and improve the academy experience.', items: ['Contact and learner details are used to respond to enquiries and deliver lessons.', 'Lesson notes and progress records are accessible only to authorised staff and tutors.', 'We do not sell personal data. You may request access, correction or deletion by contacting us.'] },
  terms: { title: 'Terms of Service', intro: 'These terms keep learning expectations clear, fair and respectful for families and tutors.', items: ['Trial lessons are subject to tutor availability and are limited to one per learner.', 'Paid plans, scheduling, rescheduling and cancellation terms are confirmed before enrollment.', 'Respectful conduct is required in every class. Academy materials are for personal learning use.'] },
};

function NotFound() {
  return <main className="grid min-h-[75vh] place-items-center px-4 pt-20 text-left sm:text-center"><div><span className="text-6xl font-black text-emerald-800 sm:text-7xl">404</span><h1 className="mt-4 text-3xl font-bold sm:text-4xl">This page has wandered.</h1><Link className="primary-button mt-7 w-full sm:w-auto" to="/"><ArrowLeft size={18} />Back home</Link></div></main>;
}

function About() {
  const values = [[BookOpen, 'Authentic learning', 'A structured curriculum grounded in careful recitation and understanding.'], [Heart, 'Taught with ihsan', 'Patient, encouraging instruction that protects every learner’s confidence.'], [Users, 'Open to everyone', 'Support for children, adults, reverts and advanced learners worldwide.']];
  return <main className="pt-20">
    <section className="section-shell py-14 sm:py-20 lg:py-24">
      <div className="max-w-5xl lg:mx-auto lg:text-center"><span className="eyebrow">Our purpose</span><h1 className="mt-5 text-4xl font-bold leading-[1.08] sm:text-5xl md:text-6xl">Making excellent Quran education feel personal and accessible.</h1><p className="mt-6 max-w-3xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8 lg:mx-auto">Ilm-ul-Quran connects learners with patient, qualified teachers through thoughtful one-to-one lessons. We combine traditional care for recitation with clear progress, flexible scheduling and modern teaching tools.</p></div>
      <div className="mt-10 grid gap-5 sm:mt-14 sm:grid-cols-2 lg:grid-cols-3">{values.map(([Icon, title, description]) => <article key={title} className="glass-card rounded-[1.6rem] p-6 text-left sm:rounded-3xl sm:p-8"><Icon className="text-amber-600" size={30} /><h2 className="mt-5 text-xl font-bold sm:text-2xl">{title}</h2><p className="mt-3 leading-7 text-slate-600">{description}</p></article>)}</div>
    </section>
    <section className="relative overflow-hidden bg-emerald-950 py-14 text-white sm:py-20">
      <div className="islamic-pattern absolute inset-0 opacity-[.06]" />
      <div className="section-shell relative grid items-center gap-10 lg:grid-cols-[.72fr_1.28fr] lg:gap-16">
        <div className="relative mx-auto w-full max-w-md"><div className="absolute -inset-3 rotate-3 rounded-[2.2rem] border border-amber-300/25" /><img src="/images/tutors/muhammad-zahid-owner-v3.jpg" alt="Muhammad Zahid Aslam, founder of Ilm-ul-Quran" loading="lazy" decoding="async" className="relative aspect-[4/5] w-full rounded-[2rem] object-cover object-top shadow-2xl ring-1 ring-white/15" /></div>
        <div><span className="eyebrow !text-amber-300"><Sparkles size={15} /> Founder & academy owner</span><h2 className="mt-5 text-3xl font-bold text-white sm:text-4xl md:text-5xl">Muhammad Zahid Alam</h2><p className="mt-3 font-serif text-3xl text-amber-300" lang="ur" dir="rtl">علمُ القرآن</p><p className="mt-6 max-w-2xl text-base leading-8 text-emerald-50/75 sm:text-lg">His vision is to make careful Quran learning accessible to families worldwide through trusted teachers, personal guidance and a respectful digital experience.</p><div className="mt-7 grid gap-3 sm:grid-cols-2"><span className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[.07] p-4 font-bold"><BadgeCheck className="text-amber-300" /> Learning quality oversight</span><span className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[.07] p-4 font-bold"><ShieldCheck className="text-amber-300" /> Student-first standards</span></div></div>
      </div>
    </section>
  </main>;
}

function Policy({ content }) {
  return <main className="pt-20"><section className="section-shell max-w-4xl py-14 sm:py-20 lg:py-24"><ShieldCheck size={38} className="text-emerald-700 sm:h-11 sm:w-11" /><h1 className="mt-5 text-4xl font-bold sm:text-5xl">{content.title}</h1><p className="mt-5 text-lg leading-8 text-slate-600 sm:mt-6 sm:text-xl">{content.intro}</p><div className="mt-8 space-y-4 sm:mt-10 sm:space-y-5">{content.items.map(item => <p key={item} className="rounded-2xl border border-emerald-100 bg-white p-5 leading-7 text-slate-600 sm:p-6">{item}</p>)}</div><p className="mt-8 break-words text-sm text-slate-500">Last updated: September 2026 · Questions? Muhammadzahidalam@gmail.com</p></section></main>;
}

export default function InfoPage({ type }) {
  if (type === 'not-found') return <NotFound />;
  if (type === 'about') return <About />;
  return <Policy content={policies[type]} />;
}
