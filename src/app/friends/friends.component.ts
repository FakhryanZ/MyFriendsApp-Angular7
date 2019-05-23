import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.css']
})
export class FriendsComponent implements OnInit {
  FriendsForm
  FriendsData: any =[]
  SearchBar:any = {name: ''}
  
  constructor(private route:Router) { }

  ngOnInit() {
    this.GetData()
    this.FriendsForm = new FormGroup({
      name: new FormControl('',[Validators.required, Validators.minLength(3), Validators.maxLength(20)]),
      email : new FormControl('',[Validators.required, Validators.email]),
      contact : new FormControl('',Validators.required)
    })
  }

  AddFriend(name, email, contact){
    let friend = {
      name: name.toUpperCase(),
      input: name,
      email: email,
      contact: contact
    }
    localStorage.setItem(name,JSON.stringify(friend))
    this.GetData()
    this.route.navigate(['friend'])
  }

  GetData(){
    let min = 0
    for (let i = 0; i < localStorage.length; i++) {
      let key = localStorage.key(i);
      if(key == 'token'){
        min = 1
        continue;
      }else{
        let value = localStorage.getItem(key);
        this.FriendsData[i-min]=JSON.parse(value)
        console.log(this.FriendsData);
      }
    }
  }
}
