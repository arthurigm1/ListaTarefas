import { Component ,EventEmitter,Input, Output} from '@angular/core';

@Component({
  selector: 'app-layout',
  imports: [],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent {
  @Input() title: string ="";
  @Input() primaryBtnText: string ="";
  @Input() secondaryBtnText: string ="";
  @Input() disableprimarybotton: boolean= true;
  @Output("submit") onSubmit = new EventEmitter();
  @Output("navigate") onNavigate = new EventEmitter();

  submit(){
    this.onSubmit.emit();
  }
    navigate(){
    this.onNavigate.emit();
  }
}
