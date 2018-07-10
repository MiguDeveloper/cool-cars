import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {MatIconModule, MatButtonModule, MatCardModule, MatInputModule, MatListModule, MatToolbarModule} from '@angular/material';

import {AppComponent} from './app.component';
import {CarListComponent} from './components/car-list/car-list.component';

// Servicios
import {CarService} from './shared/services/car.service';
import {CarEditComponent} from './components/car-edit/car-edit.component';
import {FormsModule} from '@angular/forms';

// Rutas
import {APP_ROUTES} from './app.routes';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    CarListComponent,
    CarEditComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatListModule,
    MatToolbarModule,
    FormsModule,
    BrowserAnimationsModule,
    APP_ROUTES
  ],
  providers: [CarService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
