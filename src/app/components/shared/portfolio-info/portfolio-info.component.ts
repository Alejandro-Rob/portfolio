import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
    selector: 'app-portfolio-info',
    standalone: true,
    imports: [CommonModule, TranslateModule],
    templateUrl: './portfolio-info.component.html',
    styleUrl: './portfolio-info.component.css'
})
export class PortfolioInfoComponent {
    visible = false;

    abrir() { this.visible = true; }
    cerrar() { this.visible = false; }
}
