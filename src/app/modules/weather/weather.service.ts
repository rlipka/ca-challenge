import { BaseService } from 'src/app/shared/services/base.service';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Weather } from './model/weather';

@Injectable({
	providedIn: 'root'
})
export class WeatherService extends BaseService {

	baseUrl = 'weather';

	constructor(private readonly http: HttpClient) {
		super();
	}

	today(id: string): Observable<Weather> {
		return this.http.get<Weather>(`${environment.weatherApi}/${this.baseUrl}?id=${id}&APPID=${environment.weatherApiKey}&units=metric`)
			.pipe(catchError(this.handleError<any>('WeatherService > today')));
	}
}
