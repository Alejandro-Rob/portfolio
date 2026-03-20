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
            imagen: 'images/Hoppr.webp',
            tecnologias: [
                { icono: TECNOLOGIAS.ANGULAR,     nombre: 'Angular' },
                { icono: TECNOLOGIAS.TYPESCRIPT,  nombre: 'TypeScript' },
                { icono: TECNOLOGIAS.GIT,         nombre: 'GitHub' }
            ],
            urlDemo: ''
        },
        {
            nombre: 'proyectos.museo.nombre',
            descripcion: 'proyectos.museo.descripcion',
            imagen: 'images/VR_Museum.webp',
            tecnologias: [
                { icono: TECNOLOGIAS.CSHARP,   nombre: 'C#' },
                { icono: TECNOLOGIAS.UNITY,    nombre: 'Unity' },
                { icono: TECNOLOGIAS.BLENDER,  nombre: 'Blender' },
                { icono: TECNOLOGIAS.VR,       nombre: 'Realidad Virtual' },
            ],
            urlDemo: 'https://youtu.be/7qWF5Bz_WKU'
        },
        {
            nombre: 'proyectos.galeria.nombre',
            descripcion: 'proyectos.galeria.descripcion',
            imagen: 'images/VR_Gallery.webp',
            tecnologias: [
                { icono: TECNOLOGIAS.CSHARP, nombre: 'C#' },
                { icono: TECNOLOGIAS.UNITY,  nombre: 'Unity' },
                { icono: TECNOLOGIAS.VR,     nombre: 'Realidad Virtual' },
            ],
            urlDemo: 'https://youtu.be/haPMoUKKt9U'
        },
        {
            nombre: 'proyectos.plataformas.nombre',
            descripcion: 'proyectos.plataformas.descripcion',
            imagen: 'images/Platform2D.webp',
            tecnologias: [
                { icono: TECNOLOGIAS.CSHARP, nombre: 'C#' },
                { icono: TECNOLOGIAS.UNITY,  nombre: 'Unity' },
            ],
            urlDemo: 'https://youtu.be/rMXSyDvdjcc'
        },
        {
            nombre: 'proyectos.car.nombre',
            descripcion: 'proyectos.car.descripcion',
            imagen: 'images/Car_Roguelike.webp',
            tecnologias: [
                { icono: TECNOLOGIAS.CSHARP, nombre: 'C#' },
                { icono: TECNOLOGIAS.UNITY,  nombre: 'Unity' },
                { imagen: 'images/photon.webp', nombre: 'Photon PUN' }
            ],
            urlDemo: 'https://youtu.be/bBVB1otRysc'
        },
        {
            nombre: 'proyectos.components.nombre',
            descripcion: 'proyectos.components.descripcion',
            imagen: 'images/AR_Components_info.webp',
            tecnologias: [
                { icono: TECNOLOGIAS.CSHARP, nombre: 'C#' },
                { icono: TECNOLOGIAS.UNITY,  nombre: 'Unity' },
                { icono: TECNOLOGIAS.AR,     nombre: 'Realidad Aumentada' },
            ],
            urlDemo: 'https://youtu.be/IOGgE7yt8ks'
        },
        {
            nombre: 'proyectos.coche.nombre',
            descripcion: 'proyectos.coche.descripcion',
            imagen: 'images/AR_Coche.webp',
            tecnologias: [
                { icono: TECNOLOGIAS.CSHARP, nombre: 'C#' },
                { icono: TECNOLOGIAS.UNITY,  nombre: 'Unity' },
                { icono: TECNOLOGIAS.AR,     nombre: 'Realidad Aumentada' },
            ],
            urlDemo: 'https://youtu.be/b6I9m0TNytQ'
        },
        {
        nombre: 'proyectos.blender.nombre',
            descripcion: 'proyectos.blender.descripcion',
            imagen: 'images/Playa.webp',
            galeria: [
                { url: 'images/Playa.webp',  descripcion: 'Escena de playa' },
                { url: 'images/Altar.webp',  descripcion: 'Escena de altar' },
                { url: 'images/Tunnel.webp', descripcion: 'Escena de túnel' },
                { url: 'images/Casa.webp',   descripcion: 'Escena de casa' },
            ],
            tecnologias: [
                { icono: TECNOLOGIAS.BLENDER, nombre: 'Blender' }
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
