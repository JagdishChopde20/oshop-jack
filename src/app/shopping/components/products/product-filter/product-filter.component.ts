import { Component, OnInit, Input } from '@angular/core';
import { CategoryService } from 'shared/services/category.service';
import { fade, fadeStagger, slideUpAnimation } from 'src/app/animations';

@Component({
  selector: 'product-filter',
  templateUrl: './product-filter.component.html',
  styleUrls: ['./product-filter.component.css'],
  animations: [ fade, fadeStagger, slideUpAnimation ]
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
