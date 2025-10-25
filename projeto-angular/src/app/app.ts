import { Component, signal } from '@angular/core';
import { Page } from "./components/shared/page/page";

@Component({
  selector: 'app-root',
  imports: [Page],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
}
