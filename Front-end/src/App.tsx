import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import Compra from './pages/Compra'
import Venda from './pages/Venda'
import Logo from './logo.svg'

const App: React.FC = () => {
  return (
    <div>
      <header className="site-header">
        <div className="container header-inner">
          <div className="brand">
            <img src={Logo} className="logo" alt="Casare Motos" />
          </div>
          <nav className="nav">
            <Link to="/">Home</Link>
            <Link to="/compra">Compra</Link>
            <Link to="/venda">Venda</Link>
          </nav>
        </div>
      </header>

      <main className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/compra" element={<Compra />} />
          <Route path="/venda" element={<Venda />} />
        </Routes>
      </main>

      <footer className="footer">
        <div className="container">© {new Date().getFullYear()} Casare Motos — Compra e Venda</div>
      </footer>
    </div>
  )
}

export default App
