import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;


  constructor(private router:Router) { }


  ngOnInit() {
    this.loginForm = new FormGroup({
      'username': new FormControl(''),
      'password': new FormControl('')
    });

  }
  onSubmit() {
    console.log(this.loginForm.value);
    this.router.navigate(['/user-home'])
  }

}
