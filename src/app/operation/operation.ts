export interface operation {
  name?: String;
  dateCreation?: Date;
  typeAchat?: TypeAchat;
  fournisseur?: Frounisseur;
}

export interface operationArticle extends operation {
  id?: number;
  port_livraison?: String;
}

export interface operationService extends operation {
  id?: number;
  format?: String;
}

export interface Frounisseur {
  id?: number;
  name: String;
  reference : String;
}

export class TypeAchat {
  value: String;
}