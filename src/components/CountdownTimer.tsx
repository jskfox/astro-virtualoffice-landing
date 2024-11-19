import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const targetDate = new Date('2024-11-28T23:59:59');
/* Fix for hydration mismatch error 
  const currentTime = new Date().toLocaleTimeString();
  return <div suppressHydrationWarning>The current time is: {currentTime}</div>;
*/
const CountdownTimer = () => {
    const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  function calculateTimeLeft() {
    const difference = targetDate.getTime() - new Date().getTime();
    
    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60)
    };
  }

  useEffect(() => {
    // const timeleft = calculateTimeLeft()
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const timeBlocks = [
    { label: 'Días', value: timeLeft.days },
    { label: 'Horas', value: timeLeft.hours },
    { label: 'Minutos', value: timeLeft.minutes },
    { label: 'Segundos', value: timeLeft.seconds }
  ];

  return (
    <div className="flex gap-4 justify-center">
      {timeBlocks.map((block, index) => (
        <motion.div
          key={`label-${block.label}`}
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: index * 0.1 }}
          className="flex flex-col items-center bg-white/30 backdrop-blur-sm rounded-lg p-3 min-w-[80px]"
        >
          <motion.span
            key={`val-${block.value}`}
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-3xl font-bold"
          >
            {String(block.value).padStart(2, '0')}
          </motion.span>
          <span className="text-sm">{block.label}</span>
        </motion.div>
      ))}
    </div>
  );
};

export default CountdownTimer;