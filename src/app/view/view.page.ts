import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {DataSrvService} from '../data-srv.service';
@Component({
  selector: 'app-view',
  templateUrl: './view.page.html',
  styleUrls: ['./view.page.scss'],
})
export class ViewPage implements OnInit {
  public index;
  constructor(public dataSrv:DataSrvService,private ActivatedRoute:ActivatedRoute) { }

  ngOnInit() {
    this.index=this.ActivatedRoute.snapshot.paramMap.get('num');
    //this.dataSrv.newList= this.dataSrv.list[this.index];
  }

}
