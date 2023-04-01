"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const users_module_1 = require("./users/users.module");
const user_model_1 = require("./users/user.model");
const roles_module_1 = require("./roles/roles.module");
const roles_model_1 = require("./roles/roles.model");
const user_roles_model_1 = require("./roles/user-roles.model");
const auth_module_1 = require("./auth/auth.module");
const posts_module_1 = require("./posts/posts.module");
const posts_model_1 = require("./posts/posts.model");
const serve_static_1 = require("@nestjs/serve-static");
const path = require("path");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        controllers: [],
        providers: [],
        imports: [
            sequelize_1.SequelizeModule.forRoot({
                dialect: 'postgres',
                host: 'localhost',
                port: 5432,
                username: 'postgres',
                password: '123',
                database: 'user',
                models: [user_model_1.User, roles_model_1.Role, user_roles_model_1.UserRoles, posts_model_1.Post],
                autoLoadModels: true
            }),
            serve_static_1.ServeStaticModule.forRoot({
                rootPath: path.resolve(__dirname, 'static'),
            }),
            users_module_1.UsersModule,
            roles_module_1.RolesModule,
            auth_module_1.AuthModule,
            posts_module_1.PostsModule,
        ]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map