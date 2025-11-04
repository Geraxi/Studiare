
import React, { useState, useMemo } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LessonPage from './pages/LessonPage';
import Header from './components/Header';
import { ProgressProvider } from './contexts/ProgressContext';

export default function App() {
  return (
    <ProgressProvider>
      <HashRouter>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-grow container mx-auto p-4 md:p-8">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/lesson/:lessonId" element={<LessonPage />} />
            </Routes>
          </main>
          <footer className="text-center p-4 text-gray-500 text-sm">
            © {new Date().getFullYear()} Matematica 1 - UniMarconi. Tutti i diritti riservati.
          </footer>
        </div>
      </HashRouter>
    </ProgressProvider>
  );
}
