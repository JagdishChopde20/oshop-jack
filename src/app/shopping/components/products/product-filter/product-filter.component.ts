import { Component, Input, OnInit } from '@angular/core';
import { CategoryService } from 'shared/services/category.service';
import { slideUpAnimation } from 'src/app/animations';

@Component({
  selector: 'product-filter',
  templateUrl: './product-filter.component.html',
  styleUrls: ['./product-filter.component.css'],
  animations: [ slideUpAnimation ]
})
export class ProductFilterComponent implements OnInit {
  categories$;
  @Input('category') category;

  constructor(categoryService: CategoryService) { 
    this.categories$ = categoryService.getAll();
  }

  ngOnInit() {
  }

}
