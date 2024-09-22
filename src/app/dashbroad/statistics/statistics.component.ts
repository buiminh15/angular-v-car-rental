import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { CardStatisticsComponent } from './card-statistics/card-statistics.component';
import { ChartModule } from 'primeng/chart';
import { ChartOptions, ChartData } from 'chart.js';
import { SumPipe } from '../../pipes/sum.pipe';

@Component({
  selector: 'app-statistics',
  standalone: true,
  imports: [CommonModule, CardStatisticsComponent, ChartModule, SumPipe],
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss', '../../../custom.scss']
})
export class StatisticsComponent implements OnInit {
  today = new Date();
  data: ChartData<'doughnut'> | undefined;
  dataChart = [540, 260, 200];

  options: ChartOptions | undefined;

  ngOnInit() {
    const documentStyle = getComputedStyle(document.documentElement);

    this.data = {
      labels: ['Total Hired', 'Total Cancelled', 'Total Pending'],
      datasets: [
        {
          data: this.dataChart,
          backgroundColor: [documentStyle.getPropertyValue('--blue-500'), documentStyle.getPropertyValue('--red-500'), documentStyle.getPropertyValue('--green-500')],
          hoverBackgroundColor: [documentStyle.getPropertyValue('--blue-400'), documentStyle.getPropertyValue('--red-400'), documentStyle.getPropertyValue('--green-400')]
        }
      ]
    };


    this.options = {
      plugins: {
        legend: {
          display: false,
        }
      },
      // maintainAspectRatio: false,
      // responsive: true,
      aspectRatio: 2,
    };
  }
}
