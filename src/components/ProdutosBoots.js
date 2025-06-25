import { useEffect, useState } from 'react';
function ProdutosBoots(){
    const [produtos, setProdutos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [erro, setErro] = useState(null);
  useEffect(() => {
    fetch('https://dummyjson.com/products/category/mens-shoes')
      .then(res => {
        if (!res.ok) throw new Error('Erro ao buscar produtos');
        return res.json();
      })
      .then(data => {
        setProdutos(data.products);
        setLoading(false);
      })
      .catch(err => {
        setErro(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <div className="produtos-container"><p>Carregando produtos...</p></div>;
  if (erro) return <div className="produtos-container"><p>Erro: {erro}</p></div>;

    return(
        <div className="produtos-container">
      <h1>Nossas Botas</h1>
      <div className="produtos-grid">
        {produtos.map(produto => (
          <div className="produto-card" key={produto.id}>
            <img src={produto.thumbnail} alt={produto.title} className="produto-img" />
            <h2>{produto.title}</h2>
            <p className="produto-preco">R$ {produto.price},00</p>
            <button className="produto-btn">Ver detalhes</button>
          </div>
        ))}
      </div>
    </div>

    );
}
export default ProdutosBoots;