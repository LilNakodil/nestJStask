import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import {User} from './user.model';
import {SequelizeModule} from '@nestjs/sequelize';
import { RolesModule } from 'src/roles/roles.module';
import { Role } from 'src/roles/roles.model';
import { UserRoles } from 'src/roles/user-roles.model';
import { forwardRef } from '@nestjs/common/utils';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  providers: [UsersService],
  controllers: [UsersController],
  imports:[
    SequelizeModule.forFeature([User,Role,UserRoles]),
    RolesModule,
    forwardRef(()=>AuthModule)
  ],
  exports:[
    UsersService
  ]
  
})
export class UsersModule {}
