import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { StoreModule } from '@ngrx/store';
import { counterReducer } from './counter.reducer';

import { AppComponent } from './app.component';

import { MyCounterComponent } from './my-counter/my-counter.component';
import { ComponentOA } from './component-ob-a/component-ob-a.component';
import { ComponentOB } from './component-ob-b/component-ob-b.component';
import { ComponentA } from './component-a/component-a.component';
import { ComponentB } from './component-b/component-b.component';

@NgModule({
    imports: [BrowserModule, StoreModule.forRoot({ count: counterReducer })],
    declarations: [AppComponent, MyCounterComponent, ComponentOA, ComponentOB, ComponentA, ComponentB],
    bootstrap: [AppComponent],
})
export class AppModule {}

/*
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://github.com/ngrx/platform
*/
