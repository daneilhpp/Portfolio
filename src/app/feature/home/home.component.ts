import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  greeting?: string;
  dateTime: Date = new Date();
  faders = document.querySelectorAll('.textBox2');
  
  constructor() { }

  ngOnInit(): void {
    if(this.dateTime.getHours() > 6 && this.dateTime.getHours() <= 11){
      this.greeting = 'Bom dia';
    }
    else if(this.dateTime.getHours() > 11 && this.dateTime.getHours() <= 18){
      this.greeting = 'Boa tarde';
    } 
    else if(this.dateTime.getHours() > 18 && this.dateTime.getHours() <= 24){
      this.greeting = 'Boa noite';
    }
    else if(this.dateTime.getHours() > 0 && this.dateTime.getHours() <= 6){
      this.greeting = 'Boa noite';
    }
    else{
      this.greeting = 'Olá';
    }
    console.log(this.dateTime.getHours());
    console.log(this.greeting);
   }
  
}
