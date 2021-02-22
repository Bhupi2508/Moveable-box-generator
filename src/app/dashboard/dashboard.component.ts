import { Component, OnInit, HostListener } from '@angular/core';

// Define the keyboard codes
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

  // declare variables
  valueKey = 0;
  data: any
  value: any = 'OFF'
  valueData: any
  items: any
  xData: any = "0"
  yData: any = "0"
  heightData: any = "150"
  widthData: any = "150"
  mainWidth: any = "150"
  mainHeight: any = "150"
  createBox: any
  clickOnBox: any
  id: any = "0"
  newElement: any
  afterClickBox: any
  sDataVal: any
  sData: any = 0
  wData: any = "0"
  left: any = "0"
  right: any = "0"

  ngOnInit(): void {
  }

  // Event Listerner's
  @HostListener('window:keyup', ['$event'])
  keyEvent(event: KeyboardEvent) {

    // if the Button will ON then only keyboard will work
    if (this.value === 'ON') {
      console.log(event);

      // press d or D button
      if (event.keyCode === KEY_CODE.D_RIGHT_ARROW) {
        this.dKey(event);
      }

      // press a or A button
      if (event.keyCode === KEY_CODE.A_LEFT_ARROW) {
        this.aKey(event);
      }

      // press w or W button
      if (event.keyCode === KEY_CODE.W_UP_ARROW) {
        this.wKey(event);
      }

      // press s or S button
      if (event.keyCode === KEY_CODE.S_DOWN_ARROW) {
        this.sKey(event);
      }

      // press delete or del button
      if (event.keyCode === KEY_CODE.DEL_DOWN_ARROW) {
        this.delKey(event);
      }
    }
  }

  // move box to right
  dKey(e: any) {
    var rest = document.getElementById(e.target.id)
    this.sDataVal = rest
    this.sDataVal.setAttribute('style', `position:inherit; left: ${this.left}%; cursor:pointer; overflow: hidden; margin-bottom: 4%; mix-blend-mode: hard-light; background: lime ;`);
    this.left++
  }

  // move box to left
  aKey(e: any) {
    var rest = document.getElementById(e.target.id)
    this.sDataVal = rest
    this.sDataVal.setAttribute('style', `position:inherit; left: ${this.left}%; cursor:pointer; overflow: hidden; margin-bottom: 4%; mix-blend-mode: hard-light; background: lime ;`);
    this.left--
  }

  // move box to up
  wKey(e: any) {
    var rest = document.getElementById(e.target.id)
    this.sDataVal = rest
    this.sDataVal.setAttribute('style', `position:inherit; top: ${this.right}%; cursor:pointer; overflow: hidden; margin-bottom: 4%; mix-blend-mode: hard-light; background: lime ;`);
    this.right--
  }

  // move box to down
  sKey(e: any) {
    var rest = document.getElementById(e.target.id)
    this.sDataVal = rest
    this.sDataVal.setAttribute('style', `position:inherit; top: ${this.right}%; cursor:pointer; overflow: hidden; margin-bottom: 4%; mix-blend-mode: hard-light; background: lime ;`);
    this.right++

  }

  // delete box
  delKey(e: any) {
    document.getElementById(e.target.id)?.remove()
  }

  // will provide unique id for new boxes
  uniqueId() {
    this.id++
  }

  // KeywordButton mehtod is for On or OFF keyboard access
  KeywordButton(data: string) {
    if (data == "OFF") {
      this.value = "ON"
    } else {
      this.value = "OFF"
    }
  }

  // addBox method os for adding a new box on click
  addBox() {
    this.uniqueId()
    this.createBox = document.getElementById("svgbox")
    this.createBox.appendChild(this.move())
  }

  // move Method will generate a new button svg tag and append to existing Box if not present
  move() {
    this.newElement = document.createElement('button');
    this.newElement.id = this.id;
    this.newElement.addEventListener('click', this.DataHighlight)
    this.newElement.addEventListener('dblclick', this.DoubleClick)
    this.newElement.setAttribute('style', `cursor:pointer; background-color: Transparent; overflow: hidden; margin-bottom: 4%; border: none;`)
    this.newElement.innerHTML = this.innerHtml()
    // this.left = "50"
    console.log("new Tag =>> ", this.newElement);

    return this.newElement;
  }

  innerHtml() {
    const html = `<svg style="margin-top: 20px;" width="${this.mainWidth}" height="${this.mainHeight}">
                  <rect id="rect x="${this.xData}" y="${this.yData}" height="${this.heightData}" width="${this.widthData}"
                  style="fill:green;stroke:black;stroke-width:5;opacity:0.5" />
                  </svg>`
    return html;
  }

  // DataHighlight methos which will call from boxclick event
  DataHighlight(e: any) {

    // remove the select box
    this.afterClickBox = document.getElementById(e.target.parentElement.parentElement.id);
    this.afterClickBox.setAttribute('style', 'cursor:pointer; overflow: hidden; margin-bottom: 4%; mix-blend-mode: hard-light; background: lime ;')
    return this.afterClickBox
  }

  // press double click then high light color will reomve
  DoubleClick(e: any) {

    // remove the select box
    this.afterClickBox = document.getElementById(e.target.parentElement.parentElement.id);
    this.afterClickBox.setAttribute('style', "cursor:pointer; background-color: Transparent; overflow: hidden; margin-bottom: 4%; border: none;")
    return this.afterClickBox
  }
}

