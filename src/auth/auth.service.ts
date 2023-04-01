import { Injectable,UnauthorizedException } from '@nestjs/common';
import { CreateUserDto } from 'src/users/create-user.dto';
import { UsersService } from 'src/users/users.service';
import { JwtService } from '@nestjs/jwt/dist';
import { HttpException } from '@nestjs/common/exceptions';
import { HttpStatus } from '@nestjs/common/enums';
import * as bcrypt from 'bcryptjs'

@Injectable()
export class AuthService {
    
    constructor(private userService: UsersService,
        private jwtService:JwtService){

    }
    async login(userDto:CreateUserDto){
        const user=await this.validateUser(userDto)
        return this.generateToken(user)
    }
    async registration(userDto:CreateUserDto){
        const candidate=await this.userService.getUserByEmail(userDto.email)
        if(candidate){
            throw new HttpException("Email is already used",HttpStatus.BAD_REQUEST)
        }
        const hashPassword=await bcrypt.hash(userDto.password,5)
        const user=await this.userService.createUser({...userDto,password:hashPassword})
        return this.generateToken(user)
    }
    async generateToken(user){
        const payload={email:user.email,id:user.id,roles:user.role}
        return{
            token:this.jwtService.sign(payload)
        }
    }
    private async validateUser(userDto:CreateUserDto){
        const user=await this.userService.getUserByEmail(userDto.email);
        const passwordEquals=await bcrypt.compare(userDto.password,user.password);
        if (user&&passwordEquals){
            return user;
        }
        throw new UnauthorizedException({message:'Invalid email or password'})
    }
}
