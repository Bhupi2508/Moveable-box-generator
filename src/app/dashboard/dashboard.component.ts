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
  xData: any = "50"
  yData: any = "20"
  heightData: any = "150"
  widthData: any = "150"
  mainWidth: any = "400"
  mainHeight: any = "180"
  createBox: any
  id: any = "0"

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
    this.xData++
  }

  aKey() {
    this.xData--
  }

  wKey() {
    this.yData--
  }

  sKey() {
    this.yData++
  }

  delKey() {

  }

  uniqueId() {
    this.id++
  }

  KeywordButton(data: string) {
    if (data == "OFF") {
      this.value = "ON"
    } else {
      this.value = "OFF"
    }
  }

  addBox() {
    this.uniqueId()
    this.createBox = document.getElementById("svgbox")
    const newElement = document.createElement('svg');
    newElement.id = this.id
    newElement.innerHTML = `<svg width="${this.mainWidth}" height="${this.mainHeight}">
                            <rect x="${this.xData}" y="${this.yData}" height="${this.heightData}" width="${this.widthData}"
                            style="fill:green;stroke:black;stroke-width:5;opacity:0.5" />
                            </svg>`
    this.createBox.appendChild(newElement)
    console.log("element svgbox", newElement);


  }

}
