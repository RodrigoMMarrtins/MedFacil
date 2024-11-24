import { ReactNode } from "react";

interface BackgroundProps {
    children: ReactNode;
    className?: string; // Permite adicionar classes adicionais se necessário
}

export default function Background({ children, className = ''}: BackgroundProps){
    return (<div className={className}>
        {children}
    </div>);
}