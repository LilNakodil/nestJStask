import { Controller, Post, Body,Get,UseGuards,UsePipes} from '@nestjs/common';
import { CreateUserDto } from './create-user.dto';
import { UsersService } from './users.service';
import { ApiOperation,ApiResponse, ApiTags } from "@nestjs/swagger";
import { User } from './user.model';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { Roles } from 'src/auth/roles-auth.decorator';
import { RolesController } from 'src/roles/roles.controller';
import { RolesGuard } from 'src/auth/roles.guard';
import { addRoleDto } from './dto/add-role.dto';
import { BanUserDto } from './dto/ban-user.dto';
import { ValidationPipe } from '@nestjs/common';
@ApiTags('Users')
@Controller('users')
export class UsersController {
    constructor(private usersService:UsersService){

    }
    @ApiOperation({summary:"Creating user"})
    @ApiResponse({status:200,type:User})
    @UsePipes(ValidationPipe)
    @Post()
    create(@Body() userDto:CreateUserDto){
        return this.usersService.createUser(userDto)

    }
    @ApiOperation({summary:"Gettin users"})
    @ApiResponse({status:200,type:[User]})
    @Roles('ADMIN')
    @UseGuards(RolesGuard)
    @Post()
    getAll(){
        return this.usersService.getAllUsers()
    }
    @ApiOperation({summary:"Givin roles"})
    @ApiResponse({status:200})
    @Roles('ADMIN')
    @UseGuards(RolesGuard)
    @Post('/role')
    addRole(@Body() dto:addRoleDto){
        return this.usersService.addRole(dto);
    }
    @ApiOperation({summary:"Baning"})
    @ApiResponse({status:200})
    @Roles('ADMIN')
    @UseGuards(RolesGuard)
    @Get('/ban')
    ban(@Body() dto:BanUserDto){
        return this.usersService.ban(dto);
    }
}
