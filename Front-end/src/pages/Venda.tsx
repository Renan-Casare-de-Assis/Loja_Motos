import React from 'react'
import listings from '../data/listings'

const Venda: React.FC = () => {
  return (
    <div>
      <h2>Venda</h2>
      <p>Aqui você pode preparar um anúncio para vender sua moto. Abaixo estão os anúncios atualmente listados.</p>

      <div className="card" style={{marginTop:12}}>
        <h4>Como anunciar</h4>
        <ol>
          <li>Tire boas fotos</li>
          <li>Descreva o estado, quilometragem e histórico</li>
          <li>Defina um preço justo</li>
        </ol>
      </div>

      <div className="grid" style={{marginTop:12}}>
        {listings.map(item => (
          <div className="card" key={item.id}>
            {item.image ? (
              <img src={item.image} alt={item.title} className="listing-image" />
            ) : null}
            <h4 style={{marginTop:12}}>{item.title} <span style={{color:'var(--color-muted)',fontWeight:600,fontSize:14}}>· {item.year}</span></h4>
            <p style={{margin:0,color:'var(--color-muted)'}}>{item.km} · {item.city}</p>
            {item.price ? <p style={{marginTop:8,fontWeight:800}}>{item.price}</p> : null}
            {item.description ? <p style={{marginTop:8,color:'var(--color-muted)'}}>{item.description}</p> : null}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Venda
