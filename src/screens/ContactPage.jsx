import { useState } from 'react';
import { CheckCircle, Clock, Mail, MessageCircle, Send } from 'lucide-react';
import { useLocation } from 'react-router-dom';
import { courses } from '../data';

const fieldClass = 'mt-2 w-full rounded-xl border border-slate-200 bg-white p-3.5 font-normal outline-none transition focus:border-emerald-600 focus:ring-4 focus:ring-emerald-100';

export default function ContactPage() {
  const { state } = useLocation();
  const [sent, setSent] = useState(false);
  const submit = event => { event.preventDefault(); setSent(true); };

  return <div className="pt-20">
    <section className="section-shell grid gap-10 py-14 sm:py-20 lg:grid-cols-[.8fr_1.2fr] lg:items-start lg:gap-14 lg:py-28 xl:gap-20">
      <div>
        <span className="eyebrow">Free trial or regular classes</span>
        <h1 className="mt-4 text-4xl font-bold leading-[1.08] sm:text-5xl">Let’s find your best way to learn.</h1>
        <p className="mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:mt-6 sm:text-lg sm:leading-8">Tell us about your goals and availability. Our learning advisor will recommend a course and match you with the right tutor.</p>
        <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:mt-10 lg:grid-cols-1">
          <a href="https://wa.me/923125186414" target="_blank" rel="noreferrer" className="flex gap-4 rounded-2xl border border-emerald-100 bg-white p-4 shadow-sm transition hover:-translate-y-1 hover:shadow-lg sm:p-5"><MessageCircle className="shrink-0 text-emerald-700" /><div><b>WhatsApp us</b><p className="text-sm text-slate-500">+92 3125186414</p></div></a>
          <a href="mailto:Muhammadzahidalam@gmail.com" className="flex min-w-0 gap-4 rounded-2xl border border-emerald-100 bg-white p-4 shadow-sm transition hover:-translate-y-1 hover:shadow-lg sm:p-5"><Mail className="shrink-0 text-emerald-700" /><div className="min-w-0"><b>Email support</b><p className="break-all text-sm text-slate-500">Muhammadzahidalam@gmail.com</p></div></a>
          <div className="flex gap-4 rounded-2xl border border-emerald-100 bg-white p-4 shadow-sm sm:col-span-2 sm:p-5 lg:col-span-1"><Clock className="shrink-0 text-emerald-700" /><div><b>Global availability</b><p className="text-sm text-slate-500">Lessons available 24 hours, 7 days</p></div></div>
        </div>
      </div>
      <div className="glass-card rounded-[1.6rem] p-5 sm:rounded-[2.5rem] sm:p-8 lg:p-10">
        {sent ? <div className="grid min-h-[420px] place-items-center text-center"><div><CheckCircle size={58} className="mx-auto text-emerald-700" /><h2 className="mt-5 text-3xl font-bold">JazakAllahu khayran!</h2><p className="mt-3 max-w-md text-slate-600">Your request has been received. A learning advisor will contact you shortly to arrange the next step.</p><button onClick={() => setSent(false)} className="primary-button mt-7 w-full sm:w-auto">Send another request</button></div></div> :
        <form onSubmit={submit}>
          <h2 className="text-2xl font-bold sm:text-3xl">Start your learning request</h2><p className="mt-2 text-slate-500">Choose a free trial or regular classes. No payment details required.</p>
          <div className="mt-7 grid gap-5 sm:grid-cols-2">
            <label className="text-sm font-bold text-slate-700">Full name<input required className={fieldClass} placeholder="Your name" /></label>
            <label className="text-sm font-bold text-slate-700">Email address<input required type="email" className={fieldClass} placeholder="you@example.com" /></label>
            <label className="text-sm font-bold text-slate-700">Phone / WhatsApp<input required className={fieldClass} placeholder="Include country code" /></label>
            <label className="text-sm font-bold text-slate-700">Class option<select defaultValue={state?.intention || 'Free Trial'} className={fieldClass}><option>Free Trial</option><option>Regular Classes</option></select></label>
            <label className="text-sm font-bold text-slate-700">Interested course<select defaultValue={state?.course || ''} className={fieldClass}><option value="">Help me choose</option>{courses.map(course => <option key={course.title}>{course.title}</option>)}</select></label>
            <label className="text-sm font-bold text-slate-700">Preferred fee<input className={fieldClass} defaultValue={state?.fee || ''} placeholder="e.g. 5,000 PKR / month" /></label>
            <label className="text-sm font-bold text-slate-700 sm:col-span-2">Learning goals<textarea required rows="4" className={`${fieldClass} resize-none`} placeholder="Tell us the learner’s age, current level and preferred lesson times…" /></label>
          </div>
          <button className="primary-button mt-7 w-full" type="submit">Send class request <Send size={18} /></button><p className="mt-4 text-center text-xs leading-5 text-slate-400">By submitting, you agree to be contacted about your learning request.</p>
        </form>}
      </div>
    </section>
  </div>;
}
