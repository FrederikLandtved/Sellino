import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {
  categories: Category[] = [];

  ngOnInit(): void {
    this.categories = 
    [
      { 
        id: 1,
        Name: "Tøj og sko", 
        Children: [
          { 
            id: 2,
            Name: "Sneakers",
            Children: [
              { id: 3, Name: "Nike", Children: [], showChildren: true }
            ],
            showChildren: true
          },
          { id: 4, Name: "Sandaler", Children: [], showChildren: true }
        ],
        showChildren: true 
      }
    ];
  }

  addCategory(category: Category) {
    category.Children.push({ id: 5, Name: "Trøjer", Children: [], showChildren: false});
  }

  toggleChildren(category: Category): void {
    category.showChildren = !category.showChildren;
  }
}

class Category {
  id: number = 0;
  Name: string = "";
  Children: Category[] = [];
  showChildren: boolean = false;
}
