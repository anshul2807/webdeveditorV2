import React, { useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { EditorContext } from '../context/EditorContext';
import { getProject } from '../api/editorService'; // Ensure this matches your API file
import TabSelector from '../components/Editor/TabSelector';
import CodeMirrorEditor from '../components/Editor/CodeMirror';
import PreviewFrame from '../components/Preview/PreviewFrame';

const EditorPage = () => {
  const { projectId } = useParams(); // Retrieves ID from /view/:projectId
  const { setFiles } = useContext(EditorContext);

  useEffect(() => {
    const fetchSharedCode = async () => {
      if (projectId) {
        try {
          const remoteFiles = await getProject(projectId);
          // remoteFiles should be { html: '...', css: '...', js: '...', readme: '...' }
          setFiles(remoteFiles);
        } catch (err) {
          console.error("Failed to load project:", err);
          alert("Could not find the shared project. Showing default code.");
        }
      }
    };

    fetchSharedCode();
  }, [projectId, setFiles]);

  return (
    <div className="flex h-full w-full overflow-hidden">
      <section className="w-1/2 flex flex-col border-r border-gray-800">
        <TabSelector />
        <div className="flex-1 overflow-auto bg-[#1e1e1e]">
          <CodeMirrorEditor />
        </div>
      </section>
      <section className="w-1/2 h-full bg-white">
        <PreviewFrame />
      </section>
    </div>
  );
};

export default EditorPage;