import { Component, OnInit } from '@angular/core';
import { HomeService } from './service/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  countBadChamps: number = 0;
  countGoodChamps: number = 0;

  selectedChampBadError: boolean = false;
  selectedChampGoodError: boolean = false;

  teamList = new Array();

  powerStatsIntList = new Array();
  powerStatsDurList = new Array();
  powerStatsStrList = new Array();
  powerStatsComList = new Array();
  powerStatsSpdList = new Array();
  powerStatsPwrList = new Array();

  constructor(private homeSv: HomeService) {}

  ngOnInit(): void {
    this.homeSv.disTeam.subscribe((champ) => {
      console.log('data recibida');
      this.validateToAdd(champ.data);
      console.log(this.teamList);
    });
  }

  validateToAdd(champ) {
    if (champ.biography.alignment == 'good' && this.countGoodChamps < 3) {
      this.countGoodChamps++;
      this.teamList.push(champ);
    } else {
      this.selectedChampBadError = true;
    }
    if (champ.biography.alignment == 'bad' && this.countBadChamps < 3) {
      this.countGoodChamps++;
      this.teamList.push(champ);
    } else {
      this.selectedChampBadError = true;
    }
    this.avgTeamStats();
  }

  deleteHeroe(h) {
    if (h.biography.alignment == 'good') {
      const index = this.teamList.indexOf(h);
      this.teamList.splice(index, 1);
      this.countGoodChamps--;
    }
    if (h.biography.alignment == 'bad') {
      const index = this.teamList.indexOf(h);
      this.teamList.splice(index, 1);
      this.countBadChamps--;
    }
  }

  avgTeamStats() {
    for (let champ of this.teamList) {
      this.powerStatsIntList.push(Number(champ.powerstats.intelligence));
      this.powerStatsDurList.push(Number(champ.powerstats.durability));
      this.powerStatsPwrList.push(Number(champ.powerstats.power));
      this.powerStatsStrList.push(Number(champ.powerstats.strength));
      this.powerStatsSpdList.push(Number(champ.powerstats.speed));
      this.powerStatsComList.push(Number(champ.powerstats.combat));
    }
    this.avgCombat();
    this.avgDurability();
    this.avgIntelligence();
    this.avgSpeed();
    this.avgStrength();
    this.avgPower();
  }

  avgIntelligence() {
    const sum = this.powerStatsIntList.reduce((a, b) => (a += b));
    const avg = sum / this.powerStatsIntList.length;
    console.log(avg);
    return avg;
  }

  avgDurability() {
    const sum = this.powerStatsDurList.reduce((a, b) => (a += b));
    const avg = sum / this.powerStatsDurList.length;
    console.log(avg);
    return avg;
  }

  avgPower() {
    const sum = this.powerStatsPwrList.reduce((a, b) => (a += b));
    const avg = sum / this.powerStatsPwrList.length;
    console.log(avg);
    return avg;
  }

  avgStrength() {
    const sum = this.powerStatsStrList.reduce((a, b) => (a += b));
    const avg = sum / this.powerStatsStrList.length;
    console.log(avg);
    return avg;
  }

  avgSpeed() {
    const sum = this.powerStatsSpdList.reduce((a, b) => (a += b));
    const avg = sum / this.powerStatsStrList.length;
    console.log(avg);
    return avg;
  }

  avgCombat() {
    const sum = this.powerStatsComList.reduce((a, b) => (a += b));
    const avg = sum / this.powerStatsComList.length;
    console.log(avg);
    return avg;
  }
}
