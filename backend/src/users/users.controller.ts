import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { UsersService } from './users.service';
import { UserDto } from './user.dto';
import { ResponseDTO } from 'src/shared/reponse.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  async createUser(@Body() user: UserDto): Promise<ResponseDTO> {
    return await this.usersService.create(user);
  }

  @Get()
  async getAllUsers(): Promise<any> {
    return await this.usersService.findAll();
  }

  @Get(':user_id')
  async getUser(@Param('user_id') id: string): Promise<any> {
    return await this.usersService.findById(id);
  }

  @Put(':user_id')
  async updateUser(
    @Param('user_id') id: string,
    @Body() user: UserDto,
  ): Promise<any> {
    return await this.usersService.update(id, user);
  }
}
