
import React, { useState, useEffect } from 'react';
import { QuizQuestion } from '../types';

interface QuizProps {
  questions: QuizQuestion[];
  isCompleted: boolean;
  onComplete: () => void;
}

const Quiz: React.FC<QuizProps> = ({ questions, isCompleted, onComplete }) => {
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, number>>({});
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (isCompleted) {
      setSubmitted(true);
    }
  }, [isCompleted]);

  const handleSelectAnswer = (questionIndex: number, optionIndex: number) => {
    if (submitted) return;
    setSelectedAnswers(prev => ({ ...prev, [questionIndex]: optionIndex }));
  };

  const handleSubmit = () => {
    setSubmitted(true);
    onComplete();
  };

  const handleRetry = () => {
    setSelectedAnswers({});
    setSubmitted(false);
  };
  
  if (!questions || questions.length === 0) {
    return null;
  }

  const allQuestionsAnswered = Object.keys(selectedAnswers).length === questions.length;

  return (
    <div className="mt-8">
      <h3 className="text-2xl font-bold border-b-2 border-blue-200 pb-2 mb-4">Mini Quiz di Autovalutazione</h3>
      {questions.map((q, qIndex) => (
        <div key={qIndex} className="mb-6">
          <p className="font-semibold text-lg">{qIndex + 1}. {q.question}</p>
          <div className="space-y-2 mt-2">
            {q.options.map((option, oIndex) => {
              const isSelected = selectedAnswers[qIndex] === oIndex;
              const isCorrect = q.correctAnswer === oIndex;
              
              let buttonClass = "w-full text-left p-3 border rounded-lg transition-colors duration-200";
              if (submitted) {
                if (isCorrect) {
                  buttonClass += " bg-green-100 border-green-500 text-green-800 font-semibold";
                } else if (isSelected && !isCorrect) {
                  buttonClass += " bg-red-100 border-red-500 text-red-800";
                } else {
                  buttonClass += " bg-gray-100 border-gray-300";
                }
              } else {
                if (isSelected) {
                  buttonClass += " bg-blue-100 border-blue-500";
                } else {
                  buttonClass += " bg-white hover:bg-gray-50 border-gray-300";
                }
              }

              return (
                <button
                  key={oIndex}
                  onClick={() => handleSelectAnswer(qIndex, oIndex)}
                  className={buttonClass}
                  disabled={submitted}
                >
                  {option}
                </button>
              );
            })}
          </div>
        </div>
      ))}
      <div className="mt-6 flex gap-4">
        {!submitted && (
          <button
            onClick={handleSubmit}
            disabled={!allQuestionsAnswered}
            className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"
          >
            Verifica Risposte
          </button>
        )}
        {submitted && (
          <button
            onClick={handleRetry}
            className="px-6 py-2 bg-gray-500 text-white font-semibold rounded-lg shadow-md hover:bg-gray-600 transition-colors"
          >
            Ripeti Quiz
          </button>
        )}
      </div>
    </div>
  );
};

export default Quiz;
