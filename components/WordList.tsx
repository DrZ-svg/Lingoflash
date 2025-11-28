import React, { useMemo, useState } from 'react';
import { FlashcardData } from '../types';
import { Search } from 'lucide-react';

interface WordListProps {
  words: FlashcardData[];
}

const WordList: React.FC<WordListProps> = ({ words }) => {
  const [search, setSearch] = useState('');

  const filteredWords = useMemo(() => {
    const lowerSearch = search.toLowerCase();
    return words.filter(w => 
      w.word.toLowerCase().includes(lowerSearch) || 
      w.persianTranslation.includes(lowerSearch)
    );
  }, [words, search]);

  return (
    <div className="w-full max-w-md h-[calc(100vh-140px)] flex flex-col">
      <div className="mb-6 relative group">
        <input 
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Find a word..."
          className="w-full pl-12 pr-4 py-4 rounded-2xl border-2 border-amber-100 shadow-sm bg-white focus:border-amber-400 focus:ring-4 focus:ring-amber-100 outline-none transition-all"
        />
        <Search className="absolute left-4 top-4 text-amber-300 group-focus-within:text-amber-500 transition-colors" size={24} />
      </div>

      <div className="flex-1 overflow-y-auto pr-1 no-scrollbar space-y-4 pb-24 px-1">
        {filteredWords.length === 0 ? (
            <div className="text-center text-amber-800/50 py-10 font-medium">
                <p>No magic words found...</p>
            </div>
        ) : (
            filteredWords.map((item) => (
            <div key={item.id} className="bg-white p-5 rounded-2xl shadow-sm border-2 border-amber-50 flex justify-between items-center group hover:border-amber-300 hover:shadow-md transition-all">
                <div>
                <div className="flex items-center gap-2">
                    <span className="font-bold text-amber-900 text-lg">{item.word}</span>
                    <span className="text-[10px] text-amber-600 bg-amber-100 px-2 py-0.5 rounded-full font-bold uppercase tracking-wider">{item.type}</span>
                </div>
                <p className="text-sm text-gray-500 mt-1 truncate max-w-[180px] font-medium">{item.englishMeaning}</p>
                </div>
                <div className="text-right">
                <p className="persian-text text-teal-700 font-bold text-lg" dir="rtl">{item.persianTranslation}</p>
                </div>
            </div>
            ))
        )}
      </div>
    </div>
  );
};

export default WordList;
