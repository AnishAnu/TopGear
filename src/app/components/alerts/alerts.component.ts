import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alerts',
  templateUrl: './alerts.component.html',
  styleUrls: ['./alerts.component.css']
})
export class AlertsComponent implements OnInit {
	public modalDisplay = false;

  constructor() { }

  ngOnInit() {
  }

closeModal(){
	this.modalDisplay = false;
	console.log("close");
}

openModal(){
	this.modalDisplay = true;
	console.log("open");
}
}
