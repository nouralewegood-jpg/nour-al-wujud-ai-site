import { useState, useRef } from 'react';
import { Upload, Search, AlertTriangle, CheckCircle, Lightbulb, FileText } from 'lucide-react';
import { toast } from 'sonner';

const AI_AnalysisTool = () => {
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysis, setAnalysis] = useState<{
    issues: { type: string; severity: 'high' | 'medium' | 'low'; description: string }[];
    recommendations: string[];
    estimatedCost: string;
    timeNeeded: string;
  } | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setUploadedImage(event.target?.result as string);
        setAnalysis(null);
        toast.success('تم رفع الصورة بنجاح');
      };
      reader.readAsDataURL(file);
    }
  };

  const analyzeImage = async () => {
    if (!uploadedImage) {
      toast.error('يرجى رفع صورة أولاً');
      return;
    }

    setIsAnalyzing(true);
    
    // Simulate AI analysis
    await new Promise(resolve => setTimeout(resolve, 3000));
    
    // Mock analysis results
    const mockAnalysis = {
      issues: [
        { type: 'دهان', severity: 'medium' as const, description: 'تشققات ظاهرة في جدار الغرفة' },
        { type: 'كهرباء', severity: 'high' as const, description: 'فيش قديم يحتاج تغيير' },
        { type: 'سباكة', severity: 'low' as const, description: 'تسرب بسيط في الحنفية' },
      ],
      recommendations: [
        'إعادة دهان الجدار بمعجون وطلاء جديد',
        'تركيب فيش حديث مع حماية أطفال',
        'تغيير جلدة الحنفية',
        'فحص كامل للسباكة للتأكد من عدم وجود تسربات أخرى',
      ],
      estimatedCost: '1,500 - 2,500 درهم',
      timeNeeded: '2-3 أيام عمل',
    };
    
    setAnalysis(mockAnalysis);
    setIsAnalyzing(false);
    toast.success('تم التحليل بنجاح!');
  };

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'high':
        return 'text-red-500 bg-red-500/10';
      case 'medium':
        return 'text-yellow-500 bg-yellow-500/10';
      case 'low':
        return 'text-green-500 bg-green-500/10';
      default:
        return 'text-gray-500 bg-gray-500/10';
    }
  };

  const getSeverityText = (severity: string) => {
    switch (severity) {
      case 'high':
        return 'عالي';
      case 'medium':
        return 'متوسط';
      case 'low':
        return 'منخفض';
      default:
        return severity;
    }
  };

  return (
    <div className="bg-[#151515] rounded-2xl p-6 border border-[#2a2a2a]">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-12 h-12 bg-gradient-to-br from-[#e3af5a] to-[#c49a4d] rounded-xl flex items-center justify-center">
          <Search className="w-6 h-6 text-black" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-white">محلل المشاكل الذكي</h3>
          <p className="text-[#c5c5c5] text-sm">حلل مشاكل منزلك بالصور</p>
        </div>
      </div>

      {/* Upload Section */}
      <div className="mb-6">
        <label className="block text-white mb-2">ارفع صورة المشكلة</label>
        <div
          onClick={() => fileInputRef.current?.click()}
          className="border-2 border-dashed border-[#2a2a2a] rounded-xl p-8 text-center cursor-pointer hover:border-[#e3af5a] transition-colors"
        >
          {uploadedImage ? (
            <img src={uploadedImage} alt="Uploaded" className="max-h-48 mx-auto rounded-lg" />
          ) : (
            <>
              <Upload className="w-12 h-12 text-[#e3af5a] mx-auto mb-4" />
              <p className="text-white mb-2">اضغط لرفع صورة</p>
              <p className="text-[#c5c5c5] text-sm">صور واضحة للمشكلة</p>
            </>
          )}
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            className="hidden"
          />
        </div>
      </div>

      {/* Analyze Button */}
      <button
        onClick={analyzeImage}
        disabled={isAnalyzing || !uploadedImage}
        className="gold-btn w-full justify-center mb-6 disabled:opacity-50"
      >
        {isAnalyzing ? (
          <>
            <Search className="w-5 h-5 animate-spin" />
            جاري التحليل...
          </>
        ) : (
          <>
            <Search className="w-5 h-5" />
            تحليل الصورة
          </>
        )}
      </button>

      {/* Analysis Results */}
      {analysis && (
        <div className="animate-fadeIn space-y-6">
          {/* Issues Found */}
          <div>
            <h4 className="text-white font-bold mb-3 flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-[#e3af5a]" />
              المشاكل المكتشفة
            </h4>
            <div className="space-y-3">
              {analysis.issues.map((issue, index) => (
                <div key={index} className="bg-[#0a0a0a] rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-white font-medium">{issue.type}</span>
                    <span className={`px-3 py-1 rounded-full text-sm ${getSeverityColor(issue.severity)}`}>
                      أولوية: {getSeverityText(issue.severity)}
                    </span>
                  </div>
                  <p className="text-[#c5c5c5] text-sm">{issue.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Recommendations */}
          <div>
            <h4 className="text-white font-bold mb-3 flex items-center gap-2">
              <Lightbulb className="w-5 h-5 text-[#e3af5a]" />
              التوصيات
            </h4>
            <div className="bg-[#0a0a0a] rounded-lg p-4">
              <ul className="space-y-2">
                {analysis.recommendations.map((rec, index) => (
                  <li key={index} className="flex items-start gap-2 text-[#c5c5c5]">
                    <CheckCircle className="w-5 h-5 text-[#e3af5a] flex-shrink-0 mt-0.5" />
                    {rec}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Summary */}
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-gradient-to-r from-[#e3af5a]/20 to-transparent rounded-lg p-4">
              <p className="text-[#c5c5c5] text-sm mb-1">التكلفة التقريبية</p>
              <p className="text-xl font-bold gold-text">{analysis.estimatedCost}</p>
            </div>
            <div className="bg-gradient-to-r from-[#e3af5a]/20 to-transparent rounded-lg p-4">
              <p className="text-[#c5c5c5] text-sm mb-1">الوقت المطلوب</p>
              <p className="text-xl font-bold gold-text">{analysis.timeNeeded}</p>
            </div>
          </div>

          {/* CTA */}
          <a
            href="https://wa.me/971508423094"
            target="_blank"
            rel="noopener noreferrer"
            className="gold-btn w-full justify-center"
          >
            <FileText className="w-5 h-5" />
            طلب تقرير مفصل
          </a>
        </div>
      )}
    </div>
  );
};

export default AI_AnalysisTool;
