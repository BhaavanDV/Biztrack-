
import React from 'react';
import { Link } from 'react-router-dom';
import { BarChart, LineChart, Home } from 'lucide-react';

const Navigation = () => {
  return (
    <nav className="bg-white shadow-sm p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl font-bold text-primary flex items-center gap-2">
          <span>BizAlyze</span>
        </Link>
        
        <div className="flex gap-4">
          <Link 
            to="/" 
            className="flex items-center gap-2 hover:text-primary transition-colors"
          >
            <Home className="h-4 w-4" />
            <span>Home</span>
          </Link>
          <Link 
            to="/business-analysis" 
            className="flex items-center gap-2 hover:text-primary transition-colors"
          >
            <BarChart className="h-4 w-4" />
            <span>Analysis</span>
          </Link>
          <Link 
            to="/tracking" 
            className="flex items-center gap-2 hover:text-primary transition-colors"
          >
            <LineChart className="h-4 w-4" />
            <span>Tracking</span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
