import { appointmentStatus } from '@prisma/client';

export class AppointmentDto {
  id: string;
  patientId: string;
  professionalId: string;
  service: string;
  date: Date;
  duration: number;
  price: number;
  status: appointmentStatus;
}
