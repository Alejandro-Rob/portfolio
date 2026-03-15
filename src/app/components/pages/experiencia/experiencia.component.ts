import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { TechIconsComponent, Tecnologia } from '../../shared/tech-icons/tech-icons.component';
import { TECNOLOGIAS } from '../../../constants/tecnolgias.constants';

interface Trabajo {
    empresa: string;
    puestoKey: string;
    periodoKey: string;
    descripcionKeys: string[];
    tecnologias: Tecnologia[];
}

@Component({
    selector: 'app-experiencia',
    standalone: true,
    imports: [CommonModule, TranslateModule, TechIconsComponent],
    templateUrl: './experiencia.component.html',
    styleUrl: './experiencia.component.css'
})

export class ExperienciaComponent {
    trabajos: Trabajo[] = [
        {
            empresa: 'Accenture',
            puestoKey: 'experiencia.accenture.puesto',
            periodoKey: 'experiencia.accenture.periodo',
            descripcionKeys: [
                'experiencia.accenture.descripcion.0',
                'experiencia.accenture.descripcion.1',
            ],
            tecnologias: [
                { imagen: TECNOLOGIAS.JASPER, nombre: "Jasper" },
                { icono:  TECNOLOGIAS.ANGULAR, nombre: "Angular" }
            ]
        },
        {
            empresa: 'MASISTE 2001 S.L.',
            puestoKey: 'experiencia.masiste.puesto',
            periodoKey: 'experiencia.masiste.periodo',
            descripcionKeys: [
                'experiencia.masiste.descripcion.0',
                'experiencia.masiste.descripcion.1',
                'experiencia.masiste.descripcion.2',
                'experiencia.masiste.descripcion.3',
                'experiencia.masiste.descripcion.4',
                'experiencia.masiste.descripcion.5',
                'experiencia.masiste.descripcion.6',
                'experiencia.masiste.descripcion.7',
                'experiencia.masiste.descripcion.8',
                'experiencia.masiste.descripcion.9',
            ],
            tecnologias: [
                { icono:  TECNOLOGIAS.HTML_CSS, nombre: "HTML y CSS" },
                { icono:  TECNOLOGIAS.TYPESCRIPT, nombre: "TypeScript" },
                { icono:  TECNOLOGIAS.ANGULAR, nombre: "Angular" },
                { icono:  TECNOLOGIAS.BOOTSTRAP, nombre: "Bootstrap" },
                { icono:  TECNOLOGIAS.JAVA, nombre: "Java" },
                { icono:  TECNOLOGIAS.SPRING_BOOT, nombre: "Spring Boot" },
                { icono:  TECNOLOGIAS.SQL_SERVER, nombre: "SQL Server" },
                { imagen: TECNOLOGIAS.VB, nombre: "Visual Basic" },
                { imagen: TECNOLOGIAS.JASPER, nombre: "Jasper" },
            ]
        },
        {
            empresa: 'NEORIS',
            puestoKey: 'experiencia.neoris.puesto',
            periodoKey: 'experiencia.neoris.periodo',
            descripcionKeys: [
                'experiencia.neoris.descripcion.0',
                'experiencia.neoris.descripcion.1',
                'experiencia.neoris.descripcion.2',
                'experiencia.neoris.descripcion.3',
                'experiencia.neoris.descripcion.4',
            ],
            tecnologias: [
                { icono: TECNOLOGIAS.HTML_CSS, nombre: "HTML y CSS" },
                { icono: TECNOLOGIAS.JAVASCRIPT, nombre: "JavaScript" },
                { icono: TECNOLOGIAS.GIT, nombre: "Git" },
            ]
        }
    ];
}
