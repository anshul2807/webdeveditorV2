import React, { useContext } from 'react';
import { EditorContext } from '../../context/EditorContext';

const TabSelector = () => {
  const { activeTab, setActiveTab } = useContext(EditorContext);
  const tabs = ['html', 'css', 'js', 'readme'];

  return (
    <div className="flex bg-[#252526] border-b border-gray-800">
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => setActiveTab(tab)}
          className={`px-4 py-2 text-xs uppercase tracking-widest transition ${
            activeTab === tab ? 'bg-[#1e1e1e] border-b-2 border-blue-500 text-white' : 'text-gray-500 hover:text-gray-300'
          }`}
        >
          {tab === 'readme' ? 'README.md' : tab}
        </button>
      ))}
    </div>
  );
};

export default TabSelector;