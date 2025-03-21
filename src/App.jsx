import React from "react";
import { Link } from "react-router-dom";

const App = () => {
  return (
    <div>
      <h1>Bem-vindo ao Sistema de Controle de Contas</h1>
      <nav>
        <Link to="/">Login</Link> | 
        <Link to="/dashboard">Dashboard</Link> | 
        <Link to="/accounts">Contas</Link> | 
        <Link to="/categories">Categorias</Link> | 
        <Link to="/parcels">Parcelas</Link>
      </nav>
    </div>
  );
};
export default App;