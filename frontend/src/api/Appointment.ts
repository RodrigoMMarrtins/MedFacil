class Appointment {
    id: string;
    patientId: string;
    professionalId: string;
    service: string;
    date: Date;
    duration: number;
    price: number;
    status: AppointmentStatus;
  
    constructor(
      id: string,
      patientId: string,
      professionalId: string,
      service: string,
      date: Date,
      duration: number,
      price: number,
      status: AppointmentStatus
    ) {
      this.id = id;
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


  