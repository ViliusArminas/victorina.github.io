import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { VictorinaQuestion } from '../models/victorina-data';
import { Observable, take } from 'rxjs';
import {
  selectSelectedQuestion,
  selectSelectedThemeId,
} from '../store/victorina.selectors';
import { Router } from '@angular/router';
import * as VictorinaActions from '../store/victorina.actions';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-question',
  standalone: true,
  imports: [CommonModule, MatInputModule, FormsModule],
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss'],
})
export class QuestionComponent implements OnInit {
  answer: string = '';
  answerSuccess: boolean = false;
  answerError: boolean = false;
  answerSubmitted: boolean = false;
  selectedThemeId$: Observable<number> = this.store.select(
    selectSelectedThemeId
  );
  question$: Observable<VictorinaQuestion | null | undefined> =
    this.store.select(selectSelectedQuestion);
  constructor(private store: Store, private router: Router) {}

  ngOnInit(): void {
    // Running the function with example text
    this.encrypt('ENCRYPTIONQUESTION'); // result of the function -> "IRGVCTXMSRUYIWXMSR"
  }

  answerChanges(event: string, question?: VictorinaQuestion | null) {
    if (event) {
      this.answerSubmitted = true;
      if (question?.answer?.toLowerCase() === event?.toLowerCase()) {
        this.answerError = false;
        this.answerSuccess = true;
      } else {
        this.answerSuccess = false;
        this.answerError = true;
      }
    } else {
      this.answerSubmitted = false;
    }
    
  }

  encrypt(text: string) {
    let result = '';
    for (let i = 0; i < text.length; i++) {
      let char = text[i];
      if (char.toUpperCase()) {
        let ch = String.fromCharCode(((char.charCodeAt(0) - 61) % 26) + 65);
        result += ch;
      } else {
        let ch = String.fromCharCode(((char.charCodeAt(0) - 93) % 26) + 97);
        result += ch;
      }
    }
    return result;
  }

  getBackgroundImage(question?: VictorinaQuestion | null) {
    return `assets/images/${question?.image}`;
  }

  completeQuestion(question?: VictorinaQuestion | null) {
    this.selectedThemeId$.pipe(take(1)).subscribe((themeId) => {
      this.store.dispatch(
        VictorinaActions.completeQuestion({
          themeId,
          questionId: question?.id ?? 0,
        })
      );
      this.router.navigateByUrl('/themes');
    });
  }

  goBack() {
    this.router.navigateByUrl('/themes');
  }
}
