import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-tab',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tab.component.html',
  styleUrl: './tab.component.css',
})
export class TabComponent {
  public htmlPreview = true;
  public cssPreview = false;
  public jsPreview = false;

  public showText(value: string) {
    if (value === 'html') {
      this.htmlPreview = true;
      this.cssPreview = false;
      this.jsPreview = false;
    }

    if (value === 'css') {
      this.cssPreview = true;
      this.htmlPreview = false;
      this.jsPreview = false;
    }

    if (value === 'js') {
      this.jsPreview = true;
      this.cssPreview = false;
      this.htmlPreview = false;
    }
  }
}
