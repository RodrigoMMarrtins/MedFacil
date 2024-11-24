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
            <div className={styles.input_line}>
                <label htmlFor="name">Nome:</label>
                <input 
                    type="text" 
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={styles.input_text}
                    placeholder="Henrique Gabriel Silva"
                />
            </div>
            <div className={styles.input_line}>
                <label htmlFor="email">Email:</label>
                <input 
                    type="text" 
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={styles.input_text}
                    placeholder="Digite o email"
                />
            </div>
            <div className={styles.input_line}>
                <label htmlFor="password">Senha:</label>
                <input 
                    type="password" 
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    className={styles.input_text}
                    placeholder="********"
                />  
            </div>

            <button type="submit" className={styles.btn_next}>
                Avançar
            </button>
        </form>
    )

}