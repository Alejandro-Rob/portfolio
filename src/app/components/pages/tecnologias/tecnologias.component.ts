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
        { nombre: 'HTML/CSS',     icono:  TECNOLOGIAS.HTML_CSS },
        { nombre: 'JavaScript',   icono:  TECNOLOGIAS.JAVASCRIPT },
        { nombre: 'TypeScript',   icono:  TECNOLOGIAS.TYPESCRIPT },
        { nombre: 'Java',         icono:  TECNOLOGIAS.JAVA },
        { nombre: 'C#',           icono:  TECNOLOGIAS.CSHARP },
        { nombre: 'PHP',          icono:  TECNOLOGIAS.PHP },
        { nombre: 'SQL',          icono:  TECNOLOGIAS.SQL },
        { nombre: 'SQL Server',   icono:  TECNOLOGIAS.SQL_SERVER },
        { nombre: 'Visual Basic', imagen: 'images/vb.webp' },
    ];

    frameworks: Tecnologia[] = [
        { nombre: 'Angular',     icono:  TECNOLOGIAS.ANGULAR },
        { nombre: 'Spring Boot', icono:  TECNOLOGIAS.SPRING_BOOT },
        { nombre: 'Laravel',     icono:  TECNOLOGIAS.LARAVEL },
        { nombre: 'Bootstrap',   icono:  TECNOLOGIAS.BOOTSTRAP },
    ];

    herramientas: Tecnologia[] = [
        { nombre: 'Unity',          icono:  TECNOLOGIAS.UNITY },
        { nombre: 'Visual Studio',  icono:  TECNOLOGIAS.VISUAL_STUDIO },
        { nombre: 'VS Code',        icono:  TECNOLOGIAS.VSCODE },
        { nombre: 'NetBeans',       icono:  TECNOLOGIAS.NETBEANS },
        { nombre: 'IntelliJ',       icono:  TECNOLOGIAS.INTELLIJ },
        { nombre: 'GIT-HUB',        icono:  TECNOLOGIAS.GIT },
        { nombre: 'Bitbucket',      imagen: 'images/bitbucket.webp' },
        { nombre: 'SourceTree',     imagen: 'images/sourcetree.webp' },
        { nombre: 'Jasper Reports', imagen: 'images/jasper.webp' },
        { nombre: 'Photon PUN',     imagen: 'images/photon.webp' },
    ];

    aprendiendo: Tecnologia[] = [
        { nombre: 'Python', icono: TECNOLOGIAS.PYTHON },
        { nombre: 'Godot',  icono: TECNOLOGIAS.GODOT },
    ];

    // especialidad: Tecnologia[] = [
    //     { nombre: 'Angular',        icono:  TECNOLOGIAS.ANGULAR },
    //     { nombre: 'TypeScript',     icono:  TECNOLOGIAS.TYPESCRIPT },
    //     { nombre: 'Unity',          icono:  TECNOLOGIAS.UNITY },
    //     { nombre: 'C#',             icono:  TECNOLOGIAS.CSHARP },
    //     { nombre: 'Java',           icono:  TECNOLOGIAS.JAVA },
    //     { nombre: 'Jasper Reports', imagen: 'images/jasper.webp' },
    // ];
}
