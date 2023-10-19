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
Object.defineProperty(exports, "__esModule", { value: true });
exports.LineasPedido = void 0;
const typeorm_1 = require("typeorm");
const Pedido_1 = require("./Pedido");
const Producto_1 = require("./Producto");
let LineasPedido = class LineasPedido {
};
exports.LineasPedido = LineasPedido;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], LineasPedido.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], LineasPedido.prototype, "idProducto", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], LineasPedido.prototype, "cantidad", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "date" }),
    __metadata("design:type", Date)
], LineasPedido.prototype, "fechaEntrega", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], LineasPedido.prototype, "tipo", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Pedido_1.Pedido, pedido => pedido.lineasPedido),
    __metadata("design:type", Pedido_1.Pedido)
], LineasPedido.prototype, "pedido", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Producto_1.Producto, producto => producto.lineasPedido),
    __metadata("design:type", Producto_1.Producto)
], LineasPedido.prototype, "producto", void 0);
exports.LineasPedido = LineasPedido = __decorate([
    (0, typeorm_1.Entity)()
], LineasPedido);
