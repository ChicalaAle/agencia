import { Component, OnInit } from '@angular/core';
declare var $:any;

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  constructor(){}

  ngOnInit(): void {

    const tag = document.createElement('script');
    tag.src = "https://www.youtube.com/iframe_api";
    document.body.appendChild(tag);


    $('.popup-youtube, .popup-vimeo').magnificPopup({
      disableOn: 700,
      type: 'iframe',
      mainClass: 'mfp-fade',
      removalDelay: 160,
      preloader: false,
      fixedContentPos: false,
      iframe: {
          patterns: {
              youtube: {
                  index: 'youtube.com/', 
                  id: function(url) {        
                      var m = url.match(/[\\?\\&]v=([^\\?\\&]+)/);
                      if ( !m || !m[1] ) return null;
                      return m[1];
                  },
                  src: 'https://www.youtube.com/embed/%id%?autoplay=1'
              },
              vimeo: {
                  index: 'vimeo.com/', 
                  id: function(url) {        
                      var m = url.match(/(https?:\/\/)?(www.)?(player.)?vimeo.com\/([a-z]*\/)*([0-9]{6,11})[?]?.*/);
                      if ( !m || !m[5] ) return null;
                      return m[5];
                  },
                  src: 'https://player.vimeo.com/video/%id%?autoplay=1'
              }
          }
      }
  });

  }

  getId(url:String){

    const id = url.match(/[\\?\\&]v=([^\\?\\&]+)/);
    if ( !id || !id[1] ) return null;
    return `https://img.youtube.com/vi/${id[1]}/0.jpg`;

  }


}
