import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../../service/user.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
SignupForm :FormGroup
  constructor(private formBuilder :FormBuilder,private userService :UserService) { }

  ngOnInit() {
    this.SignupForm = this.formBuilder.group({
      id :['',Validators.required],
      name:['',Validators.required],
      email:['',Validators.required],
      mobile:['',Validators.required],
      username :['',Validators.required],
      password: ['',Validators.required]

  });

}

addUser()
{
  this.userService.saveUser(this.SignupForm.value).subscribe( data =>{
    console.log("User inserted Successfully")
  });
  }


onSubmit() {
  console.log(this.SignupForm.value);
}
}
