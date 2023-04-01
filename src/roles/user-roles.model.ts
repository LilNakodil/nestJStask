import {BelongsToMany, Column,DataType,ForeignKey,Model,Table} from 'sequelize-typescript';
import { ApiProperty } from '@nestjs/swagger/dist';
import { Role } from './roles.model';
import { User } from 'src/users/user.model';

@Table({tableName:'user_roles',createdAt:false,updatedAt:false})
export class UserRoles extends Model<UserRoles>{
    @ApiProperty({example:'1',description:'Unical id'})
    @Column({type:DataType.INTEGER,unique:true,autoIncrement:true,primaryKey:true})
    id:number;
    @ForeignKey(()=>Role)
    @ApiProperty({example:'ADMIN',description:'Value of role'})
    @Column({type:DataType.INTEGER})

    roleId:number;
    @ForeignKey(()=>User)
    @ApiProperty({example:'Administrator',description:'Description of the role'})
    @Column({type:DataType.INTEGER})
    userId:number;
    
    
}