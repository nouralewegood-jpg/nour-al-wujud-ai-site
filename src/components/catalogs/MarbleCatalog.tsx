import { useEffect, useRef, useState } from 'react';
import { Check, ExternalLink, Gem, Grid3X3, Layers, Image as ImageIcon, X } from 'lucide-react';

const MarbleCatalog = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeCategory, setActiveCategory] = useState<'granite' | 'corian' | 'all'>('all');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

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

  // مصفوفة الصور المستخرجة (سيتم ملؤها بأسماء الملفات الفعلية بعد الرفع)
  const graniteImages = Array.from({ length: 20 }, (_, i) => ({
    id: `g-${i}`,
    category: 'granite',
    title: `جرانيت موديل ${i + 1}`,
    url: `/images/granite/img-${i.toString().padStart(3, '0')}.jpg`,
  }));

  const corianImages = Array.from({ length: 15 }, (_, i) => ({
    id: `c-${i}`,
    category: 'corian',
    title: `كوريان موديل ${i + 1}`,
    url: `/images/corian/img-${i.toString().padStart(3, '0')}.jpg`,
  }));

  const allImages = [...graniteImages, ...corianImages];

  const filteredImages = activeCategory === 'all' 
    ? allImages 
    : allImages.filter(img => img.category === activeCategory);

  const categories = [
    { id: 'all', name: 'الكل', icon: Grid3X3 },
    { id: 'granite', name: 'جرانيت', icon: Gem },
    { id: 'corian', name: 'كوريان', icon: Layers },
  ];

  return (
    <section id="marble-catalog" ref={sectionRef} className="section-padding bg-black min-h-screen">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-1000 section-title gold-text">
            كتالوج المنتجات الحصري
          </h2>
          <p className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-1000 delay-200 text-[#c5c5c5] mt-8 max-w-2xl mx-auto">
            استعرض مجموعتنا الواسعة من الجرانيت والكوريان المستخرجة مباشرة من أحدث الكتالوجات العالمية
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id as any)}
              className={`flex items-center gap-2 px-8 py-4 rounded-xl font-bold transition-all duration-300 ${
                activeCategory === cat.id
                  ? 'bg-gradient-to-r from-[#e3af5a] to-[#c49a4d] text-black shadow-[0_0_20px_rgba(227,175,90,0.3)]'
                  : 'bg-[#151515] text-white border border-[#2a2a2a] hover:border-[#e3af5a]'
              }`}
            >
              <cat.icon className="w-5 h-5" />
              {cat.name}
            </button>
          ))}
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {filteredImages.map((img, index) => (
            <div
              key={img.id}
              className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 group cursor-pointer"
              style={{ transitionDelay: `${index * 50}ms` }}
              onClick={() => setSelectedImage(img.url)}
            >
              <div className="relative aspect-square overflow-hidden rounded-2xl bg-[#151515] border border-[#2a2a2a] group-hover:border-[#e3af5a] transition-all">
                <img
                  src={img.url}
                  alt={img.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = 'https://via.placeholder.com/400?text=Image+Coming+Soon';
                  }}
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <ImageIcon className="text-[#e3af5a] w-10 h-10" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                  <p className="text-white text-sm font-bold">{img.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {selectedImage && (
          <div 
            className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 md:p-10"
            onClick={() => setSelectedImage(null)}
          >
            <button className="absolute top-6 right-6 text-white hover:text-[#e3af5a] transition-colors">
              <X className="w-10 h-10" />
            </button>
            <img 
              src={selectedImage} 
              alt="Preview" 
              className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
            />
          </div>
        )}

        {/* CTA */}
        <div className="text-center mt-20">
          <a
            href="https://wa.me/971508423094"
            target="_blank"
            rel="noopener noreferrer"
            className="gold-btn inline-flex items-center gap-3 px-10 py-5 text-lg"
          >
            <ExternalLink className="w-6 h-6" />
            اطلب تسعيرة لهذا الموديل
          </a>
        </div>
      </div>
    </section>
  );
};

export default MarbleCatalog;
