import { useEffect, useRef } from 'react';
import { MapPin, ArrowLeft } from 'lucide-react';

const Projects = () => {
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

  const projects = [
    {
      title: 'تشطيب فيلا كاملة',
      location: 'العين',
      image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=600&q=80',
      category: 'تشطيبات',
    },
    {
      title: 'تركيب جبس بورد',
      location: 'الجيمي',
      image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&q=80',
      category: 'جبس بورد',
    },
    {
      title: 'صيانة كهربائية',
      location: 'البطين',
      image: 'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=600&q=80',
      category: 'كهرباء',
    },
    {
      title: 'دهانات داخلية',
      location: 'العين',
      image: 'https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?w=600&q=80',
      category: 'دهانات',
    },
    {
      title: 'عزل سطح',
      location: 'المربع',
      image: 'https://images.unsplash.com/photo-1632823471406-51c5128c7fbb?w=600&q=80',
      category: 'عزل',
    },
    {
      title: 'تركيب سيراميك',
      location: 'الزاهية',
      image: 'https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?w=600&q=80',
      category: 'سيراميك',
    },
  ];

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="section-padding bg-[#0a0a0a]"
    >
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2
            className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-1000 section-title gold-text"
          >
            مشاريعنا
          </h2>
          <p
            className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-1000 delay-200 text-[#c5c5c5] mt-8 max-w-2xl mx-auto"
          >
            نفخر بأعمالنا التي نفذناها باحترافية في مختلف مناطق العين
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="animate-on-scroll opacity-0 scale-90 transition-all duration-1000"
              style={{ transitionDelay: `${300 + index * 100}ms` }}
            >
              <div className="project-card group cursor-pointer">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="overlay">
                  <span className="inline-block bg-[#e3af5a] text-black text-xs font-bold px-3 py-1 rounded-full mb-2">
                    {project.category}
                  </span>
                  <h3 className="text-xl font-bold text-white mb-1">{project.title}</h3>
                  <div className="flex items-center gap-2 text-[#c5c5c5] text-sm">
                    <MapPin className="w-4 h-4" />
                    {project.location}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div
          className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-1000 delay-700 text-center mt-12"
        >
          <a
            href="https://wa.me/971508423094"
            target="_blank"
            rel="noopener noreferrer"
            className="gold-btn"
          >
            شاهد المزيد من المشاريع
            <ArrowLeft className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
