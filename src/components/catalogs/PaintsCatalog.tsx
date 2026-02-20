import { useEffect, useRef, useState } from 'react';
import { Check, ExternalLink, Palette, Droplets, Sun, Shield } from 'lucide-react';

const PaintsCatalog = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeBrand, setActiveBrand] = useState<'jotun' | 'national'>('jotun');

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

  const jotunProducts = [
    {
      name: 'Jotun Fenomastic',
      type: 'دهان داخلي فاخر',
      features: ['تغطية مثالية', 'مقاوم للغسل', 'ألوان زاهية'],
      colors: ['#F5F5DC', '#E8DCC4', '#D4C4A8', '#C9B896'],
    },
    {
      name: 'Jotun Majestic',
      type: 'دهان داخلي مطفي',
      features: ['مظهر أنيق', 'لا يبهت', 'سهل التطبيق'],
      colors: ['#FFF8E7', '#F0EAD6', '#E6DCC4', '#DDD4B8'],
    },
    {
      name: 'Jotun Ultra Primer',
      type: 'طبقة أساس',
      features: ['تثبيت ممتاز', 'عزل الرطوبة', 'توحيد السطح'],
      colors: ['#FFFFFF', '#F5F5F5'],
    },
    {
      name: 'Jotun Demidekk',
      type: 'دهان خارجي',
      features: ['مقاوم للطقس', 'حماية UV', 'متين'],
      colors: ['#8B7355', '#A0826D', '#B8A088', '#D4C4A8'],
    },
  ];

  const nationalProducts = [
    {
      name: 'National Diamond',
      type: 'دهان داخلي فاخر',
      features: ['لمعان ممتاز', 'تغطية عالية', 'مقاوم للبقع'],
      colors: ['#FFFEF0', '#F5F0E1', '#E8E0D0', '#DDD5C5'],
    },
    {
      name: 'National Silk',
      type: 'دهان حريري',
      features: ['ملمس ناعم', 'مظهر فاخر', 'سهل التنظيف'],
      colors: ['#FFFAF0', '#F5EFE0', '#E8E0D0', '#DDD0C0'],
    },
    {
      name: 'National Weather Shield',
      type: 'دهان خارجي',
      features: ['حماية من العوامل الجوية', 'مقاوم للتشقق', 'طويل الأمد'],
      colors: ['#A08060', '#B8A080', '#D0C0A0', '#E8D8C0'],
    },
    {
      name: 'National Antibacterial',
      type: 'دهان مضاد للبكتيريا',
      features: ['حماية صحية', 'مثالي للمستشفيات', 'آمن للأطفال'],
      colors: ['#FFFFFF', '#F8F8F8', '#F0F0F0'],
    },
  ];

  const paintTypes = [
    {
      icon: Palette,
      title: 'دهانات داخلية',
      description: 'مجموعة واسعة من الألوان والتشطيبات للجدران الداخلية',
    },
    {
      icon: Sun,
      title: 'دهانات خارجية',
      description: 'حماية متكاملة للواجهات ضد العوامل الجوية',
    },
    {
      icon: Droplets,
      title: 'عوازل مائية',
      description: 'حماية الأسطح من تسرب المياه والرطوبة',
    },
    {
      icon: Shield,
      title: 'أرضيات إيبوكسي',
      description: 'تشطيبات أرضية متينة ومقاومة للمواد الكيميائية',
    },
  ];

  return (
    <section
      id="paints-catalog"
      ref={sectionRef}
      className="section-padding bg-[#0a0a0a]"
    >
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2
            className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-1000 section-title gold-text"
          >
            كتالوج الدهانات والأصباغ
          </h2>
          <p
            className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-1000 delay-200 text-[#c5c5c5] mt-8 max-w-2xl mx-auto"
          >
            نقدم أفضل الماركات العالمية بضمان أصلي 100%
          </p>
        </div>

        {/* Paint Types */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {paintTypes.map((type, index) => (
            <div
              key={index}
              className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-1000"
              style={{ transitionDelay: `${300 + index * 100}ms` }}
            >
              <div className="service-card p-6 text-center">
                <div className="w-14 h-14 bg-gradient-to-br from-[#e3af5a] to-[#c49a4d] rounded-xl flex items-center justify-center mx-auto mb-4">
                  <type.icon className="w-7 h-7 text-black" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{type.title}</h3>
                <p className="text-[#c5c5c5] text-sm">{type.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Brand Tabs */}
        <div className="flex justify-center gap-4 mb-12">
          <button
            onClick={() => setActiveBrand('jotun')}
            className={`px-8 py-4 rounded-xl font-bold text-lg transition-all ${
              activeBrand === 'jotun'
                ? 'bg-gradient-to-r from-[#e3af5a] to-[#c49a4d] text-black'
                : 'bg-[#151515] text-white border border-[#2a2a2a] hover:border-[#e3af5a]'
            }`}
          >
            JOTUN
          </button>
          <button
            onClick={() => setActiveBrand('national')}
            className={`px-8 py-4 rounded-xl font-bold text-lg transition-all ${
              activeBrand === 'national'
                ? 'bg-gradient-to-r from-[#e3af5a] to-[#c49a4d] text-black'
                : 'bg-[#151515] text-white border border-[#2a2a2a] hover:border-[#e3af5a]'
            }`}
          >
            NATIONAL
          </button>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {(activeBrand === 'jotun' ? jotunProducts : nationalProducts).map((product, index) => (
            <div
              key={index}
              className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-1000"
              style={{ transitionDelay: `${400 + index * 100}ms` }}
            >
              <div className="service-card p-6">
                <div className="flex flex-col md:flex-row gap-6">
                  {/* Color Palette */}
                  <div className="flex-shrink-0">
                    <div className="grid grid-cols-2 gap-2 w-32">
                      {product.colors.map((color, i) => (
                        <div
                          key={i}
                          className="w-14 h-14 rounded-lg shadow-lg"
                          style={{ backgroundColor: color }}
                          title={color}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Product Info */}
                  <div className="flex-grow">
                    <h3 className="text-xl font-bold text-white mb-2">{product.name}</h3>
                    <p className="text-[#e3af5a] mb-4">{product.type}</p>
                    <ul className="space-y-2">
                      {product.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-2 text-[#c5c5c5]">
                          <Check className="w-4 h-4 text-[#e3af5a]" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
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

export default PaintsCatalog;
