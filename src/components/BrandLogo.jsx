import { Link } from 'react-router-dom';

export default function BrandLogo({ light = false, compact = false }) {
  return <Link to="/" aria-label="Ilm-ul-Quran home" className="group flex items-center gap-3">
    <span className="relative grid h-14 w-14 shrink-0 place-items-center rounded-[1.1rem] bg-[radial-gradient(circle_at_45%_35%,#fff9df_0%,#f4d57b_36%,#075d45_70%,#023b2c_100%)] shadow-[0_12px_30px_rgba(4,61,45,.3),inset_0_1px_0_rgba(255,255,255,.7)] ring-1 ring-amber-300/70 transition duration-500 group-hover:-rotate-2 group-hover:scale-105 group-hover:shadow-[0_16px_38px_rgba(4,61,45,.4)]">
      <img src="/images/brand/ilm-ul-quran-emblem-v2.png" alt="" aria-hidden="true" width="384" height="384" className="h-[3.35rem] w-[3.35rem] object-contain drop-shadow-[0_5px_5px_rgba(2,44,34,.35)]" />
    </span>
    {!compact && <span className="min-w-0"><span className={`block whitespace-nowrap font-serif text-[1.08rem] font-black leading-none tracking-tight sm:text-[1.3rem] ${light ? 'text-white' : 'text-emerald-950'}`}>Ilm-ul-Quran <span className="ml-1 hidden font-serif text-[.92em] text-amber-600 min-[380px]:inline" lang="ur" dir="rtl">علمُ القرآن</span></span><span className={`mt-1 hidden text-[8px] font-extrabold uppercase tracking-[.22em] min-[360px]:block sm:text-[9px] ${light ? 'text-amber-300' : 'text-amber-700'}`}>Learn · Serve · Give</span></span>}
  </Link>;
}
