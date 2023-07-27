import { Component } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { decrement, increment, reset } from "../counter.actions";

@Component({
    selector: 'app-my-counter',
    templateUrl: './my-counter.component.html'
})

export class MyCounterComponent {
    count$: Observable<number>;

    constructor(
        private _store: Store<{count: number}>
    ) {
        this.count$ = _store.select('count');
    }
    
    increment() {
        this._store.dispatch(increment());
    }
    
    decrement() {
        this._store.dispatch(decrement());
    }
    
    reset() {
        this._store.dispatch(reset());
    }
}