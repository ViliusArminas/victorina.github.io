import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { VictorinaData, VictorinaQuestion } from '../models/victorina-data';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule, MatButtonModule],
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  @Input() data: VictorinaData | null = null;
  @Output() questionClick = new EventEmitter<{
    question: VictorinaQuestion;
    themeId: number;
  }>();

  getImageUrl(image: string | undefined) {
    return `assets/images/${image}`;
  }

  onClick(question: VictorinaQuestion) {
    console.log('test2');
    if (!question.answered) {
      this.questionClick.emit({ question, themeId: this.data?.id ?? 0 });
    }
  }
  getBackgroundImage(question: VictorinaQuestion) {
    return `url("assets/images/button-${question.points}${question.answered ? '-disabled': ''}.png")`;
  }
}
