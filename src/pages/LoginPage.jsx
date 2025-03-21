import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "frontend\src\services\api.js";

const LoginPage = () => {
  const [login, setLogin] = useState("");
  const [senha, setSenha] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    const data = await loginUser(login, senha);
    if (data.message === "Login bem-sucedido") {
      alert("Login bem-sucedido!");
      navigate("/dashboard");
    } else {
      alert("Credenciais inválidas");
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <input type="text" placeholder="Usuário" value={login} onChange={(e) => setLogin(e.target.value)} />
      <input type="password" placeholder="Senha" value={senha} onChange={(e) => setSenha(e.target.value)} />
      <button onClick={handleLogin}>Entrar</button>
    </div>
  );
};
export default LoginPage;