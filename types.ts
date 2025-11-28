export interface FlashcardData {
  id: string;
  word: string;
  type: string;
  englishMeaning: string;
  persianTranslation: string;
  example: string;
  // SRS Fields
  box: number; // Leitner box (1-5)
  nextReviewDate: number; // Timestamp
}

export type ViewMode = 'study' | 'list' | 'add';