import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-status',
  imports: [],
  templateUrl: './status.component.html',
  styleUrl: './status.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StatusComponent {
  date= new Date();
  max= navigator.maxTouchPoints;
  lang= navigator.language;
  us=window.navigator.userAgent;
  cok=navigator.cookieEnabled;
  logi=navigator.hardwareConcurrency;


}
