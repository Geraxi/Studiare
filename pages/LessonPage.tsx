
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { LESSONS } from '../constants';
import Quiz from '../components/Quiz';
import { useProgress } from '../contexts/ProgressContext';

// Augment the window object with the MathJax property
declare global {
  interface Window {
    MathJax: any;
  }
}

const LessonPage: React.FC = () => {
  const { lessonId } = useParams<{ lessonId: string }>();
  const { completionStatus, markAsCompleted } = useProgress();
  const [showSolution, setShowSolution] = useState(false);

  const lesson = LESSONS.find(l => l.id === lessonId);

  useEffect(() => {
    if (lesson) {
      // Let MathJax typeset the new content
      if (window.MathJax && typeof window.MathJax.typeset === 'function') {
        setTimeout(() => window.MathJax.typeset(), 0);
      }
    }
  }, [lesson]);

  if (!lesson) {
    return (
      <div className="text-center">
        <h1 className="text-2xl font-bold">Lezione non trovata</h1>
        <Link to="/" className="text-blue-600 hover:underline mt-4 inline-block">Torna alla Home</Link>
      </div>
    );
  }

  const handleQuizComplete = () => {
    if (lessonId) {
      markAsCompleted(lessonId);
    }
  };

  return (
    <div className="bg-white p-6 md:p-8 rounded-lg shadow-lg">
      <Link to="/" className="text-blue-600 hover:underline mb-6 inline-block">&larr; Torna all'indice</Link>
      <h1 className="text-3xl md:text-4xl font-bold mb-4">{lesson.title}</h1>
      
      {/* Teoria */}
      <section className="prose max-w-none text-lg">
        <h2 className="text-2xl font-bold border-b-2 border-blue-200 pb-2 mb-4">Teoria</h2>
        <div dangerouslySetInnerHTML={{ __html: lesson.content.theory }} />
      </section>

      {/* Esempio */}
      <section className="mt-8">
        <h3 className="text-2xl font-bold border-b-2 border-blue-200 pb-2 mb-4">{lesson.content.example.title}</h3>
        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg space-y-3">
          {lesson.content.example.steps.map((step, index) => (
            <p key={index} className="text-gray-800">{step}</p>
          ))}
        </div>
      </section>

      {/* Esercizio */}
      <section className="mt-8">
        <h3 className="text-2xl font-bold border-b-2 border-blue-200 pb-2 mb-4">Esercizio Pratico</h3>
        <div className="bg-gray-100 p-4 rounded-lg">
          <p className="font-semibold mb-3">{lesson.content.exercise.problem}</p>
          <button 
            onClick={() => setShowSolution(!showSolution)}
            className="px-4 py-2 bg-gray-700 text-white font-semibold rounded-lg hover:bg-gray-800 transition-colors text-sm"
          >
            {showSolution ? 'Nascondi' : 'Mostra'} Soluzione
          </button>
          {showSolution && (
            <div className="mt-4 p-4 bg-green-50 border-l-4 border-green-500 rounded-r-lg animate-fade-in">
              <p className="text-green-800">{lesson.content.exercise.solution}</p>
            </div>
          )}
        </div>
      </section>
      
      {/* Quiz */}
      <Quiz
        questions={lesson.quiz}
        isCompleted={!!completionStatus[lesson.id]}
        onComplete={handleQuizComplete}
      />
    </div>
  );
};

export default LessonPage;
