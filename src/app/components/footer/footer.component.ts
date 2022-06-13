import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent implements OnInit {
  fbIcon: string = '/assets/images/fb.svg';
  twitterIcon: string = '/assets/images/Group.svg';
  instaIcon: string = '/assets/images/insta.svg';
  linkedIcon: string = '/assets/images/Linkedin.svg';
  constructor() {}

  ngOnInit(): void {}
}
