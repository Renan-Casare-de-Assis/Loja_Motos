import React from 'react'

const Home: React.FC = () => {
  return (
    <div>
      <section className="hero">
        <div>
          <h1>Bem-vindo à Casare Motos</h1>
          <p>Plataforma de Compra e Venda de motocicletas. Navegue pelas ofertas ou anuncie a sua moto.</p>
          <div style={{marginTop:12}}>
            <a className="cta-btn" href="/compra">Ver motos à venda</a>
          </div>
        </div>
        <div style={{flex:1}}>
          <img src="/src/logo.svg" alt="logo" style={{maxWidth:280,opacity:0.95}} />
        </div>
      </section>

      <div className="grid" style={{marginTop:20}}>
        <div className="card">
          <h3>Compra</h3>
          <p>Encontre motos avaliadas e anúncios verificados com fotos e informações essenciais.</p>
        </div>
        <div className="card">
          <h3>Venda</h3>
          <p>Crie um anúncio rapidamente com fotos e detalhes — conecte-se com compradores.</p>
        </div>
        <div className="card">
          <h3>Dicas</h3>
          <p>Guia rápido para preparar sua moto para venda e proteger-se em transações.</p>
        </div>
      </div>
    </div>
  )
}

export default Home
