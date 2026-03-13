import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TECNOLOGIAS } from '../../../constants/tecnolgias.constants'

interface Trabajo {
    empresa: string;
    puesto: string;
    periodo: string;
    descripcion: string[];
    tecnologias: string[];
}

@Component({
    selector: 'app-experiencia',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './experiencia.component.html',
    styleUrl: './experiencia.component.css'
})
export class ExperienciaComponent {
    trabajos: Trabajo[] = [
        {
            empresa: 'Accenture',
            puesto: 'Desarrollador web',
            periodo: 'Marzo 2025 - Septiembre 2025',
            descripcion: [
                'Diseño y creación de documentos generados en formato PDF con Jasper desplegada en JasperServer.',
                'Desarrollo de aplicación web como frontend en Angular 16.'
            ],
            tecnologias: [
                TECNOLOGIAS.JAVASCRIPT,
                TECNOLOGIAS.TYPESCRIPT,
                TECNOLOGIAS.ANGULAR,
                TECNOLOGIAS.BITBUCKET
            ]
        },
        {
            empresa: 'MASISTE 2001 S.L.',
            puesto: 'Desarrollador de aplicaciones',
            periodo: 'Noviembre 2023 - Marzo 2025',
            descripcion: [
                'Desarrollo de aplicaciones web con backend en Spring (con API REST) y frontend en Angular.',
                'Aplicación web de gestión de planta.',
                'Aplicación web de pesaje de vehículos.',
    
                'Desarrollo de software de escritorio con Java.',
                'Aplicación de impresión automática de documentos.',
                'Aplicación de gestión de datos con Excel sobre base de datos.',
                'Aplicación de gestión de archivos en directorios internos.',
    
                'Desarrollo de software de pesaje en .NET (Visual Basic).',
                'Aplicación de escritorio de pesaje de contenedores en planta.',
    
                'Diseño, creación y manejo de bases de datos en SQL Server para el software mencionado.'
            ],
            tecnologias: [
                TECNOLOGIAS.TYPESCRIPT,
                TECNOLOGIAS.ANGULAR,
                TECNOLOGIAS.SPRING_BOOT,
                TECNOLOGIAS.JAVA,
                TECNOLOGIAS.SQL_SERVER,
                TECNOLOGIAS.VISUAL_STUDIO
            ]
        },
        {
            empresa: 'NEORIS',
            puesto: 'Prácticas FCT',
            periodo: 'Marzo 2023 - Junio 2023',
            descripcion: [
                'Cursos de formación HTML, CSS, JavaScript, TypeScript.',
                'Uso de tecnologías de desarrollo web (HTML, CSS, JavaScript).',
                'Formación en librería de JavaScript Lit Element.',
                'Testing con Jasmine y Karma.',
                'Uso de la plataforma de GitHub.'
            ],
            tecnologias: [
                TECNOLOGIAS.HTML_CSS,
                TECNOLOGIAS.JAVASCRIPT,
                TECNOLOGIAS.TYPESCRIPT,
                TECNOLOGIAS.GIT,
                TECNOLOGIAS.VSCODE
            ]
        }
    ];
}