class Appointment {
    patientId: string;
    professionalId: string;
    service: string;
    date: Date;
    duration: number;
    price: number;
    status: AppointmentStatus;
  
    constructor(
      patientId: string,
      professionalId: string,
      service: string,
      date: Date,
      duration: number,
      price: number,
      status: AppointmentStatus
    ) {
      this.patientId = patientId;
      this.professionalId = professionalId;
      this.service = service;
      this.date = date;
      this.duration = duration;
      this.price = price;
      this.status = status;
    }
  }

enum AppointmentStatus {
    SCHEDULED = 'SCHEDULED',
    COMPLETED = 'COMPLETED',
    CANCELLED = 'CANCELLED',
  }


  