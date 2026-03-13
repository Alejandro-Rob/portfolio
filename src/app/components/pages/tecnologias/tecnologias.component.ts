import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { TECNOLOGIAS } from '../../../constants/tecnolgias.constants';

interface Tecnologia {
    nombre: string;
    icono?: string;
    imagen?: string;
}

@Component({
    selector: 'app-tecnologias',
    standalone: true,
    imports: [CommonModule, TranslateModule],
    templateUrl: './tecnologias.component.html',
    styleUrl: './tecnologias.component.css'
})
export class TecnologiasComponent {
    domino: Tecnologia[] = [
        { nombre: 'Angular',      icono: TECNOLOGIAS.ANGULAR },
        { nombre: 'TypeScript',   icono: TECNOLOGIAS.TYPESCRIPT },
        { nombre: 'Spring Boot',  icono: TECNOLOGIAS.SPRING_BOOT },
        { nombre: 'Java',         icono: TECNOLOGIAS.JAVA },
        { nombre: 'C#',           icono: TECNOLOGIAS.CSHARP },
        { nombre: 'Laravel',      icono: TECNOLOGIAS.LARAVEL },
        { nombre: 'PHP',          icono: TECNOLOGIAS.PHP },
        { nombre: 'SQL',          icono: TECNOLOGIAS.SQL },
        { nombre: 'HTML/CSS',     icono: TECNOLOGIAS.HTML_CSS },
        { nombre: 'JavaScript',   icono: TECNOLOGIAS.JAVASCRIPT },
        { nombre: 'Bootstrap',    icono: TECNOLOGIAS.BOOTSTRAP },
        { nombre: 'SQL Server',   icono: TECNOLOGIAS.SQL_SERVER },
    ];

    herramientas: Tecnologia[] = [
        { nombre: 'Unity',          icono: TECNOLOGIAS.UNITY },
        { nombre: 'Visual Studio',  icono: TECNOLOGIAS.VISUAL_STUDIO },
        { nombre: 'VS Code',        icono: TECNOLOGIAS.VSCODE },
        { nombre: 'Jasper Reports', imagen: 'images/jasper.jpg' },
        { nombre: 'GIT-HUB',        icono: TECNOLOGIAS.GIT },
        { nombre: 'NetBeans',       icono: TECNOLOGIAS.NETBEANS },
        { nombre: 'IntelliJ',       icono: TECNOLOGIAS.INTELLIJ },
    ];

    aprendiendo: Tecnologia[] = [
        { nombre: 'Python', icono: TECNOLOGIAS.PYTHON },
        { nombre: 'Godot',  icono: TECNOLOGIAS.GODOT },
    ];
}