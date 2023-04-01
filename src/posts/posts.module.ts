import { Module } from '@nestjs/common';
import { PostsService } from './posts.service';
import { PostsController } from './posts.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from 'src/users/user.model';
import { Role } from 'src/roles/roles.model';
import { UserRoles } from 'src/roles/user-roles.model';
import { Post } from './posts.model';
import { FilesModule } from './files/files.module';
@Module({
  providers: [PostsService],
  controllers: [PostsController],
  imports:[
    SequelizeModule.forFeature([User,Post]),
    FilesModule,
    FilesModule
  ]

  
})
export class PostsModule {}
