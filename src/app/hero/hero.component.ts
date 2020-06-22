import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {
public heroHeading: string;
public  heroText: string;
public heroBtnText : string;
public heroBtnUrl: string ;

  constructor() { 
    this.heroHeading =  "We are your ultimate Winter experience Provider" ;

    this.heroText =  "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus, beatae repellendus? Odio eum quasi dicta perspiciatis fugit earum laudantium similique inventore alias a accusantium fuga, maxime perferendis deserunt, omnis explicabo. ." ;
  
    this.heroBtnText =  "Learn more" ;
  
    this.heroBtnUrl =  "https://codefactory.wien"  ;
  }

  ngOnInit(): void {
  }

}
