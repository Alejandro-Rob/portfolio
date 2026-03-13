import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TECNOLOGIAS } from '../../../constants/tecnolgias.constants'
import { TranslateModule } from '@ngx-translate/core';

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
    imports: [CommonModule, TranslateModule],
    templateUrl: './estudios.component.html',
    styleUrl: './estudios.component.css'
})

export class EstudiosComponent {
    estudios: Estudio[] = [
        {
            titulo: 'estudios.daw.titulo',
            centro: 'IES Ribera de los Molinos',
            periodo: 'estudios.videojuegos.fecha',
            descripcion: 'estudios.daw.descripcion',
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
            titulo: 'estudios.videojuegos.titulo',
            centro: 'IES Ingeniero de la Cierva',
            periodo: 'estudios.videojuegos.fecha',
            descripcion: 'estudios.videojuegos.descripcion',
            tecnologias: [
                TECNOLOGIAS.UNITY,
                TECNOLOGIAS.CSHARP
            ]
        }
    ];
}