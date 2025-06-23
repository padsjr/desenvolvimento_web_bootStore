import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';
import './components/Footer';
import './components/Header';
import Inicio from './pages/Inicio';
import Contato from './pages/Contato';
import Sobre from './pages/Sobre';
import Produtos from './pages/Produtos';

function App() {
  return (
    <Router>
      <div className='app-container'>

        <Header/>

        <main className='main-content'>
          <Routes>
            <Route path="/" element={<Inicio/>}/>
            <Route path="/contato" element={<Contato/>}/>
            <Route path="/produtos" element={<Produtos/>}/>
            <Route path="/sobre" element={<Sobre/>}/>
          </Routes>
        </main>

        <Footer/>


      </div>

    </Router>
  );
}

export default App;
