import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'homework4';
  fileSizes: number[] = [
    1024,
    1048576,
    500,
    15,
    531,
    12320
  ];
}
