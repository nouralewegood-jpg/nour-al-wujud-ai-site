import { useState, useRef } from 'react';
import { Upload, Palette, Wand2, Download, RefreshCw, Check } from 'lucide-react';
import { toast } from 'sonner';

const AI_DesignTool = () => {
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const [selectedStyle, setSelectedStyle] = useState<string>('modern');
  const [selectedRoom, setSelectedRoom] = useState<string>('living');
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedDesigns, setGeneratedDesigns] = useState<string[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const styles = [
    { id: 'modern', name: 'عصري', color: '#3b82f6' },
    { id: 'classic', name: 'كلاسيكي', color: '#8b5cf6' },
    { id: 'minimal', name: 'بسيط', color: '#10b981' },
    { id: 'luxury', name: 'فاخر', color: '#f59e0b' },
    { id: 'arabic', name: 'عربي أصيل', color: '#ef4444' },
  ];

  const rooms = [
    { id: 'living', name: 'غرفة معيشة' },
    { id: 'bedroom', name: 'غرفة نوم' },
    { id: 'kitchen', name: 'مطبخ' },
    { id: 'bathroom', name: 'حمام' },
    { id: 'office', name: 'مكتب' },
  ];

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setUploadedImage(event.target?.result as string);
        toast.success('تم رفع الصورة بنجاح');
      };
      reader.readAsDataURL(file);
    }
  };

  const generateDesign = async () => {
    if (!uploadedImage) {
      toast.error('يرجى رفع صورة أولاً');
      return;
    }

    setIsGenerating(true);
    
    // Simulate AI generation
    await new Promise(resolve => setTimeout(resolve, 3000));
    
    // Generate mock designs based on selections
    const mockDesigns = [
      `https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800&q=80`,
      `https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80`,
      `https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&q=80`,
    ];
    
    setGeneratedDesigns(mockDesigns);
    setIsGenerating(false);
    toast.success('تم إنشاء التصاميم بنجاح!');
  };

  return (
    <div className="bg-[#151515] rounded-2xl p-6 border border-[#2a2a2a]">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-12 h-12 bg-gradient-to-br from-[#e3af5a] to-[#c49a4d] rounded-xl flex items-center justify-center">
          <Palette className="w-6 h-6 text-black" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-white">مصمم الديكور الذكي</h3>
          <p className="text-[#c5c5c5] text-sm">صمم منزلك باستخدام الذكاء الاصطناعي</p>
        </div>
      </div>

      {/* Upload Section */}
      <div className="mb-6">
        <label className="block text-white mb-2">ارفع صورة المكان</label>
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
              <p className="text-[#c5c5c5] text-sm">JPG, PNG حتى 10MB</p>
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

      {/* Style Selection */}
      <div className="mb-6">
        <label className="block text-white mb-2">اختر النمط</label>
        <div className="flex flex-wrap gap-2">
          {styles.map((style) => (
            <button
              key={style.id}
              onClick={() => setSelectedStyle(style.id)}
              className={`px-4 py-2 rounded-lg font-medium transition-all ${
                selectedStyle === style.id
                  ? 'bg-[#e3af5a] text-black'
                  : 'bg-[#2a2a2a] text-white hover:bg-[#3a3a3a]'
              }`}
            >
              {style.name}
            </button>
          ))}
        </div>
      </div>

      {/* Room Selection */}
      <div className="mb-6">
        <label className="block text-white mb-2">نوع الغرفة</label>
        <select
          value={selectedRoom}
          onChange={(e) => setSelectedRoom(e.target.value)}
          className="form-input"
        >
          {rooms.map((room) => (
            <option key={room.id} value={room.id}>{room.name}</option>
          ))}
        </select>
      </div>

      {/* Generate Button */}
      <button
        onClick={generateDesign}
        disabled={isGenerating || !uploadedImage}
        className="gold-btn w-full justify-center mb-6 disabled:opacity-50"
      >
        {isGenerating ? (
          <>
            <RefreshCw className="w-5 h-5 animate-spin" />
            جاري إنشاء التصميم...
          </>
        ) : (
          <>
            <Wand2 className="w-5 h-5" />
            إنشاء التصميم
          </>
        )}
      </button>

      {/* Generated Designs */}
      {generatedDesigns.length > 0 && (
        <div>
          <h4 className="text-white font-bold mb-4">التصاميم المقترحة</h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {generatedDesigns.map((design, index) => (
              <div key={index} className="relative group">
                <img
                  src={design}
                  alt={`Design ${index + 1}`}
                  className="w-full h-40 object-cover rounded-lg"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg flex items-center justify-center gap-2">
                  <button className="p-2 bg-[#e3af5a] rounded-lg" title="تحميل">
                    <Download className="w-5 h-5 text-black" />
                  </button>
                  <button className="p-2 bg-green-500 rounded-lg" title="اختيار">
                    <Check className="w-5 h-5 text-white" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default AI_DesignTool;
