import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma/prisma.service';
import * as bcrypt from 'bcryptjs';
import { UserDto } from './user.dto';

@Injectable()
export class UsersService {
  constructor(private prismaService: PrismaService) {}
  create(user: UserDto) {
    const hashedPassword = bcrypt.hashSync(user.password, 10);
    if (user.type === 'PROFESSIONAL' && user.field_of_activity === '') {
      return {
        message: 'Every professional must have a field of activity',
        status: 400,
      };
    }
    this.prismaService.user.create({
      data: {
        name: user.name,
        email: user.email,
        password: hashedPassword,
        type: user.type,
      },
    });
    return { message: 'User created successfully', status: 201 };
  }

  async findById(id: string) {
    return await this.prismaService.user.findUnique({
      where: { id },
    });
  }
}
