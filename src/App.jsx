import { HashRouter as Router, Routes, Route } from 'react-router-dom'; // Changed to HashRouter
import { EditorProvider } from './context/EditorContext';

// Components
import Navbar from './components/Shared/Navbar';

// Pages
import Home from './pages/Home';
import EditorPage from './pages/EditorPage';

function App() {
  return (
    <EditorProvider>
      <Router>
        {/* Full height container, no body scroll */}
        <div className="flex flex-col h-screen w-full bg-[#0d1117] text-gray-200 overflow-hidden">
          
          <Navbar />

          {/* This container expands to fill the screen below the navbar */}
          <div className="flex-1 relative overflow-hidden">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/editor" element={<EditorPage />} />
              {/* Route remains the same, but URL will be /#/view/projectId */}
              <Route path="/view/:projectId" element={<EditorPage />} />
            </Routes>
          </div>
          
        </div>
      </Router>
    </EditorProvider>
  );
}

export default App;