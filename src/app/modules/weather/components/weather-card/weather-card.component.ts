import { Component, Input, OnInit } from '@angular/core';
import { WeatherService } from '../../weather.service';

@Component({
	selector: 'app-weather-card',
	styleUrls: ['./weather-card.scss'],
	templateUrl: './weather-card.html',
})
export class WeatherCardComponent implements OnInit {

	@Input()
	locationId: string;

	@Input()
	expanded: boolean;

	hasError = false;
	isLoading = true;

	forecast: any = {
		dt: new Date(),
		name: '',
		main: {
			temp: 0,
			humidity: 0,
			pressure: 0,
		},
		sys: {
			country: '',
		}
	};

	constructor(private readonly weatherService: WeatherService) { }

	ngOnInit(): void {
		this.search();
	}

	search() {
		this.isLoading = true;

		this.weatherService.today(this.locationId).subscribe(response => {
			this.hasError = !response || !response.id;

			if (!this.hasError) {
				this.forecast = response;
				this.forecast.dt = new Date();
			}

			this.isLoading = false;
		});
	}
}
