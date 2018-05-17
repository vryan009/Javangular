import { Component, OnInit } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';
import { Hero } from './hero';
import { heroTypeEnum } from './heroType.enum'

import { HEROES } from './mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
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

export class HeroesComponent implements  OnInit {
  heroes = HEROES;
  selectedHero: Hero;

  iconStr: string;
  iconAgi: string;
  iconInt: string;

  constructor() { }

  ngOnInit() {
      this.iconStr='../../assets/img/icons/icon_strength.png';
      this.iconAgi='../../assets/img/icons/icon_agility.png';
      this.iconInt='../../assets/img/icons/icon_intelligence.png';
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

}
