import { useState } from 'react';
import CustomImage from '@/components/Image';
import FirstStepRegistrationForm from '@/components/FirstStepRegistrationForm';
import SecondStepRegistrationForm from '@/components/SecondStepRegistrationForm';
import RegistrationForm from '@/components/RegistrationForm';
import Container from '@/components/container';
import containerForm from '@/components/ContainerForm.module.css';
import Background from '@/components/Background';


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

const handleSecondStepSubmit = async (data: { dateOfBirth: string; gender: string; cpf: string }) => {
    const combinedData = { ...firstStepData, ...data };

    try {
        const response = await fetch('/user', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(combinedData),
        });

        if (!response.ok) {
            throw new Error('Erro ao realizar o cadastro.');
        }

        const responseData = await response.json();
        console.log("Cadastro realizado com sucesso:", responseData);
        // Aqui você pode redirecionar ou exibir uma mensagem de sucesso para o usuário.
        setStep(1); // Resetando o formulário ou redirecionando para outra página

    } catch (error) {
        console.error("Erro na requisição:", error);
        // Aqui você pode mostrar uma mensagem de erro para o usuário.
    }
};

    return(
        <Background className={containerForm.background_form}>
            <Container className={containerForm.div}>
                <h1 className={containerForm.h1}>
                    Formulário de Registro
                </h1>
                <p className={containerForm.p}>Por favor, preencha este formulário com as informações necessárias:</p>
                {step === 1 ?
                
                <CustomImage 
                    src="/images/timeline1.svg"
                    alt="Etapa 01 do Cadastro"
                    width={447}
                    height={100}
                /> :

                <CustomImage
                    src="/images/timeline2.svg"
                    alt="Etapa 02 do Cadastro"
                    width={447}
                    height={100}
                />
            
                }

                
                
                {step === 1 ?
                (
                <FirstStepRegistrationForm onNext={handleFirstStepNext}/>) :
                (<SecondStepRegistrationForm onSubmit={handleSecondStepSubmit}/>)
            }
            </Container>
        </Background>
    )
}