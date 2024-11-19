import { motion } from 'framer-motion';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

const services = [
  {
    title: "Coworking",
    description: "Espacio de trabajo flexible y profesional con todos los servicios incluidos",
    image: "https://images.unsplash.com/photo-1517502884422-41eaead166d4?auto=format&fit=crop&q=80",
    link: "https://www.cobak.mx/coworking/"
  },
  {
    title: "Oficinas Privadas",
    description: "Espacios exclusivos para ti y tu equipo, completamente amueblados",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80",
    link: "https://www.cobak.mx/oficina-privada/"
  },
  {
    title: "Salas de Juntas y Capacitación",
    description: "Espacios equipados para reuniones y eventos corporativos",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80",
    link: "https://www.cobak.mx/sala-de-juntas/"
  }
];

const ServiceCarousel = () => {
  return (
    <Swiper
      modules={[Autoplay]}
      spaceBetween={30}
      slidesPerView={1}
      loop={true}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      breakpoints={{
        640: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
      }}
      className="w-full py-8"
    >
      {services.map((service, index) => (
        <SwiperSlide key={index}>
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="relative overflow-hidden rounded-xl shadow-lg group h-80"
          >
            <div 
              className="absolute inset-0 bg-cover bg-center transform group-hover:scale-110 transition-transform duration-500"
              style={{ backgroundImage: `url(${service.image})` }}
            />
            <div className="absolute inset-0 bg-black/50 p-6 flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-semibold mb-4 text-white">{service.title}</h3>
                <p className="text-white/90 mb-4">
                  {service.description}
                </p>
              </div>
              <a 
                href={`https://www.cobak.mx${service.link}`}
                className="text-white font-semibold hover:text-primary transition-colors"
              >
                Más información →
              </a>
            </div>
          </motion.div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ServiceCarousel;