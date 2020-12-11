import { Component, OnInit } from '@angular/core';
import {AngularFirestore} from 'angularfire2/firestore';
import {AngularFirestoreCollection} from 'angularfire2/firestore';
import{Observable} from 'rxjs/Observable';
import { DataSrvService, Item } from '../data-srv.service';



@Component({
  selector: 'app-admin',
  templateUrl: './admin.page.html',
  styleUrls: ['./admin.page.scss'],
})

export class AdminPage implements OnInit {
  pros:Item;
  
  constructor(public dataSrv:DataSrvService) {
      this.pros = {} as Item;
   }

  ngOnInit() {
  }
add(){
  this.dataSrv.addItem(this.pros).then((Data)=>{
    alert("Item Added Successfully");
  }).catch((err)=>{
    alert("Error..");
  });
}
DeleteItem(item){
  this.dataSrv.removeFB(item).then((Data)=>{
    alert("Item Deleted Successfully");
  }).catch((err)=>{
    alert("Error..");
  });
  //console.log(this.dataSrv.removeFB(item));
}
/*Edit(index){
console.log(this.dataSrv.getItemByIndex(index));
}*/
}
