import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { HashRouter, Routes, Route } from 'react-router-dom';

import './index.css';

import TecInnovationLab from './App.jsx';
import Edicion2025 from './pages/Edicion2025.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HashRouter>
      <Routes>
        {/* Página principal */}
        <Route path="/" element={<TecInnovationLab />} />

        {/* Página Edición 2025 */}
        <Route path="/edicion-2025" element={<Edicion2025 />} />
      </Routes>
    </HashRouter>
  </StrictMode>
);
