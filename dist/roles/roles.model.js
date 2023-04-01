"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var Role_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Role = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const dist_1 = require("@nestjs/swagger/dist");
const user_roles_model_1 = require("./user-roles.model");
let Role = Role_1 = class Role extends sequelize_typescript_1.Model {
};
__decorate([
    (0, dist_1.ApiProperty)({ example: '1', description: 'Unical id' }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true }),
    __metadata("design:type", Number)
], Role.prototype, "id", void 0);
__decorate([
    (0, dist_1.ApiProperty)({ example: 'ADMIN', description: 'Value of role' }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.STRING, unique: true, allowNull: false }),
    __metadata("design:type", String)
], Role.prototype, "value", void 0);
__decorate([
    (0, dist_1.ApiProperty)({ example: 'Administrator', description: 'Description of the role' }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.STRING, allowNull: false }),
    __metadata("design:type", String)
], Role.prototype, "description", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsToMany)(() => Role_1, () => user_roles_model_1.UserRoles),
    __metadata("design:type", Array)
], Role.prototype, "roles", void 0);
Role = Role_1 = __decorate([
    (0, sequelize_typescript_1.Table)({ tableName: 'roles' })
], Role);
exports.Role = Role;
//# sourceMappingURL=roles.model.js.map