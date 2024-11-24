'use client'
import { useRouter } from 'next/navigation';

const HomePage = () => {
  const router = useRouter();

  return (
    <div className="p-4">
      <h1 className="text-3xl">Bem-vindo à MedFacil!</h1>
      <button
        onClick={() => router.push('/login')}
        className="mt-4 bg-blue-500 text-white p-2 rounded"
      >
        Fazer login
      </button>
    </div>
  );
};

export default HomePage;
