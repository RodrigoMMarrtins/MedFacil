import CustomImage from "./Image"
import styles from './ContainerForm.module.css';

const Menu = () => {
    return(
        <div className={styles.menu}>
            <CustomImage 
            src="/images/logoMenu.svg"
            alt="Logo"
            width={200}
            height={200}
            className={styles.img_container}
            />
            <ul className={styles.nav}>
                <li>
                    <span></span>
                    <a href="" className={styles.a}>Visão Geral da Saúde</a>
                </li>

                <li>
                    <span></span>
                    <a href="" className={styles.a}>Calendário</a>
                </li>

                <li>
                    <span></span>
                    <a href="" className={styles.a}>Agendar Especialistas</a>
                </li>

                <li>
                    <span></span>
                    <a href="" className={styles.a}>Fale com o Suporte</a>
                </li>

            </ul>
        </div>
    )
}

export default Menu