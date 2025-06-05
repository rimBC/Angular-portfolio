import { CommonModule } from '@angular/common';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-image-slider',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './image-slider.component.html',
  styleUrl: './image-slider.component.css'
})
export class ImageSliderComponent implements OnInit{


  @Input() images :Array<string>= [
    '/assets/noPreview.jpg',

  ];

  currentIndex = 0;
  currentOffset=100;
  transitioning: boolean = false;
  checker=false;

prev() {
    this.transitioning = true;
    this.currentIndex--;
    this.currentOffset -= 100;
  }

next() {
    this.transitioning = true;
    this.currentIndex++;
    this.currentOffset += 100;
  }

  onTransitionEnd() {
    this.transitioning = false;

    if (this.currentIndex < 0) {
      this.currentIndex = this.images.length - 1;
      this.currentOffset = this.images.length * 100;
      this.checker=true;
    }

    if (this.currentIndex >= this.images.length) {
      this.currentIndex = 0;
      this.currentOffset = 100;
      this.checker=true;
    }
  }
  checkPosition() {
    if (this.checker==true && this.transitioning==false){
      this.checker=false;
      return true;
    } else 
    {return false}
 }

  ngOnInit() {
    if(this.images.length>1){setInterval(() => {this.next();this.onTransitionEnd}, 8000);
   }}

}

