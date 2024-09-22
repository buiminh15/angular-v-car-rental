import { Component } from '@angular/core';
import { ChartModule } from 'primeng/chart';
import { ChartOptions, ChartData } from 'chart.js';
@Component({
  selector: 'app-earning-summary',
  standalone: true,
  imports: [ChartModule],
  templateUrl: './earning-summary.component.html',
  styleUrl: './earning-summary.component.scss'
})
export class EarningSummaryComponent {
  data: ChartData<'line'> | undefined;

  options: ChartOptions | undefined;

  ngOnInit() {
    const documentStyle = getComputedStyle(document.documentElement);
    const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
    const surfaceBorder = documentStyle.getPropertyValue('--surface-border');

    this.data = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
        {
          label: 'Second Dataset',
          data: [28, 48, 40, 19, 86, 27, 90],
          fill: false,
          borderDash: [5, 5],
          tension: 0.4,
          borderColor: documentStyle.getPropertyValue('--gray-500')
        },
        {
          label: 'Third Dataset',
          data: [12, 51, 62, 33, 21, 62, 45],
          fill: true,
          borderColor: documentStyle.getPropertyValue('--blue-500'),
          tension: 0.4,
          backgroundColor: 'rgba(255,167,38,0.2)'
        }
      ]
    };

    this.options = {
      maintainAspectRatio: false,
      aspectRatio: 2,
      plugins: {
        legend: {
          display: false,
        }
      },
      scales: {
        x: {
          ticks: {
            color: textColorSecondary
          },
          grid: {
            color: surfaceBorder
          }
        },
        y: {
          ticks: {
            color: textColorSecondary
          },
          grid: {
            color: surfaceBorder
          }
        }
      }
    };
  }
}
