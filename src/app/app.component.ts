import { Component } from '@angular/core';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { SobreMiComponent } from './components/pages/sobre-mi/sobre-mi.component';
import { ExperienciaComponent } from './components/pages/experiencia/experiencia.component';
import { ProyectosComponent } from './components/pages/proyectos/proyectos.component';
import { ContactoComponent } from './components/pages/contacto/contacto.component';
import { HeroComponent } from './components/pages/hero/hero.component';
import { TecnologiasComponent } from './components/pages/tecnologias/tecnologias.component';
import { EstudiosComponent } from './components/pages/estudios/estudios.component';
import { MobilePreviewComponent } from './components/shared/mobile-preview/mobile-preview.component';
import { TranslateService } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';
import { PortfolioInfoComponent } from './components/shared/portfolio-info/portfolio-info.component';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [
        CommonModule,
        NavbarComponent,
        SobreMiComponent,
        ExperienciaComponent,
        ProyectosComponent,
        HeroComponent,
        EstudiosComponent,
        TecnologiasComponent,
        ContactoComponent,
        MobilePreviewComponent,
        PortfolioInfoComponent
    ],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css'
})

export class AppComponent {
    traduccionLista = false;

    constructor(private translate: TranslateService) {
        translate.setDefaultLang('es');
        translate.use('es').subscribe(() => {
            this.traduccionLista = true; // Muestra el contenido cuando las traducciones están listas
        });
    }
}

