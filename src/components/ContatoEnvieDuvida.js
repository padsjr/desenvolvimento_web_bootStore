import { useState } from 'react';
function ContatoEnvieDuvida(){
    const [email, setEmail] = useState('');
    const [mensagem, setMensagem] = useState('');
    const [sucesso, setSucesso] = useState(false);
  
    function handleSubmit(e) {
      e.preventDefault();
      const contatosSalvos = JSON.parse(localStorage.getItem('contatos')) || [];
      contatosSalvos.push({ email, mensagem, data: new Date().toISOString() });
      localStorage.setItem('contatos', JSON.stringify(contatosSalvos));
      setSucesso(true);
      setEmail('');
      setMensagem('');
    }
    return(<form className="contato-form" onSubmit={handleSubmit}>
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
        

    );
}
export default ContatoEnvieDuvida;