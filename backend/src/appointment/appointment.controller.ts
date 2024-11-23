import { Body, Controller, Get, Query, Param, Post, Put } from '@nestjs/common';

import { AppointmentDto } from './appointment.dto';

import { AppointmentService } from './appointment.service';

@Controller('appointment')
export class AppointmentController {
    
    constructor(private readonly appointmentService:AppointmentService) {}

    @Post()
    async create(@Body() appointment:AppointmentDto): Promise<any>{
        return await this.appointmentService.create(appointment);
    }

    @Get(':patientId/:professionalId')
    async getAppointment(
        @Param('patientId') patientId: string,
        @Param('professionalId') professionalId: string
    ):Promise<any> {
        return await this.appointmentService.getAppointment(patientId, professionalId);
    }

    @Get('patient/:patientId')
    async getAppointmentsByPatient(@Param("patientId")patientId: string){
        return await this.appointmentService.getAppointmentsByPatient(patientId);
    }

}


