import { Component } from '@angular/core';
import { StatisticsComponent } from './statistics/statistics.component';

@Component({
  selector: 'app-dashbroad',
  standalone: true,
  imports: [StatisticsComponent],
  templateUrl: './dashbroad.component.html',
  styleUrl: './dashbroad.component.scss'
})
export class DashbroadComponent {

}
