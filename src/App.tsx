import React from 'react';
import { motion } from 'framer-motion';
import { Building2, Clock, MapPin, Users, Briefcase, Video, Mail, Phone, Calendar, ArrowRight } from 'lucide-react';
import LeadForm from './components/LeadForm';
import CountdownTimer from './components/CountdownTimer';
import AnimatedSection from './components/AnimatedSection';
import WhatsAppButton from './components/WhatsAppButton';
import ServiceCarousel from './components/ServiceCarousel';

function App() {
  const scrollToForm = () => {
    const form = document.getElementById('lead-form');
    form?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <WhatsAppButton />
      
      {/* Hero Section */}
      <header 
        className="relative min-h-[80vh] flex items-center text-white py-20 overflow-hidden"
        style={{
          backgroundColor: '#e3463d',
          backgroundImage: "url('https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80')",
          backgroundBlendMode: 'multiply',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <motion.h1 
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
              className="text-6xl font-bold mb-6"
            >
              Tu Oficina Virtual en Mexicali
            </motion.h1>
            <motion.p 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-3xl mb-8"
            >
              ¡Paga 5 meses y obtén el 6to GRATIS!
            </motion.p>
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mb-8"
            >
              <p className="text-xl mb-4">La promoción termina en:</p>
              <CountdownTimer />
            </motion.div>
            <motion.button
              onClick={scrollToForm}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-8 bg-white text-primary px-8 py-4 rounded-full font-bold text-lg shadow-lg flex items-center gap-2 mx-auto hover:bg-gray-100 transition-colors"
            >
              ¡Obtener Promoción Ahora! <ArrowRight className="w-5 h-5" />
            </motion.button>
          </motion.div>
        </div>
      </header>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <h2 className="text-4xl font-bold text-center mb-12">Ventajas de tu Oficina Virtual</h2>
          </AnimatedSection>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Building2 className="w-8 h-8 text-primary" />,
                title: "Dirección Comercial Prestigiosa",
                description: "Ubicación privilegiada en Mexicali para tu negocio",
                image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80"
              },
              {
                icon: <Mail className="w-8 h-8 text-primary" />,
                title: "Gestión de Correspondencia",
                description: "Recepción y manejo profesional de tu correo",
                image: "https://images.unsplash.com/photo-1497215842964-222b430dc094?auto=format&fit=crop&q=80"
              },
              {
                icon: <Phone className="w-8 h-8 text-primary" />,
                title: "Atención Telefónica",
                description: "Recepcionista profesional para tus llamadas",
                image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&q=80"
              },
              {
                icon: <Video className="w-8 h-8 text-primary" />,
                title: "Salas de Juntas",
                description: "Acceso a espacios profesionales para reuniones",
                image: "https://images.unsplash.com/photo-1517502884422-41eaead166d4?auto=format&fit=crop&q=80"
              },
              {
                icon: <Calendar className="w-8 h-8 text-primary" />,
                title: "Flexibilidad",
                description: "Sin contratos largos ni inversiones grandes",
                image: "https://images.unsplash.com/photo-1497215842964-222b430dc094?auto=format&fit=crop&q=80"
              },
              {
                icon: <MapPin className="w-8 h-8 text-primary" />,
                title: "Ubicación Céntrica",
                description: "Fácil acceso en zona comercial de Mexicali",
                image: "https://images.unsplash.com/photo-1622544804887-460e21b92ec0?auto=format&fit=crop&q=80"
              }
            ].map((benefit, index) => (
              <AnimatedSection key={index}>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="relative overflow-hidden rounded-xl shadow-lg group"
                >
                  <div 
                    className="absolute inset-0 bg-cover bg-center z-0 transform group-hover:scale-110 transition-transform duration-500"
                    style={{ backgroundImage: `url(${benefit.image})` }}
                  />
                  <div className="relative bg-black/50 backdrop-blur-sm p-6 h-full z-10">
                    <div className="text-white mb-4">{benefit.icon}</div>
                    <h3 className="text-xl font-semibold mb-2 text-white">{benefit.title}</h3>
                    <p className="text-white/90">{benefit.description}</p>
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section 
        id="lead-form"
        className="py-20 text-white relative"
        style={{
          backgroundColor: '#686868',
          backgroundImage: "url('https://images.unsplash.com/photo-1497366858526-0766cadbe8fa?auto=format&fit=crop&q=80')",
          backgroundBlendMode: 'multiply',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <div>
                <h2 className="text-4xl font-bold mb-6">
                  ¡Aprovecha esta oferta exclusiva!
                </h2>
                <p className="text-xl mb-8">
                  Obtén un mes GRATIS al contratar 5 meses de Oficina Virtual
                </p>
                <ul className="space-y-4">
                  <motion.li 
                    className="flex items-center gap-2"
                    whileHover={{ x: 10 }}
                  >
                    <Clock className="w-6 h-6" />
                    Oferta por tiempo limitado
                  </motion.li>
                  <motion.li 
                    className="flex items-center gap-2"
                    whileHover={{ x: 10 }}
                  >
                    <Users className="w-6 h-6" />
                    Soporte personalizado
                  </motion.li>
                  <motion.li 
                    className="flex items-center gap-2"
                    whileHover={{ x: 10 }}
                  >
                    <Briefcase className="w-6 h-6" />
                    Servicios profesionales incluidos
                  </motion.li>
                </ul>
              </div>
            </AnimatedSection>
            <AnimatedSection>
              <LeadForm />
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-gray-50 overflow-hidden">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <h2 className="text-3xl font-bold text-center mb-12">Otros Servicios en COBAK</h2>
          </AnimatedSection>
          <ServiceCarousel />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            <AnimatedSection>
              <div>
                <h3 className="text-2xl font-bold mb-4">COBAK</h3>
                <p className="mb-4">Centro de negocios y coworking en Mexicali</p>
                <div className="flex items-center gap-2 mb-2">
                  <MapPin className="w-5 h-5" />
                  <span>Mexicali, Baja California</span>
                </div>
                <a
                  href="https://www.cobak.mx"
                  className="text-primary hover:text-primary/80 transition-colors"
                >
                  www.cobak.mx
                </a>
              </div>
            </AnimatedSection>
            <AnimatedSection>
              <div className="text-right">
                <h4 className="text-xl font-semibold mb-4">Contáctanos</h4>
                <a href="tel:+526864885707" className="block hover:text-primary transition-colors">
                  +52 (686) 488-5707
                </a>
                <a href="mailto:info@cobak.mx" className="block hover:text-primary transition-colors">
                  info@cobak.mx
                </a>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;