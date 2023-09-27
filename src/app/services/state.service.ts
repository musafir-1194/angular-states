import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

// State Servic
@Injectable({
    providedIn: 'root',
})
export class StateService {
    private count: number = 0;

    private countSubject: BehaviorSubject<number> = new BehaviorSubject<number>(0);
    count$: Observable<number> = this.countSubject.asObservable();

    incrementCount() {
        this.count++;
    }

    decrementCount() {
        this.count--;
    }

    getCount(): number {
        return this.count;
    }

    incrementCountOb() {
        const currentCount = this.countSubject.value;
        this.countSubject.next(currentCount + 1);
    }

    decrementCountOb() {
        const currentCount = this.countSubject.value;
        this.countSubject.next(currentCount - 1);
    }
}
