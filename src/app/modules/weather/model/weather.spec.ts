import { Weather } from './weather';

const TEXT = 'teste';
const NUMBER = 25;
const DATE = new Date(2010, 1, 1);

describe('Class: Weather', () => {
	let model: Weather;

	beforeEach(() => {
		model = new Weather();
		model.id = TEXT;
		model.name = TEXT;
		model.dt = NUMBER;
		model.date = DATE;
		model.sys.country = TEXT;
		model.main.temp = NUMBER;
		model.main.pressure = NUMBER;
		model.main.humidity = NUMBER;
	});

	it('test objects are defined', () => {
		expect(model).toBeDefined();
		expect(model.main).toBeDefined();
		expect(model.sys).toBeDefined();
	});

	it('test all properties are setted', () => {
		expect(model.id).toBe(TEXT);
		expect(model.dt).toBe(NUMBER);
		expect(model.name).toBe(TEXT);
		expect(model.date).toBe(DATE);
		expect(model.main.temp).toBe(NUMBER);
		expect(model.main.pressure).toBe(NUMBER);
		expect(model.main.humidity).toBe(NUMBER);
		expect(model.sys.country).toBe(TEXT);
	});

	it('test full name', () => {
		expect(model.fullName).toBe(`${TEXT}, ${TEXT}`);
	});

	afterEach(() => {
		model = null;
	});
});
