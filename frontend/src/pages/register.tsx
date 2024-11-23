import { useState } from 'react';
import RegistrationForm from '@/components/RegistrationForm';

export default function Register(){
//     const {formData, setFormData} = useState({
//         name: '',
//         email: '',
//         password: ''
//     });

//     const handleChange = (e) => {
//         const { name, value } => e.target;

//     }

    return(
        <div>
            <h1>
                Registrar
            </h1>

            < RegistrationForm />
        </div>
    )
}