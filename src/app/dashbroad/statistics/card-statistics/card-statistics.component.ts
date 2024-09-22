import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-statistics',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card-statistics.component.html',
  styleUrl: './card-statistics.component.scss'
})
export class CardStatisticsComponent {
  @Input({ required: true }) title!: string;
  @Input({ required: true }) amount!: number;
  @Input({ required: true }) percentage!: number;
  @Input({ required: true }) lastWeekAmount!: number;

}
