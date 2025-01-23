import { Component } from '@angular/core';

import { LayoutComponent } from '../layout/layout.component';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { InputComponent } from '../input/input.component';
import { Router } from '@angular/router';
import { LoginService } from '../../../services/login.service';
import { ToastrService } from 'ngx-toastr';
interface SignupForm {
  name: FormControl,
  email: FormControl,
  password: FormControl,
  passwordConfirm: FormControl
}
@Component({
  selector: 'app-signup',
  providers:[LoginService],
    standalone: true,
  imports: [LayoutComponent, CommonModule,ReactiveFormsModule,InputComponent],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})
export class SignupComponent {
    signupForm!: FormGroup<SignupForm>;
constructor(
    private router: Router,
    private loginService: LoginService,
    private toastService: ToastrService
){
this.signupForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(3)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
      passwordConfirm: new FormControl('', [Validators.required, Validators.minLength(6)]),
  })
}
submit(){
  this.loginService.signup(this.signupForm.value.name,this.signupForm.value.email,this.signupForm.value.password).subscribe({
    next: () => this.toastService.success("Cadastro efetuado com sucesso"),
    error: () => this.toastService.error("Erro ao enviar sua Solicitacao!"),
  })
}

navigate(){
  this.router.navigate(["login"])
}
}
