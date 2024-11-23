import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';

import { AppointmentDTO } from './appointment.dto';

import { AppointmentService } from './appointment.service';

@Controller('appointment')
export class AppointmentController {
    
    @Post()
    async create(@Body() appointment:AppointmentDTO): Promise<any>{
        return await this.appointmentService.create(appointment);
    }

    
}


