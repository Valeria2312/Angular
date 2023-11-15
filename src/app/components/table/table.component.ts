import {Component, OnInit, ViewChild} from '@angular/core';
import {DataService} from "../../services/data.service";
import {ITable} from "../../../models/table";
import {MatPaginator} from "@angular/material/paginator";
import {MatTableDataSource} from "@angular/material/table";

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit{
  dataSource = new MatTableDataSource<ITable>([])
  displayedColumns= ['office', 'block', 'date'];
  columnsName = ["офис", "блок", "дата"]
  constructor(private dataService: DataService) {
  }
  ngOnInit(): void {
    this.getTableData()
  }
  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  getTableData() {
    this.dataService.getTable()
      .subscribe({next: value => {
        // this.dataSource = value
          this.dataSource.data = value;
        }})
  }
}
