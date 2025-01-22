import { Component, Input } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

type InputTypes = "text" | "email" | "password"

@Component({
  selector: 'app-input',
  standalone:true,
  imports: [ReactiveFormsModule],
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss'
})
export class InputComponent {
@Input() type: InputTypes = "text";
@Input() formName: string = "";
@Input() placeholder: string = "";
@Input() label: string = "";
}
