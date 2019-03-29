import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpClientModule } from '@angular/common/http';
import { BaseService } from './base.service';
import { TestBed } from '@angular/core/testing';

export class BaseServiceConcrete extends BaseService {
	handleError<T>(operation: string, response?: T) {
		return super.handleError(operation, response);
	}
}

describe('Service: BaseService', () => {

	let service: BaseServiceConcrete;

	beforeEach(() => {
		service = new BaseServiceConcrete();
		TestBed.configureTestingModule({
			imports: [
				HttpClientModule,
				HttpClientTestingModule
			]
		});
	});

	it('test handleError', () => {
		service.handleError('BaseService handleError', null)({ message: 'message error here' }).subscribe((data) => {
			data();
			// TODO: assert log correct message here
		});
	});

});

