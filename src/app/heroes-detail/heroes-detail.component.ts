import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';
import { Hero } from '../heroes/hero';

@Component({
  selector: 'app-heroes-detail',
  templateUrl: './heroes-detail.component.html',
  styleUrls: ['./heroes-detail.component.css'],
  animations: [
    trigger(
        'modalFadeZoom',
        [
            transition(
                ':enter', [
                    style({ transform: 'scale(.7)', opacity: 0 }),
                    animate('1s', style({ opacity: 0.80, transform: 'scale(1)' })),
                ]
            ),
            transition(
                ':leave', [
                    style({ opacity: 1, transform: 'scale(1)' }),
                    animate('5.3s', style({ opacity: 0, transform: 'scale(.7)' })),
                ]
            ),
        ])
      ]
})

export class HeroesDetailComponent implements OnInit, OnChanges {

  @Input() hero: Hero;
  imgName: string;
  bgName: string;

  constructor() { }

  ngOnInit() {
    console.log("ON INIT");
    console.log(this.hero);
    this.imgName = this.hero.img;
    this.bgName = this.hero.bg;
  }
  
  ngOnChanges(changes: SimpleChanges): void {
    this.imgName = this.hero.img;
    this.bgName = this.hero.bg;
  }

}