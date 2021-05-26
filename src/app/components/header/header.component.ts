import { Component, OnInit } from '@angular/core';
import VanillaTilt from 'vanilla-tilt';
import anime from 'animejs/lib/anime.es.js';

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
    let div2:HTMLElement = document.querySelector('#prueba');

    VanillaTilt.init(div2, {
      max: 15,
      speed: 5000,
      reverse: true,
      // glare: true,
      // "max-glare": 1
    });

    anime({
      targets: '.xd',
      
      // translateX: [0, 1000, 300, 0],
      // translateY: [0, -300, 0],
      translateX: [0, 1000, 200, 1300, 0],
      translateY: [0, -700, -100, 0],
      loop: true,
      // direction: 'alternate',
      duration: 15000
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
