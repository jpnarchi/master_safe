import React from 'react';

const WhatsAppButton = () => {
  return (
    <a
      href="https://api.whatsapp.com/send?phone=525512040947"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-50 bg-[#25D366] hover:bg-[#20BD5C] rounded-full p-4 shadow-lg transition-all duration-300 hover:scale-110"
      aria-label="Chat on WhatsApp"
    >
      <img
        src="/icons8-whatsapp.svg"
        alt="WhatsApp"
        className="w-8 h-8"
      />
    </a>
  );
};

export default WhatsAppButton;