import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
    selector: 'app-sobre-mi',
    standalone: true,
    imports: [CommonModule, TranslateModule],
    templateUrl: './sobre-mi.component.html',
    styleUrl: './sobre-mi.component.css'
})

export class SobreMiComponent {}
