import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { CacheService } from '../services/cache.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { tap } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class CacheInterceptor implements HttpInterceptor {

	constructor(private cacheService: CacheService) { }

	intercept(req: HttpRequest<any>, next: HttpHandler) {
		const response = this.cacheService.get(req);
		return response ? of(response) : this.sendRequest(req, next, this.cacheService);
	}

	sendRequest(req: HttpRequest<any>, next: HttpHandler, cache: CacheService): Observable<HttpEvent<any>> {
		return next.handle(req).pipe(tap(event => {
			if (event instanceof HttpResponse) {
				cache.put(req, event);
			}
		}));
	}
}
