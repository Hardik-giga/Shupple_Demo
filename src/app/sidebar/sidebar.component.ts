import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  standalone: false,
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  isSettingsExpanded = false; // Initially hidden
  selectedOption: string = '';

  toggleSettings() {
    this.isSettingsExpanded = !this.isSettingsExpanded; // Toggle visibility
  }
}
