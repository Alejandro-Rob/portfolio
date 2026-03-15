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
    desplegableAbierto = false; // Controla el desplegable de idiomas

    idiomas = [
        { codigo: 'es', etiqueta: '🇪🇸 ES' },
        { codigo: 'en', etiqueta: '🇬🇧 EN' },
        { codigo: 'de', etiqueta: '🇩🇪 DE' },
        { codigo: 'ru', etiqueta: '🇷🇺 RU' },
        { codigo: 'ja', etiqueta: '🇯🇵 JA' }
    ];

    constructor(private translate: TranslateService) {
        translate.setDefaultLang('es');
        translate.use('es');
    }

    toggleMenu() {
        this.menuAbierto = !this.menuAbierto;
    }

    toggleDesplegable() {
        this.desplegableAbierto = !this.desplegableAbierto;
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
        this.desplegableAbierto = false; // Cierra el desplegable al seleccionar
    }

    // Devuelve la etiqueta del idioma actual
    get etiquetaActual(): string {
        return this.idiomas.find(i => i.codigo === this.idiomaActual)?.etiqueta || '🇪🇸 ES';
    }
}


// import { Component } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { TranslateModule, TranslateService } from '@ngx-translate/core';

// @Component({
//     selector: 'app-navbar',
//     standalone: true,
//     imports: [CommonModule, TranslateModule],
//     templateUrl: './navbar.component.html',
//     styleUrl: './navbar.component.css'
// })

// export class NavbarComponent {
//     menuAbierto = false;
//     idiomaActual = 'es';
//     desplegableAbierto = false;

//     // Array de idiomas disponibles
//     idiomas = [
//         { codigo: 'es', etiqueta: '🇪🇸 ES' },
//         { codigo: 'en', etiqueta: '🇬🇧 EN' },
//         { codigo: 'de', etiqueta: '🇩🇪 DE' },
//     ];

//     constructor(private translate: TranslateService) {
//         translate.setDefaultLang('es');
//         translate.use('es');
//     }

//     toggleMenu() {
//         this.menuAbierto = !this.menuAbierto;
//     }

//     scrollTo(id: string) {
//         const elemento = document.getElementById(id);
//         if (elemento) {
//             elemento.scrollIntoView({ behavior: 'smooth' });
//         }
//         this.menuAbierto = false;
//     }

//     cambiarIdioma(codigo: string) {
//         this.idiomaActual = codigo;
//         this.translate.use(codigo);
//     }
// }
