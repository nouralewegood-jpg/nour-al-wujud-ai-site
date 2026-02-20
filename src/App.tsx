import { Toaster } from 'sonner';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import WhatsAppButton from './components/layout/WhatsAppButton';
import Hero from './components/sections/Hero';
import WhyChooseUs from './components/sections/WhyChooseUs';
import Services from './components/sections/Services';
import Steps from './components/sections/Steps';
import Projects from './components/sections/Projects';
import BeforeAfter from './components/sections/BeforeAfter';
import Testimonials from './components/sections/Testimonials';
import Contact from './components/sections/Contact';
import AboutUs from './components/sections/AboutUs';
import FAQ from './components/sections/FAQ';
import PaintsCatalog from './components/catalogs/PaintsCatalog';
import MarbleCatalog from './components/catalogs/MarbleCatalog';
import GypsumCatalog from './components/catalogs/GypsumCatalog';
import IronWorkCatalog from './components/catalogs/IronWorkCatalog';
import AIToolsPage from './components/sections/AIToolsPage';
import './App.css';

function App() {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden" dir="rtl">
      <Toaster 
        position="top-center" 
        richColors 
        toastOptions={{
          style: {
            background: '#151515',
            color: '#fff',
            border: '1px solid #2a2a2a',
          },
        }}
      />
      <Header />
      <main>
        {/* 1. الصفحة الرئيسية */}
        <Hero />
        
        {/* 2. من نحن */}
        <AboutUs />
        
        {/* 3. لماذا تختارنا */}
        <WhyChooseUs />
        
        {/* 4. خطوات العمل */}
        <Steps />
        
        {/* 5. خدماتنا */}
        <Services />
        
        {/* 6. الكتالوجات */}
        <PaintsCatalog />
        <MarbleCatalog />
        <GypsumCatalog />
        <IronWorkCatalog />
        
        {/* 7. أدوات الذكاء الاصطناعي */}
        <AIToolsPage />
        
        {/* 8. مشاريعنا */}
        <Projects />
        
        {/* 9. قبل وبعد */}
        <BeforeAfter />
        
        {/* 10. آراء العملاء */}
        <Testimonials />
        
        {/* 11. الأسئلة الشائعة */}
        <FAQ />
        
        {/* 12. تواصل معنا */}
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;
