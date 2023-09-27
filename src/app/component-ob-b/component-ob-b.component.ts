import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { StateService } from '../services/state.service';

// Component B
@Component({
    selector: 'app-component-ob',
    template: `
    <h2>Component B with observables and subjects</h2>
    <p>Count: {{ count$ | async }}</p>
  `,
})
export class ComponentOB {
    count$: Observable<number>;

    constructor(private stateService: StateService) {
        this.count$ = this.stateService.count$;
    }
}
