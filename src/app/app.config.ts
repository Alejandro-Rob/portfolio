import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { routes } from './app.routes';
import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

// Función que indica dónde están los archivos JSON
export function createTranslateLoader(http: HttpClient) {
    return new TranslateHttpLoader(http, 'i18n/', '.json');
}

export const appConfig: ApplicationConfig = {
    providers: [
        provideRouter(routes),
        provideHttpClient(),
        importProvidersFrom(
            TranslateModule.forRoot({
                defaultLanguage: 'es',
                loader: {
                    provide: TranslateLoader,
                    useFactory: createTranslateLoader,
                    deps: [HttpClient]
                }
            })
        )
    ]
};

export class AppComponent {
    constructor(private translate: TranslateService) {
        // Inicializa el servicio de traducción al arrancar la app
        translate.setDefaultLang('es');
        translate.use('es');
    }
}