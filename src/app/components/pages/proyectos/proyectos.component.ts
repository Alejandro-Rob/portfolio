import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TECNOLOGIAS } from '../../../constants/tecnolgias.constants';

interface Tecnologia {
    icono?: string;  // Clase de devicons
    imagen?: string; // Ruta a imagen propia
}

interface Proyecto {
    nombre: string;
    descripcion: string;
    imagen?: string;
    tecnologias: Tecnologia[];
    urlGithub?: string;  // Opcional, con ? indica que puede no tener enlace
    urlDemo?: string;
}

@Component({
    selector: 'app-proyectos',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './proyectos.component.html',
    styleUrl: './proyectos.component.css'
})

export class ProyectosComponent {
    proyectos: Proyecto[] = [
        {
            nombre: 'Hoppr',
            descripcion: 'Aplicación para gestión de tareas del hogar como gastos, recetas de cocina o lista de la compra instalada en Raspberry PI conectada a Github',
            imagen: 'images/Hoppr.png',
            tecnologias: [
                { icono: TECNOLOGIAS.ANGULAR },
                { icono: TECNOLOGIAS.TYPESCRIPT },
                { icono: TECNOLOGIAS.GIT }
            ],
            urlGithub: '',
            urlDemo: ''
        },
        {
            nombre: 'Museo',
            descripcion: 'Simulación para VR de un museo del videojuego con información interactiva',
            imagen: 'images/VR_Museum.png',
            tecnologias: [
                { icono: TECNOLOGIAS.CSHARP },
                { icono: TECNOLOGIAS.UNITY },
            ],
            urlGithub: '',
            urlDemo: 'https://youtu.be/7qWF5Bz_WKU'
        },
        {
            nombre: 'Galeria de tiro',
            descripcion: 'Galería de tiro desarrollada en VR',
            imagen: 'images/VR_Gallery.png',
            tecnologias: [
                { icono: TECNOLOGIAS.CSHARP },
                { icono: TECNOLOGIAS.UNITY },
            ],
            urlGithub: '',
            urlDemo: 'https://youtu.be/haPMoUKKt9U'
        },
        {
            nombre: 'Plataformas 2D',
            descripcion: 'Primera escena de videojuego en 2D realizada en Unity',
            imagen: 'images/Platform2D.png',
            tecnologias: [
                { icono: TECNOLOGIAS.CSHARP },
                { icono: TECNOLOGIAS.UNITY },
            ],
            urlGithub: '',
            urlDemo: 'https://youtu.be/rMXSyDvdjcc'
        },
    ];
}
