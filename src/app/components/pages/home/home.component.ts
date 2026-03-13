import { Component } from '@angular/core';
import { RouterLink } from '@angular/router'; // Necesario para usar routerLink en el HTML

@Component({
    selector: 'app-home',
    standalone: true,
    imports: [RouterLink],
    templateUrl: './home.component.html',
    styleUrl: './home.component.css'
})

export class HomeComponent {}