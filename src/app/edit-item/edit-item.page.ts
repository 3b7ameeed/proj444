import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataSrvService, Item } from '../data-srv.service';

@Component({
  selector: 'app-edit-item',
  templateUrl: './edit-item.page.html',
  styleUrls: ['./edit-item.page.scss'],
})
export class EditItemPage implements OnInit {
  pron:Item={} as Item;
  public index;
  constructor(public dataSrv:DataSrvService,public activatedroute:ActivatedRoute) {
    this.index=this.activatedroute.snapshot.paramMap.get("index");
    this.pron=this.dataSrv.getItemByIndex(this.index);
    //this.pros=this.dataSrv.getItemByIndex(this.index);
  }

  ngOnInit() {
  }
update(pron){
  this.dataSrv.updateFB(this.pron).then( (response)=>{
    alert('done..');
  })
}
}
