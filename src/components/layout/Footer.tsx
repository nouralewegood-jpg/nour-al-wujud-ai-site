import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'الصفحة الرئيسية', href: '#hero' },
    { name: 'خدماتنا', href: '#services' },
    { name: 'مشاريعنا', href: '#projects' },
    { name: 'تواصل معنا', href: '#contact' },
  ];

  const services = [
    { name: 'صيانة عامة', href: '#services' },
    { name: 'كهرباء منازل', href: '#services' },
    { name: 'سباكة', href: '#services' },
    { name: 'تركيب جبس بورد', href: '#services' },
    { name: 'دهانات وتشطيبات', href: '#services' },
    { name: 'عزل أسطح', href: '#services' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#151515] pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Column 1: About */}
          <div>
            <h3 className="text-2xl font-bold gold-text mb-4">نور الوجود</h3>
            <p className="text-[#c5c5c5] mb-6 leading-relaxed">
              نقدم خدمات الصيانة العامة والديكور في العين بأعلى معايير الجودة. فريق
              محترف معتمد مع ضمان 5 سنوات على جميع الأعمال.
            </p>
            <div className="flex gap-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">روابط سريعة</h4>
            <ul>
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(link.href);
                    }}
                    className="footer-link"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">خدماتنا</h4>
            <ul>
              {services.map((service) => (
                <li key={service.name}>
                  <a
                    href={service.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(service.href);
                    }}
                    className="footer-link"
                  >
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">تواصل معنا</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#e3af5a] flex-shrink-0 mt-1" />
                <span className="text-[#c5c5c5]">
                  34 شارع الأقحوان – النود – العين
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#e3af5a] flex-shrink-0" />
                <a
                  href="tel:0508423094"
                  className="text-[#c5c5c5] hover:text-[#e3af5a] transition-colors"
                >
                  0508423094
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#e3af5a] flex-shrink-0" />
                <a
                  href="mailto:nouralewegood@gmail.com"
                  className="text-[#c5c5c5] hover:text-[#e3af5a] transition-colors"
                >
                  nouralewegood@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-[#e3af5a] flex-shrink-0" />
                <span className="text-[#c5c5c5]">السبت - الخميس: 8 ص - 8 م</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-[#c5c5c5] text-sm">
              © {currentYear} نور الوجود للصيانة العامة والديكور. جميع الحقوق محفوظة.
            </p>
            <p className="text-[#c5c5c5] text-sm">
              تصميم وتطوير باحترافية عالية
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
