import { Module } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';

// Instância do prisma client vindo do middleware
// import prisma from './prisma/prisma.middleware';

@Module({
  providers: [PrismaService],

  exports: [PrismaService],
})

export class PrismaModule {}
