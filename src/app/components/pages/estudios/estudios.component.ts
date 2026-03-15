import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TECNOLOGIAS } from '../../../constants/tecnolgias.constants'
import { TranslateModule } from '@ngx-translate/core';
import { TechIconsComponent, Tecnologia } from '../../shared/tech-icons/tech-icons.component';

interface Estudio {
    titulo: string;
    centro: string;
    periodo: string;
    descripcion: string;
    tecnologias: Tecnologia[];
}

@Component({
    selector: 'app-estudios',
    standalone: true,
    imports: [CommonModule, TranslateModule, TechIconsComponent],
    templateUrl: './estudios.component.html',
    styleUrl: './estudios.component.css'
})

export class EstudiosComponent {
    estudios: Estudio[] = [
        {
            titulo: 'estudios.videojuegos.titulo',
            centro: 'IES Ingeniero de la Cierva',
            periodo: 'estudios.videojuegos.periodo',
            descripcion: 'estudios.videojuegos.descripcion',
            tecnologias: [
                { icono: TECNOLOGIAS.UNITY,  nombre: 'Unity' },
                { icono: TECNOLOGIAS.CSHARP, nombre: 'C#' }
            ]
        },
        {
            titulo: 'estudios.dam.titulo',
            centro: 'IES José Luis Martínez Palomo',
            periodo: 'estudios.dam.periodo',
            descripcion: 'estudios.dam.descripcion',
            tecnologias: [
                { icono: TECNOLOGIAS.HTML_CSS, nombre: 'HTML/CSS' },
                { icono: TECNOLOGIAS.JAVA,     nombre: 'Java' }
            ]
        },
        {
            titulo: 'estudios.daw.titulo',
            centro: 'IES Ribera de los Molinos',
            periodo: 'estudios.daw.periodo',
            descripcion: 'estudios.daw.descripcion',
            tecnologias: [
                { icono: TECNOLOGIAS.HTML_CSS,    nombre: 'HTML y CSS' },
                { icono: TECNOLOGIAS.JAVASCRIPT,  nombre: 'JavaScript' },
                { icono: TECNOLOGIAS.BOOTSTRAP,   nombre: 'Bootstrap' },
                { icono: TECNOLOGIAS.ANGULAR,     nombre: 'Angular' },
                { icono: TECNOLOGIAS.JAVA,        nombre: 'Java' },
                { icono: TECNOLOGIAS.PHP,         nombre: 'PHP' },
                { icono: TECNOLOGIAS.LARAVEL,     nombre: 'Laravel' },
                { icono: TECNOLOGIAS.SQL,         nombre: 'SQL' },
            ]
        }
    ];
}
