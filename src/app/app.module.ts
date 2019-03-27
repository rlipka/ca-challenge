import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RootComponent } from './app.root';
import { WeatherModule } from './modules/weather/weather.module';
import { WeatherRoutingModule } from './modules/weather/weather.routing';
import { WeatherService } from './modules/weather/weather.service';

@NgModule({
	declarations: [
		RootComponent,
	],
	imports: [
		FormsModule,
		BrowserModule,
		WeatherModule,
		HttpClientModule,
		WeatherRoutingModule,
		BrowserAnimationsModule,
	],
	providers: [
		WeatherService
	],
	bootstrap: [
		RootComponent
	]
})
export class AppModule { }
