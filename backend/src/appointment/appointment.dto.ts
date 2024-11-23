// src/appointments/dto/create-appointment.dto.ts
import { userType } from '@prisma/client';

export class AppointmentDto {
  patientId: string;

  professionalId: string;

  service: string;

  date: Date;

  duration: number;

  price: number;

  // Supondo que status seja uma string
  status: number;
}
