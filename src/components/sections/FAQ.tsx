import { useEffect, useRef, useState } from 'react';
import { ChevronDown, HelpCircle, MessageCircle } from 'lucide-react';

const FAQ = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [openIndex, setOpenIndex] = useState<number | null>(0);

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

  const faqs = [
    {
      question: 'ما هي خدمات نور الوجود؟',
      answer: 'نقدم مجموعة شاملة من خدمات الصيانة والديكور تشمل: صيانة عامة، كهرباء منازل، سباكة، تركيب جبس بورد، دهانات وتشطيبات، عزل أسطح، تركيب سيراميك، بديل رخام وخشب، بالإضافة إلى الحديد المشغول.',
    },
    {
      question: 'كم تستغرق مدة تنفيذ المشروع؟',
      answer: 'تختلف المدة حسب حجم المشروع. المشاريع الصغيرة قد تستغرق 1-3 أيام، بينما المشاريع الكبيرة مثل تشطيب فيلا كاملة قد تستغرق 2-4 أسابيع. نقدم جدول زمني واضح قبل بدء العمل.',
    },
    {
      question: 'هل تقدمون ضمان على الأعمال؟',
      answer: 'نعم، نقدم ضمان 5 سنوات على جميع أعمالنا. يشمل الضمان إصلاح أي عيوب في التركيب أو المواد المستخدمة خلال فترة الضمان.',
    },
    {
      question: 'ما هي مناطق خدمتكم في العين؟',
      answer: 'نغطي جميع مناطق العين: النود، الجيمي، البطين، المربع، الزاهية، العين الصناعية، وجميع المناطق المجاورة.',
    },
    {
      question: 'كيف يتم حساب تكلفة المشروع؟',
      answer: 'يتم حساب التكلفة بناءً على عدة عوامل: مساحة المكان، نوع الخدمة المطلوبة، المواد المستخدمة، وتعقيد التصميم. نقدم عرض سعر شفاف ومفصل بعد المعاينة.',
    },
    {
      question: 'هل يمكنني رؤية أعمالكم السابقة؟',
      answer: 'بالتأكيد! يمكنك زيارة قسم "مشاريعنا" في الموقع أو طلب زيارة مواقع العمل الحالية. لدينا محفظة واسعة من المشاريع المنفذة.',
    },
    {
      question: 'ما هي ساعات العمل لديكم؟',
      answer: 'نعمل من السبت إلى الخميس، من الساعة 8 صباحاً حتى 8 مساءً. للحالات الطارئة، يمكن التواصل معنا عبر الواتساب على مدار الساعة.',
    },
    {
      question: 'هل تستخدمون مواد أصلية؟',
      answer: 'نعم، نستخدم فقط مواد أصلية من ماركات معتمدة مثل جوتن، ناشونال، وغيرها. نقدم شهادات ضمان للمواد المستخدمة.',
    },
    {
      question: 'كيف يمكنني حجز موعد؟',
      answer: 'يمكنك الحجز عبر: الاتصال المباشر على 0508423094، أو إرسال رسالة واتساب، أو ملء نموذج التواصل في الموقع. سنقوم بالرد خلال 24 ساعة.',
    },
    {
      question: 'هل تقدمون خدمات الطوارئ؟',
      answer: 'نعم، لدينا فريق طوارئ للحالات العاجلة مثل تسربات المياه، مشاكل الكهرباء، وغيرها. اتصل بنا مباشرة للحصول على المساعدة الفورية.',
    },
  ];

  return (
    <section
      id="faq"
      ref={sectionRef}
      className="section-padding bg-[#0a0a0a]"
    >
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-1000 inline-flex items-center gap-2 bg-[#e3af5a]/10 border border-[#e3af5a]/30 rounded-full px-4 py-2 mb-6">
            <HelpCircle className="w-4 h-4 text-[#e3af5a]" />
            <span className="text-[#e3af5a] text-sm font-medium">هل لديك سؤال؟</span>
          </div>
          
          <h2
            className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-1000 delay-100 section-title gold-text"
          >
            الأسئلة الشائعة
          </h2>
          <p
            className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-1000 delay-200 text-[#c5c5c5] mt-8 max-w-2xl mx-auto"
          >
            إليك إجابات على أكثر الأسئلة شيوعاً. إذا لم تجد إجابتك، تواصل معنا مباشرة
          </p>
        </div>

        {/* FAQ List */}
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-1000"
              style={{ transitionDelay: `${300 + index * 50}ms` }}
            >
              <div className="mb-4">
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full flex items-center justify-between p-6 bg-[#151515] rounded-xl text-right hover:bg-[#1a1a1a] transition-colors border border-transparent hover:border-[#e3af5a]/30"
                >
                  <span className="text-white font-semibold text-lg">{faq.question}</span>
                  <ChevronDown
                    className={`w-6 h-6 text-[#e3af5a] flex-shrink-0 mr-4 transition-transform duration-300 ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="p-6 bg-[#151515]/50 border-t border-[#2a2a2a] rounded-b-xl">
                    <p className="text-[#c5c5c5] leading-relaxed">{faq.answer}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-1000 delay-700 text-center mt-12">
          <p className="text-[#c5c5c5] mb-4">لم تجد إجابة لسؤالك؟</p>
          <a
            href="https://wa.me/971508423094"
            target="_blank"
            rel="noopener noreferrer"
            className="gold-btn"
          >
            <MessageCircle className="w-5 h-5" />
            تواصل معنا مباشرة
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
