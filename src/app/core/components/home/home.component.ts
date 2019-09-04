import { Component, OnInit } from '@angular/core';
import { ViewChild } from '@angular/core';
import { NgbCarousel, NgbSlideEvent, NgbSlideEventSource } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  // images = [1, 2, 3, 4, 5, 6, 7].map(() => `https://picsum.photos/900/500?random&t=${Math.random()}`);

  images = [
    { imgUrl: 'https://cdn.pixabay.com/photo/2015/12/30/11/57/fruit-basket-1114060_1280.jpg', title: 'Explore variety of fruits', category: 'fruits' },
    { imgUrl: 'https://cdn.pixabay.com/photo/2018/03/11/18/34/brown-eggs-3217675_1280.jpg', title: 'Fresh Dairy Products', category: 'dairy' },
    { imgUrl: 'https://cdn.pixabay.com/photo/2013/12/15/16/36/bread-228939_1280.jpg', title: 'Freshly Backed Breads', category: 'bread' },
    { imgUrl: 'https://cdn.pixabay.com/photo/2016/03/05/19/02/vegetables-1238252_1280.jpg', title: 'Organic Range of Vegetables', category: 'vegetables' },
    { imgUrl: 'https://cdn.pixabay.com/photo/2015/08/02/22/18/barley-872000_1280.jpg', title: 'Seasoning and Spices', category: 'seasonings' },
  ]

  // "https://cdn.pixabay.com/photo/2015/10/24/20/03/apples-1004886_1280.jpg",
  // "https://cdn.pixabay.com/photo/2015/10/24/20/04/fruit-1004887_1280.jpg"

  paused = false;
  unpauseOnArrow = false;
  pauseOnIndicator = false;
  pauseOnHover = true;

  @ViewChild('carousel', { static: true }) carousel: NgbCarousel;

  togglePaused() {
    if (this.paused) {
      this.carousel.cycle();
    } else {
      this.carousel.pause();
    }
    this.paused = !this.paused;
  }

  onSlide(slideEvent: NgbSlideEvent) {
    if (this.unpauseOnArrow && slideEvent.paused &&
      (slideEvent.source === NgbSlideEventSource.ARROW_LEFT || slideEvent.source === NgbSlideEventSource.ARROW_RIGHT)) {
      this.togglePaused();
    }
    if (this.pauseOnIndicator && !slideEvent.paused && slideEvent.source === NgbSlideEventSource.INDICATOR) {
      this.togglePaused();
    }
  }
}
