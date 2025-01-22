import { Component } from '@angular/core';
import { LayoutComponent } from '../layout/layout.component';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { InputComponent } from '../input/input.component';

@Component({
  selector: 'app-login',
  imports: [LayoutComponent, CommonModule,ReactiveFormsModule,InputComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  loginForm!: FormGroup;
constructor(){
  this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)])
  })
}
}
