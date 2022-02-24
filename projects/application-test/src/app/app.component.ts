import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { MapComponent } from 'projects/ngx-jmmluna/map/src/public-api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements AfterViewInit {
  //title = 'application-test';
  @ViewChild('mapa1') mapa1!: MapComponent;

  ngAfterViewInit() {
    const data = `{"type":"FeatureCollection","features":[{"type":"Feature","properties":{},"geometry":{"type":"Point","coordinates":[-687070.39096398,4872676.746463698]}}]}`;

    this.mapa1.loadData(data);
  }
}
