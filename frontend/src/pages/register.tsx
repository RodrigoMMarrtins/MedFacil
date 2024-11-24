import { useState } from 'react';
import FirstStepRegistrationForm from '@/components/FirstStepRegistrationForm';
import SecondStepRegistrationForm from '@/components/SecondStepRegistrationForm';
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

const [step, setStep] = useState(1);
const [firstStepData, setFirstStepData] = useState({
    name: '',
    email: '',
    password: ''
})

const [secondStepData, setSecondStepData] = useState({
    dateOfBirth: '',
    gender: '',
    cpf: ''
})

const handleFirstStepNext = (data: {
    name: string,
    email: string,
    password: string,

}) => {
    setFirstStepData(data),
    setStep(2);
}

const handleSecondStepSubmit = (data: {
    dateOfBirth: string,
    gender: string,
    cpf: string,
}) => {
    const combineData = {...firstStepData, ...data};
    console.log("Dados finais do form: ", combineData);
}

    return(
        <div>
            <h1>
                {step === 1 ? 'Cadastro Parte 1' : 'Cadastro Parte 2'}
            </h1>

            {step === 1 ? 
            (<FirstStepRegistrationForm onNext={handleFirstStepNext}/>) : 
            (<SecondStepRegistrationForm onSubmit={handleSecondStepSubmit}/>)
        }
        </div>
    )
}