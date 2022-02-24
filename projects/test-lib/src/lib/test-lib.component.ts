import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-test-lib',
  template: ` <p>test-lib trabaja perfectamente!</p> `,
  styles: [],
})
export class TestLibComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
