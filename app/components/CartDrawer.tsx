"use client"

export default function WhatsAppFloatingButton() {
  const whatsappUrl = "https://wa.me/573002639600?text=Hola%2C%20tengo%20inter%C3%A9s%20en%20tus%20productos%20de%20la%20tienda.%20%C2%BFpuedes%20ayudarme%3F";

  return (
    <button
      className="fixed bottom-6 right-6 z-50 w-16 h-16 flex items-center justify-center rounded-full bg-[#25D366] shadow-xl hover:scale-110 hover:shadow-2xl transition-all duration-300 border-2 border-white/90"
      onClick={() => window.open(whatsappUrl, '_blank')}
      aria-label="Contactar por WhatsApp"
      title="¡Chatea por WhatsApp!"
    >

      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-8 h-8 fill-white">
        <path d="M16 3C9.373 3 4 8.373 4 15c0 2.385.832 4.584 2.236 6.364L4 29l7.818-2.236A11.96 11.96 0 0 0 16 27c6.627 0 12-5.373 12-12S22.627 3 16 3zm0 22c-1.89 0-3.68-.52-5.207-1.418l-.37-.22-4.14 1.185 1.185-4.14-.22-.37A8.963 8.963 0 0 1 7 15c0-4.963 4.037-9 9-9s9 4.037 9 9-4.037 9-9 9zm5.29-6.709c-.29-.145-1.71-.844-1.974-.94-.264-.097-.456-.145-.648.145-.193.29-.744.94-.912 1.134-.168.193-.336.217-.626.072-.29-.145-1.225-.452-2.334-1.44-.863-.77-1.445-1.72-1.616-2.01-.168-.29-.018-.447.127-.592.13-.13.29-.336.435-.504.145-.168.193-.29.29-.483.097-.193.048-.362-.024-.504-.072-.145-.648-1.566-.888-2.146-.234-.563-.474-.486-.648-.495-.168-.007-.362-.009-.556-.009-.193 0-.504.072-.768.362-.264.29-1.008.984-1.008 2.397 0 1.413 1.032 2.778 1.176 2.97.145.193 2.04 3.12 4.95 4.253.692.276 1.23.44 1.65.563.692.197 1.312.17 1.803.104.548-.075 1.584-.627 1.813-1.246.23-.62.23-1.15.161-1.246-.067-.097-.264-.168-.554-.313z"/>
      </svg>

    </button>
  );
}
