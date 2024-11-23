import { userType } from '@prisma/client';

export class UserDto {
  name: string;
  email: string;
  password: string;
  type: userType;
  fieldOfActivity?: string;
}
