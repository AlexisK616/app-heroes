import { Component } from '@angular/core';
import { HomeService } from 'src/app/home/service/home.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-searcher',
  templateUrl: './searcher.component.html',
  styleUrls: ['./searcher.component.css'],
})
export class SearcherComponent {

  heroeAdd:any;
  selectedChamp: any;
  isLoading = false;
  champs: object[];
  src: string;

  constructor(private homeService: HomeService, private modal: NgbModal) {}

  search(value) {
    this.homeService.search(value).subscribe(
      (res) => {
        console.log(res);
        this.champs = res.results;
      },
      (err) => {
        console.log('error', err);
      }
    );
  }

  viewDetails(champ, cont) {
    console.log(champ);
    this.selectedChamp = champ;
    this.modal.open(cont, {
      size: 'lg',
      centered: true,
      animation: true,
    });
  }

  addTeam(champ){
    this.heroeAdd =  champ;
    this.emitData();
  }
  

  emitData() {
    this.homeService.disTeam.emit({
      data: this.heroeAdd
    });
  }

  changeSource(e) {
    e.target.src =
      'https://alasmutual.com/nueva/wp-content/themes/consultix/images/no-image-found-360x250.png';
  }
}
