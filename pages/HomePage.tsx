import React from 'react';
import { Link } from 'react-router-dom';
import { LESSONS } from '../constants';
import ProgressBar from '../components/ProgressBar';
import { useProgress } from '../contexts/ProgressContext';
import { CheckCircleIcon, LockClosedIcon } from '@heroicons/react/24/solid';

const HomePage: React.FC = () => {
  const { completionStatus } = useProgress();
  const completedCount = Object.values(completionStatus).filter(Boolean).length;
  const totalLessonsWithQuiz = LESSONS.filter(l => l.quiz && l.quiz.length > 0).length;

  return (
    <div className="animate-fade-in">
      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Benvenuto nel corso di Matematica 1</h1>
        <p className="text-gray-600">Questo sito ti aiuterà a ripassare gli argomenti principali del corso in modo interattivo. Seleziona una lezione per iniziare.</p>
      </div>
      
      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-xl font-semibold mb-3">I tuoi progressi</h2>
        <ProgressBar completed={completedCount} total={totalLessonsWithQuiz} />
        <p className="text-center text-gray-600">{completedCount} / {totalLessonsWithQuiz} lezioni completate</p>
      </div>

      <h2 className="text-2xl font-bold mb-6">Indice delle Lezioni</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {LESSONS.map((lesson, index) => (
          <Link 
            key={lesson.id} 
            to={lesson.quiz.length > 0 ? `/lesson/${lesson.id}` : '#'} 
            className={`
              block p-6 bg-white rounded-lg shadow-md transition-transform transform hover:-translate-y-1 
              ${lesson.quiz.length === 0 ? 'opacity-50 cursor-not-allowed' : 'hover:shadow-lg'}
            `}
          >
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-xl font-bold mt-1">{lesson.title}</h3>
                <p className="text-gray-600 mt-2 text-sm">{lesson.description}</p>
              </div>
              <div>
                {completionStatus[lesson.id] ? (
                   <CheckCircleIcon className="h-6 w-6 text-green-500" />
                ) : (
                  lesson.quiz.length === 0 && <LockClosedIcon className="h-6 w-6 text-gray-400" />
                )}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
