import { FaWhatsapp } from "react-icons/fa";

export const WhatsAppButton = () => {
  const phoneNumber = "5512976024936";
  const message = "Olá! Gostaria de saber mais sobre os serviços.";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-whatsapp hover:bg-whatsapp/90 text-white rounded-full p-4 shadow-2xl hover:scale-110 transition-all duration-300 animate-fade-in"
      aria-label="Contato via WhatsApp"
    >
      <FaWhatsapp className="w-8 h-8" />
    </a>
  );
};
