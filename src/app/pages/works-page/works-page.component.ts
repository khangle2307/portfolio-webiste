import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-works-page',
  templateUrl: './works-page.component.html',
  styleUrls: ['./works-page.component.css'],
})
export class WorksPageComponent implements OnInit {
  thumbImg: string = '/assets/images/Rectangle 30.jpg';

  constructor() {}

  ngOnInit(): void {}
}
