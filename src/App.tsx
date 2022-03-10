import { Route, Routes, HashRouter } from 'react-router-dom';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Projects } from './pages/Projects';
import { Social } from './pages/Social';
import './styles/global.scss'

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/social" element={<Social />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
