import { useEffect, useRef } from 'react';
import { Check, ExternalLink, Shield, DoorOpen, TrendingUp, Fence, Grid3X3 } from 'lucide-react';

const IronWorkCatalog = () => {
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

  const ironProducts = [
    {
      name: 'أبواب حديد',
      description: 'أبواب أمان وأبواب ديكورية للفلل والمنازل',
      features: ['أمان عالي', 'تصاميم متنوعة', 'طلاء مقاوم للصدأ'],
      icon: DoorOpen,
    },
    {
      name: 'درابزينات وسلالم',
      description: 'درابزينات داخلية وخارجية بأشكال عصرية',
      features: ['متينة', 'تصاميم فنية', 'آمنة للأطفال'],
      icon: TrendingUp,
    },
    {
      name: 'أسوار وبوابات',
      description: 'أسوار حماية وبوابات دخول للفلل',
      features: ['حماية كاملة', 'تصاميم فاخرة', 'أتمتة متاحة'],
      icon: Fence,
    },
    {
      name: 'شبابيك حماية',
      description: 'شبابيك حماية أنيقة وعملية',
      features: ['أمان من السرقة', 'تهوية جيدة', 'سهلة الفتح'],
      icon: Grid3X3,
    },
    {
      name: 'مظلات وبرجولات',
      description: 'مظلات سيارات وبرجولات حدائق',
      features: ['مقاومة للعوامل الجوية', 'تصاميم جمالية', 'عمر طويل'],
      icon: Shield,
    },
    {
      name: 'ديكورات حديدية',
      description: 'عناصر زخرفية للواجهات والداخليات',
      features: ['فنون معدنية', 'تصاميم مخصصة', 'لمسة فاخرة'],
      icon: Grid3X3,
    },
  ];

  const designs = [
    {
      name: 'التصميم الكلاسيكي',
      description: 'زخارف تقليدية وأشكال هندسية أنيقة',
      image: 'كلاسيك',
    },
    {
      name: 'التصميم العصري',
      description: 'خطوط بسيطة ونقية تناسب البيوت الحديثة',
      image: 'عصري',
    },
    {
      name: 'التصميم المزخرف',
      description: 'تفاصيل فنية معقدة للمسات فاخرة',
      image: 'مزخرف',
    },
    {
      name: 'التصميم المختلط',
      description: 'مزيج من الخشب والحديد للمظهر الدافئ',
      image: 'مختلط',
    },
  ];

  const finishes = [
    {
      name: 'طلاء مسحوقي',
      description: 'طلاء كهروستاتيكي مقاوم للصدأ والعوامل الجوية',
      colors: ['أسود', 'أبيض', 'رمادي', 'ألوان مخصصة'],
    },
    {
      name: 'طلاء حراري',
      description: 'طلاء مقاوم للحرارة للمواقد والمداخن',
      colors: ['أسود', 'فضي'],
    },
    {
      name: 'جلفنة',
      description: 'حماية من الصدأ بطلاء الزنك',
      colors: ['فضي معدني'],
    },
    {
      name: 'طلاء ذهبي',
      description: 'لمسة فاخرة بالطلاء الذهبي أو النحاسي',
      colors: ['ذهبي', 'نحاسي', 'برونزي'],
    },
  ];

  return (
    <section
      id="iron-work-catalog"
      ref={sectionRef}
      className="section-padding bg-black"
    >
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2
            className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-1000 section-title gold-text"
          >
            الحديد المشغول
          </h2>
          <p
            className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-1000 delay-200 text-[#c5c5c5] mt-8 max-w-2xl mx-auto"
          >
            تصاميم حديدية فنية متينة بأعلى معايير الجودة والأمان
          </p>
        </div>

        {/* Products */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {ironProducts.map((product, index) => (
            <div
              key={index}
              className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-1000"
              style={{ transitionDelay: `${300 + index * 100}ms` }}
            >
              <div className="service-card p-6 h-full">
                <div className="w-14 h-14 bg-gradient-to-br from-[#e3af5a] to-[#c49a4d] rounded-xl flex items-center justify-center mb-4">
                  <product.icon className="w-7 h-7 text-black" />
                </div>
                <h4 className="text-xl font-bold text-white mb-2">{product.name}</h4>
                <p className="text-[#c5c5c5] mb-4">{product.description}</p>
                <ul className="space-y-2">
                  {product.features.map((feature, i) => (
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

        {/* Designs */}
        <h3 className="text-2xl font-bold text-white mb-6 text-center">أنماط التصميم</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {designs.map((design, index) => (
            <div
              key={index}
              className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-1000"
              style={{ transitionDelay: `${400 + index * 100}ms` }}
            >
              <div className="service-card p-6 text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-[#2a2a2a] to-[#1a1a1a] rounded-xl flex items-center justify-center mx-auto mb-4 border border-[#e3af5a]/30">
                  <span className="text-[#e3af5a] font-bold">{design.image}</span>
                </div>
                <h4 className="text-lg font-bold text-white mb-2">{design.name}</h4>
                <p className="text-[#c5c5c5] text-sm">{design.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Finishes */}
        <h3 className="text-2xl font-bold text-white mb-6 text-center">التشطيبات المتاحة</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {finishes.map((finish, index) => (
            <div
              key={index}
              className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-1000"
              style={{ transitionDelay: `${500 + index * 100}ms` }}
            >
              <div className="service-card p-6">
                <h4 className="text-lg font-bold text-white mb-2">{finish.name}</h4>
                <p className="text-[#c5c5c5] mb-4">{finish.description}</p>
                <div className="flex flex-wrap gap-2">
                  {finish.colors.map((color, i) => (
                    <span
                      key={i}
                      className="bg-[#e3af5a]/10 text-[#e3af5a] px-3 py-1 rounded-full text-sm"
                    >
                      {color}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Features */}
        <div className="bg-gradient-to-r from-[#e3af5a]/10 to-transparent rounded-2xl p-8 mb-12">
          <h3 className="text-xl font-bold text-white mb-6">لماذا تختار حديدنا المشغول؟</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-start gap-3">
              <Check className="w-6 h-6 text-[#e3af5a] flex-shrink-0" />
              <div>
                <h4 className="text-white font-bold mb-1">جودة عالية</h4>
                <p className="text-[#c5c5c5] text-sm">نستخدم حديد سعودي وإماراتي معتمد</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Check className="w-6 h-6 text-[#e3af5a] flex-shrink-0" />
              <div>
                <h4 className="text-white font-bold mb-1">تصاميم مخصصة</h4>
                <p className="text-[#c5c5c5] text-sm">ننفذ أي تصميم ترسمه أو تتخيله</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Check className="w-6 h-6 text-[#e3af5a] flex-shrink-0" />
              <div>
                <h4 className="text-white font-bold mb-1">ضمان شامل</h4>
                <p className="text-[#c5c5c5] text-sm">5 سنوات ضمان على التركيب والطلاء</p>
              </div>
            </div>
          </div>
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
            اطلب عرض سعر
          </a>
        </div>
      </div>
    </section>
  );
};

export default IronWorkCatalog;
