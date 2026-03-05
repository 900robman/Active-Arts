import { Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Hero from './components/home/Hero';
import VideoFeature from './components/home/VideoFeature';
import TeamSection from './components/home/TeamSection';
import Services from './components/home/Services';
import FringeVideo from './components/home/FringeVideo';
import Testimonials from './components/home/Testimonials';
import ContactForm from './components/home/ContactForm';
import NewsPage from './components/news/NewsPage';

function HomePage() {
  return (
    <>
      <Hero />
      <Services />
      <FringeVideo />
      <TeamSection />
      <Testimonials />
      <VideoFeature />
      <ContactForm />
    </>
  );
}

export default function App() {
  return (
    <div className="min-h-screen flex flex-col max-w-7xl mx-auto bg-cream-50 shadow-[-8px_0_30px_rgba(0,0,0,0.15),8px_0_30px_rgba(0,0,0,0.15)]">
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/news" element={<NewsPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
