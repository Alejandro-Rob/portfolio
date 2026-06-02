import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { TECNOLOGIAS } from '../../../constants/tecnolgias.constants';
import { Trabajo } from '../../../models/trabajo.interface';
import { TechIconsComponent } from '../../shared/tech-icons/tech-icons.component';

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
                { imagen: TECNOLOGIAS.JASPER,     nombre: "Jasper" },
                { icono:  TECNOLOGIAS.ANGULAR,    nombre: "Angular" },
                { icono:  TECNOLOGIAS.BITBUCKET,  nombre: "Bitbucket" },
                { imagen: TECNOLOGIAS.SOURCETREE, nombre: "SourceTree" }
            ],
            secundario: false
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
                { icono:  TECNOLOGIAS.ANGULAR, nombre: "Angular" },
                { icono:  TECNOLOGIAS.TYPESCRIPT, nombre: "TypeScript" },
                { imagen: TECNOLOGIAS.JASPER, nombre: "Jasper" },
                { icono:  TECNOLOGIAS.SPRING_BOOT, nombre: "Spring Boot" },
                { icono:  TECNOLOGIAS.JAVA, nombre: "Java" },
                { imagen: TECNOLOGIAS.VB, nombre: "Visual Basic" },
                { icono:  TECNOLOGIAS.SQL_SERVER, nombre: "SQL Server" },
                { icono:  TECNOLOGIAS.HTML_CSS, nombre: "HTML y CSS" },
                { icono:  TECNOLOGIAS.BOOTSTRAP, nombre: "Bootstrap" },
            ],
            secundario: false
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
            ],
            secundario: false
        },
        {
            empresa: 'HERO España S.A.',
            puestoKey: 'experiencia.hero.puesto',
            periodoKey: 'experiencia.hero.periodo',
            descripcionKeys: [
                'experiencia.hero.descripcion.0'
            ],
            tecnologias: [],
            secundario: true
        }
    ];
}
