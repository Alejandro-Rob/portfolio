import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
    selector: 'app-mobile-preview',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './mobile-preview.component.html',
    styleUrl: './mobile-preview.component.css'
})

export class MobilePreviewComponent {
    visible = false;

    // Marca la URL como segura para usarla en el iframe
    url: SafeResourceUrl;

    constructor(private sanitizer: DomSanitizer) {
        this.url = this.sanitizer.bypassSecurityTrustResourceUrl(
            window.location.origin + '/portfolio/'
        );
    }

    abrir() {
        this.visible = true;
    }
    cerrar() {
        this.visible = false;
    }
}
