import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public isMobileNavVisible = false;
  constructor() { }

  ngOnInit() {
  }

  public mobileNav(event) {
		this.isMobileNavVisible = !this.isMobileNavVisible;
		event.stopPropagation();
		// if(this.isMobileNavVisible) {
		// 	this.mobileNaveClass = 'mobile-left-nav-show';
		// }
		console.log('nav:-', this.isMobileNavVisible);
	}
}
