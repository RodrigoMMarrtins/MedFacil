import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Put,
  Res,
  UseGuards,
} from '@nestjs/common';
import { AppointmentDto } from './appointment.dto';
import { AppointmentService } from './appointment.service';
import { Response } from 'express';
import { JwtAuthGuard } from 'src/auth/jwt/jwt-auth.guard';

@Controller('appointments')
export class AppointmentController {
  constructor(private readonly appointmentService: AppointmentService) {}

  @Post()
  @UseGuards(JwtAuthGuard)
  async create(
    @Body() appointment: AppointmentDto,
    @Res() res: Response,
  ): Promise<any> {
    const payload = await this.appointmentService.create(appointment);

    if (!payload.error) {
      return res.status(payload.status).json({
        message: payload.message,
        statusCode: payload.status,
        data: payload.data,
      });
    }
    return res.status(payload.status).json({
      message: payload.message,
      statusCode: payload.status,
      error: payload.error,
    });
  }

  @Get('patient/:patientId/:professionalId')
  @UseGuards(JwtAuthGuard)
  async getAppointment(
    @Param('patientId') patientId: string,
    @Param('professionalId') professionalId: string,
    @Res() res: Response,
  ): Promise<any> {
    const payload = await this.appointmentService.getAppointment(
      patientId,
      professionalId,
    );
    return res.status(200).json({
      message: 'Success',
      statusCode: 200,
      data: payload,
    });
  }

  @Get('patient/:patientId')
  @UseGuards(JwtAuthGuard)
  async getAppointmentsByPatient(
    @Param('patientId') patientId: string,
    @Res() res: Response,
  ) {
    const payload =
      await this.appointmentService.getAppointmentsByPatient(patientId);

    return res.status(200).json({
      message: 'Success',
      statusCode: 200,
      data: payload,
    });
  }

  @Put(':appointmentId')
  @UseGuards(JwtAuthGuard)
  async updateAppointment(
    @Param('appointmentId') appointmentId: string,
    @Body() appointment: AppointmentDto,
    @Res() res: Response,
  ): Promise<any> {
    const payload = await this.appointmentService.updateAppointment(
      appointmentId,
      appointment,
    );
    if (!payload.error && payload.error === '') {
      return res.status(payload.status).json({
        message: payload.message,
        statusCode: payload.status,
        data: payload,
      });
    }
    return res.status(payload.status).json({
      message: payload.message,
      statusCode: payload.status,
      error: payload.error,
    });
  }

  @Get('patient/:patientId')
  @UseGuards(JwtAuthGuard)
  async getAppointmentByPatient(
    @Param('patientId') patientId: string,
    @Res() res: Response,
  ) {
    const payload =
      await this.appointmentService.getAppointmentsByPatient(patientId);
    return res.status(200).json({
      message: 'Success',
      statusCode: 200,
      data: payload,
    });
  }

  @Get('professional/:professionalId')
  @UseGuards(JwtAuthGuard)
  async getAppointmentsByProfessional(
    @Param('professionalId') professionalId: string,
    @Res() res: Response,
  ) {
    const payload =
      await this.appointmentService.findAllAppointmentsByProfessionalId(
        professionalId,
      );
    return res.status(200).json({
      message: 'Success',
      statusCode: 200,
      data: payload,
    });
  }
}
