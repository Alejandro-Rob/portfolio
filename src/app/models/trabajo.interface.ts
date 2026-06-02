import { Tecnologia } from "./tecnologias.interface";

export interface Trabajo {
    empresa: string;
    puestoKey: string;
    periodoKey: string;
    descripcionKeys: string[];
    tecnologias: Tecnologia[];
    secundario?: boolean;
}
