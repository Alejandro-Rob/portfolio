import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TECNOLOGIAS } from '../../../constants/tecnolgias.constants';
import { TranslateModule } from '@ngx-translate/core';
import { TechIconsComponent, Tecnologia } from '../../shared/tech-icons/tech-icons.component';

interface Proyecto {
    nombre: string;
    descripcion: string;
    imagen?: string;
    galeria?: ImagenGaleria[];
    tecnologias: Tecnologia[];
    urlGithub?: string;
    urlDemo?: string;
}

interface ImagenGaleria {
    url: string;
    descripcion?: string;
}

@Component({
    selector: 'app-proyectos',
    standalone: true,
    imports: [CommonModule, TranslateModule, TechIconsComponent],
    templateUrl: './proyectos.component.html',
    styleUrl: './proyectos.component.css'
})

export class ProyectosComponent {
    descripcionesExpandidas: boolean[] = [];
    galeriasExpandidas: boolean[] = [];
    imagenAbierta: string | null = null;
    imagenDescripcion: string | null = null;

    proyectos: Proyecto[] = [
        {
            nombre: 'proyectos.hoppr.nombre',
            descripcion: 'proyectos.hoppr.descripcion',
            imagen: 'images/Proyectos/Hoppr.webp',
            tecnologias: [
                { icono: TECNOLOGIAS.ANGULAR,     nombre: 'Angular' },
                { icono: TECNOLOGIAS.TYPESCRIPT,  nombre: 'TypeScript' },
                { icono: TECNOLOGIAS.GIT,         nombre: 'GitHub' }
            ],
            urlDemo: 'https://youtu.be/A7FoMZhybhE'
        },
        {
            nombre: 'proyectos.pokeguessr.nombre',
            descripcion: 'proyectos.pokeguessr.descripcion',
            imagen: 'images/Proyectos/Pokeguessr.webp',
            tecnologias: [
                { icono: TECNOLOGIAS.UNITY,   nombre: 'Unity' },
                { icono: TECNOLOGIAS.CSHARP,  nombre: 'C#' },
                { imagen: TECNOLOGIAS.PHOTON, nombre: 'Photon' },
            ],
            urlDemo: 'https://youtu.be/_8exQ2Kg5Ts'
        },
        {
            nombre: 'proyectos.museo.nombre',
            descripcion: 'proyectos.museo.descripcion',
            imagen: 'images/Proyectos/VR_Museum.webp',
            tecnologias: [
                { icono: TECNOLOGIAS.UNITY,    nombre: 'Unity' },
                { icono: TECNOLOGIAS.CSHARP,   nombre: 'C#' },
                { icono: TECNOLOGIAS.BLENDER,  nombre: 'Blender' },
                { icono: TECNOLOGIAS.VR,       nombre: 'Realidad Virtual' },
            ],
            urlDemo: 'https://youtu.be/7qWF5Bz_WKU'
        },
        {
            nombre: 'proyectos.galeria.nombre',
            descripcion: 'proyectos.galeria.descripcion',
            imagen: 'images/Proyectos/VR_Gallery.webp',
            tecnologias: [
                { icono: TECNOLOGIAS.UNITY,  nombre: 'Unity' },
                { icono: TECNOLOGIAS.CSHARP, nombre: 'C#' },
                { icono: TECNOLOGIAS.VR,     nombre: 'Realidad Virtual' },
            ],
            urlDemo: 'https://youtu.be/haPMoUKKt9U'
        },
        {
            nombre: 'proyectos.plataformas.nombre',
            descripcion: 'proyectos.plataformas.descripcion',
            imagen: 'images/Proyectos/Demo.webp',
            tecnologias: [
                { icono: TECNOLOGIAS.UNITY,  nombre: 'Unity' },
                { icono: TECNOLOGIAS.CSHARP, nombre: 'C#' },
            ],
            urlDemo: 'https://youtu.be/EZqgpUOrjTo'
        },
        {
            nombre: 'proyectos.car.nombre',
            descripcion: 'proyectos.car.descripcion',
            imagen: 'images/Proyectos/Car_Roguelike.webp',
            tecnologias: [
                { icono:  TECNOLOGIAS.UNITY,  nombre: 'Unity' },
                { icono:  TECNOLOGIAS.CSHARP, nombre: 'C#' },
                { imagen: TECNOLOGIAS.PHOTON, nombre: 'Photon PUN' },
                { icono:  TECNOLOGIAS.GIMP,   nombre: 'Gimp' },
            ],
            urlDemo: 'https://youtu.be/bBVB1otRysc'
        },
        {
            nombre: 'proyectos.components.nombre',
            descripcion: 'proyectos.components.descripcion',
            imagen: 'images/Proyectos/AR_Components_info.webp',
            tecnologias: [
                { icono: TECNOLOGIAS.UNITY,  nombre: 'Unity' },
                { icono: TECNOLOGIAS.CSHARP, nombre: 'C#' },
                { icono: TECNOLOGIAS.AR,     nombre: 'Realidad Aumentada' },
            ],
            urlDemo: 'https://youtu.be/IOGgE7yt8ks'
        },
        {
            nombre: 'proyectos.coche.nombre',
            descripcion: 'proyectos.coche.descripcion',
            imagen: 'images/Proyectos/AR_Coche.webp',
            tecnologias: [
                { icono: TECNOLOGIAS.UNITY,  nombre: 'Unity' },
                { icono: TECNOLOGIAS.CSHARP, nombre: 'C#' },
                { icono: TECNOLOGIAS.AR,     nombre: 'Realidad Aumentada' },
            ],
            urlDemo: 'https://youtu.be/b6I9m0TNytQ'
        },
        {
        nombre: 'proyectos.blender.nombre',
            descripcion: 'proyectos.blender.descripcion',
            imagen: 'images/Proyectos/Playa.webp',
            galeria: [
                { url: 'images/Proyectos/Playa.webp',  descripcion: 'Playa con tesoro. Modelado de una playa con cofre, palmeras y monedas usando instancias vinculadas. Se aplicaron texturas de madera con Normal Map, materiales metálicos y efecto Bloom para resaltar los herrajes y el oro del botín.' },
                { url: 'images/Proyectos/Altar.webp',  descripcion: 'Escena de un altar con terreno de relieve real generado con los modificadores Subdivision Surface y Displace. El altar usa Normal Map para simular detalle superficial sin añadir polígonos, combinando geometría real y simulada en la misma escena.' },
                { url: 'images/Proyectos/Tunnel.webp', descripcion: 'Túnel con antorchas. Modelado de un túnel en arco con el modificador Array para generar profundidad. Se aplicaron texturas PBR con Bump Map y materiales emisivos con efecto Bloom para simular la iluminación de antorchas.' },
                { url: 'images/Proyectos/Casa.webp',   descripcion: 'Casa con materiales. Aplicación de materiales base a todos los elementos de una casa mediante Material Properties. Se usó Bump Mapping con texturas de imagen en el suelo y el tronco del árbol para simular relieve sin modificar la geometría.' },
            ],
            tecnologias: [
                { icono: TECNOLOGIAS.BLENDER, nombre: 'Blender' },
                { icono: TECNOLOGIAS.GIMP,    nombre: 'Gimp' }
            ],
        }
    ];
    
    ngOnInit() {
        // Inicializa todas las descripciones y galerías como contraídas
        this.descripcionesExpandidas = this.proyectos.map(() => false);
        this.galeriasExpandidas = this.proyectos.map(() => false);
    }

    toggleGaleria(index: number) {
        this.galeriasExpandidas[index] = !this.galeriasExpandidas[index];
    }

    toggleDescripcion(index: number) {
        this.descripcionesExpandidas[index] = !this.descripcionesExpandidas[index];
    }

    abrirImagen(url: string, descripcion?: string) {
        this.imagenAbierta = url;
        this.imagenDescripcion = descripcion || null;
    }

    cerrarImagen() {
        this.imagenAbierta = null;
        this.imagenDescripcion = null;
    }
}
