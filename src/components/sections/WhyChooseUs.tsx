import { useEffect, useRef } from 'react';
import { Award, Users, Shield, Clock, Wrench, ThumbsUp } from 'lucide-react';

const WhyChooseUs = () => {
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

  const reasons = [
    {
      icon: Award,
      title: 'خبرة 15+ عاماً',
      description: 'خبرة طويلة في مجال الصيانة والديكور نضمن لك throughها جودة عالية في كل عمل نقوم به',
    },
    {
      icon: Users,
      title: 'فريق محترف',
      description: 'فنيين معتمدين ومدربين على أعلى مستوى لضمان أفضل النتائج لعملائنا',
    },
    {
      icon: Shield,
      title: 'ضمان 5 سنوات',
      description: 'ضمان شامل على جميع أعمالنا مع متابعة دورية لضمان رضاك التام',
    },
    {
      icon: Clock,
      title: 'الالتزام بالمواعيد',
      description: 'نلتزم بالمواعيد المحددة وننهي العمل في الوقت المتفق عليه دون تأخير',
    },
    {
      icon: Wrench,
      title: 'أحدث المعدات',
      description: 'نستخدم أحدث الأدوات والمعدات لضمان جودة العمل وسرعة الإنجاز',
    },
    {
      icon: ThumbsUp,
      title: 'أسعار تنافسية',
      description: 'أسعار منافسة وشفافة مع عروض خاصة للمشاريع الكبيرة',
    },
  ];

  return (
    <section
      id="why-us"
      ref={sectionRef}
      className="section-padding bg-black"
    >
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2
            className="animate-on-scroll opacity-0 -translate-x-12 transition-all duration-1000 section-title gold-text"
          >
            لماذا تختار نور الوجود؟
          </h2>
          <p
            className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-1000 delay-200 text-[#c5c5c5] mt-8 max-w-2xl mx-auto"
          >
            نفتخر بتقديم خدمات احترافية تجمع بين الجودة العالية والأسعار التنافسية
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-1000"
              style={{ transitionDelay: `${300 + index * 100}ms` }}
            >
              <div className="service-card p-8 h-full">
                <div className="w-16 h-16 bg-gradient-to-br from-[#e3af5a] to-[#c49a4d] rounded-xl flex items-center justify-center mb-6">
                  <reason.icon className="w-8 h-8 text-black" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{reason.title}</h3>
                <p className="text-[#c5c5c5] leading-relaxed">{reason.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
