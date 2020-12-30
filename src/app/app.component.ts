import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'quran-web';

  constructor(private primengConfig: PrimeNGConfig) {}

    // tslint:disable-next-line:typedef
    ngOnInit() {
        this.primengConfig.ripple = true;
    }
}
