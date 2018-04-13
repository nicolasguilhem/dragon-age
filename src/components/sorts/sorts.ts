import { Component } from '@angular/core';

/**
 * Generated class for the SortsComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'sorts',
  templateUrl: 'sorts.html'
})
export class SortsComponent {

  text: string;

  constructor() {
    console.log('Hello SortsComponent Component');
    this.text = 'Hello World';
  }

}
