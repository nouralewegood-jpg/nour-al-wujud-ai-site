import { useEffect, useRef } from 'react';
import { Phone, MapPin, FileText, Hammer } from 'lucide-react';

const Steps = () => {
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

  const steps = [
    {
      icon: Phone,
      number: '01',
      title: 'تواصل معنا',
      description: 'اتصل بنا أو ارسل رسالة واتساب وسنرد عليك في أقرب وقت',
    },
    {
      icon: MapPin,
      number: '02',
      title: 'معاينة احترافية',
      description: 'نزور الموقع ونقيم العمل المطلوب بشكل احترافي',
    },
    {
      icon: FileText,
      number: '03',
      title: 'عرض السعر',
      description: 'نقدم لك سعر تنافسي وشفاف مع تفاصيل العمل',
    },
    {
      icon: Hammer,
      number: '04',
      title: 'التنفيذ',
      description: 'نبدأ العمل في الوقت المحدد ونسلمك النتيجة المثالية',
    },
  ];

  return (
    <section
      id="steps"
      ref={sectionRef}
      className="section-padding bg-black"
    >
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2
            className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-1000 section-title gold-text"
          >
            كيف نعمل؟
          </h2>
          <p
            className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-1000 delay-200 text-[#c5c5c5] mt-8 max-w-2xl mx-auto"
          >
            عملية بسيطة وأربع خطوات تفصلك عن تحويل منزلك
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connection Line (Desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-[#e3af5a]/20 via-[#e3af5a] to-[#e3af5a]/20 -translate-y-1/2" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div
                key={index}
                className="animate-on-scroll opacity-0 translate-x-12 transition-all duration-1000"
                style={{ transitionDelay: `${300 + index * 200}ms` }}
              >
                <div className="step-card relative z-10">
                  <div className="step-number">
                    <step.icon className="w-6 h-6" />
                  </div>
                  <div className="text-[#e3af5a] text-sm font-bold mb-2">
                    الخطوة {step.number}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                  <p className="text-[#c5c5c5] text-sm">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Steps;
