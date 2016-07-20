
import { bootstrap } from '@angular/platform-browser-dynamic';
import { HTTP_PROVIDERS } from '@angular/http';
import { XHRBackend } from '@angular/http';
import { SEED_DATA, InMemoryBackendService } from 'angular2-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';
import { AppComponent } from './app.component';
import { appRouterProviders } from './app.routes';

bootstrap ( AppComponent, [
    appRouterProviders,
    HTTP_PROVIDERS,
    { provide: XHRBackend, useClass: InMemoryBackendService },
    { provide: SEED_DATA, useClass: InMemoryDataService }
]);
