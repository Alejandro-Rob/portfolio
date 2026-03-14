import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TECNOLOGIAS } from '../../../constants/tecnolgias.constants';
import { TranslateModule } from '@ngx-translate/core';

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
    imports: [CommonModule, TranslateModule],
    templateUrl: './proyectos.component.html',
    styleUrl: './proyectos.component.css'
})

export class ProyectosComponent {
proyectos: Proyecto[] = [
    {
        nombre: 'proyectos.hoppr.nombre',
        descripcion: 'proyectos.hoppr.descripcion',  // 👈 Clave en lugar de texto
        imagen: 'images/Hoppr.webp',
        tecnologias: [
            { icono: TECNOLOGIAS.ANGULAR },
            { icono: TECNOLOGIAS.TYPESCRIPT },
            { icono: TECNOLOGIAS.GIT }
        ],
        urlDemo: ''
    },
    {
        nombre: 'proyectos.museo.nombre',
        descripcion: 'proyectos.museo.descripcion',
        imagen: 'images/VR_Museum.webp',
        tecnologias: [
            { icono: TECNOLOGIAS.CSHARP },
            { icono: TECNOLOGIAS.UNITY },
        ],
        urlDemo: 'https://youtu.be/7qWF5Bz_WKU'
    },
    {
        nombre: 'proyectos.galeria.nombre',
        descripcion: 'proyectos.galeria.descripcion',
        imagen: 'images/VR_Gallery.webp',
        tecnologias: [
            { icono: TECNOLOGIAS.CSHARP },
            { icono: TECNOLOGIAS.UNITY },
        ],
        urlDemo: 'https://youtu.be/haPMoUKKt9U'
    },
    {
        nombre: 'proyectos.plataformas.nombre',
        descripcion: 'proyectos.plataformas.descripcion',
        imagen: 'images/Platform2D.webp',
        tecnologias: [
            { icono: TECNOLOGIAS.CSHARP },
            { icono: TECNOLOGIAS.UNITY },
        ],
        urlDemo: 'https://youtu.be/rMXSyDvdjcc'
    },
];
}
