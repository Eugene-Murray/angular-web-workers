import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'angular-web-workers';
  webWorkerResponse: string = '';
  count: number = 0;

  ngOnInit(): void {
    if (typeof Worker !== 'undefined') {
      // Create a new
      const worker = new Worker(new URL('./web-workers/test.worker', import.meta.url));
      worker.onmessage = ({ data }) => {
        console.log(`page got response: ${data}`);
        this.webWorkerResponse = data;
      };
      worker.postMessage('data to process');
    } else {
      // Web workers are not supported in this environment.
      // You should add a fallback so that your program still executes correctly.
      console.log('Web workers are not supported in this environment.');
    }
  }

  clickMe() {
    this.count++;
  }
}
