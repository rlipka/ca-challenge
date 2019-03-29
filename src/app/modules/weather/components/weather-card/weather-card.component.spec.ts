
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { WeatherCardComponent } from './weather-card.component';
import { WeatherService } from '../../weather.service';
import { DatePipe } from '@angular/common';
import { Weather } from '../../model/weather';
import { defer } from 'rxjs';
import { By } from '@angular/platform-browser';

const TEXT = 'TESTE';
const NUMBER_1 = 5;
const NUMBER_2 = 25;
const NUMBER_3 = 35;
const DATE = new Date(2010, 1, 1);

function createModel(text: string, number: number) {
	const model = new Weather();
	model.id = text;
	model.name = text;
	model.dt = number;
	model.date = DATE;
	model.sys.country = text;
	model.main.temp = number;
	model.main.pressure = number;
	model.main.humidity = number;
	return model;
}

describe('Component: WeatherCard', () => {

	const datePipe = new DatePipe('en-US');
	let component: WeatherCardComponent;
	let fixture: ComponentFixture<WeatherCardComponent>;

	beforeEach(async(() => {
		const weatherService = {
			today() { return defer(() => Promise.resolve(createModel(TEXT, NUMBER_1))); }
		};
		TestBed.configureTestingModule({
			declarations: [WeatherCardComponent],
			providers: [{ provide: WeatherService, useValue: weatherService }]
		}).compileComponents().then(() => {
			fixture = TestBed.createComponent(WeatherCardComponent);
			component = fixture.componentInstance;
		});
	}));

	it('test weather values', () => {
		fixture.detectChanges();
		fixture.whenStable().then(() => {
			fixture.detectChanges();
			expect(component.weather).toBeDefined(`Weather instance cant be null`);
			expect(component.weather.id).toBe(TEXT, `Weather 'id' is invalid`);
			expect(component.weather.dt).toBe(NUMBER_1, `Weather 'dt' is invalid`);
			expect(component.weather.name).toBe(TEXT, `Weather 'name' is invalid`);
			expect(component.weather.date).toBeDefined(`Weather 'date' is invalid`);
			expect(component.weather.sys).toBeDefined(`Weather 'main' cant be null`);
			expect(component.weather.sys.country).toBe(TEXT, `Weather 'country' is invalid`);
			expect(component.weather.main).toBeDefined(`Weather 'main' cant be null`);
			expect(component.weather.main.temp).toBe(NUMBER_1, `Weather 'temp' is invalid`);
			expect(component.weather.main.humidity).toBe(NUMBER_1, `Weather 'humidity' is invalid`);
			expect(component.weather.main.pressure).toBe(NUMBER_1, `Weather 'pressure' is invalid`);
		});
	});

	it('test card header title', () => {
		fixture.detectChanges();
		fixture.whenStable().then(() => {
			fixture.detectChanges();
			expect(fixture.debugElement.query(By.css('.header'))).toBeTruthy('Card header not found');
			expect(fixture.debugElement.query(By.css('.header')).nativeElement.innerText).toBe(component.weather.fullName, 'Invalid card header title');
		});
	});

	it('test temperatures colors', () => {
		fixture.detectChanges();

		const testTemperature = (temperature: number, colorClass: string) => {
			component.weather.main.temp = temperature;
			fixture.detectChanges();
			expect(fixture.debugElement.query(By.css(`.temperature.${colorClass}`))).toBeTruthy(`Invalid temperature class color: ${colorClass}`);
			expect(fixture.debugElement.query(By.css('.temperature .temp')).nativeElement.innerText).toEqual(`${temperature}`, 'Temperature is not valid');
		};

		fixture.whenStable().then(() => {
			testTemperature(NUMBER_1, 'text-blue');
			testTemperature(NUMBER_2, 'text-orange');
			testTemperature(NUMBER_3, 'text-red');
		});
	});

	it('test card expanded data', () => {
		fixture.detectChanges();
		fixture.whenStable().then(() => {

			component.expanded = false;
			fixture.detectChanges();
			expect(fixture.debugElement.query(By.css('.humidity'))).toBeFalsy('Card couldnt be expanded');
			expect(fixture.debugElement.query(By.css('.pressure'))).toBeFalsy('Card couldnt be expanded');

			component.expanded = true;
			fixture.detectChanges();
			expect(fixture.debugElement.query(By.css('.humidity'))).toBeTruthy('Card should be expanded');
			expect(fixture.debugElement.query(By.css('.pressure'))).toBeTruthy('Card should be expanded');
		});
	});


	it('test humidity and pressure', () => {
		fixture.detectChanges();
		fixture.whenStable().then(() => {
			component.expanded = true;
			fixture.detectChanges();
			expect(fixture.debugElement.query(By.css('.humidity .value')).nativeElement.innerText).toBe(`${NUMBER_1}`, 'Humidity is not valid');
			expect(fixture.debugElement.query(By.css('.pressure .value')).nativeElement.innerText).toBe(`${NUMBER_1}`, 'Humidity is not valid');
		});
	});

	it('test card footer date', () => {
		fixture.detectChanges();
		fixture.whenStable().then(() => {
			fixture.detectChanges();
			expect(fixture.debugElement.query(By.css('.footer .updated'))).toBeTruthy('Card footer date not found');
			expect(fixture.debugElement.query(By.css('.footer .updated')).nativeElement.innerText).toContain(datePipe.transform(component.weather.date, 'mediumTime'), 'Invalid card footer date');
		});
	});
});
