import { Injectable } from '@nestjs/common';
import { ResponseDTO } from 'src/shared/reponse.dto';
import { AppointmentDto } from './appointment.dto';
import { PrismaService } from 'src/prisma/prisma/prisma.service';
import { Appointment, appointmentStatus } from '@prisma/client';

@Injectable()
export class AppointmentService {
  constructor(private prismaService: PrismaService) {}

  async create(appointment: AppointmentDto): Promise<ResponseDTO> {
    const patient = await this.prismaService.user.findUnique({
      where: { id: appointment.patientId },
    });

    if (!patient || patient.type !== 'NORMAL') {
      return {
        error:
          'Paciente não existe ou id informado não é de paciente, verifique se realmente existe ou se o id está correto...',
        status: 400,
        message: 'Paciente não existe ou id informado não é de paciente',
      };
    }

    const professional = await this.prismaService.user.findUnique({
      where: { id: appointment.professionalId },
    });

    if (!professional || professional.type !== 'PROFESSIONAL') {
      return {
        error:
          'Profissional não existe ou id informado não é de profissional, verifique se realmente existe ou se o id está correto...',
        status: 400,
        message:
          'Profissional não existe ou id informado não é de profissional',
      };
    }

    const payload: AppointmentDto = await this.prismaService.appointment.create(
      {
        data: {
          patientId: appointment.patientId,
          professionalId: appointment.professionalId,
          service: appointment.service,
          date: appointment.date,
          duration: appointment.duration,
          price: appointment.price,
          status: appointmentStatus.AGENDADO,
        },
      },
    );

    return {
      message: 'Appointment created succesfully',
      status: 201,
      data: payload,
    };
  }

  async getAppointment(patientId: string, professionalId: string) {
    return this.prismaService.appointment.findFirst({
      where: {
        patientId: patientId,
        professionalId: professionalId,
      },
      include: {
        patient: true,
        professional: true,
      },
    });
  }

  async getAppointmentsByPatient(patientId: string): Promise<Appointment[]> {
    const appointments = await this.prismaService.appointment.findMany({
      where: {
        patientId: patientId,
      },
      include: {
        patient: true,
        professional: true,
      },
    });

    return appointments.map(
      (item): AppointmentDto => ({
        id: item.id,
        patientId: item.patientId,
        professionalId: item.professionalId,
        service: item.service,
        date: item.date,
        duration: item.duration,
        price: item.price,
        status: item.status,
      }),
    );
  }

  async updateAppointment(
    appointmentId: string,
    appointment: AppointmentDto,
  ): Promise<ResponseDTO> {
    const exist = await this.prismaService.appointment.findUnique({
      where: { id: appointmentId },
    });
    if (!exist) {
      return {
        error: 'Appointment not found',
        message: 'Appointment not found, please try again',
        status: 404,
      };
    }
    const updatedAppointment = await this.prismaService.appointment.update({
      where: { id: appointmentId },
      data: {
        service: appointment.service,
        date: appointment.date,
        duration: appointment.duration,
        price: appointment.price,
        status: appointment.status,
      },
    });
    return {
      status: 200,
      message: 'Appointment updated successfully',
      data: updatedAppointment,
    };
  }

  async findAllAppointmentsByPatientId(
    patientId: string,
  ): Promise<AppointmentDto[]> {
    const appointments = await this.prismaService.appointment.findMany({
      where: {
        patientId: patientId,
      },
      include: {
        professional: true,
      },
    });

    return appointments.map(
      (item): AppointmentDto => ({
        id: item.id,
        patientId: item.patientId,
        professionalId: item.professionalId,
        service: item.service,
        date: item.date,
        duration: item.duration,
        price: item.price,
        status: item.status,
      }),
    );
  }

  async findAllAppointmentsByProfessionalId(
    professionalId: string,
  ): Promise<Appointment[]> {
    const appointments = await this.prismaService.appointment.findMany({
      where: {
        professionalId: professionalId,
      },
      include: {
        patient: true,
      },
    });

    return appointments.map(
      (item): AppointmentDto => ({
        id: item.id,
        patientId: item.patientId,
        professionalId: item.professionalId,
        service: item.service,
        date: item.date,
        duration: item.duration,
        price: item.price,
        status: item.status,
      }),
    );
  }
}
