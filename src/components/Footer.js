import '../styles/Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-contato">
        <span>Telefone: <a href="tel:+5511999999999">(48) 99999-9999</a></span>
        <span>E-mail: <a href="mailto:contato@bootstore.com">contato@bootstore.com</a></span>
      </div>
      <div className="footer-direitos">
        © 2025 BootStore - Todos os direitos reservados
      </div>
    </footer>
  );
}

export default Footer;