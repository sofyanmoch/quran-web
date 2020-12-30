import { Component, OnInit, NgZone } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { QuranService } from '../../service/quran.service';

// prime ng
import {DialogModule} from 'primeng/dialog';

@Component({
  selector: 'app-card-ayat',
  templateUrl: './card-ayat.component.html',
  styleUrls: ['./card-ayat.component.scss']
})
export class CardAyatComponent implements OnInit {

  // tslint:disable-next-line:no-inferrable-types
  display: boolean = false;
  getNumber: any;
  Ayat: any;

  constructor(
    private router: Router,
    private ngZone: NgZone,
    private activatedRoute: ActivatedRoute,
    private quranService: QuranService
  ) {
    this.getNumber = this.activatedRoute.snapshot.paramMap.get('idSurah');
    console.log(this.getNumber);

    this.quranService.findById(this.getNumber).subscribe(data => {
      this.Ayat = data.map((i: any) => {
        return i;
      });
      console.log(this.Ayat);
    });
  }

  ngOnInit(): void {
  }

    // tslint:disable-next-line:typedef
    showDialog() {
        this.display = true;
    }

}
