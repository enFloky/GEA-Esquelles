import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Home from './pages/Home';
import QuiSom from './pages/QuiSom';
import Activitats from './pages/Activitats';
import Rutes from './pages/Rutes'; //
import Escalada from './pages/Escalada';
import Galeria from './pages/Galeria';
import Revista from './pages/Revista';
import Soci from './pages/Soci';

import './styles/global.css';


function App() {
  return (
    <div className="layout">
      <Router>
        <Navbar />
         <main className="content">
           <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/quisom" element={<QuiSom />} />
            <Route path="/activitats" element={<Activitats />} />
            <Route path="/rutes" element={<Rutes />} />
            <Route path="/escalada" element={<Escalada />} />
            <Route path="/galeria" element={<Galeria />} />
            <Route path="/revista" element={<Revista />} />
            <Route path="/soci" element={<Soci />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
