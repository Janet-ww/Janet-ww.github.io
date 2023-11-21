/*import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
*/

import { Component } from '@angular/core';

@Component({
  selector: 'app-home', // Replace with your actual selector
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  currentSlide: number = 2;
  activeDot: number = 2;

  onDotClick(slideNumber: number): void {
    // Your logic to handle dot click goes here
    this.currentSlide = slideNumber + 1; // Assuming slides are 1-indexed
    this.activeDot = slideNumber;
  }
}
