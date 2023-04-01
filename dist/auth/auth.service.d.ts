import { CreateUserDto } from 'src/users/create-user.dto';
import { UsersService } from 'src/users/users.service';
import { JwtService } from '@nestjs/jwt/dist';
export declare class AuthService {
    private userService;
    private jwtService;
    constructor(userService: UsersService, jwtService: JwtService);
    login(userDto: CreateUserDto): Promise<{
        token: string;
    }>;
    registration(userDto: CreateUserDto): Promise<{
        token: string;
    }>;
    generateToken(user: any): Promise<{
        token: string;
    }>;
    private validateUser;
}
