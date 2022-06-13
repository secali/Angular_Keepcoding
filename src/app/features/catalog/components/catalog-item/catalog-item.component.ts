import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Comic } from '@core/models/comic.model';

@Component({
  selector: 'cm-catalog-item',
  templateUrl: './catalog-item.component.html',
  styleUrls: ['./catalog-item.component.scss']
})
export class CatalogItemComponent implements OnInit {
  @Input()
  comic!: Comic;


  @Output()
  click: EventEmitter<Comic> = new EventEmitter<Comic>();


  constructor() { }

  ngOnInit(): void {
  }

  clickElement(){
    this.click.emit(this.comic);
  }

}
