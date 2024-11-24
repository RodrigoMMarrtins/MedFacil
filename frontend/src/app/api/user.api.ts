import Appointment from "./appointments.api";

export default class User {
    name: string;
    email: string;
    password: string;
    type: UserType;
    patients: Appointment[];
    professionals: Appointment[];
    fieldOfActivity?: string;
    birthDate: string;
    cpf: string;
    crm?: string;
    sex: string;

    constructor({
        name,
        email,
        password,
        type,
        patients = [],
        professionals = [],
        fieldOfActivity,
        birthDate,
        cpf,
        crm,
        sex,
    }: {
        id?: string;
        name: string;
        email: string;
        password: string;
        type: UserType;
        patients?: Appointment[];
        professionals?: Appointment[];
        fieldOfActivity?: string;
        birthDate: string;
        cpf: string;
        crm?: string;
        sex: string;
    }) {
        this.name = name;
        this.email = email;
        this.password = password;
        this.type = type;
        this.patients = patients;
        this.professionals = professionals;
        this.fieldOfActivity = fieldOfActivity;
        this.birthDate = birthDate;
        this.cpf = cpf;
        this.crm = crm;
        this.sex = sex;
    }

    // Método para gerar um UUID (simula o comportamento de @default(uuid()))
    private generateUUID(): string {
        return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c) => {
            const r = (Math.random() * 16) | 0;
            const v = c === "x" ? r : (r & 0x3) | 0x8;
            return v.toString(16);
        });
    }
}

enum UserType {
    PROFESSIONAL = "PROFESSIONAL",
    NORMAL = "NORMAL",
}
