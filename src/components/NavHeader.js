import { Link } from "react-router-dom";
function NavHeader(){
    return(
        <nav>
        <ul>
          <li><Link to="/">Início</Link></li>
          <li><Link to="/contato">Contato</Link></li>
          <li><Link to="/produtos">Produtos</Link></li>
          <li><Link to="/sobre">Sobre</Link></li>
        </ul>
      </nav>

    );
}
export default NavHeader;