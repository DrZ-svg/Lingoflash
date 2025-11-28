import React from 'react';
import { motion } from 'framer-motion';
import { FlashcardData } from '../types';

interface FlashcardProps {
  data: FlashcardData;
  isFlipped: boolean;
  onFlip: () => void;
}

const Flashcard: React.FC<FlashcardProps> = ({ data, isFlipped, onFlip }) => {
  return (
    <div 
      className="w-full max-w-sm h-96 cursor-pointer" 
      onClick={onFlip}
      style={{ perspective: '1000px' }}
    >
      <motion.div
        className="relative w-full h-full text-center rounded-[2.5rem]"
        // Start state for new card (Entrance Animation)
        initial={{ opacity: 0, scale: 0.9, rotateY: 0 }}
        // Animate based on prop (Flip Logic)
        animate={{ opacity: 1, scale: 1, rotateY: isFlipped ? 180 : 0 }}
        // Transitions: Spring for rotation, standard for entrance
        transition={{ 
            rotateY: { duration: 0.6, type: "spring", stiffness: 260, damping: 20 },
            opacity: { duration: 0.3 },
            scale: { duration: 0.3 }
        }}
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* FRONT (English Word + Type) */}
        <div
          className="absolute inset-0 w-full h-full bg-orange-50 rounded-[2.5rem] flex flex-col items-center justify-center p-8 border-[6px] border-amber-200 shadow-xl"
          style={{ 
            backfaceVisibility: 'hidden', 
            WebkitBackfaceVisibility: 'hidden',
            transform: 'rotateX(0deg)' // Force GPU
          }}
        >
            <div className="flex-1 flex flex-col items-center justify-center relative z-10">
                <div className="bg-amber-100 px-6 py-2 rounded-full mb-8 border-2 border-amber-200 shadow-sm">
                    <span className="text-lg uppercase tracking-wider text-amber-700 font-bold">{data.type}</span>
                </div>
                <h2 className="text-6xl font-black text-amber-900 drop-shadow-sm tracking-tight">{data.word}</h2>
            </div>
            
             {/* Decorative circles (Background only) */}
             <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-amber-100/50 rounded-full blur-2xl"></div>
             <div className="absolute -top-10 -left-10 w-32 h-32 bg-yellow-100/50 rounded-full blur-2xl"></div>
        </div>

        {/* BACK (Persian Translation ONLY) */}
        <div
          className="absolute inset-0 w-full h-full bg-[#f0fdf4] rounded-[2.5rem] flex flex-col items-center justify-center p-6 text-gray-800 border-[6px] border-[#bbf7d0] shadow-xl"
          style={{ 
            backfaceVisibility: 'hidden', 
            WebkitBackfaceVisibility: 'hidden',
            transform: 'rotateY(180deg) rotateX(0deg)'
          }}
        >
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-30" style={{ backgroundImage: 'radial-gradient(#86efac 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
          
          <div className="flex-1 flex flex-col items-center justify-center w-full relative z-10">
            {/* Persian Translation - MAIN FOCUS */}
            <div className="w-full py-4 rounded-2xl">
                <h3 
                  className="text-5xl font-bold text-center text-green-800 drop-shadow-sm leading-relaxed" 
                  dir="rtl"
                  style={{ fontFamily: "'Vazirmatn', 'Tahoma', 'Arial', sans-serif" }}
                >
                {data.persianTranslation}
                </h3>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Flashcard;