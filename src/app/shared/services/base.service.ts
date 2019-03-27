import { Observable, of } from 'rxjs';

export abstract class BaseService {

	constructor() { }

	protected handleError<T>(operation: string, response?: T) {
		return (error: any): Observable<T> => {
			console.log(`${operation}: ERROR: ${error.message}`);
			return of(response as T);
		};
	}
}
