import { NgModule } from '@angular/core';
import { StaticDataSource } from './models/static.datasource';
import { ProductRepository } from './services/product.repository';

@NgModule({
    providers: [
        StaticDataSource,
        ProductRepository
    ]
})
export class ModelModule {}