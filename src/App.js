import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Idea from './pages/Idea';
import PtBR from './pages/PtBR';
import IdeaptBR from './pages/Idea-ptBR';
import Proto from './pages/Proto';
import ProtoptBR from './pages/Proto-ptBR';

const App = () => {
 return (
    <>
       <Routes>
          <Route path="/" index element={<Home />} />
          <Route path="/idea" element={<Idea />} />
          <Route path="/PtBR" element={<PtBR/>} />
          <Route path="/idea-ptBR" element={<IdeaptBR />} />
          <Route path="/proto" element={<Proto/>} />
          <Route path="/proto-ptBR" element={<ProtoptBR/>} />
       </Routes>
    </>
 );
};

export default App;
