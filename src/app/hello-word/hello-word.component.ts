import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-hello-word',
  imports: [],
  templateUrl: './hello-word.component.html',
  styleUrl: './hello-word.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HelloWordComponent {

}
