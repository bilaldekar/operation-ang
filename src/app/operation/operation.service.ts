import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { operationArticle, operationService, Frounisseur, TypeAchat } from './operation';

@Injectable()
export class OperationServiceHttp {

    envUrl = '';

    constructor(private httpClient: HttpClient) {
        this.envUrl = environment.apiUrl;
    }

    getOperationsArticle(): Observable<operationArticle[]> {
        return this.httpClient.get<operationArticle[]>(this.envUrl + '/operations/all');
    }

    getOneOperationsArticle(id: number): Observable<operationArticle> {
        return this.httpClient.get<operationArticle>(this.envUrl + '/operations/one/' + id);
    }

    addoperationArticle(operationArticle: operationArticle): Observable<operationArticle> {
        return this.httpClient.post<operationArticle>(this.envUrl + '/operations/article/save', operationArticle);
    }

    editoperationArticle(operationArticle: operationArticle): Observable<void> {
        return this.httpClient.put<void>(this.envUrl + '/operations/article/edit/' + operationArticle.id, operationArticle);
    }

    addOperationServicee(operationService: operationService): Observable<operationService> {
        return this.httpClient.post<operationService>(this.envUrl + '/operations/service/save', operationService);
    }

    getFournisseur(): Observable<Frounisseur[]> {
        return this.httpClient.get<Frounisseur[]>(this.envUrl + '/operations/fournisseur');
    }


    getTypes(): Observable<TypeAchat[]> {
        return this.httpClient.get<TypeAchat[]>(this.envUrl + '/types/all');
    }
}