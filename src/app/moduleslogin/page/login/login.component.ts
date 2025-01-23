import { Component } from '@angular/core';
import { LayoutComponent } from '../layout/layout.component';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { InputComponent } from '../input/input.component';
import { Router } from '@angular/router';
import { LoginService } from '../../../services/login.service';
import { ToastrService } from 'ngx-toastr';
interface LoginForm {
  email: FormControl,
  password: FormControl
}
@Component({
  selector: 'app-login',
  providers:[LoginService],
  imports: [LayoutComponent, CommonModule,ReactiveFormsModule,InputComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  loginForm!: FormGroup<LoginForm>;
constructor(
  private router: Router,
  private loginService: LoginService,
  private toastService: ToastrService
){
  this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)])
  })
}
submit(){
  this.loginService.login(this.loginForm.value.email,this.loginForm.value.password).subscribe({
    next: () => this.toastService.success("Login efetuado com sucesso"),
    error: () => this.toastService.error("Erro ao enviar sua Solicitacao!"),
  })
}

navigate(){
  this.router.navigate(["signup"])
}
}
