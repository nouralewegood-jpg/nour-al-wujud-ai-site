import { useEffect, useRef } from 'react';
import { Check, ExternalLink, Layers, Lightbulb, Ruler, Star } from 'lucide-react';

const GypsumCatalog = () => {
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

  const gypsumTypes = [
    {
      name: 'جبس بورد عادي',
      description: 'للاستخدام العام في الأسقف والجدران',
      features: ['سعر اقتصادي', 'سهل التركيب', 'مناسب للأماكن الجافة'],
      thickness: '9.5 - 12.5 مم',
    },
    {
      name: 'جبس بورد مقاوم للرطوبة',
      description: 'مثالي للحمامات والمطابخ',
      features: ['مقاوم للماء', 'مضاد للعفن', 'عمر أطول'],
      thickness: '12.5 مم',
    },
    {
      name: 'جبس بورد مقاوم للحريق',
      description: 'أمان إضافي للمباني',
      features: ['مقاوم للحريق', 'عزل حراري', 'أمان عالي'],
      thickness: '12.5 - 15 مم',
    },
    {
      name: 'جبس بورد مرن',
      description: 'للتصاميم المنحنية والإبداعية',
      features: ['قابل للثني', 'تصاميم فريدة', 'إبداعي'],
      thickness: '6.5 مم',
    },
  ];

  const designs = [
    {
      name: 'أسقف معلقة بسيطة',
      description: 'تصميم عصري بسيط مع إضاءة مخفية',
      features: ['سعر معقول', 'تركيب سريع', 'مناسب لجميع الغرف'],
    },
    {
      name: 'أسقف معلقة متعددة المستويات',
      description: 'تصميم فاخر بمستويات مختلفة',
      features: ['مظهر فاخر', 'عمق بصري', 'إضاءة متنوعة'],
    },
    {
      name: 'ديكورات جدارية',
      description: 'عناصر زخرفية للجدران',
      features: ['تفاصيل فنية', 'فخامة', 'تخصيص كامل'],
    },
    {
      name: 'أعمدة وأقواس',
      description: 'تغطية الأعمدة وتصميم الأقواس',
      features: ['إخفاء العيوب', 'زخرفة', 'تناسق'],
    },
    {
      name: 'كرانيش وزخارف',
      description: 'لمسات نهائية أنيقة',
      features: ['أناقة', 'تفاصيل دقيقة', 'تقليدي وعصري'],
    },
    {
      name: 'إضاءة مخفية LED',
      description: 'تكامل الإضاءة مع الجبس بورد',
      features: ['إضاءة ناعمة', 'توفير طاقة', 'تحكم باللون'],
    },
  ];

  const services = [
    {
      icon: Ruler,
      title: 'قياس و تصميم',
      description: 'زيارة الموقع وأخذ القياسات بدقة',
    },
    {
      icon: Layers,
      title: 'تصنيع مخصص',
      description: 'تصنيع العناصر حسب التصميم المطلوب',
    },
    {
      icon: Lightbulb,
      title: 'تخطيط الإضاءة',
      description: 'تصميم توزيع الإضاءة الأمثل',
    },
    {
      icon: Star,
      title: 'تركيب احترافي',
      description: 'تركيب بمعايير عالية الجودة',
    },
  ];

  return (
    <section
      id="gypsum-catalog"
      ref={sectionRef}
      className="section-padding bg-[#0a0a0a]"
    >
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2
            className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-1000 section-title gold-text"
          >
            جبس بورد - الشيبورد
          </h2>
          <p
            className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-1000 delay-200 text-[#c5c5c5] mt-8 max-w-2xl mx-auto"
          >
            تصاميم جبس بورد عصرية وفاخرة لأسقف وجدران مميزة
          </p>
        </div>

        {/* Gypsum Types */}
        <h3 className="text-2xl font-bold text-white mb-6 text-center">أنواع الجبس بورد</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {gypsumTypes.map((type, index) => (
            <div
              key={index}
              className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-1000"
              style={{ transitionDelay: `${300 + index * 100}ms` }}
            >
              <div className="service-card p-6">
                <h4 className="text-xl font-bold text-white mb-2">{type.name}</h4>
                <p className="text-[#c5c5c5] mb-4">{type.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {type.features.map((feature, i) => (
                    <span
                      key={i}
                      className="bg-[#e3af5a]/10 text-[#e3af5a] px-3 py-1 rounded-full text-sm"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
                <p className="text-[#c5c5c5] text-sm">
                  <span className="text-[#e3af5a]">السماكة:</span> {type.thickness}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Designs */}
        <h3 className="text-2xl font-bold text-white mb-6 text-center">تصاميمنا</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {designs.map((design, index) => (
            <div
              key={index}
              className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-1000"
              style={{ transitionDelay: `${400 + index * 100}ms` }}
            >
              <div className="service-card p-6 h-full">
                <h4 className="text-lg font-bold text-white mb-2">{design.name}</h4>
                <p className="text-[#c5c5c5] mb-4">{design.description}</p>
                <ul className="space-y-2">
                  {design.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-[#c5c5c5] text-sm">
                      <Check className="w-4 h-4 text-[#e3af5a]" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Services */}
        <h3 className="text-2xl font-bold text-white mb-6 text-center">خدماتنا</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-1000"
              style={{ transitionDelay: `${500 + index * 100}ms` }}
            >
              <div className="service-card p-6 text-center">
                <div className="w-14 h-14 bg-gradient-to-br from-[#e3af5a] to-[#c49a4d] rounded-xl flex items-center justify-center mx-auto mb-4">
                  <service.icon className="w-7 h-7 text-black" />
                </div>
                <h4 className="text-lg font-bold text-white mb-2">{service.title}</h4>
                <p className="text-[#c5c5c5] text-sm">{service.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <a
            href="https://wa.me/971508423094"
            target="_blank"
            rel="noopener noreferrer"
            className="gold-btn"
          >
            <ExternalLink className="w-5 h-5" />
            اطلب تصميمك المخصص
          </a>
        </div>
      </div>
    </section>
  );
};

export default GypsumCatalog;
