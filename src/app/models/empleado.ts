export class Empleado {

    constructor(
        public nombre: string,
        public edad: number,
        public contratado: boolean
    ) {
        this.nombre = nombre;
        this.edad = edad;
        this.contratado = contratado;
    }

    /* private nombre: string;
    private edad: number;

    constructor(nombre: string, edad: number) {
        this.nombre = nombre; this.edad = edad;
    } */
} 