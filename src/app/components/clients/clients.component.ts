import { Component, OnInit } from '@angular/core';
import Swiper from 'swiper/bundle';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    var imageSlider = new Swiper('.image-slider', {
      autoplay: {
          delay: 800,
          disableOnInteraction: false
  },
      loop: true,
      navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
      spaceBetween: 30,
      slidesPerView: 5,
  breakpoints: {
          // when window is <= 380px
          350: {
              slidesPerView: 2,
              spaceBetween: 10
          },
          // when window is <= 516px
          516: {
              slidesPerView: 2,
              spaceBetween: 10
          },
          // when window is <= 768px
          768: {
              slidesPerView: 3,
              spaceBetween: 20
          },
          // when window is <= 992px
          992: {
              slidesPerView: 4,
              spaceBetween: 30
          },
          // when window is <= 1200px
          1200: {
              slidesPerView: 5,
              spaceBetween: 30
          },
      }
  });
  }

}
