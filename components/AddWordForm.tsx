import React, { useState } from 'react';
import { FlashcardData } from '../types';
import { Save, X } from 'lucide-react';
import { v4 as uuidv4 } from 'uuid';

interface AddWordFormProps {
  onAdd: (card: FlashcardData) => void;
  onCancel: () => void;
}

const AddWordForm: React.FC<AddWordFormProps> = ({ onAdd, onCancel }) => {
  const [formData, setFormData] = useState<Partial<FlashcardData>>({
    word: '',
    type: 'n',
    englishMeaning: '',
    persianTranslation: '',
    example: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.word && formData.englishMeaning && formData.persianTranslation) {
      onAdd({
        id: uuidv4(),
        word: formData.word!,
        type: formData.type || 'n',
        englishMeaning: formData.englishMeaning!,
        persianTranslation: formData.persianTranslation!,
        example: formData.example || '',
        box: 1,
        nextReviewDate: Date.now()
      });
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="w-full max-w-md bg-white/90 backdrop-blur-md rounded-3xl shadow-xl p-8 border-2 border-amber-100">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-amber-800">New Spell</h2>
        <button onClick={onCancel} className="text-amber-400 hover:text-amber-600 bg-amber-50 p-2 rounded-full transition-colors">
          <X size={24} />
        </button>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="grid grid-cols-3 gap-4">
          <div className="col-span-2">
            <label className="block text-xs font-bold text-amber-600 uppercase mb-2 pl-1">Word</label>
            <input
              required
              name="word"
              value={formData.word}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-2xl border-2 border-amber-100 focus:border-amber-400 focus:ring-4 focus:ring-amber-100 transition-all outline-none bg-amber-50/50 text-gray-700 font-bold"
              placeholder="e.g. Magic"
            />
          </div>
          <div>
            <label className="block text-xs font-bold text-amber-600 uppercase mb-2 pl-1">Type</label>
            <select
              name="type"
              value={formData.type}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-2xl border-2 border-amber-100 focus:border-amber-400 focus:ring-4 focus:ring-amber-100 transition-all outline-none bg-amber-50/50 text-gray-700 font-bold"
            >
              <option value="n">Noun</option>
              <option value="v">Verb</option>
              <option value="adj">Adj</option>
              <option value="adv">Adv</option>
            </select>
          </div>
        </div>

        <div>
          <label className="block text-xs font-bold text-amber-600 uppercase mb-2 pl-1">English Meaning</label>
          <input
            required
            name="englishMeaning"
            value={formData.englishMeaning}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-2xl border-2 border-amber-100 focus:border-amber-400 focus:ring-4 focus:ring-amber-100 transition-all outline-none bg-amber-50/50"
            placeholder="Definition..."
          />
        </div>

        <div>
          <label className="block text-xs font-bold text-amber-600 uppercase mb-2 pl-1">Persian Translation</label>
          <input
            required
            dir="rtl"
            name="persianTranslation"
            value={formData.persianTranslation}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-2xl border-2 border-amber-100 focus:border-amber-400 focus:ring-4 focus:ring-amber-100 transition-all outline-none persian-text bg-amber-50/50"
            placeholder="ترجمه..."
          />
        </div>

        <div>
          <label className="block text-xs font-bold text-amber-600 uppercase mb-2 pl-1">Example Sentence</label>
          <textarea
            name="example"
            rows={2}
            value={formData.example}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-2xl border-2 border-amber-100 focus:border-amber-400 focus:ring-4 focus:ring-amber-100 transition-all outline-none resize-none bg-amber-50/50"
            placeholder="Context sentence..."
          />
        </div>

        <button
          type="submit"
          className="w-full py-4 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-bold rounded-2xl shadow-lg shadow-amber-200 transition-all flex items-center justify-center gap-3 transform hover:scale-[1.02]"
        >
          <Save size={22} />
          <span>Add to Book</span>
        </button>
      </form>
    </div>
  );
};

export default AddWordForm;
