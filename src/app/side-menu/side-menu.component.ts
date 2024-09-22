import { Component } from '@angular/core';
import { MENU, REPORT_MENU } from '../constants/menu.constants';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-side-menu',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive, ButtonModule],
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss', '../../custom.scss']
})
export class SideMenuComponent {
  menu;
  reportMenu;

  constructor(private sanitizer: DomSanitizer) {
    // Sanitize SVG icon để đảm bảo nó an toàn khi render
    this.menu = MENU.map(item => ({
      ...item,
      icon: this.sanitize(item.icon)
    }));

    this.reportMenu = REPORT_MENU.map(item => ({
      ...item,
      icon: this.sanitize(item.icon)
    }));
  }

  sanitize(icon: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(icon);
  }

  logout() {
    alert('Logout!!!');
  }
}
