import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Comic } from '@core/models/comic.model';
import { ComicStateService } from '@core/services/comic-state.service';
import { CatalogService } from '../../services/catalog.service';

@Component({
  selector: 'cm-detail-item',
  templateUrl: './detail-item.component.html',
  styleUrls: ['./detail-item.component.scss']
})
export class DetailItemComponent implements OnInit {
  id?: number;
  description?: string;
  constructor(private route: ActivatedRoute){}



  ngOnInit(): void {
    let aux = (this.route.snapshot.paramMap.get("id"));

    this.id = +(aux?aux:""); //SI AUX!=NULL DEVUELVE AUX, ELSE ""

    aux =  (this.route.snapshot.paramMap.get("description"));
    this.description = (aux?aux:"")

    //....etc con rel resto de campos....


  }

}
