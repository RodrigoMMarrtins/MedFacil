import { useState } from "react";
import styles from './RegistrationForm.module.css';

interface SecondStepFormProps{
    onNext: (data: { name: string, email: string, password: string}) => void;

}

export default function FirstStepRegistrationForm({ onNext }: SecondStepFormProps) {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: ''
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value} = e.target;

        setFormData({...formData, [name]: value});
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        onNext(formData);
    }

    return (
        <form onSubmit={handleSubmit} className={styles.form}>
            <div>
                <label htmlFor="name">Nome:</label>
                <input 
                    type="text" 
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="email">Email:</label>
                <input 
                    type="text" 
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="password">Senha:</label>
                <input 
                    type="text" 
                    id="password"
                    name="password"
                    value={formData.name}
                    onChange={handleChange}
                />
            </div>

            <button type="submit">
                Próxima Etapa
            </button>
        </form>
    )

}