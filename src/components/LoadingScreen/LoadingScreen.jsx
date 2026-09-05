import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function LoadingScreen({ onComplete }) {
  const [text, setText] = useState('INITIALIZING SYSTEM...');

  useEffect(() => {
    // Updated with professional engineering fields
    const timer1 = setTimeout(() => setText('LOADING EMBEDDED MODULES...'), 800);
    const timer2 = setTimeout(() => setText('CONFIGURING IOT PROTOCOLS...'), 1600);
    const timer3 = setTimeout(() => setText('ESTABLISHING INDUSTRIAL AUTOMATION...'), 2400);
    const timer4 = setTimeout(() => setText('SYSTEM READY.'), 3200);
    const timer5 = setTimeout(() => onComplete(), 3800);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
      clearTimeout(timer5);
    };
  }, [onComplete]);

  return (
    <motion.div 
      className="fixed inset-0 bg-[#050505] flex items-center justify-center z-[9999] text-[#00e5ff] font-mono px-4 text-center"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      <div className="flex items-center gap-3 text-sm md:text-xl tracking-widest">
        <motion.div 
          animate={{ opacity: [0, 1, 0] }}
          transition={{ repeat: Infinity, duration: 0.8 }}
          className="w-3 h-5 bg-[#ff5722] shrink-0"
        />
        <p>{text}</p>
      </div>
    </motion.div>
  );
}