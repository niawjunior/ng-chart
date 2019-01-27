import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/components/common/selectitem';

@Component({
  selector: 'app-primeng-table',
  templateUrl: './primeng-table.component.html',
  styleUrls: ['./primeng-table.component.css']
})

export class PrimengTableComponent implements OnInit {
  cars;
  cols: any[];

  brands: SelectItem[];

  colors: SelectItem[];

  yearFilter: number;

  yearTimeout: any;

  loading;

  constructor() { }

  ngOnInit() {
    this.loading = true;

    this.brands = [
      { label: 'All Brands', value: null },
      { label: 'Audi', value: 'Audi' },
      { label: 'BMW', value: 'BMW' },
      { label: 'Fiat', value: 'Fiat' },
      { label: 'Honda', value: 'Honda' },
      { label: 'Jaguar', value: 'Jaguar' },
      { label: 'Mercedes', value: 'Mercedes' },
      { label: 'Renault', value: 'Renault' },
      { label: 'VW', value: 'VW' },
      { label: 'Volvo', value: 'Volvo' }
    ];

    this.colors = [
      { label: 'White', value: 'White' },
      { label: 'Green', value: 'Green' },
      { label: 'Silver', value: 'Silver' },
      { label: 'Black', value: 'Black' },
      { label: 'Red', value: 'Red' },
      { label: 'Maroon', value: 'Maroon' },
      { label: 'Brown', value: 'Brown' },
      { label: 'Orange', value: 'Orange' },
      { label: 'Blue', value: 'Blue' }
    ];

    this.cols = [
      { field: 'id', header: 'Id' },
      { field: 'year', header: 'Year' },
      { field: 'brand', header: 'Brand' },
      { field: 'color', header: 'Color' }
    ];

    this.cars = [
      { 'id': 'a1653d4d', 'brand': 'VW', 'year': 1998, 'color': 'White', 'price': 10000 },
      { 'id': 'ddeb9b10', 'brand': 'Mercedes', 'year': 1985, 'color': 'Green', 'price': 25000 },
      { 'id': 'd8ebe413', 'brand': 'Jaguar', 'year': 1979, 'color': 'Silver', 'price': 30000 },
      { 'id': 'aab227b7', 'brand': 'Audi', 'year': 1970, 'color': 'Black', 'price': 12000 },
      { 'id': '631f7412', 'brand': 'Volvo', 'year': 1992, 'color': 'Red', 'price': 15500 },
      { 'id': '7d2d22b0', 'brand': 'VW', 'year': 1993, 'color': 'Maroon', 'price': 40000 },
      { 'id': '50e900ca', 'brand': 'Fiat', 'year': 1964, 'color': 'Blue', 'price': 25000 },
      { 'id': '4bbcd603', 'brand': 'Renault', 'year': 1983, 'color': 'Maroon', 'price': 22000 },
      { 'id': '70214c7e', 'brand': 'Renault', 'year': 1961, 'color': 'Black', 'price': 19000 },
      { 'id': 'ec229a92', 'brand': 'Audi', 'year': 1984, 'color': 'Brown', 'price': 36000 },
      { 'id': '1083ee40', 'brand': 'VW', 'year': 1984, 'color': 'Silver', 'price': 215000 },
      { 'id': '6e0da3ab', 'brand': 'Volvo', 'year': 1987, 'color': 'Silver', 'price': 32000 },
      { 'id': '5aee636b', 'brand': 'Jaguar', 'year': 1995, 'color': 'Maroon', 'price': 20000 },
      { 'id': '7cc43997', 'brand': 'Jaguar', 'year': 1984, 'color': 'Orange', 'price': 14000 },
      { 'id': '88ec9f66', 'brand': 'Honda', 'year': 1989, 'color': 'Maroon', 'price': 36000 },
      { 'id': 'f5a4a5f5', 'brand': 'BMW', 'year': 1986, 'color': 'Blue', 'price': 28000 },
      { 'id': '15b9a5c9', 'brand': 'Mercedes', 'year': 1986, 'color': 'Orange', 'price': 14000 },
      { 'id': 'f7e18d01', 'brand': 'Mercedes', 'year': 1991, 'color': 'White', 'price': 25000 },
      { 'id': 'cec593d7', 'brand': 'VW', 'year': 1992, 'color': 'Blue', 'price': 36000 },
      { 'id': 'd5bac4f0', 'brand': 'Renault', 'year': 2001, 'color': 'Blue', 'price': 25000 },
      { 'id': '56b527c8', 'brand': 'Jaguar', 'year': 1990, 'color': 'Yellow', 'price': 52000 },
      { 'id': '1ac011ff', 'brand': 'Audi', 'year': 1966, 'color': 'Maroon', 'price': 45000 },
      { 'id': 'fc074185', 'brand': 'BMW', 'year': 1962, 'color': 'Blue', 'price': 54000 },
      { 'id': '606ba663', 'brand': 'Honda', 'year': 1982, 'color': 'Blue', 'price': 22000 },
      { 'id': 'd05060b8', 'brand': 'Mercedes', 'year': 2003, 'color': 'Silver', 'price': 15000 },
      { 'id': '46e4bbe8', 'brand': 'Mercedes', 'year': 1986, 'color': 'White', 'price': 18000 },
      { 'id': 'c29da0d7', 'brand': 'BMW', 'year': 1983, 'color': 'Brown', 'price': 32000 },
      { 'id': '24622f70', 'brand': 'VW', 'year': 1973, 'color': 'Maroon', 'price': 36000 },
      { 'id': '7f573d2c', 'brand': 'Mercedes', 'year': 1991, 'color': 'Red', 'price': 21000 },
      { 'id': 'b69e6f5c', 'brand': 'Jaguar', 'year': 1993, 'color': 'Yellow', 'price': 16000 },
      { 'id': 'ead9bf1d', 'brand': 'Fiat', 'year': 1968, 'color': 'Maroon', 'price': 43000 },
      { 'id': 'bc58113e', 'brand': 'Renault', 'year': 1981, 'color': 'Silver', 'price': 36000 },
      { 'id': '2989d5b1', 'brand': 'Honda', 'year': 2006, 'color': 'Blue', 'price': 240000 },
      { 'id': 'c243e3a0', 'brand': 'Fiat', 'year': 1990, 'color': 'Maroon', 'price': 15000 },
      { 'id': 'e3d3ebf3', 'brand': 'Audi', 'year': 1996, 'color': 'White', 'price': 28000 },
      { 'id': '45337e7a', 'brand': 'Mercedes', 'year': 1982, 'color': 'Blue', 'price': 14000 },
      { 'id': '36e9cf7e', 'brand': 'Fiat', 'year': 2000, 'color': 'Orange', 'price': 26000 },
      { 'id': '036bf135', 'brand': 'Mercedes', 'year': 1973, 'color': 'Black', 'price': 22000 },
      { 'id': 'ad612e9f', 'brand': 'Mercedes', 'year': 1975, 'color': 'Red', 'price': 45000 },
      { 'id': '97c6e1e9', 'brand': 'Volvo', 'year': 1967, 'color': 'Green', 'price': 42000 },
      { 'id': 'ae962274', 'brand': 'Volvo', 'year': 1982, 'color': 'Red', 'price': 36000 },
      { 'id': '81f8972a', 'brand': 'BMW', 'year': 2007, 'color': 'Black', 'price': 56000 },
      { 'id': 'f8506743', 'brand': 'Audi', 'year': 1975, 'color': 'Blue', 'price': 42000 },
      { 'id': '596859d1', 'brand': 'Fiat', 'year': 2002, 'color': 'Green', 'price': 48000 },
      { 'id': 'd83c1d9a', 'brand': 'Volvo', 'year': 1972, 'color': 'Black', 'price': 29000 },
      { 'id': '32f41550', 'brand': 'Mercedes', 'year': 1978, 'color': 'Brown', 'price': 17000 },
      { 'id': 'c28cd2e4', 'brand': 'Volvo', 'year': 1982, 'color': 'Silver', 'price': 24000 },
      { 'id': '80890dcc', 'brand': 'Audi', 'year': 1962, 'color': 'White', 'price': 36000 },
      { 'id': '4bf1aeb5', 'brand': 'VW', 'year': 2000, 'color': 'Silver', 'price': 24000 },
      { 'id': '45ca4786', 'brand': 'BMW', 'year': 1995, 'color': 'Maroon', 'price': 50000 }
    ];
  }
  onYearChange(event, dt) {
    if (this.yearTimeout) {
      clearTimeout(this.yearTimeout);
    }

    this.yearTimeout = setTimeout(() => {
      dt.filter(event.value, 'year', 'gt');
    }, 250);
  }

}
