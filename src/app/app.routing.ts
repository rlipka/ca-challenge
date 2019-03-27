import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home';
import { Error404Component } from './pages/errors/404';

const routes: Routes = [
	{
		path: '',
		component: HomeComponent
	},
	{
		path: 'not-found',
		component: Error404Component
	},
	{
		path: '',
		redirectTo: '/',
		pathMatch: 'full'
	},
	{
		path: '**',
		redirectTo: '/not-found',
		pathMatch: 'full'
	}
];

@NgModule({
	imports: [
		RouterModule.forRoot(routes)
	],
	exports: [
		RouterModule
	]
})
export class AppRoutingModule { }
