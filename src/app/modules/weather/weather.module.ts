import { WeatherCardComponent } from './components/weather-card/weather-card.component';
import { WeatherMainComponent } from './pages/main/main';
import { HttpClientModule } from '@angular/common/http';
import { WeatherService } from './weather.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

@NgModule({
	declarations: [
		WeatherMainComponent,
		WeatherCardComponent,
	],
	imports: [
		FormsModule,
		CommonModule,
		HttpClientModule,
	],
	exports: [
	],
	providers: [
		WeatherService
	]
})
export class WeatherModule { }
