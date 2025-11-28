import React from 'react';
import { motion } from 'framer-motion';

interface BearMascotProps {
  emotion: 'happy' | 'sad' | 'neutral';
}

const BearMascot: React.FC<BearMascotProps> = ({ emotion }) => {
  return (
    <div className="relative w-48 h-48 flex items-center justify-center">
      <motion.svg
        viewBox="0 0 100 100"
        className="w-full h-full drop-shadow-xl"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
      >
        <motion.g
          animate={
            emotion === 'happy'
              ? { y: [0, -10, 0], rotate: [0, -5, 5, 0] }
              : emotion === 'sad'
              ? { y: [0, 5, 0], rotate: [0, 2, -2, 0] }
              : {}
          }
          transition={{
            duration: emotion === 'happy' ? 0.6 : 2,
            repeat: Infinity,
            repeatType: 'reverse'
          }}
        >
          {/* Ears */}
          <circle cx="25" cy="30" r="12" fill="#B45309" />
          <circle cx="75" cy="30" r="12" fill="#B45309" />
          <circle cx="25" cy="30" r="6" fill="#FCD34D" />
          <circle cx="75" cy="30" r="6" fill="#FCD34D" />

          {/* Head */}
          <circle cx="50" cy="50" r="35" fill="#D97706" stroke="#92400E" strokeWidth="2" />

          {/* Snout */}
          <ellipse cx="50" cy="60" rx="14" ry="11" fill="#FEF3C7" />
          <motion.circle 
            cx="50" 
            cy="56" 
            r="4" 
            fill="#451A03" 
            animate={emotion === 'happy' ? { scale: [1, 1.1, 1] } : {}}
          />

          {/* Eyes */}
          {emotion === 'happy' ? (
            <>
               {/* Happy Eyes (Arches) */}
               <path d="M 38 48 Q 42 42 46 48" fill="none" stroke="#451A03" strokeWidth="3" strokeLinecap="round" />
               <path d="M 54 48 Q 58 42 62 48" fill="none" stroke="#451A03" strokeWidth="3" strokeLinecap="round" />
            </>
          ) : emotion === 'sad' ? (
            <>
              {/* Sad Eyes (Crosses or Lines) */}
              <path d="M 38 46 L 46 50" stroke="#451A03" strokeWidth="3" strokeLinecap="round" />
              <path d="M 46 46 L 38 50" stroke="#451A03" strokeWidth="3" strokeLinecap="round" />
              
              <path d="M 54 46 L 62 50" stroke="#451A03" strokeWidth="3" strokeLinecap="round" />
              <path d="M 62 46 L 54 50" stroke="#451A03" strokeWidth="3" strokeLinecap="round" />
              
              {/* Tears */}
              <motion.circle 
                cx="35" cy="55" r="3" fill="#60A5FA"
                animate={{ y: [0, 20], opacity: [1, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
            </>
          ) : (
            <>
              {/* Neutral Eyes (Dots) */}
              <circle cx="40" cy="48" r="3" fill="#451A03" />
              <circle cx="60" cy="48" r="3" fill="#451A03" />
            </>
          )}

          {/* Mouth */}
          {emotion === 'happy' ? (
            <path d="M 45 65 Q 50 70 55 65" fill="none" stroke="#451A03" strokeWidth="2" strokeLinecap="round" />
          ) : emotion === 'sad' ? (
            <path d="M 45 68 Q 50 63 55 68" fill="none" stroke="#451A03" strokeWidth="2" strokeLinecap="round" />
          ) : (
            <path d="M 48 65 L 52 65" stroke="#451A03" strokeWidth="2" strokeLinecap="round" />
          )}
          
          {/* Cheeks */}
          <circle cx="30" cy="58" r="4" fill="#F87171" opacity="0.6" />
          <circle cx="70" cy="58" r="4" fill="#F87171" opacity="0.6" />

        </motion.g>

        {/* Happy Hands */}
        {emotion === 'happy' && (
             <motion.g
                initial={{ rotate: 0 }}
                animate={{ rotate: [0, -20, 20, 0] }}
                transition={{ duration: 0.5, repeat: Infinity }}
             >
                <circle cx="15" cy="60" r="8" fill="#D97706" />
                <circle cx="85" cy="60" r="8" fill="#D97706" />
             </motion.g>
        )}
      </motion.svg>
    </div>
  );
};

export default BearMascot;
