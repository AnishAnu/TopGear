import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-actionsheets',
	templateUrl: './actionsheets.component.html',
	styleUrls: ['./actionsheets.component.css']
})
export class ActionsheetsComponent implements OnInit {

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
ousideClose(){
	this.modalDisplay = false;
		console.log("outside");

}
}
