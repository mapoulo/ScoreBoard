import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ScoreBoardPage } from '../score-board/score-board';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  team1: string;
  team2: string;

  pushPage(){
    this.navCtrl.push(ScoreBoardPage, {team1: this.team1, team2: this.team2});
  }

}
