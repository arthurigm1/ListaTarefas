import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  template:`1<router-outlet />2`,
})
export class AppComponent {
  title = 'ListaTarefas';
}
