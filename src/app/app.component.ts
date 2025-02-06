import { DOCUMENT } from '@angular/common';
import { Component, Inject, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { from, fromEvent, scan, tap, throttleTime, timer } from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'online-Book-store';

  constructor(@Inject(DOCUMENT) private doc:Document){}

}
