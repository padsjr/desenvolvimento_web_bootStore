import { useState } from 'react';
import { FaInstagram, FaFacebook, FaWhatsapp } from 'react-icons/fa';
import '../styles/Contato.css';

export default function Contato() {
  const [email, setEmail] = useState('');
  const [mensagem, setMensagem] = useState('');
  const [sucesso, setSucesso] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    // Salva no localStorage
    const contatosSalvos = JSON.parse(localStorage.getItem('contatos')) || [];
    contatosSalvos.push({ email, mensagem, data: new Date().toISOString() });
    localStorage.setItem('contatos', JSON.stringify(contatosSalvos));
    setSucesso(true);
    setEmail('');
    setMensagem('');
  }

  return (
    <div className="contato-container">
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
      <form className="contato-form" onSubmit={handleSubmit}>
        <h2>Envie sua dúvida</h2>
        <label htmlFor="email">Seu e-mail:</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="email@email.com"
          required
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <label htmlFor="mensagem">Sua dúvida:</label>
        <textarea
          id="mensagem"
          name="mensagem"
          placeholder="Digite sua dúvida aqui..."
          required
          value={mensagem}
          onChange={e => setMensagem(e.target.value)}
        />
        <button type="submit">Enviar</button>
        {sucesso && <p className="contato-sucesso">Mensagem enviada com sucesso!</p>}
      </form>
    </div>
  );
}