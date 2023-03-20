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

  appearOptions = {
    threshold: 1
  };
  appearOnScroll = new IntersectionObserver
  (
    function(entries, appearOnScroll)
    {
      entries.forEach(entry => {
        if(!entry.isIntersecting)
          return;
        else{
          entry.target.classList.add('appear');
          appearOnScroll.unobserve(entry.target);
        }
      })
    }, 
    this.appearOptions
  );

  ngOnInit(): void {
    if(this.dateTime.getHours() > 6 && this.dateTime.getHours() <= 11){
      this.greeting = 'Bom dia'
    }
    else if(this.dateTime.getHours() > 11 && this.dateTime.getHours() <= 18){
      this.greeting = 'Boa tarde'
    } 
    else if(this.dateTime.getHours() > 18 && this.dateTime.getHours() <= 6){
      this.greeting = 'Boa noite'
    }
    console.log(this.dateTime.getHours())

    this.faders.forEach(fader => this.appearOnScroll.observe(fader))
  }
  
}
