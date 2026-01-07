import React, { useState, useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { EditorContext } from '../../context/EditorContext';
import { saveProject } from '../../api/editorService';
import Button from './Button';
import ShareModal from '../Modals/ShareModal';

const Navbar = () => {
  const { files } = useContext(EditorContext);
  const [isModalOpen, setModalOpen] = useState(false);
  const [shareLink, setShareLink] = useState('');
  const location = useLocation();

  const handleShare = async () => {
    try {
      // In a real scenario, this calls your backend API
      const data = await saveProject(files); 
      setShareLink(`${window.location.origin}/webdeveditorV2/#/view/${data.id || 'temp-id'}`);
      setModalOpen(true);
    } catch (err) {
      alert("Failed to generate share link. Check console.");
    }
  };

  return (
    <>
      <nav className="h-16 flex items-center justify-between px-6 bg-[#161b22] border-b border-gray-800 shadow-md z-10">
        {/* Logo Section */}
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center font-bold text-white group-hover:bg-blue-500 transition-colors">
            W
          </div>
          <span className="text-xl font-bold tracking-tight bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            Webdev<span className="text-blue-500">Editor</span>
          </span>
        </Link>

        {/* Action Buttons */}
        <div className="flex items-center gap-4">
          {location.pathname.includes('editor') && (
            <Button 
              onClick={handleShare}
              variant="primary"
              className="bg-blue-600 hover:bg-blue-500 text-sm py-1.5 px-5 shadow-lg shadow-blue-900/20"
            >
              Share Code
            </Button>
          )}
          
          <Link to="/editor" className="text-sm font-medium text-gray-400 hover:text-white transition-colors">
            Workspace
          </Link>
        </div>
      </nav>

      <ShareModal 
        isOpen={isModalOpen} 
        onClose={() => setModalOpen(false)} 
        shareLink={shareLink} 
      />
    </>
  );
};

export default Navbar;