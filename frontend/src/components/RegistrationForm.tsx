import { useState } from "react";
// import styles from './RegistrationForm.module.css';



export default function RegistrationForm() {
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
        console.log("Dados enviados: ", formData);
    }

    return (
        <form onSubmit={handleSubmit} className="bg-black">
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
        </form>
    )

}