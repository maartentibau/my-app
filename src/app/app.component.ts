import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TypedDirective } from 'ng-directives';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TypedDirective],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'my-app';

  value = {
    a: 'foobar',
    b: {
      c: 10
    }
  }
}
