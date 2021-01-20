import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, ]),
  });

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  constructor(public router: Router) {}

  ngOnInit(): void {
  }

  login(){
    if (this.loginForm.valid){
      this.router.navigate(['/contacts-create-edit']);

    }
    else{
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Login ou senha inválidos',
      });
    }
 }


}
