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
        parentId: 0,
        Name: "Sko", 
        Children: [
          { 
            id: 2,
            parentId: 1,
            Name: "Sneakers",
            Children: [
              { id: 3, Name: "Nike", Children: [], showChildren: true, parentId: 2 }
            ],
            showChildren: true
          },
          { id: 4, Name: "Sandaler", Children: [], showChildren: true, parentId: 2 }
        ],
        showChildren: true 
      }
    ];
  }

  addChild(category: Category) {
    category.Children.push({ id: 5, Name: "Trøjer", Children: [], showChildren: false});
  }

  addParent(category: Category) {
    var parentCategory = new Category(6, "Stilen", [], true, 0);
    parentCategory.Children.push(category);
    this.categories.push(parentCategory);
  }

  toggleChildren(category: Category): void {
    category.showChildren = !category.showChildren;
  }
}

class Category {
  id: number = 0;
  parentId?: number = 0;
  Name: string = "";
  Children: Category[] = [];
  showChildren: boolean = false;

  constructor(id: number, name: string, children: Category[], showChildren: boolean, parentId?: number,) {
    this.id = id;
    this.Name = name;
    this.parentId = parentId;
    this.Children = children;
    this.showChildren = showChildren;
    this.parentId = parentId;
  }
}
