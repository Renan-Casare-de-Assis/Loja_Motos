import React from 'react'

const Venda: React.FC = () => {
  return (
    <div>
      <h2>Venda</h2>
      <p>Aqui você pode preparar um anúncio para vender sua moto. (Funcionalidade futura)</p>
      <div className="card" style={{marginTop:12}}>
        <h4>Como anunciar</h4>
        <ol>
          <li>Tire boas fotos</li>
          <li>Descreva o estado, quilometragem e histórico</li>
          <li>Defina um preço justo</li>
        </ol>
      </div>
    </div>
  )
}

export default Venda
