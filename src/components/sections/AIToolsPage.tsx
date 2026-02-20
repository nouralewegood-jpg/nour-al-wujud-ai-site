import { useEffect, useRef, useState } from 'react';
import { Bot, Sparkles, Wand2, Calculator, Search, ChevronRight } from 'lucide-react';
import AI_DesignTool from '../ai-tools/AI_DesignTool';
import AI_PricingTool from '../ai-tools/AI_PricingTool';
import AI_AnalysisTool from '../ai-tools/AI_AnalysisTool';

const AIToolsPage = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeTool, setActiveTool] = useState<'design' | 'pricing' | 'analysis'>('design');

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

  const tools = [
    {
      id: 'design' as const,
      name: 'مصمم الديكور',
      description: 'صمم منزلك باستخدام الذكاء الاصطناعي',
      icon: Wand2,
    },
    {
      id: 'pricing' as const,
      name: 'حاسبة التكلفة',
      description: 'احسب تكلفة مشروعك فوراً',
      icon: Calculator,
    },
    {
      id: 'analysis' as const,
      name: 'محلل المشاكل',
      description: 'حلل مشاكل منزلك بالصور',
      icon: Search,
    },
  ];

  return (
    <section
      id="ai-tools"
      ref={sectionRef}
      className="section-padding bg-gradient-to-b from-black to-[#0a0a0a]"
    >
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-1000 inline-flex items-center gap-2 bg-[#e3af5a]/10 border border-[#e3af5a]/30 rounded-full px-4 py-2 mb-6">
            <Sparkles className="w-4 h-4 text-[#e3af5a]" />
            <span className="text-[#e3af5a] text-sm font-medium">أدوات ذكية متقدمة</span>
          </div>
          
          <h2
            className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-1000 delay-100 section-title gold-text"
          >
            أدوات الذكاء الاصطناعي
          </h2>
          <p
            className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-1000 delay-200 text-[#c5c5c5] mt-8 max-w-2xl mx-auto"
          >
            استخدم أدواتنا الذكية لتصميم منزلك وحساب التكاليف وتحليل المشاكل
          </p>
        </div>

        {/* Tool Selector */}
        <div className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-1000 delay-300 mb-8">
          <div className="flex flex-wrap justify-center gap-4">
            {tools.map((tool) => (
              <button
                key={tool.id}
                onClick={() => setActiveTool(tool.id)}
                className={`flex items-center gap-3 px-6 py-4 rounded-xl transition-all ${
                  activeTool === tool.id
                    ? 'bg-gradient-to-r from-[#e3af5a] to-[#c49a4d] text-black'
                    : 'bg-[#151515] text-white border border-[#2a2a2a] hover:border-[#e3af5a]'
                }`}
              >
                <tool.icon className="w-5 h-5" />
                <div className="text-right">
                  <div className="font-bold">{tool.name}</div>
                  <div className={`text-sm ${activeTool === tool.id ? 'text-black/70' : 'text-[#c5c5c5]'}`}>
                    {tool.description}
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Active Tool */}
        <div className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-1000 delay-400 max-w-4xl mx-auto">
          {activeTool === 'design' && <AI_DesignTool />}
          {activeTool === 'pricing' && <AI_PricingTool />}
          {activeTool === 'analysis' && <AI_AnalysisTool />}
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
          <div className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-1000 delay-500 bg-[#151515] rounded-xl p-6 text-center">
            <Bot className="w-10 h-10 text-[#e3af5a] mx-auto mb-4" />
            <h4 className="text-white font-bold mb-2">ذكاء متقدم</h4>
            <p className="text-[#c5c5c5] text-sm">تقنيات AI حديثة لتحليل دقيق ونتائج موثوقة</p>
          </div>
          <div className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-1000 delay-600 bg-[#151515] rounded-xl p-6 text-center">
            <Sparkles className="w-10 h-10 text-[#e3af5a] mx-auto mb-4" />
            <h4 className="text-white font-bold mb-2">نتائج فورية</h4>
            <p className="text-[#c5c5c5] text-sm">احصل على نتائج في ثوانٍ دون انتظار</p>
          </div>
          <div className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-1000 delay-700 bg-[#151515] rounded-xl p-6 text-center">
            <ChevronRight className="w-10 h-10 text-[#e3af5a] mx-auto mb-4" />
            <h4 className="text-white font-bold mb-2">سهل الاستخدام</h4>
            <p className="text-[#c5c5c5] text-sm">واجهة بسيطة تناسب جميع المستخدمين</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIToolsPage;
