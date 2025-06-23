import { Link } from "react-router-dom";
import '../styles/Header.css';
function Header() {
  return (
    <header className="header">
      <h1>BootStore</h1>
      <nav>
        <ul>
          <li><Link to="/">Início</Link></li>
          <li><Link to="/contato">Contato</Link></li>
          <li><Link to="/produtos">Produtos</Link></li>
          <li><Link to="/sobre">Sobre</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;