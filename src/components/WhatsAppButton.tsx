import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

const WhatsAppButton = () => {
  const whatsappNumber = '+526864885707';
  const message = '¡Hola! Me interesa saber más sobre las oficinas virtuales de COBAK.';

  const handleClick = () => {
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <motion.div
      onClick={handleClick}
      className="fixed md:hidden bottom-6 right-6 z-50 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-all duration-300 hover:shadow-xl transform hover:scale-105 cursor-pointer group"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      aria-label="Enviar mensaje por Messenger"
    >
      <MessageCircle size={28} className='animate-pulse group-hover:animate-none'/>
      <div className="absolute -top-12 right-0 bg-gray-800 text-white text-sm py-2 px-4 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
        Envíanos un Whatsapp
        <div className="absolute bottom-[-6px] right-6 w-3 h-3 bg-gray-800 transform rotate-45" />
      </div>
    </motion.div>
  );
};

export default WhatsAppButton;