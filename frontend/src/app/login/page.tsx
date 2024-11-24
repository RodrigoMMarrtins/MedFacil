"use client"
import { redirect } from "next/navigation";
import { useState } from "react";

interface FormData {
  username: string;
  password: string;
}

const Login: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    username: "",
    password: "",
  });
  const [error, setError] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (formData.username === "admin" && formData.password === "password123") {
      redirect("/");
    } else {
      setError("Usuário ou senha inválidos.");
    }
  };

  return (
    <div
      className="flex items-center justify-center w-full h-screen bg-hero-pattern bg-cover bg-[url('/medifacilbackground.jpg')]"
      id="main"
    >
      <div className="bg-white border-4 border-white rounded-lg p-4"  style={{ maxWidth: "400px", margin: "0 auto", padding: "20px" }}>
      <div class="flex pd-4 items-center justify-center">
  <h1 class="font-bold text-center text-xl">Login</h1>
</div>        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="username">Usuário</label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              required
              className="bg-gray-50 bord border-4 border-blue-500 p-4"
              style={{ width: "100%", padding: "8px", margin: "10px 0" }}
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
              className="bg-gray-50 bord border-4 border-blue-500 p-4"
              style={{ width: "100%", padding: "8px", margin: "10px 0" }}
            />
          </div>

          {/* Exibe a mensagem de erro caso as credenciais sejam inválidas */}
          
          {error && <p style={{ color: "red" }}>{error}</p>}

          <button
            type="submit"
            style={{
              width: "100%",
              padding: "10px",
              backgroundColor: "#0070f3",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            Entrar
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
