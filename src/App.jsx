import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

const HomeScreen = lazy(() => import('./screens/HomeScreen'));
const CoursesPage = lazy(() => import('./screens/CoursesPage'));
const TutorsPage = lazy(() => import('./screens/TutorsPage'));
const ContactPage = lazy(() => import('./screens/ContactPage'));
const CharityPage = lazy(() => import('./screens/CharityPage'));
const InfoPage = lazy(() => import('./screens/InfoPage'));

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Suspense fallback={<div className="grid min-h-[70vh] place-items-center pt-20"><div className="h-11 w-11 animate-spin rounded-full border-4 border-emerald-100 border-t-emerald-800" aria-label="Loading page" /></div>}>
            <Routes>
              <Route path="/" element={<HomeScreen />} />
              <Route path="/courses" element={<CoursesPage />} />
              <Route path="/tutors" element={<TutorsPage />} />
              <Route path="/charity" element={<CharityPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/about" element={<InfoPage type="about" />} />
              <Route path="/privacy" element={<InfoPage type="privacy" />} />
              <Route path="/terms" element={<InfoPage type="terms" />} />
              <Route path="*" element={<InfoPage type="not-found" />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
