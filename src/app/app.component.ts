import { Component } from '@angular/core';

import { ProcessPanelComponent } from './components/process-panel/process-panel.component';

@Component({
  selector: 'app-root',
  imports: [ProcessPanelComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-assignment';
}
