import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent{

  public year: Number;

  constructor() {
    this.year = this.getYear();
  }

  getYear(){
    let time = new Date().getFullYear();
    return time;
  }

}
