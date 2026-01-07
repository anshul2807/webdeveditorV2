import React, { useContext, useEffect, useState } from 'react';
import { EditorContext } from '../../context/EditorContext';
import {generateSrcDoc} from '../../utils/compileCode';

const PreviewFrame = () => {
  const { files } = useContext(EditorContext);
  const [srcDoc, setSrcDoc] = useState('');

  useEffect(() => {
    const docs = generateSrcDoc(files.html, files.css, files.js);
    const timeout = setTimeout(() => {
      setSrcDoc(docs);
    }, 250); // Debounce to prevent lag during typing

    return () => clearTimeout(timeout);
  }, [files.html, files.css, files.js]);

  return (
    <div className="h-full w-full">
      <iframe
        srcDoc={srcDoc}
        title="preview"
        sandbox="allow-scripts"
        frameBorder="0"
        width="100%"
        height="100%"
      />
    </div>
  );
};

export default PreviewFrame;