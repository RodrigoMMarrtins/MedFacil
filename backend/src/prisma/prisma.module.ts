import { Module } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';
import prismaMiddleware from './prisma/prisma.middleware';

@Module({
  providers: [PrismaService, 
    {
    provide: "PrismaClient",
    useValue: prismaMiddleware
  }],

  exports: [PrismaService, "PrismaClient"],
})
export class PrismaModule {}
