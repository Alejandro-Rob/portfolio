import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-navbar',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './navbar.component.html',
    styleUrl: './navbar.component.css'
})

export class NavbarComponent {
    // Controla si el menú móvil está abierto o cerrado
    menuAbierto = false;

    toggleMenu() {
        this.menuAbierto = !this.menuAbierto;
    }

    // Hace scroll suave hasta la sección indicada por su id
    scrollTo(id: string) {
        const elemento = document.getElementById(id);
        if (elemento) {
            elemento.scrollIntoView({ behavior: 'smooth' });
        }
        this.menuAbierto = false; // Cierra el menú móvil al navegar
    }
}
