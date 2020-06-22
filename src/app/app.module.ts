import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OperationComponent } from './operation/operation.component';
import {PanelModule} from 'primeng/panel';

import {InputTextModule} from 'primeng/inputtext';
import {TableModule} from 'primeng/table';
import {ButtonModule} from 'primeng/button';
import {MenubarModule} from 'primeng/menubar';
import {  OperationServiceHttp } from './operation/operation.service';
import { HttpClientModule } from '@angular/common/http';
import {DropdownModule} from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';
import {RadioButtonModule} from 'primeng/radiobutton';
import {CalendarModule} from 'primeng/calendar';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {TabViewModule} from 'primeng/tabview';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';
import { MessageService } from 'primeng-lts/components/common/messageservice';

import {DialogModule} from 'primeng/dialog';
import { OperationCrudComponent } from './operation-crud/operation-crud.component';


@NgModule({
  declarations: [
    AppComponent,
    OperationComponent,
    OperationCrudComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ButtonModule,
    MenubarModule,
    PanelModule,
    InputTextModule,
    TableModule,RadioButtonModule,CalendarModule,BrowserAnimationsModule,
    DropdownModule,
    FormsModule ,
    TabViewModule,
    MessagesModule,
    MessageModule,DialogModule
  ],
  providers: [OperationServiceHttp, MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
