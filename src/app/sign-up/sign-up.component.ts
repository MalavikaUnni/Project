import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
SignupForm :FormGroup
  constructor() { }

  ngOnInit() {
    this.SignupForm = new FormGroup({
      'name': new FormControl(''),
      'email': new FormControl(''),
      'mobile': new FormControl(''),
      'username' :new FormControl(''),
      'password':new FormControl('')

  });

}
onSubmit() {
  console.log(this.SignupForm.value);
}
}
