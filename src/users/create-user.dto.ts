import { ApiProperty } from "@nestjs/swagger/dist/decorators";
import { IsString,Length,IsEmail } from "class-validator";


export class CreateUserDto{
    @ApiProperty({example:'smth@gmail.com',description: 'Mail adress'})
    @IsString({message:'Must be a string'})
    @IsEmail({},{message:'Must be an email'})
    readonly email:string;
    @ApiProperty({example:'01023',description: 'Password'})
    @IsString({message:'Must be a string'})
    @Length(4,16,{message:"Must be between 4 and 16"})
    readonly password:string;
    
}