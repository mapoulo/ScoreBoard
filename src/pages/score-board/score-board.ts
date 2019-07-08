import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ScoreBoardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-score-board',
  templateUrl: 'score-board.html',
})
export class ScoreBoardPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
 
  team1: string;
  team2: string;
  team1Score:number = 0;
  team2Score:number = 0;

  ionViewDidLoad() {
    // console.log('ionViewDidLoad ScoreBoardPage');
    this.InitialiseTeamName();
  }

  InitialiseTeamName(){
    this.team1 = this.navParams.get('team1');
    this.team2 = this.navParams.get('team2');
  }

  Addteam1Score(): void{
    this.team1Score +=  1;
  }

  Addteam2Score(): void{
    this.team2Score += 1;
  }

  resetButton(): void{
    this.team1Score = 0;
    this.team2Score = 0;
  
  }

  PopThisPage(): void{
    this.navCtrl.pop();
  }
}
