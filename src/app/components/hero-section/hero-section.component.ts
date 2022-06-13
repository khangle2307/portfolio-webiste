import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero-section',
  templateUrl: './hero-section.component.html',
  styleUrls: ['./hero-section.component.css'],
})
export class HeroSectionComponent implements OnInit {
  heroImg: string = './assets/images/Ellipse 1.jpg';
  constructor() {}

  ngOnInit(): void {}
}
