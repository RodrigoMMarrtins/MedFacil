import styles from '@/components/ContainerForm.module.css'

const AppointmentShow = ( ) => {
    return (
        <form className={`${styles.appointment_form}`}>
            <div className={styles.appointment_item}>
                
                <p>Dra Helena de Souza</p>
            </div>

            <div className={styles.appointment_item}>
                
                <p>Psiquiatria</p>
            </div>

            <div className={styles.appointment_item}>
                
                <p>Telemedicina</p>
            </div>

            <div className={styles.appointment_item}>
                
                <p>11 999998888</p>
            </div>

            <div className={styles.appointment_item}>
                
                <p>Saúde mental temporárias ou de longo prazo.</p>
            </div>


            <div className={styles.appointment_item}>
                <input type="date" />


                <p>9:00</p>
            </div>

            <div className={styles.appointment_item}>
                
                <p>Valor da Consulta: R$300,00</p>
            </div>

            <button type="submit" className={styles.btn_submit}>
                    Agendar
                </button>
        </form>
    )
}

export default AppointmentShow;