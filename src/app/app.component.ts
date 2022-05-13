import { Component } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { repeat } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[NgbCarouselConfig]
})
export class AppComponent {
  title = 'CoffeeShop';
  images = [
    {title:'Hasça Kuruyemiş',src:"../assets/images/home-img.png " },
    {title: 'Hasça Kahve', src: "../assets/images/home-img-2.png"}
  ]
  constructor(config:NgbCarouselConfig){
    config.interval = 2000;
    config.keyboard = true;
    config.pauseOnHover = true;
  }
}
