import React, { createContext, useState, useEffect } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';
export const EditorContext = createContext();

export const EditorProvider = ({ children }) => {
  const [activeTab, setActiveTab] = useState('html');
  const [files, setFiles] = useLocalStorage('webdev-editor-code', {
    html: '<h1>Hello</h1>',
    css: '',
    js: '',
    readme: ''
});

  useEffect(() => {
    localStorage.setItem('webdev-editor-code', JSON.stringify(files));
  }, [files]);

  const updateCode = (newCode) => {
    setFiles(prev => ({ ...prev, [activeTab]: newCode }));
  };

  return (
    <EditorContext.Provider value={{ files, setFiles, activeTab, setActiveTab, updateCode }}>
      {children}
    </EditorContext.Provider>
  );
};