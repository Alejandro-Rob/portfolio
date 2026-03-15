import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

// Interfaz compartida para las tecnologías
export interface Tecnologia {
    icono?: string;
    imagen?: string;
    nombre?: string;
}

@Component({
    selector: 'app-tech-icons',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './tech-icons.component.html',
    styleUrl: './tech-icons.component.css'
})

export class TechIconsComponent {
    @Input() tecnologias: Tecnologia[] = [];
}
