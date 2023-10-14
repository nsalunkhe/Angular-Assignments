import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  private items:any[]=[
    { id: 1, name: 'Laptop', description: 'High-performance laptop', price: 1200, category: 'Electronics', rating: 4 },
    { id: 2, name: 'T-Shirt', description: 'Casual cotton t-shirt', price: 25, category: 'Clothing', rating: 3 },
    { id: 3, name: 'Chair', description: 'Comfortable office chair', price: 150, category: 'Furniture', rating: 5 },
    { id: 4, name: 'Smartphone', description: 'Latest smartphone model', price: 800, category: 'Electronics', rating: 4.5 },
    { id: 5, name: 'Jeans', description: 'Classic blue jeans', price: 45, category: 'Clothing', rating: 4 },
    { id: 6, name: 'Desk', description: 'Sturdy wooden desk', price: 200, category: 'Furniture', rating: 4.7 },
    { id: 7, name: 'Headphones', description: 'Noise-cancelling headphones', price: 150, category: 'Electronics', rating: 4.2 },
    { id: 8, name: 'Sweater', description: 'Warm knitted sweater', price: 35, category: 'Clothing', rating: 4.5 },
    { id: 9, name: 'Bed', description: 'King-sized comfortable bed', price: 700, category: 'Furniture', rating: 4.8 },
    { id: 10, name: 'Tablet', description: 'Portable tablet device', price: 300, category: 'Electronics', rating: 4.3 },
    { id: 11, name: 'Dress', description: 'Elegant evening dress', price: 80, category: 'Clothing', rating: 4 },
    { id: 12, name: 'Bookshelf', description: 'Wooden bookshelf', price: 80, category: 'Furniture', rating: 4.6 },
    { id: 13, name: 'Monitor', description: 'High-resolution computer monitor', price: 250, category: 'Electronics', rating: 4.4 },
    { id: 14, name: 'Shorts', description: 'Casual summer shorts', price: 20, category: 'Clothing', rating: 4.2 },
    { id: 15, name: 'Sofa', description: 'Comfortable living room sofa', price: 500, category: 'Furniture', rating: 4.7 },
    { id: 16, name: 'Gaming Console', description: 'Next-gen gaming console', price: 450, category: 'Electronics', rating: 4.8 },
    { id: 17, name: 'Sneakers', description: 'Stylish athletic sneakers', price: 80, category: 'Clothing', rating: 4.5 },
    { id: 18, name: 'Coffee Table', description: 'Modern coffee table', price: 120, category: 'Furniture', rating: 4.6 },
    { id: 19, name: 'External Hard Drive', description: 'Portable external hard drive', price: 70, category: 'Electronics', rating: 4.3 },
    { id: 20, name: 'Dress Shirt', description: 'Formal dress shirt', price: 30, category: 'Clothing', rating: 4.4 },
    { id: 21, name: 'Book', description: 'Bestselling novel', price: 15, category: 'Books', rating: 4.7 },
    { id: 22, name: 'Desk Lamp', description: 'Adjustable desk lamp', price: 25, category: 'Home & Living', rating: 4.2 },
    { id: 23, name: 'Running Shoes', description: 'Lightweight running shoes', price: 60, category: 'Clothing', rating: 4.6 },
    { id: 24, name: 'Couch', description: 'Spacious living room couch', price: 800, category: 'Furniture', rating: 4.9 },
    { id: 25, name: 'Digital Camera', description: 'High-resolution digital camera', price: 500, category: 'Electronics', rating: 4.5 }
  ];
  private uniqueCategories: string[] = [];

  constructor() {
    this.populateUniqueCategories();
  }

  getItems(): any[] {
    return this.items;
  }

  addItem(item: any): void {
    this.items.push(item);
    this.populateUniqueCategories(); // Update categories when adding an item
  }

  removeItem(item: any): void {
    const index = this.items.findIndex(i => i === item);
    if (index !== -1) {
      this.items.splice(index, 1);
      this.populateUniqueCategories(); // Update categories when removing an item
    }
  }

  private populateUniqueCategories(): void {
    const categories = new Set<string>();
    this.items.forEach(item => categories.add(item.category));
    this.uniqueCategories = Array.from(categories);
  }

  getUniqueCategories(): string[] {
    return this.uniqueCategories;
  }
}