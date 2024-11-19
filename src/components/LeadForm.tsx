import { motion } from 'framer-motion';
import { Send } from 'lucide-react';
import { useForm } from 'react-hook-form';

type FormData = {
  name: string;
  email: string;
  phone: string;
};

export default function LeadForm() {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>();
  const css = {
    input: 'w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary/50 outline-none text-gray-500',
    error: 'text-red-500 text-sm',
    button: 'w-full bg-primary text-white py-3 rounded-lg font-semibold flex items-center justify-center gap-2 hover:bg-primary/90 transition-colors',
  }
  const onSubmit = (data: FormData) => {
    // Here you would typically send the data to your backend
    console.log(data);
    
    // Redirect to WhatsApp with form data
    const message = `¡Hola! Me interesa la promoción de oficinas virtuales.\n\nNombre: ${data.name}\nEmail: ${data.email}\nTeléfono: ${data.phone}`;
    const whatsappUrl = `https://wa.me/526864885707?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="w-full max-w-md mx-auto bg-white rounded-xl shadow-lg p-6"
    >
      <h3 className="text-2xl font-bold text-gray-800 mb-4">¡Obtén tu promoción ahora!</h3>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <input
            {...register("name", { required: true })}
            className={css.input}
            placeholder="Nombre completo"
          />
          {errors.name && <span className={css.error}>Este campo es requerido</span>}
        </div>
        
        <div>
          <input
            {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
            className={css.input}
            placeholder="Correo electrónico"
          />
          {errors.email && <span className={css.error}>Email válido requerido</span>}
        </div>
        
        <div>
          <input
            {...register("phone", { required: true })}
            className={css.input}
            placeholder="Teléfono"
          />
          {errors.phone && <span className="text-red-500 text-sm">Este campo es requerido</span>}
        </div>

        <button
          type="submit"
          className={ css.button}
        >
          <Send size={20} />
          Solicitar información
        </button>
      </form>
    </motion.div>
  );
}