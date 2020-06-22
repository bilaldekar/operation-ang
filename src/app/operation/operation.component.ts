import { Component, OnInit } from '@angular/core';
import { operationArticle } from './operation';
import { OperationServiceHttp } from './operation.service';

@Component({
  selector: 'app-operation',
  templateUrl: './operation.component.html',
  styleUrls: ['./operation.component.css'],
})
export class OperationComponent implements OnInit {

  operations: operationArticle[];

  constructor(private operationServiceHttp: OperationServiceHttp) {
  }

  ngOnInit() {
    this.operationServiceHttp.getOperationsArticle()
      .subscribe((res: operationArticle[]) => {
        if (res) {
          this.operations = res;
        }
      }, (err) => {
        alert('Faild to load data');
      });
  }

}
