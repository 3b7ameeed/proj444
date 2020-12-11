import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import { AngularFirestore} from '@angular/fire/firestore';
import { AngularFirestoreCollection } from '@angular/fire/firestore';

import { map, take } from 'rxjs/operators';
import { DocumentReference } from '@angular/fire/firestore';
import { promise } from 'protractor';


export interface client{
  id?:string,
  fn:string,
  ln:string,
  un:string,
  ps:string,
  gender:string,
  email:string
}

export interface Item{
  id?:string;
  type:string;
  brand:string;
  displaySize:string;
  os:string;
  ProcessorCount:number;
  hard:string;
  ram:number;
  price:number;
  photo:string;
}
export interface hnono{
  name:string;
  desc:string;
  quan:string;
}
@Injectable({
  providedIn: 'root'
})

export class DataSrvService {
  public user:Observable<client[]>;
  usersCollectionRef:AngularFirestoreCollection<client>;
  
  private items:Observable<Item[]>;
  private itemsCollectionRef:AngularFirestoreCollection<Item>;
  
  //public Itemss:Observable<hnono[]>;
 // ItemssCollectionRef:AngularFirestoreCollection<hnono>;
  
  public compare=[];
  //public newList:Item;
  public cart=[];
  /*public list:Item[]=[
  {type:'HeroBook Pro', brand:'CHUWI',displaySize:'14.1Inches',os:'Win10 Pro',ProcessorCount:1,hard:'1TB HDD',ram:4,price:250,photo:'22.jpg'},
  {type:'YITAOERA', brand:'NB15A',displaySize:'13.6Inches',os:'Win10',ProcessorCount:2,hard:'256GB SSD',ram:16,price:300,photo:'11.jpg'},
  {type:'HeroBook Pro', brand:'CHUWI',displaySize:'14.1Inches',os:'Win10 Pro',ProcessorCount:1,hard:'1TB SSD',ram:4,price:250,photo:'33.png'},
  {type:'HeroBook Pro', brand:'CHUWI',displaySize:'14.1Inches',os:'Win10 Pro',ProcessorCount:1,hard:'1TB SSD',ram:4,price:250,photo:'44.jpg'},
  {type:'HeroBook Pro', brand:'CHUWI',displaySize:'14.1Inches',os:'Win10 Pro',ProcessorCount:1,hard:'1TB SSD',ram:4,price:250,photo:'11.jpg'},
  {type:'HeroBook Pro', brand:'CHUWI',displaySize:'14.1Inches',os:'Win10 Pro',ProcessorCount:1,hard:'1TB SSD',ram:4,price:250,photo:'22.jpg'}
]*/
  constructor(private afs:AngularFirestore) {
    this.usersCollectionRef=this.afs.collection('Users');
    //this.user=this.usersCollectionRef.valueChanges();

    this.itemsCollectionRef=this.afs.collection<Item>('Items');
    //this.items=this.itemsCollectionRef.valueChanges();
        this.items= this.itemsCollectionRef.snapshotChanges().pipe(
          map(actions => {
            return actions.map(a => {
              const data = a.payload.doc.data();
              const id = a.payload.doc.id;
              return { id, ...data };
            });
          })
        );
  

    
   // this.ItemssCollectionRef=this.afs.collection('Itemss');
    //this.Itemss=this.ItemssCollectionRef.valueChanges();
  }
 
    
  addItem(pros:Item):Promise<any>{
    return this.itemsCollectionRef.add(pros);
  }
  addUser(user:client):Promise<any>{
    return this.usersCollectionRef.add(user);
  }
  removeFB(item:Item):Promise<any>{
    return this.itemsCollectionRef.doc(item.id).delete();
  }
  updateFB(item:Item):Promise<any>{
    return this.itemsCollectionRef.doc(item.id).update(item);
  }
  getItemByIndex(index){
    return this.items[index];
  }
}
