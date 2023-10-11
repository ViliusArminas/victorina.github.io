import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../card/card.component';
import { VictorinaData, VictorinaQuestion } from '../models/victorina-data';
import { Store } from '@ngrx/store';
import { selectVictorinaData } from '../store/victorina.selectors';
import { Observable } from 'rxjs';
import * as VictorinaActions from '../store/victorina.actions';
import { Router } from '@angular/router';

@Component({
  selector: 'app-themes',
  standalone: true,
  imports: [CommonModule, CardComponent],
  templateUrl: './themes.component.html',
  styleUrls: ['./themes.component.scss'],
})
export class ThemesComponent implements OnInit {
  data$: Observable<VictorinaData[]> = this.store.select(selectVictorinaData);
  constructor(private store: Store, private router: Router) {}
  ngOnInit(): void {}

  onQuestionClick(event: { question: VictorinaQuestion; themeId: number }) {
    console.log('test');
    this.store.dispatch(
      VictorinaActions.selectQuestion({
        themeId: event.themeId,
        questionId: event.question.id,
      })
    );
    this.router.navigate(['/question']);
  }
}
