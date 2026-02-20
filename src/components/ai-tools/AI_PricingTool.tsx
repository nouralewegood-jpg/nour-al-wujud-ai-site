import { useState } from 'react';
import { Calculator, Home, Ruler, Paintbrush, Layers, Zap, ArrowLeft, RefreshCw } from 'lucide-react';
import { toast } from 'sonner';

const AI_PricingTool = () => {
  const [step, setStep] = useState(1);
  const [service, setService] = useState('');
  const [area, setArea] = useState('');
  const [details, setDetails] = useState({
    rooms: 1,
    quality: 'standard',
    urgency: 'normal',
  });
  const [isCalculating, setIsCalculating] = useState(false);
  const [estimate, setEstimate] = useState<{
    min: number;
    max: number;
    breakdown: { item: string; cost: number }[];
  } | null>(null);

  const services = [
    { id: 'painting', name: 'دهانات', icon: Paintbrush, basePrice: 15 },
    { id: 'gypsum', name: 'جبس بورد', icon: Layers, basePrice: 80 },
    { id: 'electrical', name: 'كهرباء', icon: Zap, basePrice: 25 },
    { id: 'plumbing', name: 'سباكة', icon: Home, basePrice: 30 },
    { id: 'ceramic', name: 'سيراميك', icon: Ruler, basePrice: 45 },
  ];

  const qualities = [
    { id: 'economy', name: 'اقتصادي', multiplier: 0.8 },
    { id: 'standard', name: 'عادي', multiplier: 1 },
    { id: 'premium', name: 'فاخر', multiplier: 1.5 },
  ];

  const urgencies = [
    { id: 'normal', name: 'عادي (7-14 يوم)', multiplier: 1 },
    { id: 'fast', name: 'سريع (3-7 أيام)', multiplier: 1.3 },
    { id: 'urgent', name: 'طارئ (1-3 أيام)', multiplier: 1.6 },
  ];

  const calculateEstimate = async () => {
    setIsCalculating(true);
    
    // Simulate AI calculation
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    const selectedService = services.find(s => s.id === service);
    const selectedQuality = qualities.find(q => q.id === details.quality);
    const selectedUrgency = urgencies.find(u => u.id === details.urgency);
    
    if (selectedService && selectedQuality && selectedUrgency) {
      const areaNum = parseInt(area) || 0;
      const baseCost = areaNum * selectedService.basePrice;
      const qualityCost = baseCost * selectedQuality.multiplier;
      const urgencyCost = qualityCost * selectedUrgency.multiplier;
      
      const min = Math.round(urgencyCost * 0.9);
      const max = Math.round(urgencyCost * 1.1);
      
      const breakdown = [
        { item: 'مواد', cost: Math.round(urgencyCost * 0.5) },
        { item: 'عمالة', cost: Math.round(urgencyCost * 0.35) },
        { item: 'نقل وأدوات', cost: Math.round(urgencyCost * 0.15) },
      ];
      
      setEstimate({ min, max, breakdown });
      toast.success('تم حساب التقدير بنجاح!');
    }
    
    setIsCalculating(false);
  };

  const reset = () => {
    setStep(1);
    setService('');
    setArea('');
    setDetails({ rooms: 1, quality: 'standard', urgency: 'normal' });
    setEstimate(null);
  };

  return (
    <div className="bg-[#151515] rounded-2xl p-6 border border-[#2a2a2a]">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-12 h-12 bg-gradient-to-br from-[#e3af5a] to-[#c49a4d] rounded-xl flex items-center justify-center">
          <Calculator className="w-6 h-6 text-black" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-white">حاسبة التكلفة الذكية</h3>
          <p className="text-[#c5c5c5] text-sm">احسب تكلفة مشروعك فوراً</p>
        </div>
      </div>

      {/* Progress */}
      <div className="flex gap-2 mb-6">
        {[1, 2, 3].map((s) => (
          <div
            key={s}
            className={`flex-1 h-2 rounded-full transition-colors ${
              s <= step ? 'bg-[#e3af5a]' : 'bg-[#2a2a2a]'
            }`}
          />
        ))}
      </div>

      {/* Step 1: Service Selection */}
      {step === 1 && (
        <div>
          <label className="block text-white mb-4">اختر الخدمة</label>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-6">
            {services.map((s) => (
              <button
                key={s.id}
                onClick={() => setService(s.id)}
                className={`p-4 rounded-xl border transition-all ${
                  service === s.id
                    ? 'border-[#e3af5a] bg-[#e3af5a]/10'
                    : 'border-[#2a2a2a] hover:border-[#3a3a3a]'
                }`}
              >
                <s.icon className={`w-6 h-6 mx-auto mb-2 ${service === s.id ? 'text-[#e3af5a]' : 'text-[#c5c5c5]'}`} />
                <span className={service === s.id ? 'text-white' : 'text-[#c5c5c5]'}>{s.name}</span>
              </button>
            ))}
          </div>
          <button
            onClick={() => service && setStep(2)}
            disabled={!service}
            className="gold-btn w-full justify-center disabled:opacity-50"
          >
            التالي
            <ArrowLeft className="w-5 h-5" />
          </button>
        </div>
      )}

      {/* Step 2: Details */}
      {step === 2 && (
        <div>
          <div className="mb-4">
            <label className="block text-white mb-2">المساحة (متر مربع)</label>
            <input
              type="number"
              value={area}
              onChange={(e) => setArea(e.target.value)}
              className="form-input"
              placeholder="مثال: 100"
            />
          </div>

          <div className="mb-4">
            <label className="block text-white mb-2">عدد الغرف</label>
            <div className="flex gap-2">
              {[1, 2, 3, 4, 5].map((num) => (
                <button
                  key={num}
                  onClick={() => setDetails({ ...details, rooms: num })}
                  className={`w-10 h-10 rounded-lg font-bold transition-all ${
                    details.rooms === num
                      ? 'bg-[#e3af5a] text-black'
                      : 'bg-[#2a2a2a] text-white hover:bg-[#3a3a3a]'
                  }`}
                >
                  {num}
                </button>
              ))}
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-white mb-2">جودة المواد</label>
            <div className="flex flex-wrap gap-2">
              {qualities.map((q) => (
                <button
                  key={q.id}
                  onClick={() => setDetails({ ...details, quality: q.id })}
                  className={`px-4 py-2 rounded-lg transition-all ${
                    details.quality === q.id
                      ? 'bg-[#e3af5a] text-black'
                      : 'bg-[#2a2a2a] text-white hover:bg-[#3a3a3a]'
                  }`}
                >
                  {q.name}
                </button>
              ))}
            </div>
          </div>

          <div className="mb-6">
            <label className="block text-white mb-2">سرعة التنفيذ</label>
            <div className="flex flex-wrap gap-2">
              {urgencies.map((u) => (
                <button
                  key={u.id}
                  onClick={() => setDetails({ ...details, urgency: u.id })}
                  className={`px-4 py-2 rounded-lg transition-all ${
                    details.urgency === u.id
                      ? 'bg-[#e3af5a] text-black'
                      : 'bg-[#2a2a2a] text-white hover:bg-[#3a3a3a]'
                  }`}
                >
                  {u.name}
                </button>
              ))}
            </div>
          </div>

          <div className="flex gap-3">
            <button
              onClick={() => setStep(1)}
              className="outline-btn flex-1"
            >
              السابق
            </button>
            <button
              onClick={() => area && setStep(3)}
              disabled={!area}
              className="gold-btn flex-1 justify-center disabled:opacity-50"
            >
              التالي
              <ArrowLeft className="w-5 h-5" />
            </button>
          </div>
        </div>
      )}

      {/* Step 3: Calculate */}
      {step === 3 && !estimate && (
        <div className="text-center py-8">
          <p className="text-white mb-6">جاهز لحساب التكلفة؟</p>
          <button
            onClick={calculateEstimate}
            disabled={isCalculating}
            className="gold-btn justify-center disabled:opacity-50"
          >
            {isCalculating ? (
              <>
                <RefreshCw className="w-5 h-5 animate-spin" />
                جاري الحساب...
              </>
            ) : (
              <>
                <Calculator className="w-5 h-5" />
                احسب التكلفة
              </>
            )}
          </button>
        </div>
      )}

      {/* Result */}
      {estimate && (
        <div className="animate-fadeIn">
          <div className="bg-gradient-to-r from-[#e3af5a]/20 to-transparent rounded-xl p-6 mb-6">
            <p className="text-[#c5c5c5] mb-2">التقدير التقريبي</p>
            <div className="flex items-baseline gap-2">
              <span className="text-4xl font-bold gold-text">{estimate.min.toLocaleString()}</span>
              <span className="text-[#c5c5c5]">-</span>
              <span className="text-4xl font-bold gold-text">{estimate.max.toLocaleString()}</span>
              <span className="text-[#c5c5c5]">درهم</span>
            </div>
          </div>

          <div className="mb-6">
            <h4 className="text-white font-bold mb-3">تفاصيل التكلفة</h4>
            {estimate.breakdown.map((item, index) => (
              <div key={index} className="flex justify-between py-2 border-b border-[#2a2a2a]">
                <span className="text-[#c5c5c5]">{item.item}</span>
                <span className="text-white">{item.cost.toLocaleString()} درهم</span>
              </div>
            ))}
          </div>

          <div className="flex gap-3">
            <button
              onClick={reset}
              className="outline-btn flex-1"
            >
              <RefreshCw className="w-5 h-5" />
              حساب جديد
            </button>
            <a
              href="https://wa.me/971508423094"
              target="_blank"
              rel="noopener noreferrer"
              className="gold-btn flex-1 justify-center"
            >
              طلب عرض رسمي
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default AI_PricingTool;
