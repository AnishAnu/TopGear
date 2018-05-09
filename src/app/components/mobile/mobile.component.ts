import { Component, OnInit , Input } from '@angular/core';

@Component({
  selector: 'app-mobile',
  templateUrl: './mobile.component.html',
  styleUrls: ['./mobile.component.css']
})
export class MobileComponent implements OnInit {
  @Input() public mobileNavStatusChanged: boolean;
  constructor() { }

  ngOnInit() {
  	console.log('iin mobile');
  }
  public mobileLink(link) {
        this.mobileNavStatusChanged = !this.mobileNavStatusChanged;
    }

}
