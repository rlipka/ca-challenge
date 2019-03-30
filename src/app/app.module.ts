import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { WeatherRoutingModule } from './modules/weather/weather.routing';
import { HttpClientModule } from '@angular/common/http';
import { WeatherService } from './modules/weather/weather.service';
import { BrowserModule } from '@angular/platform-browser';
import { RootComponent } from './app.root';
import { WeatherModule } from './modules/weather/weather.module';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

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
