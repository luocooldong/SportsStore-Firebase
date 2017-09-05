import { Component } from "@angular/core";
import { Product } from './../../shared/models/product.model';
import { ProductRepository } from './../../shared/services/product.repository';

@Component({
    selector: "store",
    moduleId: module.id,
    templateUrl: "store.component.html"
})
export class StoreComponent {
    constructor(private repository: ProductRepository) { }
    get products(): Product[] {
        return this.repository.getProducts();
    }
    get categories(): string[] {
        return this.repository.getCategories();
    }
}