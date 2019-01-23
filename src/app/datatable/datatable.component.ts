import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-datatable',
  templateUrl: './datatable.component.html',
  styleUrls: ['./datatable.component.css']
})
export class DatatableComponent implements OnInit {
  constructor() { }
  data = [];
  ngOnInit() {
    this.data = [
      {
        'id': '5c475094e944323ebffca885',
        'age': 20,
        'name': 'Reva Mclean',
        'email': 'revamclean@interfind.com',
        'phone': '+66 (083) 547-2172'
      },
      {
        'id': '5c4750943af6ade123fccf6f',
        'age': 21,
        'name': 'Winifred Poole',
        'email': 'winifredpoole@interfind.com',
        'phone': '+66 (083) 546-3877'
      },
      {
        'id': '5c475094cbbe8a1c2687a9d6',
        'age': 38,
        'name': 'Robertson Hardy',
        'email': 'robertsonhardy@interfind.com',
        'phone': '+66 (083) 457-3945'
      },
      {
        'id': '5c4750947d72b67ea4524723',
        'age': 29,
        'name': 'Meyer Montoya',
        'email': 'meyermontoya@interfind.com',
        'phone': '+66 (083) 479-2855'
      },
      {
        'id': '5c475094442ad1b513ccc990',
        'age': 22,
        'name': 'Gamble Riddle',
        'email': 'gambleriddle@interfind.com',
        'phone': '+66 (083) 509-2184'
      },
      {
        'id': '5c475094658a04d39c9c3243',
        'age': 22,
        'name': 'Hope Stewart',
        'email': 'hopestewart@interfind.com',
        'phone': '+66 (083) 541-3214'
      },
      {
        'id': '5c475094b796c333f50a5964',
        'age': 31,
        'name': 'Ellen Avery',
        'email': 'ellenavery@interfind.com',
        'phone': '+66 (083) 590-2839'
      },
      {
        'id': '5c475094eef20a20581e1e79',
        'age': 29,
        'name': 'Tyson Head',
        'email': 'tysonhead@interfind.com',
        'phone': '+66 (083) 484-2100'
      },
      {
        'id': '5c4750944d839612589de757',
        'age': 25,
        'name': 'Corinne Whitley',
        'email': 'corinnewhitley@interfind.com',
        'phone': '+66 (083) 532-3124'
      },
      {
        'id': '5c47509493d42821a19942a3',
        'age': 39,
        'name': 'Middleton Scott',
        'email': 'middletonscott@interfind.com',
        'phone': '+66 (083) 541-3394'
      },
      {
        'id': '5c475094187d8accae17ed9a',
        'age': 26,
        'name': 'Baxter Knight',
        'email': 'baxterknight@interfind.com',
        'phone': '+66 (083) 571-2834'
      },
      {
        'id': '5c47509487da2123878be896',
        'age': 28,
        'name': 'Sonya Graves',
        'email': 'sonyagraves@interfind.com',
        'phone': '+66 (083) 523-3422'
      },
      {
        'id': '5c475094198276e38d319fc2',
        'age': 34,
        'name': 'Weiss Macdonald',
        'email': 'weissmacdonald@interfind.com',
        'phone': '+66 (083) 521-3765'
      }
    ];
  }

}
