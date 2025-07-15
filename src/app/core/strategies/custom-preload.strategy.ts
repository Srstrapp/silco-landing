/*ort { PreloadingStrategy } from '@angular/router';
import { Observable, of } from 'rxjs';

export class CustomPreloadStrategy implements PreloadingStrategy {
  preload(route: Route, load: () => Observable<any>): Observable<any> {
    return route.data?.['preload'] ? load() : of(null);
  }
}*/