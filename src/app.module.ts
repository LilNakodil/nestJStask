import { Module } from "@nestjs/common";
import { SequelizeModule } from "@nestjs/sequelize";
import { UsersModule } from './users/users.module';
import { ConfigModule } from "@nestjs/config";
import { User } from "./users/user.model";
import { RolesModule } from './roles/roles.module';
import { Role } from "./roles/roles.model";
import { UserRoles } from "./roles/user-roles.model";
import { AuthModule } from './auth/auth.module';
import { PostsModule } from './posts/posts.module';
import { Post } from "./posts/posts.model";
import { ServeStaticModule } from "@nestjs/serve-static";
import * as path from "path"
@Module({
    controllers:[],
    providers:[],
    imports:[
        
        SequelizeModule.forRoot({
            dialect:'postgres',
            host:'localhost',
            port:5432,
            username:'postgres',
            password:'123',
            database:'user',
            models:[User,Role,UserRoles,Post],
            autoLoadModels:true
        }),
        ServeStaticModule.forRoot({
            rootPath: path.resolve(__dirname,'static'),
        }),
        UsersModule,
        RolesModule,
        AuthModule,
        PostsModule,
    ]
})
export class AppModule{}
