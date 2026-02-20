import { useEffect, useRef } from 'react';
import { Wrench, Zap, Droplets, Square, Paintbrush, Shield, Grid3X3, Layers, ArrowLeft } from 'lucide-react';

const Services = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

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

    const elements = sectionRef.current?.querySelectorAll('.animate-on-scroll');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const services = [
    {
      icon: Wrench,
      title: 'صيانة عامة',
      description: 'صيانة شاملة لجميع أعمال المنزل بأيدي فنيين محترفين',
      image: 'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=600&q=80',
    },
    {
      icon: Zap,
      title: 'كهرباء منازل',
      description: 'تركيب وصيانة جميع الأعمال الكهربائية مع ضمان السلامة',
      image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=600&q=80',
    },
    {
      icon: Droplets,
      title: 'سباكة',
      description: 'حلول السباكة الشاملة من التركيب إلى الصيانة',
      image: 'https://images.unsplash.com/photo-1585704032915-c3400ca199e7?w=600&q=80',
    },
    {
      icon: Square,
      title: 'تركيب جبس بورد',
      description: 'تصاميم جبس بورد عصرية وأنيقة لأسقف وجدران مميزة',
      image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=600&q=80',
    },
    {
      icon: Paintbrush,
      title: 'دهانات وتشطيبات',
      description: 'دهانات عالية الجودة مع تشطيبات احترافية',
      image: 'https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=600&q=80',
    },
    {
      icon: Shield,
      title: 'عزل أسطح',
      description: 'عزل حراري ومائي للأسطح بأحدث المواد والتقنيات',
      image: 'https://images.unsplash.com/photo-1632823471406-51c5128c7fbb?w=600&q=80',
    },
    {
      icon: Grid3X3,
      title: 'تركيب سيراميك',
      description: 'تركيب سيراميك وبورسلان بدقة عالية وجودة ممتازة',
      image: 'https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?w=600&q=80',
    },
    {
      icon: Layers,
      title: 'بديل رخام وخشب',
      description: 'ديكورات بديل رخام وخشب فاخرة لمنزل عصري',
      image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=600&q=80',
    },
  ];

  return (
    <section
      id="services"
      ref={sectionRef}
      className="section-padding bg-[#0a0a0a]"
    >
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2
            className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-1000 section-title gold-text"
          >
            خدماتنا المميزة
          </h2>
          <p
            className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-1000 delay-200 text-[#c5c5c5] mt-8 max-w-2xl mx-auto"
          >
            نقدم مجموعة شاملة من الخدمات لتلبية جميع احتياجات صيانة وديكور منزلك
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-1000"
              style={{ transitionDelay: `${300 + index * 150}ms` }}
            >
              <div className="service-card group overflow-hidden">
                {/* Image */}
                <div className="img-hover h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#e3af5a] to-[#c49a4d] rounded-lg flex items-center justify-center mb-4 -mt-12 relative z-10">
                    <service.icon className="w-6 h-6 text-black" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{service.title}</h3>
                  <p className="text-[#c5c5c5] text-sm mb-4">{service.description}</p>
                  <a
                    href="https://wa.me/971508423094"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-[#e3af5a] text-sm font-medium hover:gap-3 transition-all"
                  >
                    اطلب الخدمة
                    <ArrowLeft className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div
          className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-1000 delay-700 text-center mt-12"
        >
          <a
            href="https://wa.me/971508423094"
            target="_blank"
            rel="noopener noreferrer"
            className="gold-btn"
          >
            استفسر عن خدماتنا
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
