import { Component, ElementRef, Renderer2, OnInit } from '@angular/core';

@Component({
  selector: 'image-carousel',
  templateUrl: './image-carousel.component.html',
  styleUrls: ['./image-carousel.component.scss']
})
export class ImageCarouselComponent implements OnInit {
  private scrollInterval: any;
  private scrollContainer: HTMLElement = {} as HTMLElement;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    this.scrollContainer = this.el.nativeElement.querySelector('.image-carousel-container');

    setTimeout(() => {
      this.startAutoScroll();
    }, 2000);
  }

  private startAutoScroll() {
    this.scrollInterval = setInterval(() => {
      if (this.scrollContainer.scrollLeft + this.scrollContainer.clientWidth >= this.scrollContainer.scrollWidth) {
        this.scrollContainer.scrollLeft = 0;
      } else {
        this.scrollContainer.scrollLeft += 310;
      }
    }, 4000);
  }

  ngOnDestroy() {
    clearInterval(this.scrollInterval);
  }
}
