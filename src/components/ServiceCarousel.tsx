import { motion } from 'framer-motion';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import localImg03 from '../assets/office-03.webp';
import localImg05 from '../assets/office-05.webp';
import localImg07 from '../assets/office-07.webp';
import localImg08 from '../assets/office-08.webp';

const services = [
  {
    title: "Coworking",
    description: "Espacios compartidos de trabajo flexible y profesional en un ambiente amigable y emprendedor con beneficios exclusivos. Tenemos distintos planes para adaptarse a los requerimientos de tu proyecto, por horas, día y mensuales.",
    image: localImg05,
    link: "/coworking/"
  },
  {
    title: "Oficinas Privadas",
    description: "Espacios de oficina privada para tí y tu equipo completamente amueblados con todos los servicios incluidos y lo necesario para empezar a trabajar. Nuestro compromiso es transmitir una imagen y un servicio de excelencia a todos nuestros clientes.",
    image: localImg03,
    link: "/oficina-privada/"
  },
  {
    title: "Salas de Juntas y Capacitación",
    description: "Realiza tus reuniones de negocios, entrevistas, capacitaciones o presentaciones en una sala equipada, con servicio de recepción a tus invitados. Te proporcionamos todos los elementos necesarios para la celebración de tu junta",
    image: localImg07,
    link: "/sala-de-juntas/"
  },
  {
    title: "Oficinas Virtuales",
    description: "Lo necesario para formalizar tu empresa con un domicilio fiscal, postal y comercial, atención de llamadas y manejo de correspondencia. Obtén una imagen corporativa para tu negocio.",
    image: localImg08,
    link: "/oficina-virtual/"
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
        delay: 2000,
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
        <SwiperSlide key={index} className='p-4'>
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="relative overflow-hidden rounded-xl shadow-lg group h-80"
          >
            <div 
              className="absolute inset-0 bg-cover bg-center transform group-hover:scale-110 transition-transform duration-500"
              style={{ backgroundImage: `url('${service.image.src}')` }}              
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