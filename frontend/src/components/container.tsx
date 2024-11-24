// src/components/Container.tsx
import { ReactNode } from 'react';

interface ContainerProps {
  children: ReactNode;
  className?: string; // Permite adicionar classes adicionais se necessário
}

const Container = ({ children, className = '' }: ContainerProps) => {
  return (
    <div className={`max-w-4xl mx-auto p-4 ${className}`}>
      {children}
    </div>
  );
};

export default Container;
