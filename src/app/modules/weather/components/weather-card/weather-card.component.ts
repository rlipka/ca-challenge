import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { WeatherService } from '../../weather.service';
import { Weather } from '../../model/weather';
import { Subscription, timer } from 'rxjs';

@Component({
	selector: 'app-weather-card',
	styleUrls: ['./weather-card.scss'],
	templateUrl: './weather-card.html',
})
export class WeatherCardComponent implements OnInit, OnDestroy {

	@Input() title: string;
	@Input() locationId: string;
	@Input() expanded: boolean;

	error = false;
	loading = true;
	refresh$: Subscription;
	weather = new Weather();

	constructor(private readonly weatherService: WeatherService) { }

	ngOnInit(): void {
		this.refresh();
	}

	ngOnDestroy(): void {
		if (this.refresh$) {
			this.refresh$.unsubscribe();
		}
	}

	private subscribe(): void {
		this.refresh$ = timer(10000).subscribe(() => this.refresh());
	}

	refresh() {
		console.log('refresh');
		this.getWeather().then((response) => {
			this.weather = response;
			this.subscribe();
		}).catch(() => this.subscribe());
	}


	getFullName() {
		return this.weather.name && this.weather.sys && this.weather.sys.country ? `${this.weather.name}, ${this.weather.sys.country}` : null;
	}

	getDate(): Date {
		return this.weather.dt ? new Date(this.weather.dt * 1000) : null;
	}

	getWeather(): Promise<Weather> {
		return new Promise(resolve => {
			this.loading = true;
			this.weatherService.today(this.locationId).subscribe(response => {
				this.error = !response || !response.id;
				this.loading = false;
				resolve(response);
			});
		});
	}
}
