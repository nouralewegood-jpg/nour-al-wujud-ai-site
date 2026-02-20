import { useEffect, useRef, useState } from 'react';
import { Bot, Sparkles, Zap, Eye, Palette, MessageSquare, ArrowLeft, X } from 'lucide-react';

const AIFeatures = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [showChat, setShowChat] = useState(false);
  const [chatMessages, setChatMessages] = useState([
    { type: 'bot', text: 'مرحباً! أنا مساعدك الذكي في نور الوجود. كيف يمكنني مساعدتك اليوم؟' }
  ]);
  const [inputMessage, setInputMessage] = useState('');

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

  const features = [
    {
      icon: Eye,
      title: 'تصور ذكي للتصاميم',
      description: 'استخدم الذكاء الاصطناعي لرؤية تصميم منزلك قبل البدء',
      details: 'نقدم خدمة التصور ثلاثي الأبعاد باستخدام أحدث تقنيات AI لرؤية النتيجة النهائية',
    },
    {
      icon: Palette,
      title: 'اقتراح ألوان ذكي',
      description: 'احصل على توصيات ألوان مثالية لمنزلك بناءً على ذوقك',
      details: 'نحلل إضاءة المكان ونقترح أفضل الألوان والتشطيبات المناسبة',
    },
    {
      icon: Zap,
      title: 'تقدير تلقائي للتكلفة',
      description: 'احصل على تقدير فوري للتكلفة بناءً على متطلباتك',
      details: 'نستخدم خوارزميات ذكية لحساب التكلفة التقريبية في ثوانٍ',
    },
    {
      icon: MessageSquare,
      title: 'مساعد افتراضي 24/7',
      description: 'تواصل معنا في أي وقت عبر المساعد الذكي',
      details: 'متاح على مدار الساعة للإجابة على استفساراتك وتقديم النصائح',
    },
  ];

  const handleSendMessage = () => {
    if (!inputMessage.trim()) return;
    
    setChatMessages([...chatMessages, { type: 'user', text: inputMessage }]);
    
    // Simulate AI response
    setTimeout(() => {
      const responses = [
        'شكراً لتواصلك معنا! سأقوم بتحويل استفسارك لفريق المختصين.',
        'يمكنك زيارة قسم كتالوج الدهانات لرؤية جميع الألوان المتاحة.',
        'نقدم معاينة احترافية للموقع. هل تريد حجز موعد؟',
        'للحصول على عرض سعر مفصل، يرجى مشاركة تفاصيل المشروع.',
      ];
      const randomResponse = responses[Math.floor(Math.random() * responses.length)];
      setChatMessages(prev => [...prev, { type: 'bot', text: randomResponse }]);
    }, 1000);
    
    setInputMessage('');
  };

  return (
    <section
      id="ai-features"
      ref={sectionRef}
      className="section-padding bg-gradient-to-b from-[#0a0a0a] to-black relative overflow-hidden"
    >
      {/* Background Decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#e3af5a]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#e3af5a]/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-1000 inline-flex items-center gap-2 bg-[#e3af5a]/10 border border-[#e3af5a]/30 rounded-full px-4 py-2 mb-6">
            <Sparkles className="w-4 h-4 text-[#e3af5a]" />
            <span className="text-[#e3af5a] text-sm font-medium">مدعوم بالذكاء الاصطناعي</span>
          </div>
          
          <h2
            className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-1000 delay-100 section-title gold-text"
          >
            تقنيات الذكاء الاصطناعي
          </h2>
          <p
            className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-1000 delay-200 text-[#c5c5c5] mt-8 max-w-2xl mx-auto"
          >
            نستخدم أحدث تقنيات الذكاء الاصطناعي لتقديم تجربة فريدة وخدمات متطورة
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-1000"
              style={{ transitionDelay: `${300 + index * 100}ms` }}
            >
              <div className="service-card p-6 h-full group hover:border-[#e3af5a] transition-all">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-[#e3af5a] to-[#c49a4d] rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <feature.icon className="w-7 h-7 text-black" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                    <p className="text-[#c5c5c5] mb-3">{feature.description}</p>
                    <p className="text-[#c5c5c5]/70 text-sm">{feature.details}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* AI Chat Demo */}
        <div
          className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-1000 delay-700 max-w-2xl mx-auto"
        >
          <div className="bg-[#151515] rounded-2xl p-8 border border-[#2a2a2a]">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-[#e3af5a] to-[#c49a4d] rounded-full flex items-center justify-center">
                <Bot className="w-6 h-6 text-black" />
              </div>
              <div>
                <h3 className="text-white font-bold">المساعد الذكي</h3>
                <p className="text-[#c5c5c5] text-sm">جاهز لمساعدتك على مدار الساعة</p>
              </div>
            </div>

            <div className="bg-black rounded-xl p-4 mb-4 h-48 overflow-y-auto">
              {chatMessages.map((msg, i) => (
                <div
                  key={i}
                  className={`mb-3 ${msg.type === 'user' ? 'text-left' : 'text-right'}`}
                >
                  <span
                    className={`inline-block px-4 py-2 rounded-xl text-sm ${
                      msg.type === 'user'
                        ? 'bg-[#e3af5a] text-black'
                        : 'bg-[#2a2a2a] text-white'
                    }`}
                  >
                    {msg.text}
                  </span>
                </div>
              ))}
            </div>

            <div className="flex gap-2">
              <input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                placeholder="اكتب رسالتك هنا..."
                className="flex-1 form-input"
              />
              <button
                onClick={handleSendMessage}
                className="gold-btn px-4"
              >
                <ArrowLeft className="w-5 h-5" />
              </button>
            </div>
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
            <Sparkles className="w-5 h-5" />
            جرب الخدمة الذكية
          </a>
        </div>
      </div>

      {/* Floating AI Button */}
      <button
        onClick={() => setShowChat(!showChat)}
        className="fixed bottom-24 right-8 w-14 h-14 bg-gradient-to-r from-[#e3af5a] to-[#c49a4d] rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform z-50"
      >
        <Bot className="w-6 h-6 text-black" />
      </button>

      {/* Chat Modal */}
      {showChat && (
        <div className="fixed bottom-40 right-8 w-80 bg-[#151515] rounded-2xl shadow-2xl border border-[#2a2a2a] z-50 overflow-hidden">
          <div className="bg-gradient-to-r from-[#e3af5a] to-[#c49a4d] p-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Bot className="w-5 h-5 text-black" />
              <span className="text-black font-bold">المساعد الذكي</span>
            </div>
            <button onClick={() => setShowChat(false)}>
              <X className="w-5 h-5 text-black" />
            </button>
          </div>
          <div className="p-4">
            <p className="text-[#c5c5c5] text-sm text-center">
              قريباً... خدمة المحادثة الذكية المتكاملة
            </p>
          </div>
        </div>
      )}
    </section>
  );
};

export default AIFeatures;
