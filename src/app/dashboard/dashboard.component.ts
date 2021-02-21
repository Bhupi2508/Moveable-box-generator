import { Component, OnInit, HostListener } from '@angular/core';

export enum KEY_CODE {
  D_RIGHT_ARROW = 68,
  A_LEFT_ARROW = 65,
  W_UP_ARROW = 87,
  S_DOWN_ARROW = 83,
  DEL_DOWN_ARROW = 46
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  valueKey = 0;
  data: any
  value: any = 'OFF'
  valueData: any
  items: any

  ngOnInit(): void {
  }

  @HostListener('window:keyup', ['$event'])
  keyEvent(event: KeyboardEvent) {
  

    if (this.value === 'ON') {
      console.log(event);
      if (event.keyCode === KEY_CODE.D_RIGHT_ARROW) {
        this.dKey();
      }

      if (event.keyCode === KEY_CODE.A_LEFT_ARROW) {
        this.aKey();
      }

      if (event.keyCode === KEY_CODE.W_UP_ARROW) {
        this.wKey();
      }

      if (event.keyCode === KEY_CODE.S_DOWN_ARROW) {
        this.sKey();
      }

      if (event.keyCode === KEY_CODE.DEL_DOWN_ARROW) {
        this.delKey();
      }
    }
  }

  dKey() {
   
  }

  aKey() {
   
  }

  wKey() {
    
  }

  sKey() {
    
  }

  delKey() {
   
  }

  KeywordButton(data: string) {
    if (data == "OFF") {
      this.value = "ON"
    } else {
      this.value = "OFF"
    }
  }

  addBox() {
    // for (let i = 0; i < this.box.length; i++) {
    //   if (this.box.length >= 1) {
    //     this.items = 1
    //   }
    // }
  }

}
