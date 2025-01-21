import { Component, signal } from '@angular/core';
import { InputAddItemComponent } from '../../components/input-add-item/input-add-item.component';
import { IListItems } from '../../interface/IListItems.interface';
import { CommonModule } from '@angular/common';
import { InputListItemComponent } from '../../components/input-list-item/input-list-item.component';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [InputAddItemComponent,CommonModule,InputListItemComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent {
public addItem = signal(true);
#setListItems = signal<IListItems[]>([this.#parseItems()]);
public getListItems = this.#setListItems.asReadonly();

#parseItems(){
 return JSON.parse(localStorage.getItem('@my-list') || '[]')
}

public getInputAndAddItem(value: IListItems){
  localStorage.setItem( '@my-list', JSON.stringify([...this.#setListItems(), value]));

  return this.#setListItems.set(this.#parseItems());
}
public deleteallitems(){
  localStorage.removeItem('@my-list');
  return this.#setListItems.set(this.#parseItems());
}
}
