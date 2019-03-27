import { WeatherMainComponent } from './pages/main/main';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

const routes: Routes = [
	{
		path: 'weather',
		component: WeatherMainComponent
	},
	{
		path: '',
		redirectTo: '/weather',
		pathMatch: 'full'
	},
];
@NgModule({
	imports: [
		RouterModule.forRoot(routes)
	],
	exports: [
		RouterModule
	]
})
export class WeatherRoutingModule { }
