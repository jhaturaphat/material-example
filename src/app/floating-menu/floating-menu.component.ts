import { Component, OnInit } from '@angular/core';
import { FloatingMenuAnimatios } from './floating-menu.animation';

@Component({
  selector: 'app-floating-menu',
  templateUrl: './floating-menu.component.html',
  styleUrls: ['./floating-menu.component.scss'],
  animations: FloatingMenuAnimatios
})
export class FloatingMenuComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  fabButtons = [
    {
      icon: 'timeline',
      url:'/AAAA'
    },
    {
      icon: 'view_headline',
      url:'/BBBB'
    },
    {
      icon: 'room',
      url:'/CCCC'
    },
    {
      icon: 'lightbulb_outline',
      url:'/DDDD'
    },
    {
      icon: 'lock',
      url:'/EEEE'
    }
  ];
  buttons:any = [];
  fabTogglerState = 'inactive';

  showItems() {
    this.fabTogglerState = 'active';
    this.buttons = this.fabButtons;
  }

  hideItems() {
    this.fabTogglerState = 'inactive';
    this.buttons = [];
  }

  onToggleFab() {
    this.buttons.length ? this.hideItems() : this.showItems();
  }

  btnAction(url:any){
    console.log(url);
    
  }

}
