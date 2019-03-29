import { HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';

/**
 * The cache max age time in miliseconds. Default is 10 minutes
 */
// const CACHE_MAX_AGE = 1000 * 60 * 10;
const CACHE_MAX_AGE = 5000;

@Injectable()
export class CacheService {

	cache = new Map();

	get(req: HttpRequest<any>): HttpResponse<any> | undefined {
		const cached = this.cache.get(req.urlWithParams);

		if (!cached || cached.date < (Date.now() - CACHE_MAX_AGE)) {
			return undefined;
		}

		return cached.response;
	}

	put(req: HttpRequest<any>, response: HttpResponse<any>): void {

		const url = req.url;
		const exp = Date.now() - CACHE_MAX_AGE;
		const entry = { url, response, date: Date.now() };

		this.cache.set(url, entry);

		this.cache.forEach(item => {
			if (item.date < exp) {
				this.cache.delete(item.url);
			}
		});
	}
}
