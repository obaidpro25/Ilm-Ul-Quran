import React, { useState } from 'react';
import { Star, BookOpen, Clock, Monitor, Users, Calendar, Shield, Quote, Globe, ArrowRight, Sparkles, GraduationCap, TrendingUp, HeartHandshake, BadgeCheck, HandCoins, Wheat, Beef, Gift } from 'lucide-react';
import { motion } from 'framer-motion';
import CourseCard from '../components/CourseCard';
import TutorsCarousel from '../components/TutorsCarousel';
import PricingCard from '../components/PricingCard';
import { Link } from 'react-router-dom';
import heroImage from '../assets/quran-learning-hero-optimized.jpg';

const HomeScreen = () => {
  const [isAnnual, setIsAnnual] = useState(false);

  return (
    <div className="flex w-full flex-col overflow-hidden">
      {/* 1. Hero Section - FIXED LAYOUT */}
      <section className="relative order-1 mx-auto flex max-w-[90rem] items-center px-4 pb-12 pt-28 sm:px-6 sm:pb-16 sm:pt-32 lg:min-h-0 lg:px-10 lg:pb-16 lg:pt-36 xl:px-16">
        <div className="absolute left-0 top-20 h-64 w-64 rounded-full bg-primary-dark/5 blur-3xl sm:h-[30rem] sm:w-[30rem]"></div>
        
        <div className="relative z-10 grid w-full grid-cols-1 items-center gap-10 lg:grid-cols-[.92fr_1.08fr] lg:gap-14 xl:gap-20">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="mb-6 inline-flex max-w-full items-center gap-2 rounded-full border border-accent/20 bg-accent/10 px-3 py-1.5 text-xs font-bold text-accent-dark backdrop-blur-sm sm:mb-8 sm:px-4 sm:text-sm"
            >
              <Star size={14} className="fill-accent text-accent" />
              Trusted by 10,000+ Students Globally
            </motion.div>
            
            <h1 className="mb-6 text-[clamp(2.6rem,8vw,4.6rem)] font-bold leading-[1.06] tracking-[-.035em] text-slate-900">
              Master the Holy Quran from <span className="text-primary-dark relative inline-block mt-2">
                Your Home
                <motion.svg 
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ delay: 0.8, duration: 1 }}
                  className="absolute w-full h-3 -bottom-2 left-0 text-accent/60" 
                  viewBox="0 0 100 10" preserveAspectRatio="none"
                >
                  <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="4" fill="transparent"/>
                </motion.svg>
              </span>
            </h1>
            
            <p className="mb-8 max-w-2xl text-base font-medium leading-7 text-slate-600 sm:mb-10 sm:text-lg sm:leading-8">
              Personalized 1-on-1 online classes with certified male and female tutors. Start your spiritual journey with flexible schedules tailored for kids and adults.
            </p>
            
            <div className="flex flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:gap-4">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto"
              ><Link to="/contact" state={{ intention: 'Free Trial' }} className="w-full bg-primary-dark text-white px-8 py-4 rounded-full font-bold shadow-[0_10px_20px_rgb(6,78,59,0.3)] hover:bg-primary transition-all duration-300 text-lg flex items-center justify-center gap-2"><span className="h-2.5 w-2.5 animate-pulse rounded-full bg-amber-300" />Free Trial Class <ArrowRight size={20} /></Link></motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto"
              >
                <Link to="/contact" state={{ intention: 'Regular Classes' }} className="flex w-full items-center justify-center gap-2 rounded-full border-2 border-primary-dark px-8 py-4 text-lg font-bold text-primary-dark transition-all duration-300 hover:bg-primary-dark hover:text-white"><span className="h-2.5 w-2.5 animate-pulse rounded-full bg-amber-500" />Regular Classes</Link>
              </motion.div>
            </div>
          </motion.div>

          {/* Fixed Single Stunning Visual Layout to prevent cropping/blank issues */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative block h-[340px] w-full sm:h-[430px] lg:h-[500px]"
          >
            <div className="absolute inset-0 overflow-hidden rounded-[2rem] border-4 border-white shadow-2xl sm:rounded-[3rem]">
              {/* Reliable authentic Islamic Image */}
              <img src={heroImage} alt="Quran and tablet prepared for an online learning session" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary-dark/40 to-transparent"></div>
            </div>

            <motion.div 
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute left-3 top-4 flex max-w-[calc(100%-1.5rem)] items-center gap-4 rounded-[1.5rem] border border-amber-200/80 bg-white/95 p-3.5 shadow-[0_22px_50px_rgba(4,61,45,.22)] backdrop-blur-xl sm:p-4 lg:-left-10 lg:top-7 lg:p-5"
            >
              <img src="/images/tutors/muhammad-zahid-owner-v3.jpg" alt="Muhammad Zahid Alam, founder" className="h-20 w-20 shrink-0 rounded-2xl object-cover object-top shadow-lg ring-2 ring-amber-400/60 sm:h-24 sm:w-24" />
              <div>
                <p className="text-[10px] font-black uppercase tracking-[.18em] text-amber-700 sm:text-xs">Founder &amp; Owner</p>
                <p className="mt-1 text-base font-black leading-tight text-slate-900 sm:text-lg">Muhammad Zahid Alam</p>
                <p className="mt-1 text-sm font-bold text-emerald-700" lang="ur" dir="rtl">علمُ القرآن</p>
              </div>
            </motion.div>

            <motion.div 
              animate={{ y: [0, 15, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute bottom-4 right-3 hidden items-center gap-3 rounded-2xl border border-slate-100 bg-white/95 px-4 py-3 shadow-xl backdrop-blur-xl sm:flex lg:-right-6 lg:bottom-10 lg:px-6 lg:py-4"
            >
              <div className="bg-primary-dark/10 p-3 rounded-full text-primary-dark"><Globe size={24} /></div>
              <div>
                <p className="text-xs text-slate-400 font-bold uppercase tracking-wider">Global Reach</p>
                <p className="text-base font-black text-slate-900">Students in 50+ Countries</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 2. Stats Section (New Feature added for authority) */}
      <section className="relative z-20 order-2 mx-auto -mt-3 mb-12 max-w-6xl px-4 sm:-mt-5 sm:px-6 lg:-mt-8 lg:mb-14 lg:px-8">
        <div className="grid grid-cols-2 overflow-hidden rounded-[2rem] bg-primary-dark p-3 shadow-2xl sm:p-5 md:grid-cols-4 lg:rounded-[2.5rem] lg:p-8">
          {[
            { number: "10k+", label: "Active Students" },
            { number: "500+", label: "Certified Tutors" },
            { number: "50+", label: "Countries" },
            { number: "4.9/5", label: "Student Rating" }
          ].map((stat, idx) => (
            <div key={idx} className={`px-2 py-5 text-left sm:px-5 md:text-center ${idx % 2 === 0 ? 'border-r border-white/10 md:border-l' : ''} ${idx < 2 ? 'border-b border-white/10 md:border-b-0' : ''}`}>
              <h3 className="mb-1 text-2xl font-bold text-accent sm:text-3xl lg:text-5xl">{stat.number}</h3>
              <p className="text-[10px] font-medium uppercase tracking-[.12em] text-primary-light/80 sm:text-xs lg:text-sm lg:tracking-widest">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 3. How It Works (New Easy Feature added to explain process) */}
      <section id="how-it-works" className="relative order-5 scroll-mt-20 overflow-hidden bg-gradient-to-b from-[#ecf5ef] via-[#f7f4eb] to-[#efe8d8] py-14 sm:py-16 lg:py-20">
        <div className="absolute -left-28 top-24 h-72 w-72 rounded-full bg-emerald-500/10 blur-3xl" />
        <div className="absolute -right-24 bottom-10 h-80 w-80 rounded-full bg-amber-400/15 blur-3xl" />
        <div className="islamic-pattern absolute inset-0 opacity-[.025]" />
        <div className="section-shell">
          <div className="mb-12 text-left sm:mb-16 lg:mb-20 lg:text-center">
            <h2 className="mb-4 text-3xl font-bold text-slate-900 sm:text-4xl md:text-5xl">How It Works</h2>
            <div className="mb-5 h-1.5 w-20 rounded-full bg-accent lg:mx-auto lg:mb-8 lg:w-24"></div>
            <p className="max-w-2xl text-base leading-7 text-slate-600 sm:text-lg lg:mx-auto lg:text-xl">Start your learning journey in three simple steps.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10 relative">
            <div className="hidden md:block absolute top-20 left-[16%] right-[16%] border-t-2 border-dashed border-emerald-700/20"></div>
            
            {[
              { step: 1, icon: Calendar, title: "Book a Free Trial", desc: "Choose a time that works for you and meet your tutor for an initial assessment.", to: '/contact', state: { intention: 'Free Trial' } },
              { step: 2, icon: Monitor, title: "Customized Plan", desc: "Get a personalized learning curriculum based on your current level and goals.", to: '/courses' },
              { step: 3, icon: BookOpen, title: "Start Learning", desc: "Attend interactive 1-on-1 sessions and track your progress daily.", to: '/contact', state: { intention: 'Regular Classes' } }
            ].map((item, idx) => (
              <Link key={item.step} to={item.to} state={item.state} className="block h-full">
              <motion.div 
                initial={{ opacity: 0, y: 60, scale: .94, rotateY: idx === 1 ? 0 : idx === 0 ? -5 : 5 }}
                whileInView={{ opacity: 1, y: 0, scale: 1, rotateY: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ delay: idx * 0.13, duration: .65, type: 'spring', bounce: .18 }}
                whileHover={{ y: -12, scale: 1.015 }}
                className="group flex min-h-0 flex-col items-start overflow-hidden rounded-[1.6rem] border border-emerald-900/10 bg-white/90 p-6 text-left shadow-[0_18px_50px_rgba(6,78,59,.10)] backdrop-blur-xl transition-shadow duration-500 hover:border-amber-400/50 hover:shadow-[0_30px_70px_rgba(6,78,59,.18)] sm:min-h-[340px] sm:items-center sm:rounded-[2rem] sm:p-8 sm:pt-11 sm:text-center lg:min-h-[360px] lg:p-9 lg:pt-12"
              >
                <div className="absolute right-5 top-4 font-serif text-6xl font-black text-emerald-950/[.045]">0{item.step}</div>
                <div className="relative mb-7 grid h-20 w-20 place-items-center rounded-[1.6rem] bg-gradient-to-br from-emerald-50 to-emerald-100 text-emerald-800 ring-1 ring-emerald-700/10 transition-all duration-500 group-hover:-rotate-3 group-hover:bg-emerald-800 group-hover:text-white group-hover:shadow-[0_14px_35px_rgba(6,78,59,.3)]">
                  <item.icon size={34} strokeWidth={1.6} />
                  <span className="absolute -right-2 -top-2 grid h-8 w-8 place-items-center rounded-full bg-amber-500 text-sm font-black text-white shadow-lg ring-4 ring-white">{item.step}</span>
                </div>
                <h3 className="mb-4 text-2xl font-bold text-slate-900">{item.title}</h3>
                <p className="max-w-sm font-medium leading-7 text-slate-600 sm:max-w-xs">{item.desc}</p>
                <div className="mt-auto pt-7 text-xs font-extrabold uppercase tracking-[.2em] text-emerald-700 opacity-0 transition-all duration-300 group-hover:translate-y-[-4px] group-hover:opacity-100">Step {item.step}</div>
              </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Features / Why Choose Us */}
      <section className="relative order-6 bg-white py-14 sm:py-16 lg:py-20">
        <div className="section-shell">
          <div className="mb-10 text-left sm:mb-14 lg:text-center">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 sm:text-4xl md:text-5xl">Why Choose Our Academy?</h2>
            <div className="h-1.5 w-20 rounded-full bg-accent lg:mx-auto lg:w-24"></div>
          </div>
          
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-7">
            {[
              { icon: Monitor, title: 'Interactive Whiteboard', desc: 'State-of-the-art virtual classrooms with digital tools for perfect learning.', to: '/courses' },
              { icon: Users, title: '1-on-1 Sessions', desc: '100% personalized attention. Learn at your own pace without distractions.', to: '/tutors' },
              { icon: Clock, title: 'Flexible Schedule', desc: 'Choose your own timings. We have tutors available 24/7 across all timezones.', to: '/contact' },
              { icon: Shield, title: 'Safe for Kids', desc: 'Strictly monitored environment with specialized female tutors for kids and sisters.', to: '/tutors' }
            ].map((feature, idx) => (
              <Link key={feature.title} to={feature.to} className="block h-full">
              <motion.div 
                initial={{opacity: 0, y: 20}} 
                whileInView={{opacity: 1, y: 0}} 
                viewport={{once: true}} 
                transition={{delay: idx * 0.15}} 
                className="group rounded-[1.6rem] border border-slate-100 bg-slate-50 p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl sm:rounded-[2rem] sm:p-8"
              >
                <div className="w-16 h-16 bg-primary-light rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary-dark group-hover:text-white transition-colors duration-300">
                  <feature.icon className="text-primary-dark group-hover:text-white transition-colors" size={32} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                <p className="text-slate-600 leading-relaxed font-medium">{feature.desc}</p>
              </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Learning outcomes / benefits */}
      <section className="relative order-7 overflow-hidden bg-[#f5f1e8] py-14 sm:py-16 lg:py-20">
        <div className="absolute -right-32 top-0 h-96 w-96 rounded-full bg-amber-300/20 blur-3xl" />
        <div className="section-shell relative grid items-center gap-10 lg:grid-cols-[.85fr_1.15fr] lg:gap-14">
          <motion.div initial={{opacity:0,x:-35}} whileInView={{opacity:1,x:0}} viewport={{once:true}}>
            <span className="eyebrow"><Sparkles size={15}/> More than online classes</span>
            <h2 className="mt-4 text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">A learning system built for real progress.</h2>
            <p className="mt-6 text-lg leading-8 text-slate-600">Clear goals, a caring teacher and consistent feedback make every lesson meaningful. Parents and adult learners always know what was learned and what comes next.</p>
            <Link to="/courses" className="primary-button mt-8">Explore learning paths <ArrowRight size={18}/></Link>
          </motion.div>
          <div className="grid gap-4 sm:grid-cols-2 sm:gap-5">
            {[
              [GraduationCap,'Personal learning plan','A level-based roadmap designed around the learner’s goals and pace.','01'],
              [TrendingUp,'Visible progress','Lesson notes, milestones and regular reports keep growth easy to understand.','02'],
              [HeartHandshake,'A tutor who fits','Thoughtful matching by age, language, learning style and availability.','03'],
              [BadgeCheck,'Skills that last','Strong pronunciation, independent reading and sustainable revision habits.','04']
            ].map(([Icon,title,desc,num],i)=><motion.article key={title} initial={{opacity:0,y:35,scale:.96}} whileInView={{opacity:1,y:0,scale:1}} viewport={{once:true,margin:'-40px'}} transition={{delay:i*.09,duration:.55}} whileHover={{y:-8}} className="group relative overflow-hidden rounded-[2rem] border border-white bg-white/85 p-7 shadow-[0_18px_50px_rgba(6,78,59,.08)] backdrop-blur-xl"><span className="absolute right-5 top-4 font-serif text-5xl font-black text-emerald-900/[.05]">{num}</span><div className="grid h-12 w-12 place-items-center rounded-2xl bg-emerald-50 text-emerald-800 transition-colors group-hover:bg-emerald-800 group-hover:text-white"><Icon size={24}/></div><h3 className="mt-5 text-xl font-bold">{title}</h3><p className="mt-3 text-sm leading-6 text-slate-600">{desc}</p></motion.article>)}
          </div>
        </div>
      </section>

      {/* Islamic giving preview */}
      <section className="relative order-10 overflow-hidden bg-emerald-950 py-14 text-white sm:py-16 lg:py-20">
        <div className="islamic-pattern absolute inset-0 opacity-[.06]" />
        <div className="absolute -right-28 -top-32 h-[30rem] w-[30rem] rounded-full bg-amber-300/10 blur-3xl" />
        <div className="section-shell relative grid items-center gap-10 lg:grid-cols-[.82fr_1.18fr] lg:gap-16">
          <motion.div initial={{ opacity: 0, x: -32 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <span className="eyebrow !text-amber-300"><HeartHandshake size={15} /> Knowledge in action</span>
            <h2 className="mt-5 text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl">Learn with knowledge. Give with purpose.</h2>
            <p className="mt-5 max-w-xl text-base leading-7 text-emerald-100/75 sm:text-lg sm:leading-8">Our structured giving centre helps you choose the right fund, share your intention and request verified fulfilment details before sending a donation.</p>
            <Link to="/charity" className="mt-8 inline-flex items-center gap-2 rounded-full bg-amber-400 px-6 py-3.5 font-extrabold text-emerald-950 shadow-[0_14px_35px_rgba(245,158,11,.22)] transition hover:-translate-y-1 hover:bg-amber-300">Explore Islamic giving <ArrowRight size={18} /></Link>
          </motion.div>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              [HandCoins, 'Zakat', 'Restricted support for verified eligible recipients.', 'zakat'],
              [Wheat, 'Fitrana', 'Ramadan food support intended before the Eid prayer.', 'fitrana'],
              [HeartHandshake, 'Sadaqah', 'Voluntary giving for relief, food and education.', 'sadaqah'],
              [Beef, 'Qurbani', 'Choose an animal share and preferred country.', 'qurbani'],
              [Gift, 'Hadiyah', 'Offer a voluntary gift for teachers or learning services.', 'hadiyah']
            ].map(([Icon, title, description, fund], index) => <Link key={title} to="/charity" state={{ fund, target: 'payment-section' }} aria-label={`Open ${title} payment details`}><motion.article initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * .08 }} whileHover={{ y: -7 }} className="group h-full rounded-[1.5rem] border border-white/10 bg-white/[.075] p-5 backdrop-blur-xl transition-colors hover:bg-white/[.12] sm:p-6"><div className="grid h-12 w-12 place-items-center rounded-2xl bg-amber-300 text-emerald-950"><Icon size={24} /></div><h3 className="mt-5 flex items-center gap-2 text-xl font-bold text-white">{title}<ArrowRight size={17} className="transition-transform group-hover:translate-x-1" /></h3><p className="mt-2 text-sm leading-6 text-emerald-100/65">{description}</p></motion.article></Link>)}
          </div>
        </div>
      </section>

      {/* 5. Courses Section - FIXED IMAGES (No Coffee!) */}
      <section className="relative order-3 bg-slate-50 py-14 sm:py-16 lg:py-20">
        <div className="section-shell">
          <div className="mb-10 text-left sm:mb-14 lg:mb-16 lg:text-center">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 sm:text-4xl md:text-5xl">Our Featured Courses</h2>
            <div className="mb-5 h-1.5 w-20 rounded-full bg-accent lg:mx-auto lg:mb-8 lg:w-24"></div>
            <p className="max-w-2xl text-base leading-7 text-slate-600 sm:text-lg lg:mx-auto lg:text-xl">Choose a clear learning path, then open any course to explore its curriculum.</p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8 xl:gap-10">
            <CourseCard 
              index={1}
              title="Noorani Qaida & Basics"
              category="Beginner"
              duration="3 Months"
              image="/images/courses/qaida-foundations.jpg"
              description="The foundational course designed for beginners and kids to learn the Arabic alphabet and basic pronunciation rules. Master the articulation points (Makharij) perfectly."
              syllabus={["Arabic Alphabets & Articulation", "Connecting Letters Perfectly", "Vowels (Harakat) & Tanween", "Basic Tajweed Rules Foundation"]}
            />
            <CourseCard 
              index={2}
              title="Quran Reading with Tajweed"
              category="Intermediate"
              duration="6 Months"
              image="/images/courses/tajweed-recitation.jpg"
              description="Learn to recite the Holy Quran beautifully with proper pronunciation, intonation, and rhythm according to traditional Tajweed rules taught by certified scholars."
              syllabus={["Advanced Tajweed Rules", "Makharij & Sifat in Depth", "Waqf (Stopping) Rules", "Fluency & Melody Practice"]}
            />
            <CourseCard 
              index={3}
              title="Hifz-e-Quran (Memorization)"
              category="Advanced"
              duration="Custom Pace"
              image="/images/courses/hifz-memorisation.jpg"
              description="A structured memorization program tailored to your pace, complete with daily revision strategies, retention techniques, and motivation to complete your Hifz journey."
              syllabus={["Daily New Lesson (Sabaq)", "Recent Revision (Sabqi)", "Old Revision (Manzil)", "Retention & Memory Techniques"]}
            />
          </div>
          <div className="mt-12 text-center"><Link to="/courses" className="inline-flex items-center gap-2 font-extrabold text-emerald-800 transition hover:text-amber-700">View all learning paths <ArrowRight size={19}/></Link></div>
        </div>
      </section>

      {/* Tutors Section - Ultra Premium Carousel */}
      <section className="relative order-8 overflow-hidden bg-[#042817] py-14 sm:py-16 lg:py-20">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#ffffff 1.5px, transparent 1.5px)', backgroundSize: '24px 24px' }}></div>
        <div className="section-shell relative z-10">
          <div className="mb-8 text-left sm:mb-12 lg:mb-16 lg:text-center">
            <h2 className="mb-5 text-3xl font-bold text-white sm:text-4xl md:text-5xl">Learn From The Best</h2>
            <div className="mb-5 h-1.5 w-20 rounded-full bg-accent lg:mx-auto lg:mb-8 lg:w-24"></div>
            <p className="max-w-2xl text-base leading-7 text-emerald-100/70 sm:text-lg lg:mx-auto lg:text-xl">
              Our expert male and female tutors are rigorously screened, highly qualified, and hold Ijazah in Quranic recitation.
            </p>
          </div>
          <div className="mt-10">
            <TutorsCarousel />
          </div>
        </div>
      </section>

      {/* Pricing Section with New Monthly/Annual Toggle Feature */}
      <section className="relative order-4 overflow-hidden bg-gradient-to-b from-white to-emerald-50/60 py-14 sm:py-16 lg:py-20">
        <div className="section-shell">
          <div className="mb-10 text-left lg:mb-12 lg:text-center">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 sm:text-4xl md:text-5xl">Choose Your Hadiyah <span className="whitespace-nowrap text-amber-700" lang="ur" dir="rtl">(ہدیہ)</span></h2>
            <div className="mb-5 h-1.5 w-20 rounded-full bg-accent lg:mx-auto lg:mb-8 lg:w-24"></div>
            <p className="mb-8 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg lg:mx-auto lg:mb-10 lg:text-xl">
              Pick a class schedule, then enter the Hadiyah amount that feels manageable for your family. Our advisor confirms the final arrangement with you.
            </p>
            
            {/* Awesome Interactive Pricing Toggle */}
            <div className="grid w-full grid-cols-2 gap-1 rounded-2xl border border-slate-200 bg-slate-100 p-1.5 sm:inline-grid sm:w-auto sm:rounded-full sm:gap-2 sm:p-2">
              <button 
                onClick={() => setIsAnnual(false)} 
                className={`rounded-xl px-3 py-3 text-sm font-bold transition-all sm:rounded-full sm:px-6 sm:text-base ${!isAnnual ? 'bg-primary-dark text-white shadow-md' : 'text-slate-500 hover:text-slate-900'}`}
              >
                Monthly
              </button>
              <button 
                onClick={() => setIsAnnual(true)} 
                className={`flex items-center justify-center gap-1 rounded-xl px-2 py-3 text-sm font-bold transition-all sm:gap-2 sm:rounded-full sm:px-6 sm:text-base ${isAnnual ? 'bg-primary-dark text-white shadow-md' : 'text-slate-500 hover:text-slate-900'}`}
              >
                Annually <span className="bg-accent text-white text-[10px] px-2 py-0.5 rounded-full uppercase tracking-wider">Save 20%</span>
              </button>
            </div>
          </div>

          <div className="mx-auto mt-10 grid max-w-5xl grid-cols-1 items-stretch gap-6 md:grid-cols-3 lg:mt-14 lg:gap-7">
            <PricingCard 
              key={`starter-${isAnnual}`}
              plan="Starter"
              price="0"
              billing={isAnnual ? "year" : "month"}
              duration="2 Days / Week (30 mins)"
              features={["1-on-1 Live Sessions", "Monthly Progress Report", "Basic Learning Material", "Flexible Rescheduling"]}
              isPopular={false}
            />
            <PricingCard 
              key={`standard-${isAnnual}`}
              plan="Standard"
              price="0"
              billing={isAnnual ? "year" : "month"}
              duration="3 Days / Week (45 mins)"
              features={["1-on-1 Live Sessions", "Weekly Progress Tracking", "Interactive Worksheets", "Session Recordings", "Priority Support"]}
              isPopular={true}
            />
            <PricingCard 
              key={`intensive-${isAnnual}`}
              plan="Intensive"
              price="0"
              billing={isAnnual ? "year" : "month"}
              duration="5 Days / Week (45 mins)"
              features={["1-on-1 Live Sessions", "Daily Hifz Tracking", "Ijazah Track Assessment", "Session Recordings", "Certificate of Completion"]}
              isPopular={false}
            />
          </div>
        </div>
      </section>
      
      {/* Testimonials */}
      <section className="relative order-9 overflow-hidden bg-primary-dark py-14 text-white sm:py-16 lg:py-20">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#F59E0B 2px, transparent 2px)', backgroundSize: '30px 30px' }}></div>
        <div className="section-shell relative z-10">
          <div className="mb-10 text-left sm:mb-14 lg:mb-16 lg:text-center">
            <h2 className="mb-5 text-3xl font-bold text-white sm:text-4xl md:text-5xl">Student Success Stories</h2>
            <div className="h-1.5 w-20 rounded-full bg-accent lg:mx-auto lg:w-24"></div>
          </div>
          
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
            {[
              { name: 'Sarah M.', role: 'Parent', text: 'My 7-year-old daughter loves her Tajweed classes. The tutor is incredibly patient and uses interactive games that keep her engaged from start to finish.' },
              { name: 'Omar K.', role: 'Adult Learner', text: 'Alhamdulillah, I completed my Hifz journey here. The flexible scheduling allowed me to memorize effectively while working my full-time job.' },
              { name: 'Aisha R.', role: 'Revert', text: 'Starting from zero was intimidating, but the Noorani Qaida course was perfectly structured. I can now read the Quran fluently with confidence!' }
            ].map((testimonial, idx) => (
              <motion.div 
                key={idx} 
                initial={{opacity: 0, scale: 0.9}} 
                whileInView={{opacity: 1, scale: 1}} 
                viewport={{once: true}} 
                transition={{delay: idx * 0.15}} 
                className="rounded-3xl border border-white/10 bg-white/10 p-6 backdrop-blur-md transition-colors hover:bg-white/15 sm:p-8"
              >
                <Quote className="text-accent mb-6" size={32} />
                <p className="text-primary-light text-lg mb-8 leading-relaxed font-serif italic">"{testimonial.text}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center font-bold text-lg text-white shadow-md">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-lg tracking-wide">{testimonial.name}</h4>
                    <p className="text-accent font-medium text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Final Call To Action Banner (New Feature) */}
      <section className="relative order-11 overflow-hidden bg-accent py-12 sm:py-14 lg:py-16">
        <div className="absolute inset-0 opacity-[0.15]" style={{ backgroundImage: 'radial-gradient(#ffffff 2px, transparent 2px)', backgroundSize: '30px 30px' }}></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h2 className="mb-5 text-3xl font-bold text-white drop-shadow-md sm:text-4xl md:text-5xl">Ready to Start Your Quran Journey?</h2>
          <p className="mb-8 text-base font-medium leading-7 text-white/90 sm:text-lg lg:mb-10 lg:text-xl">Join thousands of students globally. Book your free 30-minute evaluation class today with no credit card required.</p>
          <div className="mx-auto flex max-w-2xl flex-col justify-center gap-3 sm:flex-row">
            <Link to="/contact" state={{ intention: 'Free Trial' }} className="intent-cta flex w-full items-center justify-center gap-2 rounded-2xl px-6 py-4 text-base font-bold transition-all duration-300 hover:-translate-y-2 sm:w-auto sm:rounded-full sm:px-8 sm:text-lg"><span className="h-2.5 w-2.5 animate-pulse rounded-full bg-current" />Free Trial <ArrowRight size={21} /></Link>
            <Link to="/contact" state={{ intention: 'Regular Classes' }} className="intent-cta intent-cta-alt flex w-full items-center justify-center gap-2 rounded-2xl border-2 border-white/70 px-6 py-4 text-base font-bold transition-all duration-300 hover:-translate-y-2 sm:w-auto sm:rounded-full sm:px-8 sm:text-lg"><span className="h-2.5 w-2.5 animate-pulse rounded-full bg-current" />Regular Classes</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomeScreen;
