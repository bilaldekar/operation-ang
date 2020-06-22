import { Component, OnInit } from '@angular/core';
import { Message } from 'primeng-lts/components/common/message';
import { MessageService } from 'primeng/components/common/messageservice';
import { Frounisseur, TypeAchat, operationArticle, operationService } from '../operation/operation';
import { OperationServiceHttp } from '../operation/operation.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-operation-crud',
  templateUrl: './operation-crud.component.html',
  styleUrls: ['./operation-crud.component.css']
})
export class OperationCrudComponent implements OnInit {

  fournisseurs: Frounisseur[];
  columnsF: any[];
  selectedFour: Frounisseur;
  action: String;
  btnLabel: String;

  //enums
  //types = Object.values(TypeAchat).map(key => ({ label: TypeAchat[key], value: key }));
  types: TypeAchat[];
  selectedType: TypeAchat = { value: 'Article' };

  //operation instances
  operationArticle: operationArticle = { typeAchat: { value: 'Article' }, fournisseur: { name: null, reference: null } };
  operationService: operationService = { typeAchat: { value: 'Service' } };
  msgs: Message[] = [];

  constructor(private operationServiceHttp: OperationServiceHttp, private messageService: MessageService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.initilizeTableColumns();

    this.route.paramMap.subscribe(params => {
      this.action = this.route.snapshot.params.action;

      if (this.route.snapshot.params.action == 'edit' || this.route.snapshot.params.action == 'show') {
        console.log('edit/show id : ' + this.route.snapshot.params.id);

        this.operationServiceHttp.getOneOperationsArticle(this.route.snapshot.params.id)
          .subscribe((res: operationArticle) => {
            if (res) {
              res.dateCreation = new Date(res.dateCreation);
              this.operationArticle = res;
            }
          }, (err) => {
            alert('Faild to load data');
          });
      }
    });

    (this.action=='add') ? this.btnLabel = 'Ajouter' : this.btnLabel = 'Modifier';


    this.operationServiceHttp.getFournisseur()
      .subscribe((res: Frounisseur[]) => {
        if (res) {
          this.fournisseurs = res;
        }
      }, (err) => {
        alert('Faild to load data');
      });


    this.operationServiceHttp.getTypes()
      .subscribe((res: TypeAchat[]) => {
        if (res) {
          this.types = res;
          console.log('types : ' + this.types[0].value);
          console.log('types : ' + this.types[1].value);
          //this.selectedType = this.types.;
        }
      }, (err) => {
        alert('Faild to load data');
      });
  }


  createArticle() {
    console.log('name -----> ' + this.operationArticle.name);
    console.log('type -----> ' + this.operationArticle.typeAchat);
    console.log('date -----> ' + this.operationArticle.dateCreation);
    console.log('port -----> ' + this.operationArticle.port_livraison);
    if (this.action == 'add') {
      this.operationServiceHttp.addoperationArticle(this.operationArticle).subscribe(
        (result: operationArticle) => {
          if (result.id != null) {
            console.log('created !!!');
            this.msgs = [];
            this.msgs.push({ severity: 'success', summary: 'Success Message', detail: 'Operation created' });
          }
        },
        (err) => {
          alert('Faild to add Operation');
        });
    } else {
      if (this.action == 'edit') {
        console.log('---------------------------> modif');

        this.operationServiceHttp.editoperationArticle(this.operationArticle).subscribe(
          (result: void) => {
            console.log('edited !!!');
            this.msgs = [];
            this.msgs.push({ severity: 'success', summary: 'Success Message', detail: 'Operation edited' });
          },
          (err) => {
            alert('Faild to edit Operation');
          });
      }
    }
  }

  createService() {
    this.operationServiceHttp.addOperationServicee(this.operationService).subscribe(
      (result: operationService) => {
        if (result.id != null) {
          console.log('created !!!');
        }
      },
      (err) => {
        alert('Faild to add user');
      });
  }

  display: boolean = false;

  showDialog() {
    this.display = true;
  }

  onRowSelect(event) {
    this.display = false;
    console.log('----> ' + this.operationArticle.fournisseur.name);
  }

  onRowUnselect(event) {
    this.messageService.add({ severity: 'info', summary: 'Car Unselected', detail: 'Vin: ' + event.data.vin });
  }


  initilizeTableColumns() {

    this.columnsF = [
      { field: 'reference', header: 'reference fournissuer' },
      { field: 'name', header: 'nom' }
    ];
  }

}
