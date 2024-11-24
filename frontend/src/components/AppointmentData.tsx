import styles from '@/components/ContainerForm.module.css'
import form from '@/components/RegistrationForm.module.css'
import { useState } from 'react';

const AppointmentData = async () => {
    const [formData, setFormData] = useState({
        date: '',
        professionalName: '',
        selectedTime: '09:00:00'
    });
    
    // Manipulador de alteração para os inputs
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value
        }));
    };

    // Manipulador de envio do formulário
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
    // Manipulador de alteração para os inputs
     // Convertendo a data para o formato ISO 8601 (com hora)
     const dateTime = new Date(formData.date);
     const isoDate = dateTime.toISOString(); // Vai gerar a string no formato correto (YYYY-MM-DDTHH:MM:SS.sssZ)

     // Atualizando os dados para enviar
     const finalData = {
         ...formData,
         date: isoDate, // Substituímos a data pelo formato ISO
     };

     // Enviando os dados via fetch
     try {
         const response = await fetch('http://localhost:3000/appointment', {
             method: 'POST',
             headers: {
                 'Content-Type': 'application/json',
             },
             body: JSON.stringify(finalData),
         });

         if (!response.ok) {
             throw new Error('Erro ao agendar consulta.');
         }

         const responseData = await response.json();
         console.log('Consulta agendada com sucesso:', responseData);
         // Resetando os dados do formulário
         setFormData({ date: '', professionalName: '', selectedTime: '09:00:00' });
     } catch (error) {
         console.error('Erro na requisição:', error);
    }
    }

    return (
        <form className={styles.appointment_form}>

            <div className={styles.appointment_data}>
                <div>
                    <label htmlFor="date">Data da Consulta: </label>
                    <input type="date" name="date" id="date" 
                    value={formData.date}
                    onChange={handleInputChange}
                    className={styles.input_date}/>
                </div>
    
                <div>
                    <h1>Horários</h1>
                    {/* Linhas dos horários */}
                    <h2>Manhã</h2>
                    <ul className={styles.list}>
                        <li className={styles.full}>09:00</li>
                        <li className={styles.full}>10:00</li>
                        <li className={styles.open}>11:00</li>
                        <li className={styles.full}>12:00</li>
                    </ul>
    
                    <h2>Tarde</h2>
                    <ul className={styles.list}>
                        <li className={styles.selected}>13:00</li>
                        <li className={styles.open}>14:00</li>
                        <li className={styles.full}>15:00</li>
                        <li className={styles.open}>16:00</li>
                        <li className={styles.full}>17:00</li>
                        <li className={styles.open}>18:00</li>
                    </ul>
    
                    <h2>Noite</h2>
                    <ul className={styles.list}>
                        <li className={styles.full}>19:00</li>
                        <li className={styles.full}>20:00</li>
                        <li className={styles.open}>21:00</li>
                    </ul>
                </div>
    
                <div className={form.input_line}>
                    <label htmlFor="professionalName">Especialista: </label>
                    <input
                
                    type="text"
                    name="professionalName"
                    id="professionalName"
                    className={styles.input_appointment}
                    value={formData.professionalName}
                    onChange={handleInputChange}
                    />
                </div>
    
                <button type="submit" className={styles.btn_submit}>
                    Agendar
                </button>
    
            </div>
    </form>
    );
}

export default AppointmentData;