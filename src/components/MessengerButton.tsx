import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

const MessengerButton = () => {
  const handleClick = () => {
    const message = encodeURIComponent(
      "¡Hola! Me interesa saber más sobre las oficinas virtuales de COBAK."
    );
    window.open(`https://m.me/cobak.mx?text=${message}`, "_blank");
  };

  return (
    <motion.button

    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }}
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
            
      onClick={handleClick}
      className="hidden fixed md:block bottom-6 right-6 bg-[#0084ff] hover:bg-[#0063cc] transition-all duration-300 
                 rounded-full p-4 shadow-lg hover:shadow-xl transform hover:scale-105 
                 cursor-pointer z-50 group"
      aria-label="Enviar mensaje por Messenger"
    >
      <MessageCircle
        size={28}
        className="text-white animate-pulse group-hover:animate-none"
      />
      <div
        className="absolute -top-12 right-0 bg-gray-800 text-white text-sm py-2 px-4 
                      rounded-lg opacity-0 group-hover:opacity-100 transition-opacity 
                      duration-300 whitespace-nowrap"
      >
        Envíanos un mensaje por facebook
        <div
          className="absolute bottom-[-6px] right-6 w-3 h-3 bg-gray-800 
                       transform rotate-45"
        ></div>
      </div>
    </motion.button>
  );
};

export default MessengerButton;
