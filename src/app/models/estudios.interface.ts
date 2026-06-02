import { Tecnologia } from "./tecnologias.interface";

export interface Estudio {
    titulo: string;
    centro: string;
    periodo: string;
    descripcion: string;
    tecnologias: Tecnologia[];
}
