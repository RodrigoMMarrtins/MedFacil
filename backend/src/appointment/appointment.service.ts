import { Injectable, Inject } from '@nestjs/common';
import { ResponseDTO } from 'src/shared/reponse.dto';
import { AppointmentDto } from './appointment.dto';
import { PrismaService } from 'src/prisma/prisma/prisma.service';

@Injectable()
export class AppointmentService {
    
    constructor(private prismaService: PrismaService){ }

    // Cria um agendamento tomando os dados de appointmentDTO, passados na requisição body do controller...
    async create(appointment: AppointmentDto): Promise<ResponseDTO>{ //
        
        // Valida se patientId é um usuário do tipo NORMAL...
        const patient = await this.prismaService.user.findUnique({
        where: { id: appointment.patientId },
        });

        // Se não for envia um erro dizendo que o id não é valido para o paciente...
        if (!patient || patient.type !== 'NORMAL') {
            return {
                error: 'Paciente não existe ou id informado não é de paciente, verifique se realmente existe ou se o id está correto...',
                status: 400,
                message: 'Paciente não existe ou id informado não é de paciente'
            };
        
            // throw new Error('O ID do paciente deve se referir a um usuário do tipo NORMAL.');
        }

        // Valida se professionalId é um usuário do tipo PROFESSIONAL...
        const professional = await this.prismaService.user.findUnique({
        where: { id: appointment.professionalId },
        });

        // Se não for exibe um erro de que o Id informado não se refere ao tipo PROFESSIONAL;
        if (!professional || professional.type !== 'PROFESSIONAL') {
            return {
                error: 'Profissional não existe ou id informado não é de profissional, verifique se realmente existe ou se o id está correto...',
                status: 400,
                message: 'Profissional não existe ou id informado não é de profissional'
            };

        //    throw new Error('O ID do profissional deve se referir a um usuário do tipo PROFESSIONAL.');
        }
        
        // const {patientId, professionalId, service, date, duration, price, status} = appointment; Atributos estão definidos no objeto DTO
        // Cria tomando os métodos de prisma service com o DTO do Agendamento
        this.prismaService.appointment.create({
            data: {
                patientId: appointment.patientId,
                professionalId: appointment.professionalId, 
                service: appointment.service, 
                date: appointment.date, 
                duration: appointment.duration, 
                price: appointment.price, 
                status: appointment.status}
        });

        return {message: 'Appointment created succesfully', status: 201};

    }

    async getAppointment(patientId: string, professionalId: string){
        return this.prismaService.appointment.findFirst({
            where:{
                patientId: patientId,
                professionalId: professionalId
            },
            include: {
                patient: true,
                professional: true
            }
        })
    }

    async getAppointmentsByPatient(patientId: string){
        return this.prismaService.appointment.findMany({
            where:{
                patientId: patientId
            },
            include:{
                patient: true, 
                professional: true
            }
        })
    }

    // Alteração de consulta...

    // Remoção de consulta...

    
}
