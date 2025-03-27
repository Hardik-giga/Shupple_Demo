import { Component } from '@angular/core';

@Component({
  selector: 'app-header-pages',
  standalone: false,
  templateUrl: './header-pages.component.html',
  styleUrl: './header-pages.component.css'
})
export class HeaderPagesComponent {
  isOpen = true; // Dropdown open by default
  pages = [
    { name: 'Home', selected: true },
    { name: 'Checkout', selected: false },
    { name: 'About us', selected: false },
    { name: 'Support', selected: false },
    { name: 'Contact us', selected: false },
    { name: 'Chat', selected: false },
    { name: 'Visit Us', selected: true },
    { name: 'Terms & Conditions', selected: false }
  ];

  toggleDropdown() {
    this.isOpen = !this.isOpen;
  }

  toggleSelection(index: number) {
    this.pages[index].selected = !this.pages[index].selected;
  }
}
