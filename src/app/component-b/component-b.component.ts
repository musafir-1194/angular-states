import { Component } from '@angular/core';
import { StateService } from '../services/state.service';

// Component B
@Component({
    selector: 'app-component-b',
    template: `
    <h2>Component B with service</h2>
    <p>Count: {{ count }}</p>
  `,
})
export class ComponentB {
    count: number;

    constructor(private stateService: StateService) {
        this.count = this.stateService.getCount();
    }
}
