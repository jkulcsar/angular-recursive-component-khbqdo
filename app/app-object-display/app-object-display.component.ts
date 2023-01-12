import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-object-display',
  templateUrl: './app-object-display.component.html',
})
export class ObjectDisplayComponent {
  @Input() object: object;

  isObject(value: any): boolean {
    return typeof value === 'object';
  }

  isDictionary(object: unknown): object is Record<keyof never, unknown> {
    return object instanceof Object && object.constructor === Object;
  }
}
