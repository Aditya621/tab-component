import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import 'zone.js';
import { TabComponent } from './app/tab/tab.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <h1>Hello from {{ name }}!</h1>
    <!-- <a target="_blank" href="https://angular.dev/overview">
      Learn more about Angular
    </a> -->
    <app-tab></app-tab>
  `,
  imports: [CommonModule, TabComponent],
})
export class App {
  name = '@Aditya621';
}

bootstrapApplication(App);
