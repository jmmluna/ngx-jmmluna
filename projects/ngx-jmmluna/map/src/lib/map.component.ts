import {
  Component,
  OnInit,
  AfterViewInit,
  Input,
  ElementRef,
} from '@angular/core';
import Map from 'ol/Map';
import View from 'ol/View';
import { Tile as TileLayer, Vector as VectorLayer } from 'ol/layer';
import { OSM, Vector as VectorSource } from 'ol/source';
import Feature from 'ol/Feature';
import GeoJSON from 'ol/format/GeoJSON';

const DEFAULT_HEIGHT = '400px';
const DEFAULT_WIDTH = '400px';
const DEFAULT_POSITION = 'fixed';
const DEFAULT_ZOOM = 1;
const DEFAULT_PROJECTION = 'EPSG:3857';
const DEFAULT_LAT = -519771.792339;
const DEFAULT_LON = 4530575.540519;

@Component({
  selector: 'lib-map',
  templateUrl: 'map.component.html',
})
export class MapComponent implements OnInit {
  @Input() width!: string | number;
  @Input() height!: string | number;
  @Input() position!: string;
  @Input() zoom!: number;
  @Input() projection!: string;
  @Input() lat!: number;
  @Input() lon!: number;
  @Input() mapId!: string;

  target!: string;
  map!: Map;

  private mapElement!: HTMLElement;
  constructor(private elementRef: ElementRef) {}

  private setSize(): void {
    const mapStyle = this.mapElement.style;
    mapStyle.height = coerceCssPixelValue(this.height) || DEFAULT_HEIGHT;
    mapStyle.width = coerceCssPixelValue(this.width) || DEFAULT_WIDTH;
    mapStyle.position = this.position || DEFAULT_POSITION;
  }

  loadData(geojson: string): void {
    const vectorSource = new VectorSource({
      features: new GeoJSON().readFeatures(geojson),
    });

    const vectorLayer = new VectorLayer({
      source: vectorSource,
      //style: styleFunction,
    });

    this.map.addLayer(vectorLayer);
    //alert(data);
  }

  ngOnInit(): void {
    this.target =
      this.mapId || 'map-' + Math.random().toString(36).substring(2);
  }
  ngAfterViewInit(): void {
    this.mapElement = this.elementRef.nativeElement.querySelector(
      `#${this.target}`
    );
    this.setSize();

    this.map = new Map({
      view: new View({
        projection: this.projection || DEFAULT_PROJECTION,
        center: [this.lat || DEFAULT_LAT, this.lon || DEFAULT_LON],
        zoom: this.zoom | DEFAULT_ZOOM,
      }),
      layers: [
        new TileLayer({
          source: new OSM(),
        }),
      ],
      target: this.target,
    });
  }
}

const cssUnitsPattern = /([A-Za-z%]+)$/;

function coerceCssPixelValue(value: any): string {
  if (value == null) {
    return '';
  }

  return cssUnitsPattern.test(value) ? value : `${value}px`;
}
