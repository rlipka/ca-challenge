import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClientModule, HttpRequest } from '@angular/common/http';
import { async, inject, TestBed } from '@angular/core/testing';
import { WeatherService } from './weather.service';

const ID = '3421319';
const URL = 'http://api.openweathermap.org/data/2.5/weather?id=' + ID + '&APPID=3b2c456a9e4f30e00bcda6d6f7a022e0&units=metric';
const TYPE = 'GET';
const RESPONSE_TYPE = 'json';

describe('Service: WeatherService', () => {

	beforeEach(() => {
		TestBed.configureTestingModule({
			imports: [
				HttpClientModule,
				HttpClientTestingModule
			],
			providers: [
				WeatherService
			]
		});
	});

	it(`today expected one call`, async(inject([WeatherService, HttpTestingController], (service: WeatherService, backend: HttpTestingController) => {
		service.today(ID).subscribe();
		backend.expectOne((req: HttpRequest<any>) => {
			return req.url === URL
				&& req.method === TYPE
				&& req.responseType === RESPONSE_TYPE;
		});
	})));

	afterEach(inject([HttpTestingController], (backend: HttpTestingController) => {
		backend.verify();
	}));
});

