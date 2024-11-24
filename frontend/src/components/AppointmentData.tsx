import styles from '@/components/ContainerForm.module.css'
import form from '@/components/RegistrationForm.module.css'

const AppointmentData = () => {
    return (
        <form className={styles.appointment_form}>

            <div className={styles.appointment_data}>
                <div>
                    <label htmlFor="date">Data da Consulta: </label>
                    <input type="date" name="date" id="date" className={styles.input_date}/>
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