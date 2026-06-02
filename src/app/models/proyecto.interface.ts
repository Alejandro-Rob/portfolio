import { ImagenGaleria } from "./interfaceGaleria.interface";
import { Tecnologia } from "./tecnologias.interface";

export interface Proyecto {
    nombre: string;
    descripcion: string;
    imagen?: string;
    galeria?: ImagenGaleria[];
    tecnologias: Tecnologia[];
    urlGithub?: string;
    urlDemo?: string;
}
