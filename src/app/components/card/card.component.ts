import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';

export interface ICardConfig {
	title: string;
	temperature: number;
	humidity: number;
	pressure: number;
	updatedAt: Date;
}

@Component({
	selector: 'app-card',
	styleUrls: ['./card.scss'],
	templateUrl: './card.template.html',
})
export class CardComponent implements OnInit {

	@Input()
	config: ICardConfig;

	@Input()
	expanded: boolean;

	ngOnInit(): void {

	}

}
