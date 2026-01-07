import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Shared/Button';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-[calc(100vh-64px)] flex flex-col items-center justify-center bg-[#1e1e1e] text-center px-4">
      <h1 className="text-5xl font-extrabold text-white mb-6">
        The Future of <span className="text-blue-500">Web Development</span>
      </h1>
      <p className="text-gray-400 text-lg max-w-2xl mb-8">
        Write HTML, CSS, and JS in real-time. Share your snippets instantly with a single link. 
        Zero setup, all in your browser.
      </p>
      <div className="flex gap-4">
        <Button onClick={() => navigate('/editor')} className="text-lg px-8 py-3">
          Start Coding Now
        </Button>
        <Button variant="outline" className="text-lg px-8 py-3">
          View Examples
        </Button>
      </div>
    </div>
  );
};

export default Home;