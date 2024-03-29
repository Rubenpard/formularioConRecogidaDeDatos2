import { Estado } from "./Estado";

export class Registro {
    id!: number;
    nombre!: string;
    edad!: number;
    email!: string;
    observacion!: string;
    estado!: Estado;
}