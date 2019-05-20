import {Component, Input, OnInit} from '@angular/core';
import {MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  @Input() headerFields: string[];
  @Input() stickyHeader: boolean;
  @Input() dataFields: string[];
  @Input() dataSource: MatTableDataSource<any>;

  constructor() { }

  ngOnInit() {
  }

}
