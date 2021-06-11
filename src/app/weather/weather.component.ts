import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {
  @Input()
  city:string = '';
  temperature:string  = '0';
  state:string = '';

  @Output() temperatureChange = new EventEmitter<number>()
  constructor() { }

  ngOnInit(): void {
  }

  onIncrement(): void {
    this.temperature =(parseInt(this.temperature)+1).toString();
    this.temperatureChange.emit(parseInt(this.temperature));
  }

  onDecrement(): void {
    this.temperature =(parseInt(this.temperature)-1).toString();
  }

}
