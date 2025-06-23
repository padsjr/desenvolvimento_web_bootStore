import { Link } from 'react-router-dom';
import '../styles/Inicio.css';

export default function Inicio() {
  return (
    <div className="inicio-container">
      <h1>Bem-vindo à BootStore!</h1>
      <p>Descubra as melhores botas para todos os estilos e ocasiões. Qualidade, conforto e elegância em um só lugar.</p>
      <Link to="/produtos" className="home-produtos">Ver Produtos</Link>
    </div>
  );
}