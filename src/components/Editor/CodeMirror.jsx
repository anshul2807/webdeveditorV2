import React, { useContext } from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { vscodeDark } from '@uiw/codemirror-theme-vscode';
import { javascript } from '@codemirror/lang-javascript';
import { html } from '@codemirror/lang-html';
import { css } from '@codemirror/lang-css';
import { markdown } from '@codemirror/lang-markdown';
import { EditorContext } from '../../context/EditorContext';

const CodeMirrorEditor = () => {
  const { files, activeTab, updateCode } = useContext(EditorContext);

  const getLanguage = () => {
    if (activeTab === 'html') return [html()];
    if (activeTab === 'css') return [css()];
    if (activeTab === 'js') return [javascript()];
    return [markdown()];
  };

  return (
    <CodeMirror
      value={files[activeTab]}
      height="100%"
      theme={vscodeDark}
      extensions={getLanguage()}
      onChange={(value) => updateCode(value)}
      className="text-base"
    />
  );
};

export default CodeMirrorEditor;