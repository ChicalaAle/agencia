import { Component, OnInit } from '@angular/core';
import VanillaTilt from 'vanilla-tilt';

declare var $:any;
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.morphext();

    let div:HTMLElement = document.querySelector('#til');

    VanillaTilt.init(div, {
      max: 25,
      speed: 100,
      reset:false,
      reverse: true
    });

  }

  morphext(){
    $("#js-rotating").Morphext({
      // The [in] animation type. Refer to Animate.css for a list of available animations.
      animation: "fadeIn",
      // An array of phrases to rotate are created based on this separator. Change it if you wish to separate the phrases differently (e.g. So Simple | Very Doge | Much Wow | Such Cool).
      separator: ",",
      // The delay between the changing of each phrase in milliseconds.
      speed: 2000,
      complete: function () {
          // Called after the entrance animation is executed.
      }
  });
  }

}
