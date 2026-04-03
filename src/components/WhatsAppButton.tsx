import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  const phone = "9613123456";
  const message = encodeURIComponent("Hello, I'd like to inquire about your curtain services.");
  const url = `https://wa.me/${phone}?text=${message}`;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contact us on WhatsApp"
      className="fixed bottom-6 right-6 z-40 w-14 h-14 rounded-full bg-[hsl(142,70%,40%)] flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200"
    >
      <MessageCircle size={26} className="text-[hsl(0,0%,100%)]" fill="currentColor" />
    </a>
  );
};

export default WhatsAppButton;
