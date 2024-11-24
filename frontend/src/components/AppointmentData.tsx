

const AppointmentData = () => {
    return (
        <div>
            <div>
                <label htmlFor="date"></label>
                <input type="date" name="date" id="date"/>
            </div>
            <div>
                <h1>Horários</h1>
                {/* Linhas dos horários */}
                <h2>Manhã</h2>
                <ul>
                    <li>09:00</li>
                    <li>10:00</li>
                    <li>11:00</li>
                    <li>12:00</li>
                </ul>
                <h2>Tarde</h2>
                <ul>
            a               <li>13:00</li>
                    <li>14:00</li>
                    <li>15:00</li>
                    <li>16:00</li>
                    <li>17:00</li>
                    <li>18:00</li>
                </ul>
                <h2>Noite</h2>
                <ul>
                    <li>19:00</li>
                    <li>20:00</li>
                    <li>21:00</li>
                </ul>
            </div>
            <div>
                <input
            
                type="text"
                name="professionalName"
                id="professionalName"
                />
            </div>
        </div>
    );
}

export default AppointmentData;