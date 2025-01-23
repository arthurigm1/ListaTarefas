import { ChangeDetectorRef, Component, ElementRef, EventEmitter, Input, Output ,ViewChild,inject} from '@angular/core';
import { IListItems } from '../../interface/IListItems.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-input-add-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './input-add-item.component.html',
  styleUrl: './input-add-item.component.scss'
})
export class InputAddItemComponent {

    #cdr = inject(ChangeDetectorRef);
    @ViewChild("inputtext") public inputtext!: ElementRef;
    @Input({required:true }) public inputListItems: Array<IListItems> = [];
    @Output() public outputAddListItem = new EventEmitter<IListItems>();

  public focusAndAddItem(value: string){

    if(value){
      this.#cdr.detectChanges();
      this.inputtext.nativeElement.value="";
      const dataAtual = new Date;
      const timestamp= dataAtual.getTime();
      const id = `ID ${timestamp}`
      this.outputAddListItem.emit({
        id,
        checked: false,
        value,
      })
      return this.inputtext.nativeElement.focus();
    }

  }
}
