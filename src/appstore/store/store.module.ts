import { StoreComponent } from './containers/store.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ModelModule } from './../shared/model.module';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        ModelModule
    ],
    declarations: [
        StoreComponent
    ],
    exports: [
        StoreComponent
    ]
})
export class StoreModule {}