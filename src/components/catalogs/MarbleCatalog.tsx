import { useEffect, useRef, useState } from 'react';
import { Check, ExternalLink, Gem, Grid3X3, Layers, Square } from 'lucide-react';

const MarbleCatalog = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeCategory, setActiveCategory] = useState<'natural' | 'artificial' | 'alternative'>('natural');

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

  const naturalMarble = [
    {
      name: 'رخام كرارا',
      origin: 'إيطاليا',
      color: '#F5F5F5',
      pattern: 'عروق رمادية خفيفة',
      uses: 'أرضيات، حوائط، مطابخ',
      price: 'فاخر',
    },
    {
      name: 'رخام بوتشينو',
      origin: 'إيطاليا',
      color: '#E8E0D5',
      pattern: 'بيج مع عروق ذهبية',
      uses: 'أرضيات، درج، واجهات',
      price: 'فاخر',
    },
    {
      name: 'رخام أسود ماركينا',
      origin: 'إسبانيا',
      color: '#1a1a1a',
      pattern: 'أسود مع عروق بيضاء',
      uses: 'ديكورات، أرضيات فاخرة',
      price: 'فاخر جداً',
    },
    {
      name: 'رخام أخضر هندي',
      origin: 'الهند',
      color: '#2d5016',
      pattern: 'أخضر مع تدرجات',
      uses: 'ديكورات، تفاصيل فنية',
      price: 'مميز',
    },
  ];

  const artificialMarble = [
    {
      name: 'كوريان',
      origin: 'صناعي',
      color: '#F8F8F8',
      pattern: 'متجانس بدون عروق',
      uses: 'مطابخ، حمامات، أسطح',
      price: 'متوسط',
    },
    {
      name: 'كوارز ستون',
      origin: 'صناعي',
      color: '#E8E8E8',
      pattern: 'عروق محاكاة طبيعية',
      uses: 'مطابخ، أرضيات، درج',
      price: 'متوسط إلى فاخر',
    },
    {
      name: 'سيراميك رخامي',
      origin: 'صناعي',
      color: '#DDD',
      pattern: 'تصاميم متنوعة',
      uses: 'أرضيات، حوائط، خارجي',
      price: 'اقتصادي',
    },
    {
      name: 'بورسلان رخامي',
      origin: 'صناعي',
      color: '#F0F0F0',
      pattern: 'دقة عالية في المحاكاة',
      uses: 'أرضيات كبيرة، خارجي',
      price: 'متوسط',
    },
  ];

  const alternativeMaterials = [
    {
      name: 'بديل الرخام PVC',
      origin: 'صناعي',
      color: '#E5E5E5',
      pattern: 'خفيف وسهل التركيب',
      uses: 'حوائط، ديكورات سريعة',
      price: 'اقتصادي',
    },
    {
      name: 'بديل الرخام أكريليك',
      origin: 'صناعي',
      color: '#F0F0F0',
      pattern: 'لمعان عالي ومتانة',
      uses: 'ديكورات داخلية فاخرة',
      price: 'متوسط',
    },
    {
      name: 'جبس رخامي',
      origin: 'صناعي',
      color: '#EEE',
      pattern: 'قابل للتشكيل',
      uses: 'ديكورات، أعمدة، كرانيش',
      price: 'اقتصادي',
    },
    {
      name: 'خشب رخامي',
      origin: 'صناعي',
      color: '#C4A77D',
      pattern: 'مزيج من الخشب والرخام',
      uses: 'أثاث، ديكورات خاصة',
      price: 'مميز',
    },
  ];

  const categories = [
    { id: 'natural', name: 'رخام طبيعي', icon: Gem },
    { id: 'artificial', name: 'رخام صناعي', icon: Grid3X3 },
    { id: 'alternative', name: 'بدائل الرخام', icon: Layers },
  ];

  const getCurrentData = () => {
    switch (activeCategory) {
      case 'natural':
        return naturalMarble;
      case 'artificial':
        return artificialMarble;
      case 'alternative':
        return alternativeMaterials;
      default:
        return naturalMarble;
    }
  };

  return (
    <section
      id="marble-catalog"
      ref={sectionRef}
      className="section-padding bg-black"
    >
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2
            className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-1000 section-title gold-text"
          >
            كتالوج الرخام والأحجار
          </h2>
          <p
            className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-1000 delay-200 text-[#c5c5c5] mt-8 max-w-2xl mx-auto"
          >
            تشكيلة واسعة من الرخام الطبيعي والصناعي وبدائله بأجود الأنواع
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id as any)}
              className={`flex items-center gap-2 px-6 py-4 rounded-xl font-bold transition-all ${
                activeCategory === cat.id
                  ? 'bg-gradient-to-r from-[#e3af5a] to-[#c49a4d] text-black'
                  : 'bg-[#151515] text-white border border-[#2a2a2a] hover:border-[#e3af5a]'
              }`}
            >
              <cat.icon className="w-5 h-5" />
              {cat.name}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {getCurrentData().map((item, index) => (
            <div
              key={index}
              className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-1000"
              style={{ transitionDelay: `${300 + index * 100}ms` }}
            >
              <div className="service-card p-6">
                <div className="flex flex-col md:flex-row gap-6">
                  {/* Color Sample */}
                  <div className="flex-shrink-0">
                    <div
                      className="w-24 h-24 rounded-xl shadow-lg"
                      style={{ backgroundColor: item.color }}
                    />
                  </div>

                  {/* Product Info */}
                  <div className="flex-grow">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-bold text-white">{item.name}</h3>
                      <span className="text-[#e3af5a] text-sm font-medium">{item.origin}</span>
                    </div>
                    <p className="text-[#c5c5c5] mb-3">{item.pattern}</p>
                    <div className="flex flex-wrap gap-2 mb-3">
                      {item.uses.split('،').map((use, i) => (
                        <span
                          key={i}
                          className="bg-[#e3af5a]/10 text-[#e3af5a] px-3 py-1 rounded-full text-sm"
                        >
                          {use.trim()}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-[#e3af5a]" />
                      <span className="text-[#c5c5c5] text-sm">مستوى السعر: {item.price}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          <div className="bg-[#151515] rounded-xl p-6 text-center">
            <Gem className="w-10 h-10 text-[#e3af5a] mx-auto mb-4" />
            <h4 className="text-white font-bold mb-2">جودة عالية</h4>
            <p className="text-[#c5c5c5] text-sm">نختار أفضل أنواع الرخام من مصادر موثوقة</p>
          </div>
          <div className="bg-[#151515] rounded-xl p-6 text-center">
            <Square className="w-10 h-10 text-[#e3af5a] mx-auto mb-4" />
            <h4 className="text-white font-bold mb-2">تقطيع دقيق</h4>
            <p className="text-[#c5c5c5] text-sm">أحدث تقنيات القطع والتشكيل باستخدام CNC</p>
          </div>
          <div className="bg-[#151515] rounded-xl p-6 text-center">
            <Layers className="w-10 h-10 text-[#e3af5a] mx-auto mb-4" />
            <h4 className="text-white font-bold mb-2">تركيب احترافي</h4>
            <p className="text-[#c5c5c5] text-sm">فريق متخصص في تركيب جميع أنواع الرخام</p>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a
            href="https://wa.me/971508423094"
            target="_blank"
            rel="noopener noreferrer"
            className="gold-btn"
          >
            <ExternalLink className="w-5 h-5" />
            استفسر عن الأسعار
          </a>
        </div>
      </div>
    </section>
  );
};

export default MarbleCatalog;
