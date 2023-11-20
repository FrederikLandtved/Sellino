export class CreateProductModel {
  Name: string;
  Description: string;
  Price: string;
  ProductGroupId: number;
  ProductMediaId: number;

  constructor(name: string, description: string, price: string, productGroupId: number, productMediaId: number) {
    this.Name = name;
    this.Description = description;
    this.Price = price;
    this.ProductGroupId = productGroupId;
    this.ProductMediaId = productMediaId;
  }
}