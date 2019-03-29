export class Weather {

	id: string = null;
	name: string = null;

	dt = 0;

	sys: {
		country?: string,
	} = {
			country: null,
		};

	main: {
		temp?: number,
		humidity?: number,
		pressure?: number,
	} = {
			temp: 0,
			humidity: 0,
			pressure: 0,
		};

	constructor() { }

}
