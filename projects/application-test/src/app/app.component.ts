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
  @ViewChild('mapa2') mapa2!: MapComponent;
  @ViewChild('mapa3') mapa3!: MapComponent;
  @ViewChild('mapa4') mapa4!: MapComponent;
  @ViewChild('mapa5') mapa5!: MapComponent;
  @ViewChild('mapa6') mapa6!: MapComponent;

  ngAfterViewInit() {
    const mapStyle1 = {
      point: {
        fillColor: 'red',
        radius: 5,
      },
    };

    const mapStyle2 = {
      polygon: {
        fillColor: 'rgb(205, 92, 92,0.3)',
        colorLine: 'red',
        widthLine: 5,
      },
    };

    const mapStyle3 = {
      polygon: {
        fillColor: 'rgb(205, 92, 92,0.3)',
        colorLine: 'red',
        widthLine: 5,
      },
      point: {
        fillColor: 'red',
        radius: 5,
      },
      themming: {
        attributeName: 'estado',
        values: {
          iniciado: {
            point: {
              fillColor: 'red',
              radius: 5,
            },
          },
          finalizado: {
            point: {
              fillColor: 'green',
              radius: 5,
            },
          },
          planificado: {
            point: {
              fillColor: 'yellow',
              radius: 5,
            },
          },
        },
      },
    };
    const mapStyle6 = {
      polygon: {
        fillColor: 'rgb(205, 92, 92,0.3)',
        colorLine: 'red',
        widthLine: 5,
      },
      point: {
        fillColor: 'red',
        radius: 5,
      },
      themming: {
        attributeName: 'valor',
        values: {
          1: {
            polygon: {
              fillColor: 'green',
              colorLine: 'red',
              widthLine: 3,
            },
          },
          2: {
            polygon: {
              fillColor: 'brown',
              colorLine: 'red',
              widthLine: 5,
            },
          },
          3: {
            polygon: {
              fillColor: 'blue',
              colorLine: 'red',
              widthLine: 4,
            },
          },
        },
      },
    };
    this.mapa1.loadData(this.getPoint(), mapStyle1);
    this.mapa2.loadData(this.getPolygon(), mapStyle2);
    this.mapa3.loadData(this.getPoint(), mapStyle3);
    this.mapa4.loadData(this.getPoint(), {});
    this.mapa5.loadData(this.getPolygon(), {});
    this.mapa6.loadData(this.getPolygon(), mapStyle6);
  }

  private getPoint(): string {
    return `{"type":"FeatureCollection","features":[
        {"type":"Feature","properties":{"estado":"iniciado"},"geometry":{"type":"Point","coordinates":[-687070.39096398,4872676.746463698]}},
        {"type":"Feature","properties":{"estado":"finalizado"},"geometry":{"type":"Point","coordinates":[-683829.59079811,4879927.8241745]}},
        {"type":"Feature","properties":{"estado":"planificado"},"geometry":{"type":"Point","coordinates":[-673434.15495319,4877634.7133264]}}
]}`;
  }

  private getPolygon(): string {
    return `{"type":"FeatureCollection","features":[{"type":"Feature","properties":{"attr":null,"valor":1},"geometry":{"type":"Polygon","coordinates":[[[-631271.34672589,4916150.292692899],[-628519.61370812,4918443.403541001],[-623016.14767257,4921348.010615398],[-617054.05946739,4918902.025710702],[-613843.70427999,4914010.0559013],[-610786.22314913,4912328.441279299],[-604671.26088741,4914315.8040144],[-603754.01654815,4911869.819109699],[-599320.66890841,4913704.307788198],[-593970.07692941,4914774.4261839995],[-582351.64863214,4917067.5370322],[-563701.0137339,4914927.300240601],[-556057.31090675,4919819.270049898],[-549789.47458849,4916303.1667494],[-548719.35619269,4912328.441279299],[-554681.44439786,4908047.967696098],[-558350.42175489,4912022.693166199],[-559114.79203761,4907742.219582999],[-561866.52505538,4906060.604961099],[-560490.65854649,4904226.116282499],[-567828.61326056,4899334.146473198],[-571191.8425045,4898264.028077398],[-571650.46467413,4894900.798833399],[-570274.59816524,4893677.8063811],[-570274.59816524,4892454.8139287],[-575166.56797462,4891996.191759101],[-578529.79721856,4892913.436098401],[-579447.04155782,4891690.443645998],[-583727.51514103,4890467.451193701],[-589689.6033462,4892913.436098401],[-592594.21042052,4892913.436098401],[-596416.06183409,4892149.0658156],[-598403.42456915,4897958.279964299],[-594581.57315557,4904073.242225999],[-598862.04673878,4903461.745999798],[-600390.78730421,4902697.375717098],[-603448.26843507,4902850.2497737],[-605741.37928321,4900404.264868997],[-608187.3641879,4898569.776190499],[-608951.73447061,4896123.791285801],[-612467.8377711,4895053.672889998],[-614302.32644962,4895053.672889998],[-615219.57078888,4894442.176663799],[-617818.42975011,4894442.176663799],[-622710.39955948,4897346.783738098],[-625309.25852071,4898722.650247],[-623933.39201182,4899487.020529699],[-626226.50285997,4902085.879490898],[-629131.10993429,4903308.871943299],[-629895.480217,4905449.108734899],[-633411.58351749,4908506.5898657],[-637692.05710069,4909118.086091898],[-637386.30898761,4911564.0709966],[-634940.32408292,4913857.181844797],[-633258.70946095,4915997.418636401],[-631729.96889552,4916608.914862499],[-631271.34672589,4916150.292692899]]]}},
            {"type":"Feature","properties":{"attr":null,"valor":2},"geometry":{"type":"Polygon","coordinates":[[[-632678.47711738,5021258.9600793],[-651023.36390254,5012086.516686698],[-650106.11956328,4996799.111032399],[-633289.97334355,4992212.889336098],[-625340.52240332,4994047.378014597],[-603020.91014805,5001691.080841799],[-602103.66580879,5013615.257252098],[-624117.52995098,5031654.395924199],[-632678.47711738,5021258.9600793]]]}},
            {"type":"Feature","properties":{"attr":null,"valor":3},"geometry":{"type":"Polygon","coordinates":[[[-546151.76111406,5013003.761025897],[-547680.50167949,4994047.378014597],[-516799.94225781,4984263.438395898],[-511602.2243353499,5009334.783668898],[-524443.64508496,5030737.151584897],[-546151.76111406,5013003.761025897]]]}}

]}`;
  }
}
