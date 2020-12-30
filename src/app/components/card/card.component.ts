import { Component, OnInit } from '@angular/core';
import { QuranService } from '../../service/quran.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  Surah: any = [];
  isLoading = true;

  constructor(private quranService: QuranService) {
    // console.log(this.Surah.length);
   }

  ngOnInit(): void {
    // console.log('hai');
    this.quranService.findAll().subscribe( data => {
      this.Surah = data.map( (i: { number: any; }) => {
        return i;
      });
      console.log(this.Surah);
      // console.log(this.Surah.length);
      if (this.Surah.length > 0) {
        this.isLoading = false;
      }
    });
  }

  onClick(): any{
    alert('halo');
  }


}
