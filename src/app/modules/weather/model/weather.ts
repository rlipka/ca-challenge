export class Weather {

	id: string = null;
	name: string = null;

	dt = 0;
	date: Date = null;

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

	get fullName() {
		return this.name && this.sys && this.sys.country ? `${this.name}, ${this.sys.country}` : null;
	}

	constructor() { }

}
