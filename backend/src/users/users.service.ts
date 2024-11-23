import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma/prisma.service';
import * as bcrypt from 'bcryptjs';
import { UserDto } from './user.dto';
import { ResponseDTO } from 'src/shared/reponse.dto';

@Injectable()
export class UsersService {
  constructor(private prismaService: PrismaService) {}
  async findAll(): Promise<any> {
    const users = await this.prismaService.user.findMany();
    return users.map((user) => ({
      id: user.id,
      name: user.name,
      email: user.email,
      type: user.type,
      fieldOfActivity: user.fieldOfActivity,
    }));
  }
  async create(user: UserDto): Promise<ResponseDTO> {
    const hashedPassword = bcrypt.hashSync(user.password, 10);
    if (this.prismaService.user.findUnique({ where: { email: user.email } })) {
      return {
        error: 'Email already exists, please try again with a different email',
        status: 400,
        message: 'Email already exists.',
      };
    }
    if (user.type === 'PROFESSIONAL' && user.fieldOfActivity === '') {
      return {
        message: 'Every professional must have a field of activity',
        status: 400,
        error: 'Field of activity not specified',
      };
    }
    this.prismaService.user.create({
      data: {
        name: user.name,
        email: user.email,
        password: hashedPassword,
        type: user.type,
        fieldOfActivity: user.fieldOfActivity,
      },
    });
    return { message: 'User created successfully', status: 201 };
  }

  async findById(id: string) {
    return await this.prismaService.user.findUnique({
      where: { id },
    });
  }

  async findByEmail(email: string) {
    return await this.prismaService.user.findUnique({
      where: { email },
    });
  }

  async update(id: string, user: UserDto): Promise<ResponseDTO> {
    const hashedPassword = bcrypt.hashSync(user.password, 10);
    this.prismaService.user.update({
      where: { id },
      data: {
        name: user.name,
        email: user.email,
        password: hashedPassword,
        type: user.type,
        fieldOfActivity: user.fieldOfActivity,
      },
    });
    return { message: 'User updated successfully', status: 200 };
  }
}