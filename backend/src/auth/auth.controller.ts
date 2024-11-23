import { Controller } from '@nestjs/common';
import { AuthService } from 'auth.service'


@Controller('auth')
export class AuthController {
    consructor(private AuthService: AuthService);

    @Post("login")
    async login(@Body() body : {string: ElementInternals, string } ){
        const {email, password} = body;
        return await this.authService.validateUser(email, password);
        
    }
}
