import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Error404Component } from './pages/errors/404';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app.routing';
import { CardComponent } from './components/card/card.component';
import { BrowserModule } from '@angular/platform-browser';
import { RootComponent } from './app.root';
import { HomeComponent } from './pages/home/home';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

@NgModule({
	declarations: [
		RootComponent,
		HomeComponent,
		CardComponent,
		Error404Component,
	],
	imports: [
		FormsModule,
		BrowserModule,
		HttpClientModule,
		BrowserAnimationsModule,
		AppRoutingModule,
	],
	providers: [],
	bootstrap: [RootComponent]
})
export class AppModule { }
