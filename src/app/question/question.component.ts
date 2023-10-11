import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { VictorinaQuestion } from '../models/victorina-data';
import { Observable, take } from 'rxjs';
import { selectSelectedQuestion, selectSelectedThemeId } from '../store/victorina.selectors';
import { Router } from '@angular/router';
import * as VictorinaActions from '../store/victorina.actions';

@Component({
  selector: 'app-question',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss'],
})
export class QuestionComponent implements OnInit {
  selectedThemeId$: Observable<number> = this.store.select(
    selectSelectedThemeId
  );
  question$: Observable<VictorinaQuestion | null | undefined> = this.store.select(
    selectSelectedQuestion
  );
  constructor(private store: Store, private router: Router) {}

  ngOnInit(): void {
  }

  getBackgroundImage(question?: VictorinaQuestion | null) {
    return `../assets/images/${question?.image}`;
  }

  completeQuestion(question?: VictorinaQuestion | null) {
    this.selectedThemeId$.pipe(take(1)).subscribe(themeId => {
      this.store.dispatch(VictorinaActions.completeQuestion({themeId, questionId: question?.id ?? 0}))
      this.router.navigateByUrl('/themes');
    })
  }

  goBack() {
    this.router.navigateByUrl('/themes');
  }
} 
