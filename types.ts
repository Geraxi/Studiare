
export interface QuizQuestion {
  question: string;
  options: string[];
  correctAnswer: number;
}

export interface Lesson {
  id: string;
  title: string;
  description: string;
  content: {
    theory: string;
    example: {
      title: string;
      steps: string[];
    };
    exercise: {
      problem: string;
      solution: string;
    };
  };
  quiz: QuizQuestion[];
}

export interface QuizCompletionStatus {
  [lessonId: string]: boolean;
}
