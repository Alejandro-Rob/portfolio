import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Tecnologia } from '../../../models/tecnologias.interface';

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
