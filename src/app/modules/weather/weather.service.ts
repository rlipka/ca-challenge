import { BaseService } from 'src/app/shared/services/base.service';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class WeatherService extends BaseService {

	count = 0;

	constructor(private readonly http: HttpClient) {
		super();
	}

	today(id: string): Observable<any> {
		this.count += 1;
		console.log(this.count);

		return this.http.get<any>(`http://api.openweathermap.org/data/2.5/weather?id=${id}&APPID=${environment.weatherApiKey}&units=metric`)
			.pipe(catchError(this.handleError<any>('WeatherService > today')));
	}
}
