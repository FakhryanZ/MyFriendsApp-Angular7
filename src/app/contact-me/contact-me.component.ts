import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
  selector: 'app-contact-me',
  templateUrl: './contact-me.component.html',
  styleUrls: ['./contact-me.component.css']
})
export class ContactMeComponent implements OnInit {
  ContactForm
  ContactData: any= []
  constructor() { }

  ngOnInit() {
    this.GetData()
    this.ContactForm = new FormGroup({
    name : new FormControl('', Validators.required),
    email : new FormControl('',[Validators.required,Validators.email]),
    message : new FormControl('',Validators.required)
    })
  }

  AddContact(name, email, message){
    let contact = {
      name: name,
      email: email,
      message : message
    }
    sessionStorage.setItem(name, JSON.stringify(contact))
    this.GetData()
  }

  GetData(){
    for (let i = 0; i < sessionStorage.length; i++) {
      let key = sessionStorage.key(i);
      let value = sessionStorage.getItem(key);
      this.ContactData[i] = JSON.parse(value)
      console.log(this.ContactData);
    }
  }

}
