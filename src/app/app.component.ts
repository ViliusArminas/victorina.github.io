import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as VictorinaActions from '../app/store/victorina.actions';
import { selectVictorinaData } from './store/victorina.selectors';
import { take } from 'rxjs';
import { DefaultVictorinaData } from './consts/default-data';
import { Location } from "@angular/common";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'protmusis';

  constructor(private store: Store, private location: Location) {}

  ngOnInit() {
    this.store
      .select(selectVictorinaData)
      .pipe(take(1))
      .subscribe((d) => {
        if (!d || d.length === 0) {
          this.store.dispatch(
            VictorinaActions.saveVictorinaData({ data: DefaultVictorinaData })
          );
        }
      });
  }

  onReset() {
    this.store.dispatch(
      VictorinaActions.removeVictorinaData()
    );
    this.store.dispatch(
      VictorinaActions.saveVictorinaData({ data: DefaultVictorinaData })
    );
  }

  onBack() {
    this.location.back();
  }
}
