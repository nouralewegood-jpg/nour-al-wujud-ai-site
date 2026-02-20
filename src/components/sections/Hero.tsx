import { useEffect, useRef } from 'react';
import { Phone, ArrowDown, CheckCircle } from 'lucide-react';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = heroRef.current?.querySelectorAll('.animate-on-scroll');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const features = [
    'معاينة احترافية',
    'ضمان 5 سنوات',
    'فريق معتمد',
  ];

  return (
    <section
      id="hero"
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1920&q=80"
          alt="ديكور داخلي فاخر"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/90" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 pt-20">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <div
            className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-1000 delay-100 inline-flex items-center gap-2 bg-[#e3af5a]/20 border border-[#e3af5a]/30 rounded-full px-4 py-2 mb-6"
          >
            <span className="w-2 h-2 bg-[#e3af5a] rounded-full animate-pulse" />
            <span className="text-[#e3af5a] text-sm font-medium">
              خدمات احترافية في العين
            </span>
          </div>

          {/* Main Title */}
          <h1
            className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-1000 delay-200 text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 leading-tight"
          >
            نور الوجود
            <span className="block gold-text mt-2">للصيانة العامة والديكور</span>
          </h1>

          {/* Subtitle */}
          <p
            className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-1000 delay-300 text-xl md:text-2xl text-[#c5c5c5] mb-6"
          >
            في العين - خدمات احترافية بجودة عالية
          </p>

          {/* Description */}
          <p
            className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-1000 delay-400 text-lg text-[#c5c5c5] mb-8"
          >
            صيانة – كهرباء – سباكة – جبس بورد – تشطيبات فلل وشقق
          </p>

          {/* Features */}
          <div
            className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-1000 delay-500 flex flex-wrap justify-center gap-4 md:gap-8 mb-10"
          >
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex items-center gap-2 text-white"
              >
                <CheckCircle className="w-5 h-5 text-[#e3af5a]" />
                <span>{feature}</span>
              </div>
            ))}
          </div>

          {/* Offer Badge */}
          <div
            className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-1000 delay-600 inline-block bg-gradient-to-r from-[#e3af5a] to-[#c49a4d] text-black font-bold px-6 py-3 rounded-lg mb-10"
          >
            🎁 عرض سعر مميز داخل مدينة العين
          </div>

          {/* CTA Buttons */}
          <div
            className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-1000 delay-700 flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a
              href="https://wa.me/971508423094"
              target="_blank"
              rel="noopener noreferrer"
              className="gold-btn text-lg"
            >
              <Phone className="w-5 h-5" />
              احصل على عرض سعر
            </a>
            <a
              href="#services"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="outline-btn text-lg"
            >
              اكتشف خدماتنا
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <a
          href="#why-us"
          onClick={(e) => {
            e.preventDefault();
            document.querySelector('#why-us')?.scrollIntoView({ behavior: 'smooth' });
          }}
          className="text-white/60 hover:text-[#e3af5a] transition-colors"
        >
          <ArrowDown className="w-6 h-6" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
