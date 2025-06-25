import '../styles/Contato.css';
import ContatosSociais from '../components/ContatosSociais';
import ContatoEnvieDuvida from '../components/ContatoEnvieDuvida';

export default function Contato() {


  return (
    <div className="contato-container">
    <ContatosSociais/>
    <ContatoEnvieDuvida/>
    </div>
  );
}