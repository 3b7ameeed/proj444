import { registerLocaleData } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {Storage} from '@ionic/storage';
import {AngularFirestore} from 'angularfire2/firestore';
import {AngularFirestoreCollection} from 'angularfire2/firestore';
import { observable } from 'rxjs';
import {Observable} from 'rxjs/Observable';
import{DataSrvService,client} from '../data-srv.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})



export class RegisterPage implements OnInit {
  user:client;
  constructor(public dataSrv:DataSrvService,public router:Router){
    this.user={} as client;
  }
/*
  private User = {
  	firstName: "",
    fastName: "",
    userName:"",
		email: "",
    gender: "",
    password:"" 
       };
       */
    /*  regForm:FormGroup;
      Users=[];
  constructor(private storage:Storage, public formbuilder:FormBuilder) {
    this.regForm=formbuilder.group({
      userName:['',Validators.compose([Validators.required,Validators.pattern('[a-zA-Z0-9]*'),
                                      Validators.minLength(4),Validators.maxLength(15)])],
      password:['',Validators.compose([Validators.required,Validators.minLength(5)])]
    });
    this.storage.get('Users').then(result=>{this.Users=result;})
   }
*/
  ngOnInit() {
  }
  signin(){
    this.dataSrv.addUser(this.user).then((Data)=>{
      alert("Register Successfully");
    }).catch((err)=>{
      alert("Error..");
    });
    this.router.navigate(['/welc']);
    //this.dataSrv.addUser(this.user);
   // console.log(this.user);
  }
}
