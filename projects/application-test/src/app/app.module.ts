import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TestLibModule } from 'test-lib';
//import { TestLibComponent } from 'test-lib';
import { TestLibComponent } from '../../../test-lib/src/public-api';
/*import {
  MapModule,
  MapComponent,
} from '../../../ngx-jmmluna/map/src/public-api';*/
import { MapModule } from 'projects/ngx-jmmluna/map/src/public-api';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, TestLibModule, MapModule],
  providers: [],
  bootstrap: [AppComponent, TestLibComponent],
})
export class AppModule {}
