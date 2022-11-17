import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }
  items: {description: string; action:boolean}[] = [
    { description:"Kahvaltı", action:false,},
    { description:"Sinema", action:true},
    { description:"Spor", action:false},
    { description:"Ders Çalışma", action:false}
  ];
  ngOnInit(): void {
  }

  onClick(){
    
  }

}
