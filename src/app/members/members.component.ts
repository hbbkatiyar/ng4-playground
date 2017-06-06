import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css']
})
export class MembersComponent implements OnInit {
  items: any[] = ["Angular 4", "React", "Underscore"];
  newItem: string = "";
  
  pushItem = function() {
    console.log(this.newItem);
    if(this.newItem != "") {
      this.items.push(this.newItem);
      this.newItem = "";
    }
  }
  removeItem = function(index) {
    this.items.splice(index, 1);
  }
  
  constructor() { }

  ngOnInit() {
  }

}
