import { Component, OnInit } from '@angular/core';
import { ItemService } from '../item.service';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {
  selectedCategory: string = '';
  searchQuery: string = '';
  itemsPerPage: number = 5;
  currentPage: number = 1;
  filteredItems: any[] = [];
  uniqueCategories: string[] = [];

  constructor(private itemService: ItemService) { }

  ngOnInit() {
    this.filterItems();
  }

  filterItems() {
    const allItems = this.itemService.getItems();

    this.filteredItems = allItems.filter(item =>
      (this.selectedCategory === '' || item.category === this.selectedCategory) &&
      (item.name.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(this.searchQuery.toLowerCase()))
    );

    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    this.filteredItems = this.filteredItems.slice(startIndex, endIndex);
  }

  deleteItem(item: any) {
    this.itemService.removeItem(item);
    this.filterItems();
  }

  nextPage() {
    this.currentPage++;
    this.filterItems();
  }

  previousPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.filterItems();
    }
  }

  // Function to get unique categories
  getUniqueCategories(): string[] {
    return this.itemService.getUniqueCategories();
  }
}
