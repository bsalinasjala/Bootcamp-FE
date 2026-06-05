import { Component } from '@angular/core';
import { JsonPipe } from '@angular/common';
import { LayoutComponent } from './layout/layout';
import { JsonPipeTest } from './json-pipe-test/json-pipe-test';
@Component({
  selector: 'app-root',
  imports: [LayoutComponent, JsonPipeTest],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {}