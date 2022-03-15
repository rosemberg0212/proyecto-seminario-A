import './sass/main.css'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages/Home';
import Adopta from './pages/Adopta';
import Nosotros from './pages/Nosotros';
import Contacto from './pages/Contacto';
import Donar from './pages/Donar';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/adopta' element={<Adopta/>}/>
        <Route path='/nosotros' element={<Nosotros/>}/>
        <Route path='/contacto' element={<Contacto/>}/>
        <Route path='/donar' element={<Donar/>}/>
      </Routes>
    </Router>
  );
}

export default App;
