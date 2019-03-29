import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Weather } from '../../model/weather';
import { WeatherService } from '../../weather.service';

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
	weather = new Weather();

	constructor(private readonly weatherService: WeatherService) { }

	ngOnInit(): void {
		this.loadWeatherFromCache();
	}

	ngOnDestroy(): void {
	}

	loadWeatherFromCache() {
		this.getWeather().then((response) => {
			this.weather = response;
		});
	}

	getWeather(): Promise<Weather> {
		return new Promise(resolve => {
			this.loading = true;
			this.weatherService.today(this.locationId).subscribe(response => {
				this.error = !response || !response.id;
				if (!this.error) {
					response.date = new Date();
				}
				this.loading = false;
				resolve(response);
			});
		});
	}
}
