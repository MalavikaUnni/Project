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
  constructor(private formBuilder :FormBuilder,private userService :UserService,private router:Router) { }

  ngOnInit() {
    this.SignupForm = this.formBuilder.group({
      
      name:['',Validators.required],
      email:['',Validators.required],
      phone:['',Validators.required],
      username :['',Validators.required],
      password: ['',Validators.required]

  });

}

addUser()
{
  this.userService.saveUser(this.SignupForm.value).subscribe( data =>{
    console.log("User inserted Successfully")
    console.log('registration status '+ data.regStatus)
    this.router.navigate(['/admin-home'])
  });
  }


onSubmit() {
  
  console.log(this.SignupForm.value);

  //this.router.navigate(['/admin-home'])
}
}
