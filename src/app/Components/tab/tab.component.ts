import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTabsModule } from '@angular/material/tabs';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { DialogComponent } from '../dialog/dialog.component';
export interface ExampleTab {
  label: string
}

@Component({
  selector: 'app-tab',
  standalone: true,
  imports: [MatTabsModule, CommonModule, MatButtonModule, MatDividerModule, MatIconModule,MatCardModule,DialogComponent],
  templateUrl: './tab.component.html',
  styleUrl: './tab.component.scss'
})
export class TabComponent {
  
  changetheme(): void {
    if (document.body.classList.contains('dark-theme')) {
      document.body.classList.remove('dark-theme');
      document.body.classList.add('light-theme');
    } else {
      document.body.classList.remove('light-theme');
      document.body.classList.add('dark-theme');
    }
  }
}
