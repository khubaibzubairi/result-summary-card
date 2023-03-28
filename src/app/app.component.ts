import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'result-summary';

  ngOnInit(): void {
    console.log(new Date('Mon 27 Mar 2023 12:29:18 PM UTC').getUTCDate());
  }
}
