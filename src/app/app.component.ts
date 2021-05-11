import { Component, OnInit } from '@angular/core';
declare var $:any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'plonexo';

  ngOnInit(){
    $(window).on('load', function() {
      var preloaderFadeOutTime = 500;
      function hidePreloader() {
        var preloader = $('.spinner-wrapper');
        setTimeout(function() {
          preloader.fadeOut(preloaderFadeOutTime);
        }, 500);
      }
      hidePreloader();
    });
  }

}
