import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-json-pipe-test',
  imports: [CommonModule],
  templateUrl: './json-pipe-test.html',
  styleUrl: './json-pipe-test.css'
})
export class JsonPipeTest {
  user = {
    id: 1,
    name: 'Bruno',
    email: 'bruno@test.com',
    active: true,
    address: {
      city: 'La Paz',
      country: 'Bolivia'
    }
  };

  settings = {
    darkMode: true,
    language: 'English',
    notifications: {
      email: true,
      sms: false
    }
  };
}