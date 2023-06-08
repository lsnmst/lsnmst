import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import PtBR from './pages/PtBR';
import Sobre from './pages/Sobre';

const App = () => {
 return (
    <>
       <Routes>
          <Route path="/lsnmst" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/PtBR" element={<PtBR/>} />
          <Route path="/sobre" element={<Sobre />} />

       </Routes>
    </>
 );
};

export default App;
