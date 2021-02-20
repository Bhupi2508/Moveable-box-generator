import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  data: any
  value: any = 'OFF'
  valueData: any

  ngOnInit(): void {
  }

  KeywordButton(data: string) {
    if (data == "OFF") {
      this.value = "ON"
    } else {
      this.value = "OFF"
    }
  }
}
