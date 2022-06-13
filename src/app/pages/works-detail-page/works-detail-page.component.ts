import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-works-detail-page',
  templateUrl: './works-detail-page.component.html',
  styleUrls: ['./works-detail-page.component.css'],
})
export class WorksDetailPageComponent implements OnInit {
  detailImg1: string = '/assets/images/Rectangle 4.png';
  detailImg2: string = '/assets/images/Rectangle 5.png';
  detailImg3: string = '/assets/images/Rectangle 6.png';

  constructor() {}

  ngOnInit(): void {}
}
