import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { WeatherCardComponent } from './components/weather-card/weather-card.component';
import { WeatherMainComponent } from './pages/main/main';
import { CacheInterceptor } from 'src/app/shared/interceptors/cache.interceptor';
import { WeatherService } from './weather.service';
import { CacheService } from 'src/app/shared/services/cache.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
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
		CacheService,
		WeatherService,
		{
			multi: true,
			provide: HTTP_INTERCEPTORS,
			useClass: CacheInterceptor,
		}
	]
})
export class WeatherModule { }
