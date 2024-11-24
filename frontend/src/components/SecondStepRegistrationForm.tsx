import { useState } from "react";
import styles from './RegistrationForm.module.css';

interface SecondStepFormProps{
    onSubmit: (data: { dateOfBirth: string, gender: string, cpf: string}) => void;

}

export default function SecondStepRegistrationForm({ onSubmit }: SecondStepFormProps) {
    const [formData, setFormData] = useState({
        dateOfBirth: '',
        gender: '',
        cpf: ''
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value} = e.target;

        setFormData({...formData, [name]: value});
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        onSubmit(formData);
    }

    return (
        <form onSubmit={handleSubmit} className={styles.form}>
            <div>
                <label htmlFor="dateOfBirth">Data de Nascimento:</label>
                <input 
                    type="text" 
                    id="dateOfBirth"
                    name="dateOfBirth"
                    value={formData.dateOfBirth}
                    onChange={handleChange}
                />
            </div>

            <div>
                <label htmlFor="gender">Sexo:</label>

                <label htmlFor="gender">
                    <input 
                        type="radio" 
                        id="gender"
                        name="gender"
                        value="male"
                        checked={formData.gender === 'male'}
                        onChange={handleChange}
                    />
                    <span>Masculino</span>
                </label>

                <label htmlFor="gender">
                    <input 
                        type="radio" 
                        id="gender"
                        name="gender"
                        value="male"
                        checked={formData.gender === 'female'}
                        onChange={handleChange}
                    />
                    <span>Feminino</span>
                </label>
            </div>

            <div>
                <label htmlFor="cpf">CPF:</label>
                <input 
                    type="text" 
                    id="cpf"
                    name="cpf"
                    value={formData.cpf}
                    onChange={handleChange}
                />
            </div>

            <button type="submit">
                Enviar
            </button>
        </form>
    )

}