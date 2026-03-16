"use client"

export default function WhatsAppFloatingButton() {
  const whatsappUrl = "https://wa.me/573002639600?text=Hola%2C%20tengo%20interés%20en%20tus%20productos%20de%20la%20tienda.%20%C2%BFpuedes%20ayudarme%3F";
  return (
    <button
      className="fixed bottom-6 right-6 z-50 w-16 h-16 flex items-center justify-center rounded-full bg-[#25D366] shadow-lg hover:scale-110 hover:shadow-xl transition-all duration-300 border-2 border-white/80"
      onClick={() => window.open(whatsappUrl, '_blank')}
      aria-label="Contactar por WhatsApp"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        className="w-9 h-9 text-white"
        fill="none"
      >
        <circle cx="16" cy="16" r="16" fill="#25D366" />
        <path d="M16 7.5c-4.7 0-8.5 3.8-8.5 8.5 0 1.5.4 2.9 1.1 4.2L7 25l4.9-1.3c1.2.7 2.6 1.1 4.1 1.1 4.7 0 8.5-3.8 8.5-8.5S20.7 7.5 16 7.5zm4.1 12.1c-.2.6-1.1 1.1-1.5 1.2-.4.1-.9.2-1.6-.2-.6-.3-1.9-.7-3.5-2-1.3-1.2-2.2-2.6-2.5-3.2-.3-.6-.1-1 .2-1.2.2-.3.4-.3.6-.3.1 0 .3 0 .4.1.1 0 .3-.1.5.4.2.5.6 1.7.7 1.9.1.1.1.3 0 .5-.1.2-.2.3-.3.5-.2.2-.4.4-.5.5-.2.1-.4.3-.2.6.2.3.9 1.5 2 2.4 1.4 1.2 2.6 1.6 3 1.8.4.2.7.1.9.1.3-.1.9-.4 1-0.7.1-.3.1-.7.1-.8 0-.1-.1-.1-.3-.2z" fill="#fff" />
      </svg>
    </button>
  );
}


