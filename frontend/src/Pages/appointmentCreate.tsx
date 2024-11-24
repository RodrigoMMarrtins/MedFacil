import Container from "@/components/container";
import Menu from "@/components/MenuLateral";
import Appointgemtf from "@/components/AppointmentData";
import AppointmentData from "@/components/AppointmentData";
import AppointmentShow from "@/components/AppointmentShow";
import styles from "@/components/ContainerForm.module.css";

export default function appointmentCreate(){
    return (
        <Container className={styles.layout_2col_70_30pct}>
        <Menu>
            
        </Menu>

            <form className={styles.flex7}>
                <h1>Agendar um atendimento com um especialista</h1>
                {/* Input <div></div> */}
                <p>Selecione data e horário de acordo com a disponibilidade</p>

                <AppointmentData>

                </AppointmentData>

                <AppointmentShow></AppointmentShow>
                <button type="submit">
                    Agendar
                </button>
            </form>
        </Container>
    );
}