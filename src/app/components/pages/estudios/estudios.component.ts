import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TECNOLOGIAS } from '../../../constants/tecnolgias.constants'

interface Estudio {
    titulo: string;
    centro: string;
    periodo: string;
    descripcion: string;
    tecnologias: string[];
}

@Component({
    selector: 'app-estudios',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './estudios.component.html',
    styleUrl: './estudios.component.css'
})
export class EstudiosComponent {
    estudios: Estudio[] = [
        {
            titulo: 'Grado Superior en Desarrollo de Aplicaciones Web',
            centro: 'IES Ribera de los Molinos',
            periodo: '2021 - 2023',
            descripcion: 'Formación en desarrollo web full stack, bases de datos relacionales y despliegue de aplicaciones.',
            tecnologias: [
                TECNOLOGIAS.HTML_CSS,
                TECNOLOGIAS.JAVASCRIPT,
                TECNOLOGIAS.BOOTSTRAP,
                TECNOLOGIAS.ANGULAR,
                TECNOLOGIAS.JAVA,
                TECNOLOGIAS.PHP,
                TECNOLOGIAS.LARAVEL,
                TECNOLOGIAS.SQL
            ]
        },
        {
            titulo: 'Curso de especialización en Desarrollo de Videojuegos y Realidad Virtual',
            centro: 'IES Ingeniero de la Cierva',
            periodo: '2025 - 2026',
            descripcion: 'Formación en desarrollo de videojuegos con Unity y C#, abarcando programación de mecánicas, diseño de interfaces interactivas y gestión de escenas.',
            tecnologias: [
                TECNOLOGIAS.UNITY,
                TECNOLOGIAS.CSHARP
            ]
        }
    ];
}