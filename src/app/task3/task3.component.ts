import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

interface Data {
  name: string;
  price: string;
  category: string;
}

@Component({
  selector: 'app-task3',
  templateUrl: './task3.component.html',
  styleUrls: ['./task3.component.css'],
})
export class Task3Component implements OnInit {
  tableData: Data[] = [
    { name: 'Chocolate Chip', price: '$2.49', category: 'Standard' },
    { name: 'Sugar', price: '$1.79', category: 'Standard' },
    { name: 'Snickerdoodle', price: '$2.49', category: 'Standard' },
    { name: 'Oatmeal Raisin', price: '$2.99', category: 'Standard' },
    { name: 'Peanut Butter', price: '$2.99', category: 'Standard' },
    { name: 'White Chocolate Macadamia', price: '$3.99', category: 'Premium' },
    { name: 'Red Velvet', price: '$3.49', category: 'Premium' },
    { name: 'Black and White', price: '$3.49', category: 'Premium' },
    { name: 'Triple Chocolate', price: '$3.99', category: 'Premium' },
    {
      name: 'White Chocolate Coconut Divine',
      price: '$5.99',
      category: 'Signature',
    },
    {
      name: 'Dark Chocolate Pistachio Sea Salt',
      price: '$5.49',
      category: 'Signature',
    },
    {
      name: 'Brown Butter Bourbon Spice',
      price: '$5.49',
      category: 'Signature',
    },
    { name: 'Bacon Chocolate Chip', price: '$5.99', category: 'Signature' },
  ];

  listOfTableData = [...this.tableData];
  sortCollection: { [key: string]: string | null } = {
    name: null,
    price: null,
    category: null,
  };
  sortDirections = ['ascend', 'descend', null];
  sortName: string | null = null;
  sortValue: string | null = null;

  constructor() {}

  ngOnInit() {}

  getNextSortDirection(sortDirections, current) {
    const index = sortDirections.indexOf(current);
    if (index === sortDirections.length - 1) {
      return sortDirections[0];
    } else {
      return sortDirections[index + 1];
    }
  }

  sort(sortName: string): void {
    this.sortName = sortName;
    this.sortValue = this.getNextSortDirection(
      this.sortDirections,
      this.sortValue
    );
    for (const key in this.sortCollection) {
      this.sortCollection[key] = key === sortName ? this.sortValue : null;
    }
    this.search();
    console.log(sortName, this.sortValue, this.sortCollection);
  }

  search(): void {
    const listOfData = [...this.tableData];
    if (this.sortName && this.sortValue) {
      this.listOfTableData = listOfData.sort((a, b) =>
        this.sortValue === 'ascend'
          ? a[this.sortName!] > b[this.sortName!]
            ? 1
            : -1
          : b[this.sortName!] > a[this.sortName!]
          ? 1
          : -1
      );
    } else {
      this.listOfTableData = listOfData;
    }
  }
}
