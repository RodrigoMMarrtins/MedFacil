// src/app/layout.tsx
import '../styles/globals.css';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-blue-500 text-white p-4">
        <h1>MedFacil</h1>
      </header>
      <main>{children}</main>
      <footer className="bg-gray-800 text-white p-4">
        <p>&copy; 2024 MedFacil</p>
      </footer>
    </div>
  );
}
