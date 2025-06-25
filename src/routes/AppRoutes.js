import { Routes, Route } from 'react-router-dom';
import Inicio from '../pages/Inicio';
import Contato from '../pages/Contato';
import Sobre from '../pages/Sobre';
import Produtos from '../pages/Produtos';


export default function AppRoutes() {
  return (
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="/produtos" element={<Produtos />} />
        <Route path="/sobre" element={<Sobre />} />
      </Routes>
  );
}