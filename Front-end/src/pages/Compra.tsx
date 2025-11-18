import React from 'react'

const Compra: React.FC = () => {
  return (
    <div>
      <h2>Compra</h2>
      <p>Aqui você encontra informações e orientações sobre como comprar uma moto. Navegue para a página de <strong>Venda</strong> para ver anúncios disponíveis.</p>

      <div className="card" style={{marginTop:12}}>
        <h4>Dicas para compradores</h4>
        <ol>
          <li>Verifique a documentação e histórico de revisões</li>
          <li>Peça fotos adicionais e histórico de manutenção</li>
          <li>Negocie com base em inspeção e condição</li>
        </ol>
      </div>
    </div>
  )
}

export default Compra
