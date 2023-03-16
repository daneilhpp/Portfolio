import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  greeting?: string;
  dateTime: Date = new Date();

  constructor() { }

  ngOnInit(): void {
    if(this.dateTime.getHours() > 6 && this.dateTime.getHours() <= 12){
      this.greeting = 'Bom dia'
    }
    else if(this.dateTime.getHours() > 12 && this.dateTime.getHours() <= 18){
      this.greeting = 'Boa tarde'
    } 
    else if(this.dateTime.getHours() > 18 && this.dateTime.getHours() <= 6){
      this.greeting = 'Boa noite'
    }
    console.log(this.dateTime.getHours())
  }

}
