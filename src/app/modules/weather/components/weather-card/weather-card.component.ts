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

	@Input()
	title: string;

	error = false;
	loading = true;

	weather: any = {
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
		this.loading = true;

		this.weatherService.today(this.locationId).subscribe(response => {
			this.error = !response || !response.id;

			if (!this.error) {
				this.weather = response;
				this.weather.dt = new Date();
			}

			this.loading = false;
		});
	}
}
