import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
  selector: 'app-contact-me',
  templateUrl: './contact-me.component.html',
  styleUrls: ['./contact-me.component.css']
})
export class ContactMeComponent implements OnInit {
  form = new FormGroup({
    name : new FormControl('', Validators.required),
    email : new FormControl('',[Validators.required,Validators.email]),
    message : new FormControl('',Validators.required)
  })

  get name(){
    return this.form.get('name');
  }

  get email(){
    return this.form.get('email');
  }

  get message(){
    return this.form.get('message');
  }

  constructor() { }

  ngOnInit() {
  }

}
