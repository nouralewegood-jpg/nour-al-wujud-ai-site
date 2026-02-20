import { useEffect, useRef, useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';
import { toast } from 'sonner';

const Contact = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    await new Promise((resolve) => setTimeout(resolve, 1500));

    toast.success('تم إرسال رسالتك بنجاح! سنتواصل معك قريباً.');
    setFormData({ name: '', phone: '', service: '', message: '' });
    setIsSubmitting(false);
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'العنوان',
      content: '34 شارع الأقحوان – النود – العين',
      link: 'https://goo.gl/maps/zS5miJBmakUU75pB6',
    },
    {
      icon: Phone,
      title: 'الهاتف',
      content: '0508423094',
      link: 'tel:0508423094',
    },
    {
      icon: Mail,
      title: 'البريد الإلكتروني',
      content: 'nouralewegood@gmail.com',
      link: 'mailto:nouralewegood@gmail.com',
    },
    {
      icon: Clock,
      title: 'ساعات العمل',
      content: 'السبت - الخميس: 8 ص - 8 م',
      link: null,
    },
  ];

  const services = [
    'صيانة عامة',
    'كهرباء منازل',
    'سباكة',
    'تركيب جبس بورد',
    'دهانات وتشطيبات',
    'عزل أسطح',
    'تركيب سيراميك',
    'بديل رخام وخشب',
    'أخرى',
  ];

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="section-padding bg-black"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2
            className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-1000 section-title gold-text"
          >
            تواصل معنا
          </h2>
          <p
            className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-1000 delay-200 text-[#c5c5c5] mt-8 max-w-2xl mx-auto"
          >
            نحن هنا لمساعدتك. تواصل معنا الآن واحصل على عرض سعر مميز
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div
            className="animate-on-scroll opacity-0 -translate-x-12 transition-all duration-1000 delay-300"
          >
            <div className="bg-[#151515] rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">أرسل لنا رسالة</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-white mb-2">الاسم</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="form-input"
                    placeholder="أدخل اسمك"
                  />
                </div>

                <div>
                  <label className="block text-white mb-2">رقم الهاتف</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="form-input"
                    placeholder="أدخل رقم هاتفك"
                  />
                </div>

                <div>
                  <label className="block text-white mb-2">الخدمة المطلوبة</label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    className="form-input"
                  >
                    <option value="">اختر الخدمة</option>
                    {services.map((service, index) => (
                      <option key={index} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-white mb-2">الرسالة</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="form-input resize-none"
                    placeholder="اكتب رسالتك هنا..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="gold-btn w-full justify-center disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <span className="w-5 h-5 border-2 border-black/30 border-t-black rounded-full animate-spin" />
                      جاري الإرسال...
                    </span>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      إرسال الرسالة
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>

          <div
            className="animate-on-scroll opacity-0 translate-x-12 transition-all duration-1000 delay-400"
          >
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 bg-[#151515] rounded-xl p-6"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-[#e3af5a] to-[#c49a4d] rounded-lg flex items-center justify-center flex-shrink-0">
                    <info.icon className="w-6 h-6 text-black" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">{info.title}</h4>
                    {info.link ? (
                      <a
                        href={info.link}
                        target={info.link.startsWith('http') ? '_blank' : undefined}
                        rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="text-[#c5c5c5] hover:text-[#e3af5a] transition-colors"
                      >
                        {info.content}
                      </a>
                    ) : (
                      <p className="text-[#c5c5c5]">{info.content}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-xl overflow-hidden h-64">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3636.892478453!2d55.7175!3d24.25!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjTCsDE1JzAwLjAiTiA1NcKwNDMnMDMuMCJF!5e0!3m2!1sen!2sae!4v1700000000000!5m2!1sen!2sae"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="موقع نور الوجود"
              />
            </div>

            <a
              href="https://goo.gl/maps/zS5miJBmakUU75pB6"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 flex items-center justify-center gap-2 text-[#e3af5a] hover:text-[#f3d5a1] transition-colors"
            >
              <MapPin className="w-5 h-5" />
              فتح الموقع في خرائط Google
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
