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

    // Cambia entre español e inglés
    cambiarIdioma() {
        this.idiomaActual = this.idiomaActual === 'es' ? 'en' : 'es';
        this.translate.use(this.idiomaActual);
    }
}
