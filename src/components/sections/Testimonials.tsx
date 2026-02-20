import { useEffect, useRef, useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const Testimonials = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

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

  // Auto-play slider
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const testimonials = [
    {
      name: 'محمد العامري',
      role: 'صاحب فيلا',
      location: 'العين',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80',
      rating: 5,
      text: 'عمل احترافي وسريع، أنصح بالتعامل معهم. قاموا بتشطيب فيلتي بشكل رائع وفي الوقت المحدد.',
    },
    {
      name: 'سالم الظاهري',
      role: 'صاحب شقة',
      location: 'الجيمي',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&q=80',
      rating: 5,
      text: 'أسعار منافسة وجودة عالية. فريق محترف يعرف ما يفعله. سأتعامل معهم مرة أخرى بالتأكيد.',
    },
    {
      name: 'خالد الكعبي',
      role: 'صاحب مكتب',
      location: 'البطين',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80',
      rating: 5,
      text: 'فريق محترف وملتزم بالمواعيد. قاموا بتركيب جبس بورد في مكتبي والنتيجة كانت رائعة.',
    },
    {
      name: 'عبدالله النعيمي',
      role: 'صاحب فيلا',
      location: 'المربع',
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=200&q=80',
      rating: 5,
      text: 'تشطيب أكثر من رائع لفيلتي. خدمة ممتازة وضمان حقيقي على الأعمال. شكراً نور الوجود.',
    },
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section
      id="testimonials"
      ref={sectionRef}
      className="section-padding bg-[#0a0a0a]"
    >
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2
            className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-1000 section-title gold-text"
          >
            ماذا يقول عملاؤنا؟
          </h2>
          <p
            className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-1000 delay-200 text-[#c5c5c5] mt-8 max-w-2xl mx-auto"
          >
            آراء حقيقية من عملائنا الكرام
          </p>
        </div>

        {/* Testimonials Slider */}
        <div
          className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-1000 delay-300 relative max-w-4xl mx-auto"
        >
          {/* Quote Icon */}
          <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 bg-[#e3af5a] rounded-full flex items-center justify-center">
            <Quote className="w-6 h-6 text-black" />
          </div>

          {/* Slider Container */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(${-currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="w-full flex-shrink-0 px-4"
                >
                  <div className="testimonial-card text-center">
                    {/* Rating */}
                    <div className="flex justify-center gap-1 mb-6">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-[#e3af5a] text-[#e3af5a]" />
                      ))}
                    </div>

                    {/* Text */}
                    <p className="text-white text-lg mb-8 leading-relaxed">
                      "{testimonial.text}"
                    </p>

                    {/* Author */}
                    <div className="flex flex-col items-center">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-16 h-16 rounded-full object-cover mb-4 border-2 border-[#e3af5a]"
                      />
                      <h4 className="text-white font-bold">{testimonial.name}</h4>
                      <p className="text-[#c5c5c5] text-sm">
                        {testimonial.role} - {testimonial.location}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute top-1/2 -translate-y-1/2 right-0 w-12 h-12 bg-[#151515] border border-[#2a2a2a] rounded-full flex items-center justify-center text-white hover:bg-[#e3af5a] hover:text-black hover:border-[#e3af5a] transition-all"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute top-1/2 -translate-y-1/2 left-0 w-12 h-12 bg-[#151515] border border-[#2a2a2a] rounded-full flex items-center justify-center text-white hover:bg-[#e3af5a] hover:text-black hover:border-[#e3af5a] transition-all"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentIndex
                    ? 'bg-[#e3af5a] w-8'
                    : 'bg-[#2a2a2a] hover:bg-[#3a3a3a]'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
