import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { INITIAL_VOCABULARY } from './constants';
import { FlashcardData, ViewMode } from './types';
import Flashcard from './components/Flashcard';
import AddWordForm from './components/AddWordForm';
import WordList from './components/WordList';
import BearMascot from './components/BearMascot';
import { Book, Plus, Home, Check, X, Sparkles, Feather } from 'lucide-react';

// Leitner System Intervals (in days)
const INTERVALS = [1, 3, 7, 14, 30];

const App: React.FC = () => {
  const [words, setWords] = useState<FlashcardData[]>([]);
  const [studyQueue, setStudyQueue] = useState<FlashcardData[]>([]);
  const [isFlipped, setIsFlipped] = useState(false);
  const [viewMode, setViewMode] = useState<ViewMode>('study');
  const [isLoading, setIsLoading] = useState(true);
  
  // New state for Bear Feedback
  const [feedback, setFeedback] = useState<'correct' | 'incorrect' | null>(null);

  useEffect(() => {
    const saved = localStorage.getItem('farsi-flashcards-data');
    if (saved) {
      try {
        const parsed: FlashcardData[] = JSON.parse(saved);
        const hydrated = parsed.map(w => ({
          ...w,
          box: w.box || 1,
          nextReviewDate: w.nextReviewDate || Date.now()
        }));
        setWords(hydrated);
      } catch (e) {
        console.error("Failed to parse local storage", e);
        setWords(INITIAL_VOCABULARY);
      }
    } else {
      setWords(INITIAL_VOCABULARY);
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    if (isLoading) return;
    if (studyQueue.length === 0) {
      const now = Date.now();
      const dueWords = words.filter(w => w.nextReviewDate <= now);
      setStudyQueue(dueWords);
    }
  }, [words, isLoading, viewMode]);

  useEffect(() => {
    if (!isLoading && words.length > 0) {
      localStorage.setItem('farsi-flashcards-data', JSON.stringify(words));
    }
  }, [words, isLoading]);

  const handleAddWord = (newWord: FlashcardData) => {
    setWords(prev => [newWord, ...prev]);
    setStudyQueue(prev => [newWord, ...prev]);
    setViewMode('study');
    setIsFlipped(false);
  };

  const handleReviewResult = (isCorrect: boolean) => {
    if (studyQueue.length === 0) return;

    // 1. Show Bear Animation
    setFeedback(isCorrect ? 'correct' : 'incorrect');

    // 2. Wait for animation, then process data
    setTimeout(() => {
        processReviewResult(isCorrect);
        setFeedback(null);
    }, 1800); // Wait 1.8 seconds for the cute animation
  };

  const processReviewResult = (isCorrect: boolean) => {
    const currentCard = studyQueue[0];
    let newBox = currentCard.box;
    let newNextReviewDate = currentCard.nextReviewDate;

    if (isCorrect) {
      newBox = Math.min(newBox + 1, 5);
      const days = INTERVALS[newBox - 1];
      newNextReviewDate = Date.now() + (days * 24 * 60 * 60 * 1000);
    } else {
      newBox = 1;
      newNextReviewDate = Date.now();
    }

    const updatedCard = {
      ...currentCard,
      box: newBox,
      nextReviewDate: newNextReviewDate
    };

    setWords(prev => prev.map(w => w.id === currentCard.id ? updatedCard : w));

    // Reset flip state BEFORE changing the card (although key change handles the visual reset)
    setIsFlipped(false);

    if (isCorrect) {
      setStudyQueue(prev => prev.slice(1));
    } else {
      setStudyQueue(prev => [...prev.slice(1), updatedCard]);
    }
  };

  const currentCard = studyQueue[0];

  return (
    <div className="min-h-screen bg-[#FFF8E7] flex flex-col font-fredoka text-gray-800 relative overflow-hidden selection:bg-amber-200">
      {/* Background Decorations */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-amber-200/20 rounded-full blur-3xl z-0 pointer-events-none"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-orange-200/20 rounded-full blur-3xl z-0 pointer-events-none"></div>

      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b border-amber-100 px-6 py-4 flex justify-between items-center sticky top-0 z-40 shadow-sm">
        <div className="flex items-center gap-2">
          <div className="bg-amber-500 p-2 rounded-xl text-white shadow-md shadow-amber-200">
            <Book size={20} strokeWidth={2.5} />
          </div>
          <h1 className="text-xl font-bold text-amber-900 tracking-tight">Forest Words</h1>
        </div>
        
        <div className="flex bg-amber-50 p-1 rounded-xl border border-amber-100">
          <button 
            onClick={() => setViewMode('study')}
            className={`px-4 py-1.5 rounded-lg text-sm font-bold transition-all flex items-center gap-2 ${viewMode === 'study' ? 'bg-white text-amber-600 shadow-sm' : 'text-amber-800/50 hover:text-amber-700'}`}
          >
            <Home size={16} />
            Study
          </button>
          <button 
            onClick={() => setViewMode('list')}
            className={`px-4 py-1.5 rounded-lg text-sm font-bold transition-all flex items-center gap-2 ${viewMode === 'list' ? 'bg-white text-amber-600 shadow-sm' : 'text-amber-800/50 hover:text-amber-700'}`}
          >
             <Feather size={16} />
            List
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center justify-center p-4 relative w-full z-10">
        
        <AnimatePresence mode="wait">
          {viewMode === 'study' ? (
            <motion.div 
              key="study"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="w-full flex flex-col items-center max-w-lg relative"
            >
              {/* Feedback Overlay */}
              <AnimatePresence>
                {feedback && (
                    <motion.div 
                        initial={{ opacity: 0, backdropFilter: 'blur(0px)' }}
                        animate={{ opacity: 1, backdropFilter: 'blur(8px)' }}
                        exit={{ opacity: 0, backdropFilter: 'blur(0px)' }}
                        className="absolute inset-0 z-50 flex flex-col items-center justify-center bg-white/40 rounded-[3rem]"
                    >
                        <BearMascot emotion={feedback === 'correct' ? 'happy' : 'sad'} />
                        <motion.h2 
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            className={`text-3xl font-black mt-6 ${feedback === 'correct' ? 'text-green-600' : 'text-rose-500'}`}
                        >
                            {feedback === 'correct' ? 'Amazing!' : 'Oops, try again!'}
                        </motion.h2>
                    </motion.div>
                )}
              </AnimatePresence>

              {studyQueue.length > 0 ? (
                <div className="w-full flex flex-col items-center relative">
                  <div className="w-full flex justify-between items-center px-6 mb-6 text-sm font-bold text-amber-800/60">
                    <span className="bg-amber-100 px-3 py-1 rounded-full">Box {currentCard.box}</span>
                    <span>{studyQueue.length} cards left</span>
                  </div>

                  <div className="relative w-full flex justify-center">
                    <Flashcard 
                        key={currentCard.id} // Forces remount on card change = resets flip state
                        data={currentCard} 
                        isFlipped={isFlipped} 
                        onFlip={() => !feedback && setIsFlipped(!isFlipped)} 
                    />
                  </div>

                  {/* Controls Area */}
                  <div className="h-32 mt-8 w-full flex items-center justify-center gap-10">
                    {!isFlipped ? (
                      <div className="text-amber-800/40 animate-bounce flex flex-col items-center gap-2">
                        <span className="text-sm font-bold bg-white/50 px-4 py-2 rounded-full backdrop-blur-sm">Tap the card to flip!</span>
                      </div>
                    ) : (
                      <>
                        <motion.button
                          initial={{ scale: 0.5, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          whileTap={{ scale: 0.9 }}
                          disabled={feedback !== null}
                          onClick={() => handleReviewResult(false)}
                          className="flex flex-col items-center gap-2 group"
                        >
                          <div className="w-20 h-20 rounded-3xl bg-rose-100 flex items-center justify-center text-rose-500 shadow-[0_8px_0_rgb(244,63,94)] border-2 border-rose-200 group-hover:bg-rose-200 transition-all active:shadow-none active:translate-y-[8px]">
                            <X size={40} strokeWidth={4} />
                          </div>
                          <span className="text-sm font-black text-rose-400 uppercase tracking-widest mt-2">Oops</span>
                        </motion.button>

                        <motion.button
                          initial={{ scale: 0.5, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          whileTap={{ scale: 0.9 }}
                          disabled={feedback !== null}
                          onClick={() => handleReviewResult(true)}
                          className="flex flex-col items-center gap-2 group"
                        >
                          <div className="w-20 h-20 rounded-3xl bg-green-100 flex items-center justify-center text-green-500 shadow-[0_8px_0_rgb(34,197,94)] border-2 border-green-200 group-hover:bg-green-200 transition-all active:shadow-none active:translate-y-[8px]">
                            <Check size={40} strokeWidth={4} />
                          </div>
                          <span className="text-sm font-black text-green-500 uppercase tracking-widest mt-2">Correct!</span>
                        </motion.button>
                      </>
                    )}
                  </div>

                </div>
              ) : (
                <div className="text-center py-12 px-6 flex flex-col items-center">
                  <BearMascot emotion="happy" />
                  <h2 className="text-3xl font-black text-amber-900 mb-3 mt-4">Review Complete!</h2>
                  <p className="text-amber-800/60 mb-8 max-w-xs font-medium">
                    You're a superstar! You've finished all your magic words for now.
                  </p>
                  <button 
                    onClick={() => setViewMode('list')}
                    className="px-8 py-4 bg-white border-2 border-amber-200 text-amber-700 font-bold rounded-2xl hover:bg-amber-50 transition-all shadow-sm hover:scale-105"
                  >
                    See Collection
                  </button>
                </div>
              )}
            </motion.div>
          ) : viewMode === 'list' ? (
            <motion.div 
              key="list"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="w-full flex justify-center"
            >
              <WordList words={words} />
            </motion.div>
          ) : (
             <motion.div 
              key="add"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className="w-full flex justify-center"
            >
              <AddWordForm 
                onAdd={handleAddWord} 
                onCancel={() => setViewMode('study')} 
              />
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Floating Action Button for Add */}
      {viewMode !== 'add' && (
        <motion.button
          whileHover={{ scale: 1.1, rotate: 90 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setViewMode('add')}
          className="fixed bottom-8 right-8 w-16 h-16 bg-gradient-to-tr from-amber-400 to-orange-400 text-white rounded-2xl shadow-xl shadow-orange-200 flex items-center justify-center hover:shadow-2xl transition-all z-40 border-4 border-white"
        >
          <Plus size={32} strokeWidth={3} />
        </motion.button>
      )}
    </div>
  );
};

export default App;