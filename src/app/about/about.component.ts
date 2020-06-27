import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  show(){
    alert('Hellow Senta!');
    console.log('dmw');//enter something into console
  }
  show2(){
    alert('Hellow, Senta!');
    console.log('hello');
  }

}
