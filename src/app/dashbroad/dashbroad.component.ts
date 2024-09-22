import { Component } from '@angular/core';
import { StatisticsComponent } from './statistics/statistics.component';
import { BadgeModule } from 'primeng/badge';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { InputTextModule } from 'primeng/inputtext';
import { CarAvailabilityComponent } from './car-availability/car-availability.component';
import { LiveCarStatusComponent } from './live-car-status/live-car-status.component';
import { EarningSummaryComponent } from './earning-summary/earning-summary.component';

@Component({
  selector: 'app-dashbroad',
  standalone: true,
  imports: [StatisticsComponent, BadgeModule, IconFieldModule, InputIconModule, InputTextModule, CarAvailabilityComponent, LiveCarStatusComponent, EarningSummaryComponent],
  templateUrl: './dashbroad.component.html',
  styleUrl: './dashbroad.component.scss'
})
export class DashbroadComponent {

}
