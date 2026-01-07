import React from 'react';
import Button from '../Shared/Button';

const ShareModal = ({ isOpen, onClose, shareLink }) => {
  if (!isOpen) return null;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(shareLink);
    alert('Link copied!');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm">
      <div className="bg-[#2d2d2d] p-6 rounded-lg shadow-xl border border-gray-700 w-full max-w-md">
        <h2 className="text-xl font-bold mb-4">Share Your Code</h2>
        <p className="text-gray-400 text-sm mb-4">Anyone with this link can view your code and preview.</p>
        
        <div className="flex gap-2 mb-6">
          <input 
            readOnly 
            value={shareLink} 
            className="flex-1 bg-[#1e1e1e] border border-gray-600 rounded px-3 py-2 text-sm text-gray-300 focus:outline-none"
          />
          <Button onClick={copyToClipboard}>Copy</Button>
        </div>

        <div className="flex justify-end">
          <Button variant="secondary" onClick={onClose}>Close</Button>
        </div>
      </div>
    </div>
  );
};

export default ShareModal;