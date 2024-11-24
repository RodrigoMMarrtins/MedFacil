import React, { useState } from 'react';
import { useRouter } from 'next/router';

// Definindo os tipos para os campos de formulário
interface FormData {
  username: string;
  password: string;
}

const Login: React.FC = () => {
  const router = useRouter();
  const [formData, setFormData] = useState<FormData>({ username: '', password: '' });
  const [error, setError] = useState<string>('');

  // Função para lidar com mudanças nos campos do formulário
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Função para lidar com o envio do formulário
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validação simples de credenciais
    if (formData.username === 'admin' && formData.password === 'password123') {
      // Simulação de sucesso no login
      router.push('/'); // Redireciona para a página inicial
    } else {
      // Exibe uma mensagem de erro se as credenciais forem inválidas
      setError('Usuário ou senha inválidos.');
    }
  };

  return (
    <div style={{ maxWidth: '400px', margin: '0 auto', padding: '20px' }}>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Usuário</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
            style={{ width: '100%', padding: '8px', margin: '10px 0' }}
          />
        </div>

        <div>
          <label htmlFor="password">Senha</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
            style={{ width: '100%', padding: '8px', margin: '10px 0' }}
          />
        </div>

        {/* Exibe a mensagem de erro caso as credenciais sejam inválidas */}
        {error && <p style={{ color: 'red' }}>{error}</p>}

        <button
          type="submit"
          style={{
            width: '100%',
            padding: '10px',
            backgroundColor: '#0070f3',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
          }}
        >
          Entrar
        </button>
      </form>
    </div>
  );
};

export default Login;


