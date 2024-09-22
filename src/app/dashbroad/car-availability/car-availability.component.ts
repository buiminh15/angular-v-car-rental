import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { CalendarModule } from 'primeng/calendar';
import { TableModule } from 'primeng/table';

interface City {
  name: string;
  code: string;
}

@Component({
  selector: 'app-car-availability',
  standalone: true,
  imports: [DropdownModule, FormsModule, IconFieldModule, InputIconModule, CalendarModule, TableModule],
  templateUrl: './car-availability.component.html',
  styleUrl: './car-availability.component.scss'
})
export class CarAvailabilityComponent {
  cities: City[] | undefined;
  selectedCity: City | undefined;
  date: Date | undefined;
  time: Date[] | undefined;

  ngOnInit() {
    this.cities = [
      { name: 'New York', code: 'NY' },
      { name: 'Rome', code: 'RM' },
      { name: 'London', code: 'LDN' },
      { name: 'Istanbul', code: 'IST' },
      { name: 'Paris', code: 'PRS' }
    ];
  }
}
