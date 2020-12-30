import { Component, OnInit } from '@angular/core';
import { QuranService } from '../../service/quran.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  Surah: any = [];

  constructor(private quranService: QuranService) {
   }

  ngOnInit(): void {
    // console.log('hai');
    this.quranService.findAll().subscribe( data => {
      this.Surah = data.data.map( (i: { number: any; }) => {
        return i;
      });
      console.log(this.Surah);
    });
  }

}
