import { Component } from '@angular/core';

@Component({
  selector: 'app-header-layout',
  standalone: false,
  templateUrl: './header-layout.component.html',
  styleUrl: './header-layout.component.css'
})
export class HeaderLayoutComponent {
  activeButton: string = 'header';

  toggle(button: string) {
    this.activeButton = button;
  }
}
