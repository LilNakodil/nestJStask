

import {BelongsToMany, Column,DataType,Model,Table,HasMany} from 'sequelize-typescript';
import { ApiProperty } from '@nestjs/swagger/dist';
import { UserRoles } from 'src/roles/user-roles.model';
import { Role } from 'src/roles/roles.model';
import { Post } from 'src/posts/posts.model';
interface UserCreationAttrs{
    email:string;
    password:string;
}
@Table({tableName:'users'})
export class User extends Model<User,UserCreationAttrs>{
    @ApiProperty({example:'1',description:'Unical id'})
    @Column({type:DataType.INTEGER,unique:true,autoIncrement:true,primaryKey:true})
    id:number;
    @ApiProperty({example:'smth@gmail.com',description:'Mail adress'})
    @Column({type:DataType.STRING,unique:true,allowNull:false})

    email:string;
    @ApiProperty({example:'01023',description:'Users password'})
    @Column({type:DataType.STRING,allowNull:false})
    password:string;
    @ApiProperty({example:'true',description:'IsBanned?'})
    @Column({type:DataType.BOOLEAN,defaultValue:false})
    banned:boolean;
    @ApiProperty({example:'Because of developer decision',description:'Why it is banned?'})
    @Column({type:DataType.STRING,allowNull:true})
    banReason:string;
    @BelongsToMany(()=>Role,()=>UserRoles)
    roles:Role[];
    @HasMany(()=>Post)
    posts:Post[];
}