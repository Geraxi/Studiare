
import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4">
        <Link to="/" className="text-2xl md:text-3xl font-bold text-blue-700 hover:text-blue-900 transition-colors">
          Matematica 1 – UniMarconi
        </Link>
      </div>
    </header>
  );
};

export default Header;
