import { Component } from '@angular/core';
import { LayoutComponent } from '../layout/layout.component';
import { CommonModule } from '@angular/common';
import { FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [LayoutComponent, CommonModule,ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  loginForm!: FormGroup;
constructor(){
  this.loginForm = new FormGroup({
    email:new FormGroup('',[Validators.required, Validators.email]),
    password:new FormGroup('',[Validators.required, Validators.minLength(6)])
  })
}
}
