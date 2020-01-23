import { Card } from './../../shared/card.model';
import { Component, OnInit } from '@angular/core';
import { CardService } from 'src/app/shared/card.service';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styles: []
})
export class CardListComponent implements OnInit {

  constructor(private service: CardService) { }

  ngOnInit() {
    this.service.refreshList();
  }
  populateForm(cd: Card) {
    console.log(cd);
    this.service.formData = cd;
  }

}
