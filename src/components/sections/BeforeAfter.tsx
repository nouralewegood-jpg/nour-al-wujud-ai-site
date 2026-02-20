import { useEffect, useRef, useState } from 'react';

const BeforeAfter = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [sliderPositions, setSliderPositions] = useState([50, 50, 50]);

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

  const comparisons = [
    {
      title: 'حمام',
      beforeImage: 'https://images.unsplash.com/photo-1584622050111-993a426fbf0a?w=800&q=80',
      afterImage: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=800&q=80',
    },
    {
      title: 'مطبخ',
      beforeImage: 'https://images.unsplash.com/photo-1556911220-bff31c812dba?w=800&q=80',
      afterImage: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80',
    },
    {
      title: 'غرفة معيشة',
      beforeImage: 'https://images.unsplash.com/photo-1484154218962-a197022b5858?w=800&q=80',
      afterImage: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800&q=80',
    },
  ];

  const handleSliderChange = (index: number, value: number) => {
    const newPositions = [...sliderPositions];
    newPositions[index] = value;
    setSliderPositions(newPositions);
  };

  return (
    <section
      id="before-after"
      ref={sectionRef}
      className="section-padding bg-black"
    >
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2
            className="animate-on-scroll opacity-0 -translate-x-12 transition-all duration-1000 section-title gold-text"
          >
            تحولات مذهلة
          </h2>
          <p
            className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-1000 delay-200 text-[#c5c5c5] mt-8 max-w-2xl mx-auto"
          >
            شاهد الفرق قبل وبعد أعمالنا الاحترافية
          </p>
        </div>

        {/* Comparisons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {comparisons.map((comparison, index) => (
            <div
              key={index}
              className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-1000"
              style={{ transitionDelay: `${300 + index * 150}ms` }}
            >
              <div className="before-after-container">
                <h3 className="text-xl font-bold text-white mb-4 text-center">
                  {comparison.title}
                </h3>
                
                {/* Before/After Slider */}
                <div className="relative h-64 rounded-xl overflow-hidden">
                  {/* After Image (Background) */}
                  <img
                    src={comparison.afterImage}
                    alt={`${comparison.title} بعد`}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  
                  {/* Before Image (Foreground with clip) */}
                  <div
                    className="absolute inset-0 overflow-hidden"
                    style={{ width: `${sliderPositions[index]}%` }}
                  >
                    <img
                      src={comparison.beforeImage}
                      alt={`${comparison.title} قبل`}
                      className="absolute inset-0 w-full h-full object-cover"
                      style={{ width: `${100 / (sliderPositions[index] / 100)}%` }}
                    />
                    <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                      <span className="bg-black/70 text-white px-3 py-1 rounded text-sm font-bold">
                        قبل
                      </span>
                    </div>
                  </div>
                  
                  {/* After Label */}
                  <div className="absolute inset-0 flex items-center justify-end pr-4">
                    <span className="bg-[#e3af5a] text-black px-3 py-1 rounded text-sm font-bold">
                      بعد
                    </span>
                  </div>
                  
                  {/* Slider Handle */}
                  <div
                    className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize"
                    style={{ left: `${sliderPositions[index]}%` }}
                  >
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg">
                      <div className="flex gap-1">
                        <div className="w-0.5 h-4 bg-gray-400" />
                        <div className="w-0.5 h-4 bg-gray-400" />
                      </div>
                    </div>
                  </div>
                  
                  {/* Range Input */}
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={sliderPositions[index]}
                    onChange={(e) => handleSliderChange(index, parseInt(e.target.value))}
                    className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BeforeAfter;
