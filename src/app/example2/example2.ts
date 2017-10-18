import {Component, ViewChild, AfterViewInit} from '@angular/core';
import {KSSwiperContainer, KSSwiperSlide} from 'angular2-swiper';

@Component({
  selector: 'example2',
  providers: [],
  template: `
  <div class="myslides">
    <ks-swiper-container [options]="example2SwipeOptions">
      <ks-swiper-slide *ngFor="let s of slides">
        <img src="http://api.randomuser.me/portraits/thumb/women/{{s.number}}.jpg">
      </ks-swiper-slide>
    </ks-swiper-container>
    <button (click)="movePrev()">Prev</button>
    <button (click)="moveNext()">Next</button>
    <button (click)="addSlide()">Add</button>
  </div>
  `
})
export class Example2Component implements AfterViewInit {

  // this is how you get access to the child component
  @ViewChild(KSSwiperContainer) swiperContainer: KSSwiperContainer;

  slides: Array<any>;
  example2SwipeOptions: any;

  constructor() {
    this.example2SwipeOptions = {
      slidesPerView: 4,
      loop: false,
      spaceBetween: 5
    };

    this.slides = [
      { number: 10 },
      { number: 11 }
    ];
  }

  moveNext() {
    this.swiperContainer.swiper.slideNext();
  }

  movePrev() {
    this.swiperContainer.swiper.slidePrev();
  }

  getRandom(min: number, max: number) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  addSlide() {
    this.slides.push({
      number: this.getRandom(12, 30)
    });
  }

  ngAfterViewInit() {
    console.log(this.swiperContainer);
  }

}
