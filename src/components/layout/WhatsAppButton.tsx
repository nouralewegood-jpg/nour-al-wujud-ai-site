import { Phone, MessageCircle } from 'lucide-react';

const WhatsAppButton = () => {
  return (
    <>
      {/* WhatsApp Float Button */}
      <a
        href="https://wa.me/971508423094"
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-float"
        aria-label="تواصل عبر واتساب"
      >
        <MessageCircle className="w-8 h-8" />
      </a>

      {/* Phone Float Button */}
      <a
        href="tel:0508423094"
        className="phone-float"
        aria-label="اتصل بنا"
      >
        <Phone className="w-7 h-7" />
      </a>
    </>
  );
};

export default WhatsAppButton;
