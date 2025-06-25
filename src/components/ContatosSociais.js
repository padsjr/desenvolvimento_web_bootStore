import { FaInstagram, FaFacebook, FaWhatsapp } from 'react-icons/fa';
function ContatosSociais(){
    return(
        <div>
            <h1>Fale com a Loja de Botas</h1>
            <p>Entre em contato com nosso atendimento pelos canais abaixo:</p>
            <div className="contato-info">
              <p><strong>Telefone:</strong> <a href="tel:+5511999999999">(11) 99999-9999</a></p>
              <p><strong>WhatsApp:</strong> <a href="https://wa.me/5511999999999" target="_blank" rel="noopener noreferrer"><FaWhatsapp /> (11) 99999-9999</a></p>
              <p><strong>E-mail:</strong> <a href="mailto:contato@lojadebotas.com">contato@lojadebotas.com</a></p>
            </div>
            <div className="contato-redes">
                <a href="https://instagram.com/lojadebotas" target="_blank" rel="noopener noreferrer"><FaInstagram size={32} /></a>
                <a href="https://facebook.com/lojadebotas" target="_blank" rel="noopener noreferrer"><FaFacebook size={32} /></a>
            </div>
        </div>        
    );

}
export default ContatosSociais;