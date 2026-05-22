import { Component, signal } from '@angular/core';
import { Notifier } from "./notifier/notifier"
@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal<string>('My Recipe Box');
  protected logInfo(): void {
    console.log("Info button clicked!")
  }

  protected logWarning(): void {
    console.log("Warning button clicked!")
  }
}
