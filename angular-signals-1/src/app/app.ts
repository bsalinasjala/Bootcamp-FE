import { Component } from '@angular/core';
import { JsonPipe } from '@angular/common';
import { ForTest } from "./for-test/for-test";
import { JsonPipeTest } from "./json-pipe-test/json-pipe-test";
import { LayoutComponent } from './layout/layout';
@Component({
  selector: 'app-root',
  imports: [JsonPipeTest,LayoutComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {}