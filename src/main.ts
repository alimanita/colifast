import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { provideTranslateService, TranslateLoader } from '@ngx-translate/core';
import { TRANSLATIONS } from './translations';
import { Observable, of } from 'rxjs';

export function customLoaderFactory(): TranslateLoader {
  return {
    getTranslation: (lang: string) => of(TRANSLATIONS[lang as keyof typeof TRANSLATIONS] || TRANSLATIONS['fr'])
  };
}

bootstrapApplication(AppComponent, {
  providers: [
    provideTranslateService({
      loader: customLoaderFactory,
      lang: 'fr',
      fallbackLang: 'fr'
    })
  ]
}).catch((error) => console.error(error));
