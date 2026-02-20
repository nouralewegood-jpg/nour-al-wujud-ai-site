import { useEffect, useRef } from 'react';
import { Target, Eye, Award, Users, Clock, Shield, CheckCircle, TrendingUp } from 'lucide-react';

const AboutUs = () => {
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

  const stats = [
    { number: '15+', label: 'سنة خبرة', icon: Clock },
    { number: '2500+', label: 'مشروع منجز', icon: CheckCircle },
    { number: '50+', label: 'فني محترف', icon: Users },
    { number: '98%', label: 'نسبة رضا العملاء', icon: TrendingUp },
  ];

  const values = [
    {
      icon: Target,
      title: 'الجودة أولاً',
      description: 'نلتزم بأعلى معايير الجودة في كل مشروع نقوم به',
    },
    {
      icon: Shield,
      title: 'الأمانة والشفافية',
      description: 'نؤمن بالصدق والوضوح في التعامل مع عملائنا',
    },
    {
      icon: Award,
      title: 'الاحترافية',
      description: 'فريق مدرب على أعلى مستوى من الكفاءة والخبرة',
    },
    {
      icon: Users,
      title: 'رضا العميل',
      description: 'هدفنا الأول هو إرضاء عملائنا وتجاوز توقعاتهم',
    },
  ];

  const milestones = [
    { year: '2009', event: 'تأسيس نور الوجود في العين' },
    { year: '2012', event: 'توسيع الفريق إلى 20 فني' },
    { year: '2015', event: 'إنجاز 1000 مشروع' },
    { year: '2018', event: 'إضافة قسم الديكور المتخصص' },
    { year: '2021', event: 'الحصول على شهادة ISO' },
    { year: '2024', event: 'إطلاق خدمات الذكاء الاصطناعي' },
  ];

  return (
    <section
      id="about"
      ref={sectionRef}
      className="section-padding bg-black"
    >
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2
            className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-1000 section-title gold-text"
          >
            من نحن
          </h2>
          <p
            className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-1000 delay-200 text-[#c5c5c5] mt-8 max-w-3xl mx-auto"
          >
            نور الوجود للصيانة العامة والديكور - شريكك الموثوق في العين منذ أكثر من 15 عاماً
          </p>
        </div>

        {/* Story */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <div
            className="animate-on-scroll opacity-0 -translate-x-12 transition-all duration-1000 delay-300"
          >
            <div className="bg-[#151515] rounded-2xl p-8 h-full">
              <h3 className="text-2xl font-bold text-white mb-6">قصتنا</h3>
              <div className="space-y-4 text-[#c5c5c5] leading-relaxed">
                <p>
                  بدأت رحلة نور الوجود في عام 2009 بفريق صغير من الفنيين الموهوبين في مدينة العين. 
                  كان هدفنا الوحيد هو تقديم خدمات صيانة عالية الجودة بأسعار منافسة.
                </p>
                <p>
                  على مر السنين، توسعنا لنصبح واحدة من أكبر شركات الصيانة والديكور في العين، 
                  مع فريق يضم أكثر من 50 فني محترف معتمد.
                </p>
                <p>
                  اليوم، نفخر بإنجاز أكثر من 2500 مشروع ناجح، من تشطيب الفلل الكاملة 
                  إلى أصغر أعمال الصيانة المنزلية.
                </p>
              </div>
            </div>
          </div>

          <div
            className="animate-on-scroll opacity-0 translate-x-12 transition-all duration-1000 delay-400"
          >
            <div className="bg-[#151515] rounded-2xl p-8 h-full">
              <h3 className="text-2xl font-bold text-white mb-6">رؤيتنا ورسالتنا</h3>
              
              <div className="mb-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-[#e3af5a] to-[#c49a4d] rounded-lg flex items-center justify-center">
                    <Eye className="w-5 h-5 text-black" />
                  </div>
                  <h4 className="text-xl font-bold text-white">رؤيتنا</h4>
                </div>
                <p className="text-[#c5c5c5] pr-13">
                  أن نكون الخيار الأول للصيانة والديكور في الإمارات، من خلال تقديم خدمات 
                  استثنائية تجمع بين الجودة العالية والابتكار التقني.
                </p>
              </div>

              <div>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-[#e3af5a] to-[#c49a4d] rounded-lg flex items-center justify-center">
                    <Target className="w-5 h-5 text-black" />
                  </div>
                  <h4 className="text-xl font-bold text-white">رسالتنا</h4>
                </div>
                <p className="text-[#c5c5c5] pr-13">
                  تقديم حلول صيانة وديكور متكاملة بأعلى معايير الجودة، مع الالتزام 
                  بالمواعيد والشفافية في التعامل، لنحول منازل عملائنا إلى أماكن يفخرون بها.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-1000"
              style={{ transitionDelay: `${500 + index * 100}ms` }}
            >
              <div className="bg-gradient-to-br from-[#151515] to-[#0a0a0a] rounded-2xl p-6 text-center border border-[#2a2a2a] hover:border-[#e3af5a]/30 transition-colors">
                <stat.icon className="w-10 h-10 text-[#e3af5a] mx-auto mb-4" />
                <div className="text-4xl font-bold gold-text mb-2">{stat.number}</div>
                <div className="text-[#c5c5c5]">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Values */}
        <h3 className="text-2xl font-bold text-white mb-8 text-center">قيمنا</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {values.map((value, index) => (
            <div
              key={index}
              className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-1000"
              style={{ transitionDelay: `${600 + index * 100}ms` }}
            >
              <div className="service-card p-6 text-center h-full">
                <div className="w-14 h-14 bg-gradient-to-br from-[#e3af5a] to-[#c49a4d] rounded-xl flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-7 h-7 text-black" />
                </div>
                <h4 className="text-lg font-bold text-white mb-2">{value.title}</h4>
                <p className="text-[#c5c5c5] text-sm">{value.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Timeline */}
        <h3 className="text-2xl font-bold text-white mb-8 text-center">مسيرتنا</h3>
        <div className="relative max-w-3xl mx-auto">
          <div className="absolute right-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#e3af5a] to-transparent" />
          
          {milestones.map((milestone, index) => (
            <div
              key={index}
              className="animate-on-scroll opacity-0 translate-x-12 transition-all duration-1000 relative pr-20 pb-8"
              style={{ transitionDelay: `${700 + index * 100}ms` }}
            >
              <div className="absolute right-6 w-4 h-4 bg-[#e3af5a] rounded-full border-4 border-black" />
              <div className="bg-[#151515] rounded-xl p-4">
                <span className="text-[#e3af5a] font-bold">{milestone.year}</span>
                <p className="text-white mt-1">{milestone.event}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
