import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
    selector: 'app-navbar',
    standalone: true,
    imports: [CommonModule, TranslateModule],
    templateUrl: './navbar.component.html',
    styleUrl: './navbar.component.css'
})

export class NavbarComponent {
    menuAbierto = false;
    idiomaActual = 'es';

    // Array de idiomas disponibles
    idiomas = [
        { codigo: 'es', etiqueta: '🇪🇸 ES' },
        { codigo: 'en', etiqueta: '🇬🇧 EN' },
        { codigo: 'de', etiqueta: '🇩🇪 DE' },
    ];

    constructor(private translate: TranslateService) {
        translate.setDefaultLang('es');
        translate.use('es');
    }

    toggleMenu() {
        this.menuAbierto = !this.menuAbierto;
    }

    scrollTo(id: string) {
        const elemento = document.getElementById(id);
        if (elemento) {
            elemento.scrollIntoView({ behavior: 'smooth' });
        }
        this.menuAbierto = false;
    }

    cambiarIdioma(codigo: string) {
        this.idiomaActual = codigo;
        this.translate.use(codigo);
    }
}
