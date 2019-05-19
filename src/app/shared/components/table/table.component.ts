import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  @Input() headerFields: string[];
  @Input() stickyHeader: boolean;
  @Input() dataSource: any[];

  constructor() { }

  ngOnInit() {
  }

}
